<template>
  <header class="site-header">
    <div class="logo">
      <router-link to="/">My Blog</router-link>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.site-header {
  background: #2c3e50;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}
nav a {
  color: #ccc;
  margin-left: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;
}
nav a:hover,
nav a.router-link-exact-active {
  color: #fff;
}
</style>
