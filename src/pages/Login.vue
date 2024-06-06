<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <Input id="username" maxlength="16" :disabled="isLoading" v-model="username" />
            <small class="text-red">{{ errorMessage }}</small>
          </div>
        </div>

        <div>
          <Button type="submit" block :disabled="isLoading">
            Signin{{ isLoading ? '...' : '' }}
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Button from '../components/Button.vue'
import Input from '../components/Input.vue'

import { sleep } from '../utils'

const router = useRouter()

const regexp = /^[a-zA-Z]+$/

const username = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

async function onSubmit() {
  const text = username.value

  if(!regexp.test(text)) {
    errorMessage.value = 'Only alphabet characters'
    return
  }
  if(text.length !== 16) {
    errorMessage.value = '16 characters required'
    return
  }
  errorMessage.value = ''
  isLoading.value = true
  await sleep(3000)
  isLoading.value = false
  router.push({name: 'home'})
}
</script>
