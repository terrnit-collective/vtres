<script setup lang="ts">
import { ref } from 'vue'
import { useScaleIn } from '@/composables/useAnimations'

const button = ref(null)
useScaleIn(button, 400)

defineProps<{
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button 
    ref="button" 
    class="text-xl px-8 py-4 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
  >
    <slot>Get Started</slot>
  </button>
</template>