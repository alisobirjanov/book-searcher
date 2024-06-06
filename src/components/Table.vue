<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th v-for="(item, index) in props.head" :key="index" scope="col"
          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">
          {{ item.title }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <tr v-for="(item, index) in props.list" :key="index">
        <td v-for="(head, index) in props.head" :key="index" class="whitespace-nowrap px-4 py-4 text-sm text-gray-500"
          :class="head.tdClass">
          <slot :name="head.field" :props="item">
            {{ item[head.field] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

interface IHead {
  title: string,
  field: string,
  tdClass?: string
}

interface IList {
  [key: string]: any
}

interface IProps {
  head: IHead[],
  list: IList[]
}


const props = withDefaults(defineProps<IProps>(), {
  head: () => [],
  list: () => []
})

</script>