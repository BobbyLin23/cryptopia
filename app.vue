<script setup lang="ts">
useSeoMeta({
  title: 'Cryptopia',
  description: 'AI Crypto Trading Bot',
  ogTitle: 'Cryptopia',
  ogDescription: 'AI Crypto Trading Bot',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <ModalProvider />
    <UNotifications />
  </NuxtLayout>
</template>

<style>
@import url('~/assets/css/main.css');
</style>
