<script lang="ts" setup>
import { computed, ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import Footer from '@/components/Footer.vue'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
const keyword = ref('')

const solutions = computed(() => [
  {
    code: 'slider',
    title: t('solution_slider_title'),
    desc: t('solution_slider_desc'),
    plans: [
      {
        name: '云服务定制版本',
        price: '¥4800',
        items: [
          ['可用实例数', '5个'],
          ['并发能力', '100 次/秒'],
          ['验证量', '3500次/小时'],
          ['底图标识', '无品牌标识']
        ]
      },
      {
        name: '私有化定制版本',
        price: '¥9600',
        items: [
          ['可用实例数', '5个'],
          ['并发能力', '100 次/秒'],
          ['验证量', '3500次/小时'],
          ['底图标识', '无品牌标识'],
          ['夜莺品牌标识', '可选']
        ]
      },
      {
        name: '私有化企业版本',
        price: '¥12800',
        items: [
          ['可用实例数', '10个'],
          ['并发能力', '300 次/秒'],
          ['验证量', '12000次/小时'],
          ['底图标识', '支持自定义'],
          ['夜莺品牌标识', '可移除']
        ]
      }
    ]
  },
  {
    code: 'behavior',
    title: t('solution_behavior_title'),
    desc: t('solution_behavior_desc'),
    plans: [
      {
        name: '标准云服务版本',
        price: '¥6800',
        items: [
          ['可用实例数', '5个'],
          ['并发能力', '150 次/秒'],
          ['验证量', '5000次/小时'],
          ['策略模板', '标准内置']
        ]
      },
      {
        name: '私有化增强版本',
        price: '¥16800',
        items: [
          ['可用实例数', '不限'],
          ['并发能力', '500 次/秒'],
          ['验证量', '按部署规模扩展'],
          ['策略模板', '支持定制'],
          ['部署方式', '私有化交付']
        ]
      }
    ]
  }
])

const filteredSolutions = computed(() => {
  const value = keyword.value.trim().toLowerCase()
  if (!value) {
    return solutions.value
  }
  return solutions.value.filter((item) => `${item.title} ${item.desc}`.toLowerCase().includes(value))
})
</script>

<template>
  <main>
    <section class="mx-auto max-w-6xl px-5 pt-28 lg:px-0 lg:pt-32">
      <p class="text-sm font-semibold text-yeying-blue">{{ t('page_solution_kicker') }}</p>
      <div class="mt-3 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
        <div>
          <h1 class="font-display text-4xl font-semibold leading-tight text-yeying-ink sm:text-5xl">
            {{ t('page_solution_title') }}
          </h1>
          <p class="mt-5 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            {{ t('page_solution_desc') }}
          </p>
        </div>
        <label class="surface-ring flex items-center gap-3 rounded-lg bg-white/88 px-4 py-3">
          <span class="sr-only">{{ t('page_solution_search') }}</span>
          <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
          <input
            v-model="keyword"
            class="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            :placeholder="t('page_solution_search_placeholder')"
          />
        </label>
      </div>

      <div class="mt-10 space-y-6">
        <article v-for="solution in filteredSolutions" :key="solution.code" class="surface-ring rounded-lg bg-white/90 p-6 backdrop-blur">
          <div class="max-w-3xl">
            <h2 class="font-display text-2xl font-semibold text-yeying-ink">{{ solution.title }}</h2>
            <p class="mt-3 text-base leading-7 text-gray-700">{{ solution.desc }}</p>
          </div>
          <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="plan in solution.plans" :key="plan.name" class="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 class="font-display text-lg font-semibold text-yeying-ink">{{ plan.name }}</h3>
              <p class="mt-2 text-3xl font-semibold text-yeying-blue">{{ plan.price }}</p>
              <dl class="mt-5 space-y-3 border-t border-gray-200 pt-4 text-sm">
                <div v-for="item in plan.items" :key="item[0]" class="flex justify-between gap-4">
                  <dt class="text-gray-500">{{ item[0] }}</dt>
                  <dd class="font-medium text-gray-900">{{ item[1] }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
        <div v-if="!filteredSolutions.length" class="surface-ring rounded-lg bg-white/90 p-10 text-center text-gray-600">
          {{ t('page_solution_empty') }}
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>
