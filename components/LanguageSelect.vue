<script setup lang="ts">
const languageState = useLanguageState()

const items = [
  [
    {
      label: 'English',
      click: () => {
        languageState.setLanguage('en')
      },
    },
    {
      label: '简体中文',
      click: () => {
        languageState.setLanguage('zh_CN')
      },
    },
  ],
]
</script>

<template>
  <UDropdown
    :items="items" :popper="{ placement: 'bottom-start' }"
    :ui="{
      width: 'w-fit',
    }"
  >
    <UButton color="gray" variant="ghost" icon="i-carbon-earth-filled" />
  </UDropdown>
</template>
