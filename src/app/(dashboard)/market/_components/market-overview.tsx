'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CryptoPrice } from '@/types'

export function MarketOverview() {
  const router = useRouter()

  const [prices, setPrices] = useState<CryptoPrice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPrices() {
      try {
        const response = await fetch('/api/market/prices')
        const data = await response.json()
        if (data.data) {
          const mainCryptos = [
            'BTC-USDT',
            'ETH-USDT',
            'BNB-USDT',
            'DOGE-USDT',
            'SOL-USDT',
          ]
          const filteredPrices = data.data.filter((price: CryptoPrice) =>
            mainCryptos.includes(price.instId),
          )

          setPrices(
            filteredPrices.map((item: CryptoPrice) => {
              return {
                ...item,
                change24h:
                  ((Number(item.last) - Number(item.open24h)) /
                    Number(item.open24h)) *
                  100,
              }
            }),
          )
        }
      } catch (error) {
        console.error('获取价格失败:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {prices.map((crypto) => (
        <Card
          key={crypto.instId}
          className="cursor-pointer hover:scale-105 hover:shadow-md"
          onClick={() =>
            router.push(`/market/${crypto.instId.replace('-USDT', '')}`)
          }
        >
          <CardHeader>
            <CardTitle>{crypto.instId.replace('-USDT', '')}</CardTitle>
            <CardDescription>
              24小时交易量: {Number(crypto.volCcy24h).toFixed(2)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${Number(crypto.last).toFixed(2)}
            </div>
            <div
              className={`text-sm ${
                Number(crypto.change24h) >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {Number(crypto.change24h).toFixed(2)}%
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <div>24h 最高: ${Number(crypto.high24h).toFixed(2)}</div>
              <div>24h 最低: ${Number(crypto.low24h).toFixed(2)}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
