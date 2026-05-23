<template>
  <div
    class="waifu"
    :class="{ 'waifu--visible': visible, 'waifu--dark': isDark }"
    :style="{ right: `${mascotConfig.offsetRight}px`, bottom: `${mascotConfig.offsetBottom}px` }"
  >
    <transition name="bubble">
      <div v-if="speech" class="waifu__bubble">{{ speech }}</div>
    </transition>

    <button type="button" class="waifu__btn" aria-label="看板娘，点击说话" @click="onClick">
      <img
        :src="imgSrc"
        alt="看板娘"
        class="waifu__img"
        @error="onImgError"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { mascotConfig } from '@/config/mascot'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const { mode } = storeToRefs(themeStore)
const isDark = computed(() => mode.value === 'dark')

const base = import.meta.env.BASE_URL
const useFallback = ref(false)
const speech = ref('')
const visible = ref(false)

const imgSrc = computed(() => {
  const file = useFallback.value ? mascotConfig.fallback : mascotConfig.image
  return `${base}${file}`
})

function onImgError() {
  if (!useFallback.value) {
    useFallback.value = true
  }
}

function onClick() {
  const list = mascotConfig.speeches
  const next = list[Math.floor(Math.random() * list.length)]
  speech.value = next
  setTimeout(() => {
    speech.value = ''
  }, 3200)
}

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 400)
})
</script>

<style scoped>
.waifu {
  position: fixed;
  z-index: 90;
  pointer-events: none;
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.waifu--visible {
  opacity: 1;
  transform: translateY(0);
}

.waifu__btn {
  pointer-events: auto;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform var(--transition-bounce);
  filter: drop-shadow(0 8px 20px var(--color-shadow));
}

.waifu__btn:hover {
  transform: scale(1.04) translateY(-4px);
}

.waifu__img {
  display: block;
  height: min(42vh, 320px);
  width: auto;
  max-width: 180px;
  object-fit: contain;
  object-position: bottom center;
}

.waifu__bubble {
  position: absolute;
  right: 100%;
  bottom: 55%;
  margin-right: 0.5rem;
  max-width: 200px;
  padding: 0.65rem 0.9rem;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--color-text);
  background: var(--color-card);
  border: 2px solid var(--color-card-border);
  border-radius: var(--radius-md);
  box-shadow: 0 6px 20px var(--color-shadow);
  pointer-events: none;
}

.waifu__bubble::after {
  content: '';
  position: absolute;
  right: -8px;
  bottom: 12px;
  border: 8px solid transparent;
  border-left-color: var(--color-card-border);
}

.bubble-enter-active,
.bubble-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.bubble-enter-from,
.bubble-leave-to {
  opacity: 0;
  transform: translateX(8px);
}

@media (max-width: 768px) {
  .waifu {
    transform: scale(0.75);
    transform-origin: bottom right;
  }

  .waifu__bubble {
    max-width: 140px;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .waifu {
    display: none;
  }
}
</style>
