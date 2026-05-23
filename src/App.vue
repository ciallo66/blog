<template>
  <div id="app" class="app-shell">
    <div class="bg-deco" aria-hidden="true">
      <div class="bg-deco__blob bg-deco__blob--1"></div>
      <div class="bg-deco__blob bg-deco__blob--2"></div>
      <div class="bg-deco__blob bg-deco__blob--3"></div>

      <span class="bg-deco__emoji-star bg-deco__emoji-star--a">✦</span>
      <span class="bg-deco__emoji-star bg-deco__emoji-star--b">♡</span>
      <span class="bg-deco__emoji-star bg-deco__emoji-star--c">✧</span>
      <span class="bg-deco__emoji-star bg-deco__emoji-star--d">★</span>
      <span class="bg-deco__emoji-star bg-deco__emoji-star--e">✦</span>

      <Starfield />

      <div class="bg-deco__meteors">
        <span class="bg-deco__meteor bg-deco__meteor--1"></span>
        <span class="bg-deco__meteor bg-deco__meteor--2"></span>
        <span class="bg-deco__meteor bg-deco__meteor--3"></span>
      </div>
    </div>

    <CursorTrail />
    <AppHeader />
    <main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <WaifuMascot />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import WaifuMascot from '@/components/layout/WaifuMascot.vue'
import CursorTrail from '@/components/effects/CursorTrail.vue'
import Starfield from '@/components/effects/Starfield.vue'
</script>

<style scoped>
.app-shell {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.app-main {
  flex: 1;
  position: relative;
  z-index: 1;
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
