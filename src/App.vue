<template>
  <component :is="$route.meta.layout === 'empty' ? Empty : Default">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import Default from './layouts/Default.vue'
import Empty from './layouts/Empty.vue'
</script>
