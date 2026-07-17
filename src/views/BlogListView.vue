<template>
  <section class="blog-list page-wrap">
    <h2 class="page-title">📖 学习日记本</h2>
    <p class="page-subtitle">共 {{ blogPosts.length }} 篇记录 · 点击卡片开始阅读</p>

    <div class="list-toolbar">
      <label for="page-size">每页显示</label>
      <select id="page-size" v-model.number="pageSize" class="page-size-select" @change="resetPage">
        <option v-for="size in pageSizeOptions" :key="size" :value="size">
          {{ size }} 篇
        </option>
      </select>
    </div>

    <div ref="postsElement" class="posts">
      <article
        v-for="(post, index) in paginatedPosts"
        :key="post.id"
        class="post-card kawaii-card"
        :style="{ animationDelay: `${index * 0.06}s` }"
      >
        <div class="post-card__top">
          <span class="badge">No.{{ post.id }}</span>
          <span class="post-emoji">{{ emojis[(startIndex + index) % emojis.length] }}</span>
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

    <nav v-if="totalPages > 1" class="pagination" aria-label="文章分页">
      <button
        class="pagination__button pagination__button--wide"
        type="button"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        ← 上一页
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        class="pagination__button"
        :class="{ 'pagination__button--active': currentPage === page }"
        type="button"
        :aria-current="currentPage === page ? 'page' : undefined"
        :aria-label="`第 ${page} 页`"
        @click="changePage(page)"
      >
        {{ page }}
      </button>

      <button
        class="pagination__button pagination__button--wide"
        type="button"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        下一页 →
      </button>
    </nav>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { blogPosts } from '@/data/posts'

const emojis = ['🌸', '✨', '🎀', '⭐', '🍡', '💫', '🌙', '🎐', '🦋', '🍓']
const pageSizeOptions = [5, 10, 20]
const pageSize = ref(5)
const currentPage = ref(1)
const postsElement = ref(null)

const totalPages = computed(() => Math.ceil(blogPosts.length / pageSize.value))
const startIndex = computed(() => (currentPage.value - 1) * pageSize.value)
const paginatedPosts = computed(() =>
  blogPosts.slice(startIndex.value, startIndex.value + pageSize.value),
)

function resetPage() {
  currentPage.value = 1
}

function changePage(page) {
  if (page < 1 || page > totalPages.value || page === currentPage.value) return

  currentPage.value = page
  requestAnimationFrame(() => {
    postsElement.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<style scoped>
.list-toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.65rem;
  margin-bottom: 1rem;
  color: var(--color-text-light);
  font-size: 0.9rem;
  font-weight: 600;
}

.page-size-select {
  padding: 0.5rem 2rem 0.5rem 0.85rem;
  color: var(--color-heading);
  font: inherit;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid var(--color-card-border);
  border-radius: var(--radius-pill);
  cursor: pointer;
  outline: none;
}

.page-size-select:focus {
  border-color: var(--color-primary-dark);
  box-shadow: 0 0 0 3px rgba(255, 143, 171, 0.15);
}

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

.pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  margin-top: 2rem;
}

.pagination__button {
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.75rem;
  color: var(--color-heading);
  font: inherit;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid var(--color-card-border);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition:
    color var(--transition-smooth),
    background var(--transition-smooth),
    transform var(--transition-bounce);
}

.pagination__button--wide {
  min-width: 5.5rem;
}

.pagination__button:hover:not(:disabled),
.pagination__button--active {
  color: white;
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

.pagination__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .pagination {
    gap: 0.4rem;
  }

  .pagination__button {
    min-width: 2.25rem;
    height: 2.25rem;
    padding: 0 0.6rem;
  }
}
</style>
