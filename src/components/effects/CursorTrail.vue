<template>
  <div class="cursor-trail" aria-hidden="true">
    <span
      v-for="dot in dots"
      :key="dot.id"
      class="cursor-trail__dot"
      :style="{
        transform: `translate(${dot.x}px, ${dot.y}px)`,
        opacity: dot.opacity,
        fontSize: `${dot.size}px`,
      }"
    >✦</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const MAX_DOTS = 14
const THROTTLE_MS = 36

const dots = ref([])
let dotId = 0
let lastSpawn = 0
let rafId = 0
let enabled = true

function spawn(x, y) {
  const now = performance.now()
  if (now - lastSpawn < THROTTLE_MS) return
  lastSpawn = now

  dots.value.push({
    id: ++dotId,
    x: x - 4,
    y: y - 4,
    opacity: 0.52,
    size: 8 + Math.random() * 5,
    life: 1.15,
  })

  if (dots.value.length > MAX_DOTS) {
    dots.value.shift()
  }
}

function tick() {
  dots.value = dots.value
    .map((d) => ({ ...d, life: d.life - 0.028, opacity: d.opacity * 0.94 }))
    .filter((d) => d.life > 0.05)

  rafId = requestAnimationFrame(tick)
}

function onMove(e) {
  if (!enabled) return
  spawn(e.clientX, e.clientY)
}

onMounted(() => {
  enabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!enabled) return

  window.addEventListener('mousemove', onMove, { passive: true })
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor-trail {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  overflow: hidden;
}

.cursor-trail__dot {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--color-primary);
  will-change: transform, opacity;
  text-shadow: 0 0 6px var(--color-shadow);
  pointer-events: none;
}

[data-theme='dark'] .cursor-trail__dot {
  color: rgba(200, 210, 255, 0.55);
  text-shadow: 0 0 8px rgba(150, 170, 255, 0.25);
}
</style>
