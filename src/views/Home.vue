<template>
  <div class="home">
    <h1>Welcome to My Blog</h1>
    <p>这是一个基于 Vue 2 构建的简约博客模板。</p>
    <router-link to="/blog" class="btn">查看所有文章</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 2rem;
}
.btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  background: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
.btn:hover {
  background: #2980b9;
}
</style>
