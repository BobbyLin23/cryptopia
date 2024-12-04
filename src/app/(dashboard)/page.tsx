import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react'

export default function DashboardPage() {
  const stats = [
    {
      title: '账户余额',
      value: '¥128,000',
      icon: Wallet,
      className: 'bg-blue-500/10 text-blue-500',
    },
    {
      title: '总收入',
      value: '¥28,000',
      icon: TrendingUp,
      className: 'bg-green-500/10 text-green-500',
    },
    {
      title: '总支出',
      value: '¥12,000',
      icon: TrendingDown,
      className: 'bg-red-500/10 text-red-500',
    },
  ]

  return (
    <div className="container mx-auto space-y-6 p-6">
      <h1 className="text-2xl font-bold">仪表盘</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={cn('rounded-full p-2', stat.className)}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>日历</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="multiple"
              selected={[]}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>最近交易</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-2 last:border-0"
                >
                  <div>
                    <div className="font-medium">交易 #{i}</div>
                    <div className="text-sm text-muted-foreground">
                      2024-03-{i}
                    </div>
                  </div>
                  <div className="font-medium text-green-500">+¥1,000</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
