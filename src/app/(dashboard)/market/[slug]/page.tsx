import { MarketChart } from '../_components/market-chart'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  return (
    <div className="container mx-auto space-y-6 p-6">
      <h1 className="text-2xl font-bold">{slug}/USDT</h1>
      <div className="rounded-lg border bg-card p-6">
        <MarketChart symbol={slug} />
      </div>
    </div>
  )
}
