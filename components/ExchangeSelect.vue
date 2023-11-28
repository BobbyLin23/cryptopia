<script setup lang="ts">
const exchangeState = useExchangeState()

const items = [
  [
    {
      label: 'USD-$',
      click: () => {
        exchangeState.setExchange('USD')
      },
    },
    {
      label: 'CNY-¥',
      click: () => {
        exchangeState.setExchange('CNY')
      },
    },
  ],
]
</script>

<template>
  <UDropdown
    :items="items"
    :popper="{ placement: 'bottom-start' }"
    :ui="{
      width: 'w-24',
    }"
  >
    <UButton color="gray" variant="ghost" icon="i-carbon-money" />
  </UDropdown>
</template>
