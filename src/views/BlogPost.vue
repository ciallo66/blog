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
        { id: 1, title: 'Vue 2 入门指南', date: '2025-01-10', 
        content: 'vue2的学习是很艰难的！  ' },
        
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
