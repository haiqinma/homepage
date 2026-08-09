<script lang="ts" setup>
import bgUrl from '@/assets/img/bg.jpg'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="page-shell" :style="{ '--hero-bg': `url(${bgUrl})` }">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  background-color: #f7f9fc;
  background-image:
    linear-gradient(180deg, rgba(247, 249, 252, 0.2), #f7f9fc 54%),
    var(--hero-bg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: min(1920px, 100%) auto;
}
</style>
