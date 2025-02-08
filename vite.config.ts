import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    glsl(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag =>
            tag.startsWith('Tres') && tag !== 'TresCanvas',
        },
      },
    }),
  ],
})
