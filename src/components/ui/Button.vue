<script setup lang="ts">
import { useScaleIn } from '@/composables/useAnimations'
import { ref } from 'vue'

const button = ref(null)
useScaleIn(button, 400)

interface Props {
  variant?: 'primary' | 'secondary'
  as?: string
}

// eslint-disable-next-line vue/define-macros-order
withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    ref="button"
    class="text-md px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
  >
    <slot>Button</slot>
  </component>
</template>
