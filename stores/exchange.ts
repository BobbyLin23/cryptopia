export const useExchangeState = defineStore('exchange', () => {
  const exchange = ref('USD')

  const setExchange = (ex: string) => {
    exchange.value = ex
  }

  return {
    exchange,
    setExchange,
  }
})
