import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development'

  return {
    plugins: [vue()],
  
    server: {
      host: '0.0.0.0',
      port: 5555
    },

    // 開発時とビルド時でエントリーファイルを切り替え
    build: {
      lib: isDevelopment
        ? undefined // 開発時はビルド用設定を無視
        : {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'VueArticleList',
            fileName: (format) => `vue-article-list.${format}.js`,
          },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },

    optimizeDeps: {
      include: ['vue']
    },

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
})