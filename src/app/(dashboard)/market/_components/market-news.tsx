'use client'

import { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

interface NewsItem {
  id: string
  title: string
  body: string
  categories: string[]
  url: string
  publishedAt: string
  source: string
}

export function MarketNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchNews() {
      try {
        // 这里需要替换为实际的新闻 API 端点
        const response = await fetch('/api/market/news')
        const data = await response.json()
        setNews(data.news)
      } catch (error) {
        console.error('获取新闻失败:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return <div>加载新闻中...</div>
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="搜索新闻..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md"
      />

      <ScrollArea className="h-[600px]">
        <div className="space-y-4">
          {filteredNews.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue-500"
                  >
                    {item.title}
                  </a>
                </CardTitle>
                <CardDescription>
                  来源: {item.source} | 发布时间:{' '}
                  {new Date(item.publishedAt).toLocaleString('zh-CN')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-gray-600">
                  {item.body}
                </p>
                <div className="mt-2 flex gap-2">
                  {item.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-gray-100 px-2 py-1 text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
