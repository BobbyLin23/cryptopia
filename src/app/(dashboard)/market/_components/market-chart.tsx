'use client'

import { useEffect, useRef } from 'react'
import { createChart, ColorType, IChartApi } from 'lightweight-charts'

interface MarketChartProps {
  symbol: string
}

export function MarketChart({ symbol }: MarketChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const chartContainer = chartContainerRef.current
    let chart: IChartApi | null = null

    const fetchKlineData = async () => {
      try {
        const response = await fetch(
          `/api/market/kline?symbol=${symbol}-USDT&interval=1D`,
        )
        const data = await response.json()

        if (!data.data || !chartContainer) return

        // 确保在创建新图表前清除容器内容
        chartContainer.innerHTML = ''

        chart = createChart(chartContainer, {
          layout: {
            background: { type: ColorType.Solid, color: 'transparent' },
            textColor: '#D9D9D9',
          },
          grid: {
            vertLines: { color: 'rgba(42, 46, 57, 0.6)' },
            horzLines: { color: 'rgba(42, 46, 57, 0.6)' },
          },
          width: chartContainer.clientWidth,
          height: 400,
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
          },
        })

        const candlestickSeries = chart.addCandlestickSeries()
        candlestickSeries.setData(data.data)

        const volumeSeries = chart.addHistogramSeries({
          color: '#26a69a',
          priceFormat: {
            type: 'volume',
          },
          priceScaleId: '',
          scaleMargins: {
            top: 0.8,
            bottom: 0,
          },
        })

        interface KLineData {
          time: number
          value: number
          open: number
          close: number
        }

        volumeSeries.setData(
          data.data.map((item: KLineData) => ({
            time: item.time,
            value: item.value,
            color: item.open <= item.close ? '#26a69a' : '#ef5350',
          })),
        )

        chart.timeScale().fitContent()

        const handleResize = () => {
          if (chartContainer && chart) {
            chart.applyOptions({
              width: chartContainer.clientWidth,
            })
          }
        }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
          if (chart) {
            chart.remove()
            chart = null
          }
        }
      } catch (error) {
        console.error('获取K线数据失败:', error)
      }
    }

    fetchKlineData()

    return () => {
      if (chart) {
        chart.remove()
        chart = null
      }
    }
  }, [symbol])

  return <div ref={chartContainerRef} className="w-full" />
}
