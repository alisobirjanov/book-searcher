<template>
  <div class="flex flex-wrap items-center mx-auto lg:max-w-5xl">
    <img 
      :alt="store.getBook.title"
      class="object-cover object-center w-full rounded h-1/2 lg:w-1/4"
      :src="store.getBook.thumbnail">
    <div class="w-full mt-6 lg:w-2/3 lg:pl-10 lg:py-6 lg:mt-0">

      <h1 class="mb-1 text-3xl font-medium text-gray-500 title-font">{{ store.getBook.title }}</h1>

      <p class="leading-relaxed" v-html="store.getBook.description"></p>

      <p class="mt-5"><strong>Authors:</strong> {{ store.getBook.authors }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useBooksStore } from '../stores/books'

const route = useRoute()

const store = useBooksStore()

onMounted(() => {
  store.fetchBookById(route.params.id as string)
})
</script>
