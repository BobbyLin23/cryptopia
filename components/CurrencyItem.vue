<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  href: string
}>()
</script>

<template>
  <div
    class="w-full rounded flex p-3 items-center
    hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer px-8"
    :class="$route.path === href ? 'bg-gray-100 dark:bg-gray-700' : ''"
    @click="$router.push(href)"
  >
    <UIcon :name="icon" class="w-5 h-5 mr-2" />
    <span>{{ title }}</span>
  </div>
</template>
