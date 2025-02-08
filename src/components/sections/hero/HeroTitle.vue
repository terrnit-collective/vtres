<script setup lang="ts">
import { useFadeInUp } from '@/composables/useAnimations'
import { ref } from 'vue'

const title = ref(null)
useFadeInUp(title)
</script>

<template>
  <h1
    ref="title"
    class="text-3xl font-bold mb-2 leading-tight max-w-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
  >
    <slot>Vtres</slot>
  </h1>
</template>
