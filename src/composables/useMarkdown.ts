import { ref, computed } from 'vue'
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import DOMPurify from 'dompurify'

// 配置 marked 使用 highlight.js 做代码高亮
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  }),
)

/**
 * 从 public/blog 加载 Markdown 并渲染为 HTML
 */
export function useMarkdown() {

  const markdownSource = ref('')

  

  const renderedHtml = computed(() => {
    if (!markdownSource.value) return ''
    //as string是ts里的类型断言,告诉ts我返回的是一个字符串，不是promise
    const rawHtml = marked.parse(markdownSource.value) as string   
     // 过滤掉危险 HTML,防止xss    
    return DOMPurify.sanitize(rawHtml) 


  })

//异步函数，读取md文件
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
//同步函数,将读取的md文件解析成
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
