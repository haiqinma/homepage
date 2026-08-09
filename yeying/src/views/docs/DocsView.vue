<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowTopRightOnSquareIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import Footer from '@/components/Footer.vue'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
const docs = computed(() => [
  { title: t('docs_quickstart_title'), desc: t('docs_quickstart_desc'), href: '/help/quickstart.md' },
  { title: t('docs_auth_title'), desc: t('docs_auth_desc'), href: '/help/auth.md' },
  { title: t('docs_troubleshooting_title'), desc: t('docs_troubleshooting_desc'), href: '/help/troubleshooting.md' },
  { title: t('docs_diagrams_title'), desc: t('docs_diagrams_desc'), href: '/help/diagrams.md' }
])
</script>

<template>
  <main>
    <section class="mx-auto max-w-6xl px-5 pt-28 lg:px-0 lg:pt-32">
      <p class="text-sm font-semibold text-yeying-blue">{{ t('page_docs_kicker') }}</p>
      <h1 class="mt-3 font-display text-4xl font-semibold leading-tight text-yeying-ink sm:text-5xl">
        {{ t('page_docs_title') }}
      </h1>
      <p class="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
        {{ t('page_docs_desc') }}
      </p>

      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <a v-for="item in docs" :key="item.href" class="surface-ring group rounded-lg bg-white/90 p-6 transition hover:-translate-y-0.5 hover:bg-white" :href="item.href" target="_blank" rel="noreferrer">
          <div class="flex items-start justify-between gap-4">
            <div class="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-yeying-blue">
              <DocumentTextIcon class="h-6 w-6" />
            </div>
            <ArrowTopRightOnSquareIcon class="h-5 w-5 text-gray-400 transition group-hover:text-yeying-blue" />
          </div>
          <h2 class="mt-5 font-display text-xl font-semibold text-yeying-ink">{{ item.title }}</h2>
          <p class="mt-3 text-base leading-7 text-gray-700">{{ item.desc }}</p>
        </a>
      </div>
    </section>
    <Footer />
  </main>
</template>
