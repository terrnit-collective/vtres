<script setup lang="ts">
import { ref } from 'vue'
import { useFadeInUp } from '@/composables/useAnimations'

const techStack = ref(null)

const technologies = [
  { name: 'Vue', icon: '🟢', link: 'https://vuejs.org' },
  { name: 'TypeScript', icon: '🔷', link: 'https://www.typescriptlang.org' },
  { name: 'Vite', icon: '⚡', link: 'https://vitejs.dev' },
  { name: 'TresJS', icon: '🎮', link: 'https://tresjs.org' },
  { name: 'TailwindCSS', icon: '🎨', link: 'https://tailwindcss.com' }
]

useFadeInUp(techStack, 600)
</script>

<template>
  <div ref="techStack" class="mt-8">
    <p class="text-sm text-muted-foreground mb-4">Built with modern technologies</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a
        v-for="tech in technologies"
        :key="tech.name"
        :href="tech.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-accent transition-colors duration-300"
      >
        <span class="text-xl">{{ tech.icon }}</span>
        <span class="text-sm font-medium text-accent-foreground">{{ tech.name }}</span>
      </a>
    </div>
  </div>
</template>