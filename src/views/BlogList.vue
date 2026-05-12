<template>
  <div class="blog-list">
    <h2>所有文章</h2>
    <div class="posts">
      <article v-for="post in posts" :key="post.id" class="post-card">
        <h3>
          <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
        </h3>
        <p>{{ post.summary }}</p>
        <small>{{ post.date }}</small>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      posts: [
        { id: 1, title: 'Vue 2 入门指南', summary: '学习 Vue 2 的核心概念和用法。', date: '2025-01-10' },
        { id: 2, title: 'CSS Grid 布局实战', summary: '使用 CSS Grid 构建响应式布局。', date: '2025-01-15' },
        { id: 3, title: '前端性能优化技巧', summary: '提升网站性能的 10 个实用技巧。', date: '2025-01-20' }
      ]
    }
  }
}
</script>

<style scoped>
.blog-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.post-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.post-card h3 a {
  color: #2c3e50;
  text-decoration: none;
}
.post-card h3 a:hover {
  color: #3498db;
}
</style>
