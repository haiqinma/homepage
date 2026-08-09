<script lang="ts" setup>
import { computed, type Component } from 'vue'
import {
  BellAlertIcon,
  CubeTransparentIcon,
  IdentificationIcon,
  KeyIcon,
  RectangleGroupIcon,
  ServerStackIcon
} from '@heroicons/vue/24/outline'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
const capabilities = computed<Array<{ title: string; desc: string; icon: Component; accent: string }>>(() => [
  {
    title: t('home_advantage_apps_title'),
    desc: t('home_advantage_apps_desc'),
    icon: RectangleGroupIcon,
    accent: 'text-yeying-blue bg-blue-50'
  },
  {
    title: t('home_advantage_identity_title'),
    desc: t('home_advantage_identity_desc'),
    icon: IdentificationIcon,
    accent: 'text-yeying-mint bg-emerald-50'
  },
  {
    title: t('home_advantage_notice_title'),
    desc: t('home_advantage_notice_desc'),
    icon: BellAlertIcon,
    accent: 'text-yeying-amber bg-amber-50'
  },
  {
    title: t('home_advantage_mpc_title'),
    desc: t('home_advantage_mpc_desc'),
    icon: KeyIcon,
    accent: 'text-rose-700 bg-rose-50'
  }
])
</script>

<template>
  <section id="capabilities" class="pt-24 lg:pt-32">
    <div class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p class="text-sm font-semibold text-yeying-blue">{{ t('h_capabilities') }}</p>
        <h2 class="mt-3 font-display text-3xl font-semibold text-yeying-ink sm:text-4xl">
          {{ t('home_advantages_title') }}
        </h2>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <article v-for="feature in capabilities" :key="feature.title" class="surface-ring rounded-lg bg-white/88 p-6 backdrop-blur">
        <div :class="['mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg', feature.accent]">
          <component :is="feature.icon" class="h-6 w-6" />
        </div>
        <h3 class="font-display text-xl font-semibold text-yeying-ink">{{ feature.title }}</h3>
        <p class="mt-3 text-base leading-7 text-gray-700">{{ feature.desc }}</p>
      </article>
    </div>
  </section>

  <section id="architecture" class="pt-24 lg:pt-32">
    <div class="surface-ring overflow-hidden rounded-lg bg-white/90 backdrop-blur">
      <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div class="bg-yeying-ink p-8 text-white sm:p-10">
          <p class="text-sm font-semibold text-blue-200">{{ t('h_architecture') }}</p>
          <h2 class="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {{ t('home_architecture_title') }}
          </h2>
          <p class="mt-5 text-base leading-8 text-gray-200">
            {{ t('home_architecture_desc') }}
          </p>
        </div>
        <div class="grid gap-4 p-6 sm:p-8">
          <div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-yeying-blue">
              <CubeTransparentIcon class="h-6 w-6" />
            </div>
            <h3 class="font-display text-xl font-semibold text-yeying-ink">{{ t('home_architecture_homepage') }}</h3>
            <p class="mt-3 text-base leading-7 text-gray-700">{{ t('home_architecture_homepage_desc') }}</p>
          </div>
          <div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-yeying-mint">
              <ServerStackIcon class="h-6 w-6" />
            </div>
            <h3 class="font-display text-xl font-semibold text-yeying-ink">{{ t('home_architecture_node') }}</h3>
            <p class="mt-3 text-base leading-7 text-gray-700">{{ t('home_architecture_node_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
