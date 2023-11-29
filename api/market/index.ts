import type { AllMarketDataReq } from './types'

export function getAllMarketData(req: AllMarketDataReq) {
  return fetch('/api/v5/market/tickers', {
    method: 'GET',
    body: JSON.stringify(req),
  })
}
