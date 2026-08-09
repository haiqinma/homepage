<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowRightIcon, BookOpenIcon } from '@heroicons/vue/24/outline'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
const communityPortalUrl = computed(() => import.meta.env.VITE_YEYING_COMMUNITY_PORTAL_URL || '/market')
const metricItems = computed(() => [
  t('home_metric_apps'),
  t('home_metric_identity'),
  t('home_metric_mpc'),
  t('home_metric_custody')
])

function openCommunityPortal() {
  window.location.assign(communityPortalUrl.value)
}
</script>

<template>
  <section class="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
    <div class="max-w-4xl">
      <p class="mb-5 inline-flex rounded-full border border-yeying-blue/20 bg-white/72 px-4 py-2 text-sm font-semibold text-yeying-blue shadow-sm">
        {{ t('home_hero_kicker') }}
      </p>
      <h1 class="font-display text-4xl font-semibold leading-tight text-yeying-ink sm:text-6xl">
        {{ t('home_hero_title_prefix') }}
      </h1>
      <p class="mt-7 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
        {{ t('home_hero_description') }}
      </p>
      <div class="mt-9 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          class="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-yeying-blue px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
          @click="openCommunityPortal"
        >
          {{ t('home_open_node') }}
          <ArrowRightIcon class="h-5 w-5" />
        </button>
        <RouterLink
          class="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/82 px-5 py-3 text-base font-semibold text-yeying-ink shadow-sm transition hover:border-yeying-blue/40 hover:text-yeying-blue"
          to="/docs"
        >
          <BookOpenIcon class="h-5 w-5" />
          {{ t('home_read_docs') }}
        </RouterLink>
      </div>
    </div>

    <aside class="surface-ring rounded-lg bg-white/88 p-5 backdrop-blur">
      <div class="grid grid-cols-2 gap-3">
        <div v-for="item in metricItems" :key="item" class="rounded-lg border border-gray-100 bg-gray-50 px-4 py-5">
          <div class="h-1.5 w-8 rounded-full bg-yeying-blue" />
          <p class="mt-4 text-sm font-semibold text-gray-900">{{ item }}</p>
        </div>
      </div>
    </aside>
  </section>
</template>
