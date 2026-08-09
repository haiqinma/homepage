<script lang="ts" setup>
import { computed } from 'vue'
import { CodeBracketSquareIcon, GlobeAltIcon, UsersIcon } from '@heroicons/vue/24/outline'
import Footer from '@/components/Footer.vue'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
const cards = computed(() => [
  { title: t('about_card_community_title'), desc: t('about_card_community_desc'), icon: UsersIcon },
  { title: t('about_card_open_title'), desc: t('about_card_open_desc'), icon: GlobeAltIcon },
  { title: t('about_card_builder_title'), desc: t('about_card_builder_desc'), icon: CodeBracketSquareIcon }
])
</script>

<template>
  <main>
    <section class="mx-auto max-w-6xl px-5 pt-28 lg:px-0 lg:pt-32">
      <p class="text-sm font-semibold text-yeying-blue">{{ t('page_about_kicker') }}</p>
      <div class="mt-3 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
        <div>
          <h1 class="font-display text-4xl font-semibold leading-tight text-yeying-ink sm:text-5xl">
            {{ t('page_about_title') }}
          </h1>
          <p class="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            {{ t('page_about_desc') }}
          </p>
        </div>
        <div class="surface-ring rounded-lg bg-yeying-ink p-7 text-white">
          <p class="text-sm font-semibold text-blue-200">YeYing Community</p>
          <p class="mt-4 text-base leading-8 text-gray-200">
            Web3, AI, identity, data ownership, and community applications.
          </p>
        </div>
      </div>

      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <article v-for="card in cards" :key="card.title" class="surface-ring rounded-lg bg-white/90 p-6">
          <div class="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-yeying-blue">
            <component :is="card.icon" class="h-6 w-6" />
          </div>
          <h2 class="mt-5 font-display text-xl font-semibold text-yeying-ink">{{ card.title }}</h2>
          <p class="mt-3 text-base leading-7 text-gray-700">{{ card.desc }}</p>
        </article>
      </div>
    </section>
    <Footer />
  </main>
</template>
