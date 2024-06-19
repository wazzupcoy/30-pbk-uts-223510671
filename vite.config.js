import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue(),
    quasar({
      // Anda bisa menambahkan konfigurasi tambahan di sini jika diperlukan
    })
  ]
})
