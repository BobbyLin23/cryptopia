import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { MarketOverview } from './_components/market-overview'
import { MarketWatchlist } from './_components/market-watchlist'
import { MarketNews } from './_components/market-news'
import { MarketAnalysis } from './_components/market-analysis'

export default function MarketPage() {
  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <MarketOverview />
        </TabsContent>

        <TabsContent value="watchlist" className="space-y-4">
          <MarketWatchlist />
        </TabsContent>

        <TabsContent value="news" className="space-y-4">
          <MarketNews />
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <MarketAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  )
}
