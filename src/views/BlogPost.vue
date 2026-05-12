<template>
  <div class="blog-post">
    <h2>{{ post.title }}</h2>
    <p class="date">{{ post.date }}</p>
    <div class="content">{{ post.content }}</div>
    <router-link to="/blog">&larr; 返回文章列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['id'],
  data() {
    return {
      posts: [
        { id: 1, title: 'Vue 2 入门指南', date: '2025-01-10', content: '详细内容：Vue 2 是一个渐进式框架……' },
        { id: 2, title: 'CSS Grid 布局实战', date: '2025-01-15', content: 'Grid 布局可以轻松实现二维布局……' },
        { id: 3, title: '前端性能优化技巧', date: '2025-01-20', content: '1. 压缩图片 2. 代码分割……' }
      ]
    }
  },
  computed: {
    post() {
      return this.posts.find(p => p.id === Number(this.id)) || { title: 'Not Found', content: '文章不存在' }
    }
  }
}
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.date {
  color: #888;
}
.content {
  margin: 2rem 0;
  line-height: 1.8;
}
</style>
