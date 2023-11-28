<script setup lang="ts">
const createModal = useCreateModalState()
</script>

<template>
  <UModal v-model="createModal.isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Add a new Crypto
          </h3>
          <UButton
            color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="createModal.setClose()"
          />
        </div>
      </template>

      <div class="h-32" />
    </UCard>
  </UModal>
</template>
