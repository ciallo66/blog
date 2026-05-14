<template>
  <div class="aaa markdown-body" >
    <!-- 渲染 Markdown 后的 HTML -->
    <div v-html="renderedHtml"></div>
    nihao1

  </div>
</template>

<script>
import { marked } from 'marked';
import 'github-markdown-css/github-markdown.css';

export default {
  name: 'BlogPost',
  data() {
    return {
      markdownSource: ''
    };
  },
  computed: {
    renderedHtml() {
      return this.markdownSource ? marked.parse(this.markdownSource) : '';
    }
  },
  methods: {
    async loadMd(fileName) {
      try {
        const url = `/blog/${fileName}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`加载失败，状态码：${res.status}`);
        }
        this.markdownSource = await res.text();
      } catch (error) {
        console.error(error);
        this.markdownSource = '# 加载失败\n请检查文件路径或网络连接。';
      }
    }
  },
  mounted() {
    // 最简单的方式：直接加载 nihao.md
    this.loadMd('nihao.md');
  }
};
</script>
<style>
  .aaa{
    margin: auto;
    width: 50vw;
  }
</style>