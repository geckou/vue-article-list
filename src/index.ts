import { App } from 'vue'
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

const components = {
  StandardList,
  RoundedList,
  ArtisticList,
  TileList,
  SimpleList,
  RowList,
  NewsList,
  EntertainmentList,
  GalleryList,
  GridList,
}

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

// 個別のコンポーネントもエクスポート
export {
  StandardList,
  RoundedList,
  ArtisticList,
  TileList,
  SimpleList,
  RowList,
  NewsList,
  EntertainmentList,
  GalleryList,
  GridList,
}