<script lang="ts" setup>
import { computed } from 'vue'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'
import Footer from '@/components/Footer.vue'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
const posts = computed(() => [
  { title: t('blog_post_one_title'), desc: t('blog_post_one_desc'), date: '2026-08-09' },
  { title: t('blog_post_two_title'), desc: t('blog_post_two_desc'), date: '2026-08-09' },
  { title: t('blog_post_three_title'), desc: t('blog_post_three_desc'), date: '2026-08-09' }
])
</script>

<template>
  <main>
    <section class="mx-auto max-w-6xl px-5 pt-28 lg:px-0 lg:pt-32">
      <p class="text-sm font-semibold text-yeying-blue">{{ t('page_blog_kicker') }}</p>
      <h1 class="mt-3 font-display text-4xl font-semibold leading-tight text-yeying-ink sm:text-5xl">
        {{ t('page_blog_title') }}
      </h1>
      <p class="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
        {{ t('page_blog_desc') }}
      </p>

      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <article v-for="post in posts" :key="post.title" class="surface-ring rounded-lg bg-white/90 p-6">
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <CalendarDaysIcon class="h-5 w-5" />
            <time :datetime="post.date">{{ post.date }}</time>
          </div>
          <h2 class="mt-5 font-display text-xl font-semibold text-yeying-ink">{{ post.title }}</h2>
          <p class="mt-3 text-base leading-7 text-gray-700">{{ post.desc }}</p>
        </article>
      </div>
    </section>
    <Footer />
  </main>
</template>
