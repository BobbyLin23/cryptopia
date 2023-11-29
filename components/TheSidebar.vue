<script setup lang="ts">
const createModal = useCreateModalState()
</script>

<template>
  <aside
    class="h-full fixed w-64 flex-col p-2 flex
    border-r border-gray-200/75 dark:border-gray-700/50"
  >
    <UButton
      label="Add"
      class="px-4 py-2 flex justify-center my-2"
      @click="createModal.setOpen()"
    />
    <CurrencyList />
  </aside>
</template>
