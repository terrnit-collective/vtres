<script setup lang="ts">
import { useScaleIn } from '@/composables/useAnimations'
import { ref } from 'vue'

defineProps<{
  variant?: 'primary' | 'secondary'
}>()
const button = ref(null)
useScaleIn(button, 400)
</script>

<template>
  <button
    ref="button"
    class="text-md px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
  >
    <slot>Get Started</slot>
  </button>
</template>
