<script setup lang="ts">
</script>

<template>
  <div class="h-full dark:bg-[#27272A]">
    <TheNav />
    <main class="flex">
      <TheSidebar />
      <div class="ml-56">
        <slot />
      </div>
    </main>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
