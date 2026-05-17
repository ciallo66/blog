<template>
  <div class="aaa markdown-body">
    <!-- 如果加载中或失败可以加个提示，这里简单展示渲染后的Markdown -->
    <div v-html="renderedHtml"></div>
  </div>
</template>

<script>
import { marked } from 'marked'
import 'github-markdown-css/github-markdown.css'

export default {
  name: 'BlogPost',
  data() {
    return {
      markdownSource: ''
    }
  },
  computed: {
    renderedHtml() {
      return this.markdownSource ? marked.parse(this.markdownSource) : ''
    }
  },
  methods: {
    async loadMd(fileName) {
      try {
        const url = `${process.env.BASE_URL}blog/${fileName}`
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`加载失败，状态码：${res.status}`)
        }
        this.markdownSource = await res.text()
      } catch (error) {
        console.error(error)
        this.markdownSource = '# 加载失败\n请检查文件路径或网络连接。'
      }
    }
  },
  // 方案二：如果路由重用（比如从 /blog/1 到 /blog/2），需要监听 $route 变化
  watch: {
    '$route.params.id': {
      handler(newId) {
        if (newId) {
          this.loadMd(`${newId}.md`)
        }
      },
      immediate: true // 立即执行一次，相当于 created
    }
  }
}
</script>

<style>
.aaa {
  margin: auto;
  width: 60vw;
}
</style>
