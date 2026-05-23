<template>
  <div class="starfield" aria-hidden="true">
    <span
      v-for="star in stars"
      :key="star.id"
      class="starfield__dot"
      :style="{
        left: star.left,
        top: star.top,
        width: star.size + 'px',
        height: star.size + 'px',
        opacity: star.opacity,
        animationDelay: star.delay + 's',
        animationDuration: star.duration + 's',
      }"
    ></span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STAR_COUNT = 110
const stars = ref([])

onMounted(() => {
  stars.value = Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() > 0.88 ? 2.5 : Math.random() > 0.6 ? 1.8 : 1,
    opacity: 0.15 + Math.random() * 0.45,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }))
})
</script>

<style scoped>
.starfield {
  display: none;
  position: absolute;
  inset: 0;
  pointer-events: none;
}

:global([data-theme='dark']) .starfield {
  display: block;
}

.starfield__dot {
  position: absolute;
  border-radius: 50%;
  background: rgba(220, 228, 255, 0.9);
  box-shadow: 0 0 3px rgba(180, 195, 255, 0.35);
  animation: skyTwinkle ease-in-out infinite;
}
</style>
