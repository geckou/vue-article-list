<script lang="ts" setup>
import type {
  Category,
  ListSettings,
} from '@/types'
import { ref } from 'vue'
import StandardList from '@/components/List/Standard.vue'
import RoundedList from '@/components/List/Rounded.vue'
import ArtisticList from '@/components/List/Artistic.vue'
import TileList from '@/components/List/Tile.vue'
import SimpleList from '@/components/List/Simple.vue'
import RowList from '@/components/List/Row.vue'
import NewsList from '@/components/List/News.vue'
import EntertainmentList from '@/components/List/Entertainment.vue'
import GalleryList from '@/components/List/Gallery.vue'
import GridList from '@/components/List/Grid.vue'


const WP_URL = 'https://geckou.wp.xdomain.jp/stewp/wp-json/wp/v2/posts?_embed'

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
  console.log(`Appのarticles`,articles.value)
}

await fetchPosts()
</script>

<template>
  <div :class="$style.contents">
    <Suspense>
      <template #default>
        <!-- ↓↓現状GridListの時だけ、:columnNumber="3"が必要になります ↓↓-->
        <GalleryList
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

<style lang="scss" module>
@use '@/assets/scss/functions' as *;

:root {
    $maxViewport        : 1200;
    $minViewport        : 576;
    --white             : #fff;
    --black             : #333333;
    --black-rgb         : 51, 51, 51;
    --dark-white        : #EEE;
    --light-gray        : #E5E5E5;
    --gray              : #AAA;
    --disable-text-color: var(--gray);
    --border-color      : var(--light-gray);
    --light-border-color: var(--dark-white);
    --button-shadow     : 0 0 0 1px rgba(51, 51, 51, .1) inset;
    --animation-duration: .3s;
    --bv                : #{calcClamp(6, 8, $minViewport, $maxViewport)};
    --sp                : #{calcClamp(6, 8, $minViewport, $maxViewport)};
    --sp-larger         : calc(var(--sp) * 8);
    --sp-large          : calc(var(--sp) * 4);
    --sp-medium         : calc(var(--sp) * 2);
    --sp-small          : var(--sp);
    --sp-min            : calc(var(--sp) / 2);
    --icon-size         : calc(var(--bv) * 3);
    --small-icon-size   : calc(var(--bv) * 2);
    --medium-icon-size  : calc(var(--bv) * 3);
    --large-icon-size   : calc(var(--bv) * 5);
}

  * {
    box-sizing: border-box;
  }

  body {
    color: var(--text-color);
  }

  a {
    color           : var(--primary-color);
    text-decoration: none;
  }

  ul,
  ol,
  li,
  dl,
  dt,
  dd {
    margin    : 0;
    padding   : 0;
    list-style: none;

    &[role='list'] {
      list-style: none;
    }
  }

  img {
    display   : block;
    max-width : 100%;
    max-height: 100%;
  }

  .contents {
    display       : flex;
    flex-direction: column;
    align-items   : center;
    gap           : var(--sp-larger);
    container-type: inline-size;
  }

</style>