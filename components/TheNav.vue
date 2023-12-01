<script setup lang="ts">
const user = useSupabaseUser()

const mobileSidebar = useMobileSidebarState()
</script>

<template>
  <nav
    class="border-b border-gray-200/75 dark:border-gray-700/50 h-16 flex items-center
    px-6"
  >
    <div class="text-2xl font-semibold text-green-500">
      Cryptopia
    </div>
    <UButton
      variant="ghost"
      icon="i-carbon-menu"
      class="mx-2 -mb-1.5 block lg:hidden"
      @click="mobileSidebar.setOpen()"
    />
    <div class="flex-auto" />
    <div class="flex items-center gap-3">
      <UButton
        icon="i-carbon-dashboard"
        label="Dashboard"
        color="gray"
        @click="$router.push('/dashboard')"
      />
      <ModeToggle />
      <LanguageSelect />
      <ExchangeSelect />
      <UserButton v-if="user" />
    </div>
  </nav>
</template>
