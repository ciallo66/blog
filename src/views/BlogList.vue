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
        { id: 1, title: 'Vue2的学习', summary: '学习和巩固Vue2的各项技能', date: '2025-05-12' },
        { id: 2, title: 'md的学习', summary: 'md知识点总结', date: '2025-05-14' },
        
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
