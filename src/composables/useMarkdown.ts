import { ref, computed } from 'vue'
import { marked } from 'marked'

/**
 * 从 public/blog 加载 Markdown 并渲染为 HTML
 */
export function useMarkdown() {
  const markdownSource = ref('')

  const renderedHtml = computed(() =>
    markdownSource.value ? marked.parse(markdownSource.value) : '',
  )

  async function loadMarkdown(fileName) {
    try {
      const url = `${import.meta.env.BASE_URL}blog/${fileName}`
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error(`加载失败，状态码：${res.status}`)
      }
      markdownSource.value = await res.text()
    } catch (error) {
      console.error(error)
      markdownSource.value = '# 加载失败\n请检查文件路径或网络连接。'
    }
  }

  function setMarkdown(content) {
    markdownSource.value = content
  }

  return {
    markdownSource,
    renderedHtml,
    loadMarkdown,
    setMarkdown,
  }
}
