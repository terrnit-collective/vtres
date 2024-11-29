<script setup lang="ts">
import HeroTitle from './HeroTitle.vue'
import HeroSubtitle from './HeroSubtitle.vue'
import TechStack from './TechStack.vue'
import ComponentCounter from './ComponentCounter.vue'
import Button from '../ui/Button.vue'
</script>

<template>
  <div class="bg-card/95 backdrop-blur-md p-12 rounded-lg border border-border/50 shadow-2xl">
    <HeroTitle />
    <HeroSubtitle />
    <Button variant="primary" />
    <TechStack />
    <ComponentCounter />
  </div>
</template>