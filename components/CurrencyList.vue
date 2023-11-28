<script setup lang="ts">
const list = [
  {
    title: 'Bitcoin',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/bitcoin',
  },
  {
    title: 'Ethereum',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/ethereum',
  },
  {
    title: 'BNB',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/bnb',
  },
  {
    title: 'XRP',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/xrp',
  },
  {
    title: 'Ethereum',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/ethereum',
  },
  {
    title: 'BNB',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/bnb',
  },
  {
    title: 'XRP',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/xrp',
  },
  {
    title: 'Ethereum',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/ethereum',
  },
  {
    title: 'BNB',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/bnb',
  },
  {
    title: 'XRP',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/xrp',
  },
  {
    title: 'XRP',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/xrp',
  },
  {
    title: 'Ethereum',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/ethereum',
  },
  {
    title: 'BNB',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/bnb',
  },
  {
    title: 'XRP',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/xrp',
  },
  {
    title: 'XRP',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/xrp',
  },
  {
    title: 'Ethereum',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/ethereum',
  },
  {
    title: 'BNB',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/bnb',
  },
  {
    title: 'XRP',
    icon: 'i-heroicons-academic-cap',
    href: '/dashboard/xrp',
  },
]
</script>

<template>
  <div class="flex flex-col max-h-[800px] overflow-y-auto">
    <CurrencyItem
      v-for="item in list"
      :key="item.title"
      :title="item.title"
      :icon="item.icon"
      :href="item.href"
    />
  </div>
</template>
