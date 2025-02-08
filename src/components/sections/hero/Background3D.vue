<script setup lang="ts">
import fragmentShader from '@/shaders/fragment.glsl'
import vertexShader from '@/shaders/vertex.glsl'
import { OrbitControls } from '@tresjs/cientos'
import { TresCanvas, useRenderLoop } from '@tresjs/core'

import * as THREE from 'three'
import { onMounted, ref } from 'vue'

const sphereRef = ref()
const sphere2Ref = ref()
const sphere3Ref = ref()

const directionalLightConfig = {
  position: new THREE.Vector3(10, 10, 10),
  intensity: 0.5,
}

const uniforms = {
  uTime: { value: 0 },
  uAmplitude: { value: new THREE.Vector2(0.1, 0.1) },
  uFrequency: { value: new THREE.Vector2(20, 5) },
}

const { onLoop } = useRenderLoop()

onMounted(() => {
  onLoop(({ delta: _delta, elapsed }) => {
    if (sphereRef.value) {
      sphereRef.value.rotation.x += 0.01
      sphereRef.value.rotation.y += 0.01
      sphereRef.value.material.uniforms.uTime.value = elapsed
    }
    if (sphere2Ref.value) {
      sphere2Ref.value.rotation.x += 0.01
      sphere2Ref.value.rotation.y -= 0.01
      sphere2Ref.value.material.uniforms.uTime.value = elapsed
    }
    if (sphere3Ref.value) {
      sphere3Ref.value.rotation.x += 0.01
      sphere3Ref.value.rotation.y -= 0.01
      sphere3Ref.value.material.uniforms.uTime.value = elapsed
    }
  })
})
</script>

<template>
  <TresCanvas
    shadows
    alpha
    window-size
  >
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :position="directionalLightConfig.position" :intensity="directionalLightConfig.intensity" />

    <TresMesh
      ref="sphereRef"
      :position="[9, 3, 0]"
      :scale="1.2"
    >
      <TresSphereGeometry :args="[2, 32, 32]" />
      <TresShaderMaterial
        :vertex-shader="vertexShader"
        :fragment-shader="fragmentShader"
        :uniforms="uniforms"
      />
    </TresMesh>

    <TresMesh
      ref="sphere2Ref"
      :position="[4, 2, 9]"
      :scale="0.8"
    >
      <TresSphereGeometry :args="[2, 28, 28]" />
      <TresShaderMaterial
        :vertex-shader="vertexShader"
        :fragment-shader="fragmentShader"
        :uniforms="uniforms"
      />
    </TresMesh>
    <TresMesh
      ref="sphere3Ref"
      :position="[2, 2, 9]"
      :scale="0.4"
    >
      <TresSphereGeometry :args="[2, 28, 28]" />
      <TresShaderMaterial
        :vertex-shader="vertexShader"
        :fragment-shader="fragmentShader"
        :uniforms="uniforms"
      />
    </TresMesh>
    <TresPerspectiveCamera
      :position="[11, 11, 11]"
    />

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
