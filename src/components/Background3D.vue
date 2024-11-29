<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { ref, onMounted } from 'vue'

const torusRef = ref()
const boxRef = ref()
const sphereRef = ref()

const { onLoop } = useRenderLoop()

onMounted(() => {
  onLoop(() => {
    if (torusRef.value) {
      torusRef.value.rotation.x += 0.01
      torusRef.value.rotation.y += 0.01
    }
    if (boxRef.value) {
      boxRef.value.rotation.x += 0.01
      boxRef.value.rotation.y -= 0.01
    }
    if (sphereRef.value) {
      sphereRef.value.rotation.y += 0.01
    }
  })
})
</script>

<template>
  <TresCanvas window-size>
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :position="[10, 10, 10]" :intensity="0.5" />
    
    <TresMesh
      ref="torusRef"
      :position="[-4, 0, 0]"
      :rotation="[0, Math.PI / 4, 0]"
      :scale="1.5"
    >
      <TresTorusGeometry :args="[1, 0.4, 16, 32]" />
      <TresMeshStandardMaterial color="#646cff" />
    </TresMesh>

    <TresMesh
      ref="boxRef"
      :position="[4, 0, 0]"
      :rotation="[Math.PI / 4, 0, Math.PI / 4]"
      :scale="1.5"
    >
      <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
      <TresMeshStandardMaterial color="#535bf2" />
    </TresMesh>

    <TresMesh
      ref="sphereRef"
      :position="[0, 3, 0]"
      :scale="1.2"
    >
      <TresSphereGeometry :args="[1, 32, 32]" />
      <TresMeshStandardMaterial color="#42b883" />
    </TresMesh>

    <OrbitControls :enable-zoom="false" :auto-rotate="true" />
  </TresCanvas>
</template>

<style scoped>
canvas {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>