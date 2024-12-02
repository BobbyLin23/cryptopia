import { NextResponse } from 'next/server'
import { OKX_CONFIG, generateSignature, getTimestamp } from '@/lib/okx'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const symbol = searchParams.get('symbol')
    const interval = searchParams.get('interval') || '1D'

    if (!symbol) {
      return NextResponse.json({ error: '缺少symbol参数' }, { status: 400 })
    }

    const timestamp = getTimestamp()
    const method = 'GET'
    const requestPath = `/api/v5/market/candles?instId=${symbol}&bar=${interval}&limit=100`

    const signature = generateSignature(timestamp, method, requestPath)

    const response = await fetch(`${OKX_CONFIG.BASE_URL}${requestPath}`, {
      method,
      headers: {
        'OK-ACCESS-KEY': OKX_CONFIG.API_KEY!,
        'OK-ACCESS-SIGN': signature,
        'OK-ACCESS-TIMESTAMP': timestamp,
        'OK-ACCESS-PASSPHRASE': OKX_CONFIG.PASSPHRASE!,
      },
    })

    const data = await response.json()

    // OKX返回的数据格式为：[时间戳, 开盘价, 最高价, 最低价, 收盘价, 成交量, 成交额]
    const formattedData = data.data
      .map((item: string[]) => ({
        time: Math.floor(Number(item[0]) / 1000), // 转换为秒级时间戳
        open: Number(item[1]),
        high: Number(item[2]),
        low: Number(item[3]),
        close: Number(item[4]),
        value: Number(item[5]), // 成交量
      }))
      .sort((a, b) => a.time - b.time)

    return NextResponse.json({ data: formattedData })
  } catch (error) {
    console.error('获取K线数据失败:', error)
    return NextResponse.json({ error: '获取K线数据失败' }, { status: 500 })
  }
}
