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

