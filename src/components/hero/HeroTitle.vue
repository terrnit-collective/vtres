<script setup lang="ts">
import { ref } from 'vue'
import { useFadeInUp } from '@/composables/useAnimations'

const title = ref(null)
useFadeInUp(title)
</script>

<template>
  <h1 
    ref="title" 
    class="text-6xl font-bold mb-6 leading-tight max-w-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
  >
    <slot>Welcome to Our Amazing Platform</slot>
  </h1>
</template>