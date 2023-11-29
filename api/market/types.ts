export interface AllMarketDataReq {
  instType?: string
  uly?: string
  instFamily?: string
}

export interface AllMarketDataRes {
  instType: string
  instId: string
  last: string
  lastSz: string
  askPx: string
  askSz: string
  bidPx: string
  bidSz: string
  open24h: string
  high24h: string
  low24h: string
  volCcy24h: string
  vol24h: string
  sodUtc0: string
  sodUtc8: string
  ts: string
}
