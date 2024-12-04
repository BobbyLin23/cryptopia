'use client'

import { useState } from 'react'
import { ofetch } from 'ofetch'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function MarketAnalysis() {
  const [symbol, setSymbol] = useState('')
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const generateAnalysis = async () => {
    setLoading(true)
    try {
      const response = await ofetch('/api/market/analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol }),
      })
      const data = response.data
      setAnalysis(data.analysis)
    } catch (error) {
      console.error('分析生成失败:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="输入要分析的币种符号"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Button onClick={generateAnalysis} disabled={loading}>
          {loading ? '分析中...' : '生成分析'}
        </Button>
      </div>

      {analysis && (
        <Card>
          <CardHeader>
            <CardTitle>{symbol} 分析报告</CardTitle>
            <CardDescription>AI 生成的市场分析和投资建议</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap">{analysis}</div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
