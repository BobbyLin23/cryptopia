<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <div>
      {{ route.params.slug }}
    </div>
  </div>
</template>
