import CryptoJS from 'crypto-js'

export const OKX_CONFIG = {
  API_KEY: process.env.NEXT_PUBLIC_OKX_API_KEY,
  SECRET_KEY: process.env.OKX_SECRET_KEY,
  PASSPHRASE: process.env.OKX_PASSPHRASE,
  BASE_URL: 'https://www.okx.com',
}

// 生成签名
export function generateSignature(
  timestamp: string,
  method: string,
  requestPath: string,
  body?: string,
) {
  const message = timestamp + method + requestPath + (body || '')
  const hmac = CryptoJS.HmacSHA256(message, OKX_CONFIG.SECRET_KEY as string)
  return CryptoJS.enc.Base64.stringify(hmac)
}

// 获取时间戳
export function getTimestamp() {
  return new Date().toISOString()
}
