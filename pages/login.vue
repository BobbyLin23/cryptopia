<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'auth',
})

const supabase = useSupabaseClient()

const toast = useToast()

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password is required'),
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: '',
  password: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { error } = await supabase.auth.signInWithPassword({
    email: event.data.email,
    password: event.data.password,
  })

  if (error) {
    toast.add({
      color: 'red',
      title: error.message,
    })
  }
  else {
    toast.add({
      color: 'green',
      title: 'Log in successfully!',
    })
    navigateTo('/confirm')
  }
}

async function signInWithGithub() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/confirm',
    },
  })

  if (error) {
    toast.add({
      color: 'red',
      title: error.message,
    })
  }
  else {
    toast.add({
      color: 'green',
      title: 'Log in successfully!',
    })
  }
}

async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/confirm',
    },
  })

  if (error) {
    toast.add({
      color: 'red',
      title: error.message,
    })
  }
  else {
    toast.add({
      color: 'green',
      title: 'Log in successfully!',
    })
  }
}
</script>

<template>
  <div
    class="border rounded-md p-6 w-[350px] flex flex-col gap-y-4
  border-gray-200/75 dark:border-gray-700 shadow-md dark:bg-neutral-900"
  >
    <h1 class="text-center text-xl font-semibold">
      Sign in to Cryptopia
    </h1>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      :validate-on="['submit']"
      @submit="onSubmit"
    >
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>
      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>
      <UButton label="Sign in" block type="submit" />
      <p class="text-sm text-gray-500 text-center">
        Don't have an account?
        <NuxtLink to="/register" class="text-green-500 hover:text-opacity-70">
          Register
        </NuxtLink>
      </p>
    </UForm>
    <UDivider label="OR" />
    <UButton
      label="Sign in with Google"
      block
      icon="i-carbon-logo-google"
      @click="signInWithGoogle"
    />
    <UButton
      label="Sign in with Github"
      block
      icon="i-carbon-logo-github"
      @click="signInWithGithub"
    />
  </div>
</template>
