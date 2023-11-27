<script setup lang="ts">

</script>

<template>
  <header
    class="backdrop-blur border-b sticky -mb-px top-0 z-50
    border-gray-200/75 dark:border-gray-700/50"
  >
    <div class="mx-auto px-4 sm:px-5 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16">
      <h1 class="text-2xl font-semibold">
        Cryptopia
      </h1>
      <div class="flex-auto" />
      <UButton icon="i-heroicons-document-duplicate-solid" variant="ghost" color="gray" />
      <ModeToggle />
    </div>
  </header>
</template>
