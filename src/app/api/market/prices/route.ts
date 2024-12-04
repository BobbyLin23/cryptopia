import { NextResponse } from 'next/server'
import { ofetch } from 'ofetch'

import { OKX_CONFIG, generateSignature, getTimestamp } from '@/lib/okx'
import { CryptoPrice, IResData } from '@/types'

export async function GET() {
  try {
    const timestamp = getTimestamp()
    const method = 'GET'
    const requestPath = '/api/v5/market/tickers?instType=SPOT'

    const signature = generateSignature(timestamp, method, requestPath)

    const res = await ofetch<IResData<CryptoPrice>>(requestPath, {
      method,
      headers: {
        'OK-ACCESS-KEY': OKX_CONFIG.API_KEY!,
        'OK-ACCESS-SIGN': signature,
        'OK-ACCESS-TIMESTAMP': timestamp,
        'OK-ACCESS-PASSPHRASE': OKX_CONFIG.PASSPHRASE!,
      },
      baseURL: OKX_CONFIG.BASE_URL,
    })

    return NextResponse.json(res.data)
  } catch (error) {
    console.error('获取价格失败:', error)
    return NextResponse.json({ error: '获取价格失败' }, { status: 500 })
  }
}
