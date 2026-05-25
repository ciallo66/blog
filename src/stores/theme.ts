import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {          //theme相当于id
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
  //mode定义两种主题，
  //apply定义一个theme的值为mode.value，并将数据存储在local，
  //init初始化界面主题，调用local里存储的主题，如果没有看window的主题
  //toggel改变mode.value,实现主题的切换
})
