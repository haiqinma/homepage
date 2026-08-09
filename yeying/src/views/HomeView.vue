<script lang="ts" setup>
import HomeDesc from '@/views/home/HomeDesc.vue'
import HomeItem from '@/views/home/HomeItem.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main id="top">
    <div class="mx-auto max-w-6xl px-5 pt-28 lg:px-0 lg:pt-32">
      <HomeDesc />
      <HomeItem />
    </div>
    <Footer />
  </main>
</template>
