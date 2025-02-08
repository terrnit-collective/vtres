<script setup lang="ts">
import { useFadeInUp } from '@/composables/useAnimations'
import { ref } from 'vue'

const subtitle = ref(null)
useFadeInUp(subtitle, 200)
</script>

<template>
  <p
    ref="subtitle"
    class="text-md mb-8 max-w-2xl mx-auto text-muted-foreground"
  >
    <slot>
      Opinionated Vite Starter Template
    </slot>
  </p>
</template>
