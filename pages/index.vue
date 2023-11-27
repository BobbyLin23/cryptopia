<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div class="p-4 text-rose-300">
    hello world
    {{ x }}, {{ y }}
  </div>
</template>
