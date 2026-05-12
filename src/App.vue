<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <br><br><br><br><br>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* 可选：App 级别的样式 */
</style>
