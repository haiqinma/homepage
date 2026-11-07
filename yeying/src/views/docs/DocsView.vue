<script lang="ts" setup>
import { BookOpenIcon, ChevronRightIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline'
import Footer from '@/components/Footer.vue'

const sections = [
  { title: '社区介绍', description: '了解夜莺社区的愿景、开放方向，以及 Web3 与 AI 应用生态。', icon: GlobeAltIcon, to: '/about', action: '查看社区介绍' },
  { title: '使用指导', description: '从环境准备、钱包安装到模型服务配置，按你的浏览器逐步完成操作。', icon: RocketLaunchIcon, to: '/docs/quickstart', action: '快速开始' },
  { title: '产品文档', description: '查阅应用发布、通行证登录、常见问题和文档图表等产品资料。', icon: BookOpenIcon, to: '/help/quickstart.md', action: '查看产品文档' }
]
</script>

<template>
  <main class="pb-20 pt-24 sm:pt-28">
    <section class="mx-auto max-w-6xl px-5 lg:px-0">
      <p class="text-sm font-semibold text-yeying-blue">夜莺社区 · 文档</p>
      <h1 class="mt-3 font-display text-4xl font-semibold leading-tight text-yeying-ink sm:text-5xl">社区文档</h1>
      <p class="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">从认识社区到开始使用，再到查阅产品资料，在这里找到下一步。</p>

      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <article v-for="section in sections" :key="section.title" class="surface-ring flex min-h-[300px] flex-col rounded-lg bg-white/90 p-7 backdrop-blur">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-yeying-blue">
            <component :is="section.icon" class="h-6 w-6" />
          </div>
          <h2 class="mt-6 font-display text-2xl font-semibold text-yeying-ink">{{ section.title }}</h2>
          <p class="mt-3 flex-1 text-base leading-7 text-gray-700">{{ section.description }}</p>
          <a v-if="section.title !== '产品文档'" class="focus-ring mt-7 inline-flex w-fit items-center gap-1 rounded-md text-sm font-semibold text-yeying-blue hover:text-blue-700" :href="section.to">
            {{ section.action }}
            <ChevronRightIcon class="h-4 w-4" />
          </a>
          <span v-else class="mt-7 inline-flex w-fit cursor-not-allowed items-center gap-1 text-sm font-semibold text-gray-400" aria-disabled="true">
            {{ section.action }}
            <ChevronRightIcon class="h-4 w-4" />
          </span>
        </article>
      </div>
    </section>
    <Footer />
  </main>
</template>
