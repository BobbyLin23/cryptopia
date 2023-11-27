<script setup lang="ts">

</script>

<template>
  <div class="min-h-full py-24">
    <div class="flex flex-col items-center gap-y-10">
      <h1 class="text-7xl text-sky-500">
        Cryptopia
      </h1>
      <UButton size="lg" label="Get Started" color="sky" @click="$router.push('/dashboard')" />
    </div>
  </div>
</template>
