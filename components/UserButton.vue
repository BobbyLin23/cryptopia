<script setup lang="ts">
const supabase = useSupabaseClient()

const user = useSupabaseUser()

const router = useRouter()

const items = [
  [{
    label: user.value?.email || '',
    slot: 'account',
    disabled: true,
  }],
  [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
    click: () => {
      router.push('/settings')
    },
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: async () => {
      await supabase.auth.signOut()
      router.go(0)
    },
  }],
]
</script>

<template>
  <UDropdown
    :items="items"
    :ui="{
      width: 'w-fit',
      item: {
        disabled: 'cursor-text select-text',
      },
    }"
    :popper="{ placement: 'bottom-start' }"
  >
    <UAvatar
      :src="user?.user_metadata?.avatar_url"
      alt="Avatar"
    />
    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>
