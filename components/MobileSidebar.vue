<script setup lang="ts">
const mobileSidebar = useMobileSidebarState()

const isOpen = storeToRefs(mobileSidebar).isOpen
</script>

<template>
  <USlideover
    v-model="isOpen"
    side="left"
    :ui="{
      width: 'w-screen max-w-[256px]',
    }"
  >
    <TheSidebar />
  </USlideover>
</template>
