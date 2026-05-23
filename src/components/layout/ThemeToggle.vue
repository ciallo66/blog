<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="mode === 'dark' ? '切换到日间模式' : '切换到夜间模式'"
    :title="mode === 'dark' ? '日间模式' : '夜间星空'"
    @click="themeStore.toggle()"
  >
    <span class="theme-toggle__icon">{{ mode === 'dark' ? '☀️' : '🌙' }}</span>
  </button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const { mode } = storeToRefs(themeStore)
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 0.35rem;
  padding: 0;
  border: 2px solid var(--color-card-border);
  border-radius: 50%;
  background: var(--color-card);
  cursor: pointer;
  transition:
    transform var(--transition-bounce),
    box-shadow var(--transition-smooth);
  box-shadow: 0 2px 10px var(--color-shadow);
}

.theme-toggle:hover {
  transform: scale(1.08) rotate(-8deg);
  box-shadow: 0 4px 14px var(--color-shadow-hover);
}

.theme-toggle__icon {
  font-size: 1.15rem;
  line-height: 1;
}
</style>
