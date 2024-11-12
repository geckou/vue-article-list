<script setup lang="ts">
import GenericArticleList from '@/components/GenericArticleList.vue'

const props = defineProps<{
  articles: any[]
  isEnabledPickUp: boolean
  postConfig: any
  categories: any[]
  columnNumber: number
  domainToUse: string
}>()
</script>

<template>
  <GenericArticleList />
</template>