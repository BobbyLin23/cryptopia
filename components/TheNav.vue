<script setup lang="ts">

</script>

<template>
  <nav
    class="border-b border-gray-200/75 dark:border-gray-700/50 h-16 flex items-center
    px-6"
  >
    <div class="text-2xl font-semibold text-green-500">
      Cryptopia
    </div>
    <div class="flex-auto" />
    <div class="flex items-center gap-3">
      <UButton
        variant="ghost"
        label="Dashboard"
        color="gray"
        @click="$router.push('/dashboard')"
      />
      <ModeToggle />
    </div>
  </nav>
</template>
