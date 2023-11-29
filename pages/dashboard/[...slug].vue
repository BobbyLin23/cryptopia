<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="p-4">
    {{ route.params.slug[0].toUpperCase() }}
  </div>
</template>
