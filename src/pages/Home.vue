<template>
  <div>
    <div class="my-4">
      <Input placeholder="Search" block @input="onSearch" :value="defaultQuery"/>
    </div>
    <div>
      <Table :head="head" :list="store.getBooks">
        <template #thumbnail="{props}">
          <img width="70px" :src="props.thumbnail">
        </template>
        <template #title="{props}">
          <RouterLink 
            :to="{name: 'book-detail', params: { id: props.id }}" 
          >
            {{ props.title }}
          </RouterLink>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Input from '../components/Input.vue'
import Table from '../components/Table.vue'

import { useBooksStore } from '../stores/books'
import { debounce } from '../utils'

const store = useBooksStore()

const defaultQuery = 'programming'

const head = [
  {
    title: 'Image',
    field: 'thumbnail',
  },
  {
    title: 'Title',
    field: 'title',
  },
  {
    title: 'Authors',
    field: 'authors',
  }
]

const onSearch = debounce((event: InputEvent) => {
  const query = (event.target as HTMLInputElement).value
  if(!query.length) {
    return
  }
  store.fetchBooks(query)
})

onMounted(() => {
  store.fetchBooks(defaultQuery)
})

</script>
