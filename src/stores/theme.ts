import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref('light')

  function apply() {
    document.documentElement.setAttribute('data-theme', mode.value)
    localStorage.setItem('blog-theme', mode.value)
  }

  function init() {
    const saved = localStorage.getItem('blog-theme')
    if (saved === 'light' || saved === 'dark') {
      mode.value = saved
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      mode.value = 'dark'
    }
    apply()
  }

  function toggle() {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
    apply()
  }

  return { mode, init, toggle, apply }
})
