'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function MarketWatchlist() {
  const [watchlist, setWatchlist] = useState<string[]>([])
  const [newSymbol, setNewSymbol] = useState('')

  const addToWatchlist = () => {
    if (newSymbol && !watchlist.includes(newSymbol)) {
      setWatchlist([...watchlist, newSymbol.toUpperCase()])
      setNewSymbol('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="输入币种符号 (例如: BTC)"
          value={newSymbol}
          onChange={(e) => setNewSymbol(e.target.value)}
        />
        <Button onClick={addToWatchlist}>添加关注</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>币种</TableHead>
            <TableHead>当前价格</TableHead>
            <TableHead>24h 变化</TableHead>
            <TableHead>操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.map((symbol) => (
            <TableRow key={symbol}>
              <TableCell>{symbol}</TableCell>
              <TableCell>$0.00</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() =>
                    setWatchlist(watchlist.filter((s) => s !== symbol))
                  }
                >
                  删除
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
