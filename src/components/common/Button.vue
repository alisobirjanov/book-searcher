<template>
  <button
    class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    :class="[block ? 'w-full' : '']">
    <slot />
  </button>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  // type?: 'success' | 'secondary'
  block?: boolean
}>(), {
  // type: 'secondary'
})
</script>

