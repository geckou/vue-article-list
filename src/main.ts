import { createApp, h, Suspense } from 'vue'
import App from './App.vue'

createApp({
  render() {
    return h(Suspense, null, {
      default: () => h(App),
      fallback: () => h('div', 'Loading...')
    })
  }
}).mount('#app')