<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import ComponentCounter from './ComponentCounter.vue'
import HeroSubtitle from './HeroSubtitle.vue'
import HeroTitle from './HeroTitle.vue'
import TechStack from './TechStack.vue'
</script>

<template>
  <div class="bg-card/95 backdrop-blur-xl p-12 rounded-lg border border-border/50 shadow-2xl">
    <HeroTitle />
    <HeroSubtitle />
    <Button as="a" href="https://github.com/terrnit-collective/vtres" target="_blank" variant="primary">
      Get Started
    </Button>
    <TechStack />
    <ComponentCounter />
  </div>
</template>
