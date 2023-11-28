<script setup lang="ts">
const user = useSupabaseUser()
const language = useLanguageState()
const exchange = useExchangeState()
</script>

<template>
  <div>
    {{ user?.email }}
    <div>
      {{ language.language }}
    </div>
    <div>
      {{ exchange.exchange }}
    </div>
  </div>
</template>
