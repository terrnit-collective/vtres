<script setup lang="ts">
import { useScaleIn } from '@/composables/useAnimations'
import { onMounted, ref } from 'vue'

const counter = ref(null)
const count = ref(0)
const targetCount = 15 // Number of components in the template

useScaleIn(counter, 800)

onMounted(() => {
  const duration = 2000 // 2 seconds
  const interval = 50 // Update every 50ms
  const steps = duration / interval
  const increment = targetCount / steps

  const timer = setInterval(() => {
    if (count.value < targetCount) {
      count.value = Math.min(count.value + increment, targetCount)
    }
    else {
      clearInterval(timer)
      count.value = targetCount
    }
  }, interval)
})
</script>

<template>
  <div
    ref="counter"
    class="mt-8 inline-flex items-center gap-2 px-6 py-2 bg-accent rounded-full"
  >
    <span class="text-2xl font-bold text-accent-foreground">{{ Math.floor(count) }}+</span>
    <span class="text-sm text-muted-foreground">Reusable Components</span>
  </div>
</template>
