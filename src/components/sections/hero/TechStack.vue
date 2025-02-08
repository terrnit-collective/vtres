<script setup lang="ts">
import { TailwindIcon, TresJsIcon, TypescriptIcon, VueIcon } from '@/components/icons'
import { useFadeInUp } from '@/composables/useAnimations'
import { ref } from 'vue'

const techStack = ref(null)

const technologies = [
  { name: 'Vue', icon: VueIcon, link: 'https://vuejs.org' },
  { name: 'TypeScript', icon: TypescriptIcon, link: 'https://www.typescriptlang.org' },
  { name: 'TresJS', icon: TresJsIcon, link: 'https://tresjs.org' },
  { name: 'TailwindCSS', icon: TailwindIcon, link: 'https://tailwindcss.com' },
]

useFadeInUp(techStack, 600)
</script>

<template>
  <div ref="techStack" class="mt-16">
    <p class="text-sm text-muted-foreground mb-4">
      Built with modern technologies
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a
        v-for="tech in technologies"
        :key="tech.name"
        :href="tech.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-accent transition-colors duration-300"
      >
        <component :is="tech.icon" class="w-4 h-4" />
        <span class="text-sm font-medium text-accent-foreground">{{ tech.name }}</span>
      </a>
    </div>
  </div>
</template>
