<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const user = useSupabaseUser()

watch(user, () => {
  if (user.value)
    navigateTo('/dashboard')
}, {
  immediate: true,
})
</script>

<template>
  <div>
    <UIcon name="i-carbon-circle-dash" class="animate-spin w-10 h-10" />
  </div>
</template>
