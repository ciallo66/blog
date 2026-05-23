<template>
  <section class="blog-list page-wrap">
    <h2 class="page-title">📖 学习日记本</h2>
    <p class="page-subtitle">共 {{ blogPosts.length }} 篇记录 · 点击卡片开始阅读</p>

    <div class="posts">
      <article
        v-for="(post, index) in blogPosts"
        :key="post.id"
        class="post-card kawaii-card"
        :style="{ animationDelay: `${index * 0.06}s` }"
      >
        <div class="post-card__top">
          <span class="badge">No.{{ post.id }}</span>
          <span class="post-emoji">{{ emojis[index % emojis.length] }}</span>
        </div>

        <h3 class="post-title">
          <router-link :to="{ name: 'blog-post', params: { id: post.id } }">
            {{ post.title }}
          </router-link>
        </h3>

        <p class="post-summary">{{ post.summary }}</p>

        <div class="post-footer">
          <time class="post-date">🗓 {{ post.date }}</time>
          <router-link :to="{ name: 'blog-post', params: { id: post.id } }" class="read-more">
            阅读 →
          </router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { blogPosts } from '@/data/posts'

const emojis = ['🌸', '✨', '🎀', '⭐', '🍡', '💫', '🌙', '🎐', '🦋', '🍓']
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.post-card {
  padding: 1.5rem 1.75rem;
  animation: fadeSlideUp 0.5s ease both;
  cursor: default;
}

.post-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.post-emoji {
  font-size: 1.5rem;
  transition: transform var(--transition-bounce);
}

.post-card:hover .post-emoji {
  transform: scale(1.3) rotate(12deg);
}

.post-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.post-title a {
  color: var(--color-heading);
  text-decoration: none;
  transition: color var(--transition-smooth);
}

.post-title a:hover {
  color: var(--color-primary-dark);
}

.post-summary {
  color: var(--color-text-light);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  border-top: 2px dashed rgba(255, 143, 171, 0.2);
}

.post-date {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.read-more {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 143, 171, 0.12);
  transition:
    background var(--transition-smooth),
    transform var(--transition-bounce);
}

.read-more:hover {
  background: rgba(255, 143, 171, 0.25);
  transform: translateX(4px);
  color: var(--color-primary-dark);
}
</style>
