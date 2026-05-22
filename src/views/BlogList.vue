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
        { id: 1, title: 'Vue2的学习', summary: 'Vue2基础知识总结', date: '2025-05-12' },
        { id: 2, title: 'md的学习', summary: 'md知识点总结', date: '2025-05-14' },
        { id: 3, title: 'Vue3的学习', summary: 'vue3的新内容', date: '2025-05-16' },
        { id: 4, title: '每天两个算法题', summary: '算法学习', date: '2025-05-16' },
        { id: 5, title: '异步学习', summary: 'promise和async/await语法糖', date: '2025-05-17' },
        { id: 6, title: 'ts学习', summary: '记录ts的部分语法', date: '2025-05-18' },
        { id: 7, title: 'MySql', summary: 'MySql数据库的学习', date: '2025-05-19' },
        { id: 8, title: 'Pinia', summary: 'Pinia的学习', date: '2025-05-19' },
        { id: 9, title: '一些语法糖', summary: '一些语法糖', date: '2025-05-22' },
      ]
    }
  },
  mounted(){
    this.$bus.$emit('moveid', this.posts)
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



