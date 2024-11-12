<script lang="ts" setup>
import type {
  Category,
  ListSettings,
} from '@/types'
import { ref } from 'vue'
import StandardList from '@/components/List/Standard.vue'

const WP_URL = 'https://geckou.wp.xdomain.jp/stewp/wp-json/wp/v2/posts'

const SETTINGS: ListSettings = {
  domainToUse: 'geckou.wp.xdomain.jp',
  postConfig: {
    article_page_path: '/article/',
    query_key_name: 'article',
    useAuthor: true,
    useCategory: true,
    useTag: true,
  },
  isEnabledPickUp: true,
}

const CATEGORIES: Category[] = [
  { id: '10', name: 'カテゴリ1' },
  { id: '2', name: 'カテゴリ2' },
  { id: '3', name: 'カテゴリ3' },
]

const articles = ref<any[]>([])

const fetchPosts = async () => {
  const res = await fetch(WP_URL, { method: 'GET' })
  if (!res.ok) throw new Error('Failed to fetch posts')
  articles.value = await res.json()
  console.log(articles.value)
}

await fetchPosts()
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <StandardList
          :articles="articles"
          :settings="SETTINGS"
          :categories="CATEGORIES"
        />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>