import { NextResponse } from 'next/server'

import { OKX_CONFIG, generateSignature, getTimestamp } from '@/lib/okx'

export async function GET() {
  try {
    const timestamp = getTimestamp()
    const method = 'GET'
    const requestPath = '/api/v5/market/tickers?instType=SPOT'

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
    return NextResponse.json(data)
  } catch (error) {
    console.error('获取价格失败:', error)
    return NextResponse.json({ error: '获取价格失败' }, { status: 500 })
  }
}
