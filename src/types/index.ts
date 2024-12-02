export interface CryptoPrice {
  instType: 'SWAP'
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
  change24h: number
}

export interface IResData<T> {
  code: string
  msg: string
  data: T[]
}

export interface IKlineData {
  ts: string
  o: string
  h: string
  l: string
  c: string
  vol: string
  volCcy: string
  volCcyQuote: string
  confirm: string
}
