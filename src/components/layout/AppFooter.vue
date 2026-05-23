<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-text">
        <span class="heart">♡</span>
        {{ year }} 萌系代码小屋 · 用代码记录每一天
        <span class="heart">♡</span>
      </p>
      <p class="footer-motto">✨ 今日も頑張ろう ✨</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  margin-top: auto;
  padding: 1.5rem 1rem;
  background: var(--color-footer-bg);
  backdrop-filter: blur(10px);
  border-top: 2px dashed var(--color-card-border);
  transition: background 0.4s ease;
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  font-size: 0.9rem;
  color: var(--color-text-light);
}

.footer-motto {
  margin-top: 0.35rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--color-primary);
  letter-spacing: 0.1em;
}

.heart {
  display: inline-block;
  color: var(--color-primary);
  animation: twinkle 2s ease-in-out infinite;
}

.heart:last-child {
  animation-delay: 1s;
}
</style>
