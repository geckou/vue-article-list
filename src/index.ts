import { App } from 'vue'
import StandardList from '@/components/List/Standard.vue'
import RoundedList from '@/components/List/Rounded.vue'

const components = {
  StandardList,
  RoundedList,
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
}