<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import Footer from '@/components/Footer.vue'

type Browser = 'chrome' | 'edge'
type GuideStep = { title: string; description: string; details?: string[]; images?: string[]; note?: string }

const loginMethod = ref<'wallet' | 'email' | ''>('')
const browser = ref<Browser | ''>('')
const stepIndex = ref(0)
const completed = ref(false)

const browserSteps = computed<GuideStep[]>(() => browser.value === 'chrome'
  ? [
      { title: '打开 Chrome 应用商店', description: '在 Chrome 中打开 Chrome 应用商店，搜索“夜莺钱包”。', images: ['chrome-search-wallet.png', 'chrome-search-wallet-result.png'] },
      { title: '安装夜莺钱包', description: '打开搜索到的扩展，点击“添加至 Chrome”，并在确认窗口中点击“添加扩展程序”。安装完成后，点击浏览器右上角的扩展程序图标，找到“夜莺钱包”并固定。', images: ['chrome-add.png', 'chrome-add-confirm.png', 'chrome-add-result.png', 'chrome-wallet-pin.png'] }
    ]
  : [
      { title: '打开 Edge 扩展管理', description: '在地址栏打开 edge://extensions/，或从“…”→“扩展”→“管理扩展”进入。', images: ['edge-extersion-win11.png'] },
      { title: '进入 Chrome 应用商店', description: '在扩展管理页打开 Chrome Web Store 链接，然后搜索“夜莺钱包”。', images: ['edge-chrome-store-win11.png', 'edge-chrome-store-search-win11.png', 'edge-chrome-store-search-show-win11.png'] },
      { title: '安装夜莺钱包', description: '点击“获取”，在弹出窗口中点击“添加扩展”，等待安装完成。随后点击浏览器右上角的扩展程序图标，找到“夜莺钱包”并固定。', images: ['edge-chrome-store-get-win11.png', 'edge-extersion-add-win11.png', 'edge-extersion-add-show-win11.png', 'edge-extersion-pin-win11.png'] }
    ])

const walletSteps: GuideStep[] = [
  { title: '创建钱包', description: '打开夜莺钱包，在欢迎页选择“新建钱包”，填写钱包名称并点击“创建钱包”。', images: ['wallet-welcome.png', 'wallet-create.png'] },
  { title: '设置钱包密码', description: '按提示设置符合规则的密码并确认创建。请牢记密码并妥善保管。', images: ['wallet-create-input-passwd.png'], note: '钱包密码保存在本地，请勿发送给任何人。' },
  { title: '验证钱包身份', description: '进入钱包主页，依次打开“⋯”→“设置”，在“钱包身份”区域点击“验证”。', images: ['wallet-show.png', 'wallet-setting.png', 'wallet-verify.png'] },
  { title: '完成邮箱验证', description: '输入姓名和邮箱地址，填写收到的验证码。验证成功后会显示已验证邮箱。', images: ['wallet-email-verify.png', 'wallet-verify-code.png', 'wallet-verify-finished.png'] }
]

const serviceSteps: GuideStep[] = [
  { title: '登录模型服务', description: '使用浏览器打开 https://router.yeying.pub。钱包登录时按提示解锁钱包并确认授权。', images: ['router-login-wallet.png', 'router-login-001.png'] },
  { title: '购买额度', description: '在“开始使用”页选择“去获取”，或打开左侧“额度”菜单。根据需要选择套餐订阅或额度充值。', images: ['router-quota-001.png', 'router-quota-002.png'] },
  { title: '查看额度', description: '在“我的”→“额度”查看余额，也可以在“我的”→“支付记录”查看购买记录。', images: ['router-quota-003.png'] },
  { title: '创建令牌', description: '打开“我的”→“令牌”，点击“新增令牌”，填写名称并选择模型范围。通常可保留默认配置。', images: ['router-license-001.png', 'router-license-002.png', 'router-license-003.png'] },
  { title: '保存令牌', description: '确认创建后立即妥善保存令牌。令牌具有调用权限，请勿公开或提交到代码仓库。', images: ['router-license-004.png', 'router-license-005.png', 'router-license-006.png'], note: '如令牌泄露，请及时禁用或删除并重新创建。' },
  { title: '配置客户端', description: '在模型服务页面右上角打开“…”→“客户端工具使用手册”，选择所用客户端并按页面说明配置。', images: ['router-client-001.png', 'router-client-002.png'] }
]

const steps = computed<GuideStep[]>(() => {
  if (loginMethod.value === 'email') {
    return [{ title: '邮箱注册/登录', description: '邮箱注册和登录的具体操作说明正在整理。', note: '操作待补充' }]
  }
  if (loginMethod.value !== 'wallet' || !browser.value) return []
  return [...browserSteps.value, ...walletSteps, ...serviceSteps,
    { title: '使用中遇到问题', description: '常见问题排查：', details: ['忘记本地密码时，请先确认助记词或私钥可用。', '验证码未收到时，检查邮箱地址和垃圾邮件。', '令牌无法调用时，检查启用状态、模型范围和账户额度。'], note: '联系支持人员时，请勿提供助记词、私钥、本地密码、TOTP 密钥或完整恢复文件。' }
  ]
})

const currentStep = computed(() => steps.value[stepIndex.value])
const progress = computed(() => steps.value.length ? ((stepIndex.value + 1) / steps.value.length) * 100 : 0)
const hasSelection = computed(() => loginMethod.value === 'email' || (loginMethod.value === 'wallet' && browser.value !== ''))

watch([loginMethod, browser], () => {
  stepIndex.value = 0
  completed.value = false
})

function next() {
  if (!hasSelection.value) return
  if (stepIndex.value < steps.value.length - 1) stepIndex.value += 1
  else completed.value = true
}

function previous() {
  if (completed.value) {
    completed.value = false
    return
  }
  if (stepIndex.value > 0) stepIndex.value -= 1
}

function startOver() {
  loginMethod.value = ''
  browser.value = ''
  stepIndex.value = 0
  completed.value = false
}
</script>

<template>
  <main class="pb-20 pt-24 sm:pt-28">
    <section class="mx-auto max-w-5xl px-5">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="text-sm font-semibold text-yeying-blue">夜莺社区 · 使用指导</p>
        </div>
        <button type="button" class="focus-ring rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white" @click="startOver">重新选择</button>
      </div>

      <div class="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside class="space-y-7 border-b border-gray-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
          <fieldset>
            <legend class="mb-3 text-sm font-semibold text-yeying-ink">1. 选择登录方式</legend>
            <div class="space-y-2">
              <label class="flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 text-sm" :class="loginMethod === 'wallet' ? 'border-yeying-blue bg-blue-50/70 text-yeying-ink' : 'border-gray-200 bg-white/70 text-gray-700'">
                <input v-model="loginMethod" class="h-4 w-4 accent-blue-600" type="radio" value="wallet" />
                <span>钱包登录</span>
              </label>
              <label class="flex cursor-not-allowed items-center gap-3 rounded-md border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-400" aria-disabled="true">
                <input class="h-4 w-4 accent-blue-600" type="radio" disabled />
                <span>邮箱注册/登录[待补充]</span>
              </label>
            </div>
          </fieldset>

          <fieldset v-if="loginMethod === 'wallet'">
            <legend class="mb-3 text-sm font-semibold text-yeying-ink">2. 选择浏览器</legend>
            <div class="space-y-2">
              <label class="flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 text-sm" :class="browser === 'chrome' ? 'border-yeying-blue bg-blue-50/70 text-yeying-ink' : 'border-gray-200 bg-white/70 text-gray-700'">
                <input v-model="browser" class="h-4 w-4 accent-blue-600" type="radio" value="chrome" />
                <span>Google Chrome</span>
              </label>
              <label class="flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 text-sm" :class="browser === 'edge' ? 'border-yeying-blue bg-blue-50/70 text-yeying-ink' : 'border-gray-200 bg-white/70 text-gray-700'">
                <input v-model="browser" class="h-4 w-4 accent-blue-600" type="radio" value="edge" />
                <span>Microsoft Edge</span>
              </label>
            </div>
          </fieldset>

          <div v-if="steps.length" class="border-t border-gray-200 pt-5">
            <div class="mb-2 flex justify-between text-xs text-gray-500"><span>当前进度</span><span>{{ completed ? steps.length : stepIndex + 1 }} / {{ steps.length }}</span></div>
            <div class="h-1.5 overflow-hidden rounded-full bg-gray-200"><div class="h-full rounded-full bg-yeying-blue transition-all" :style="{ width: completed ? '100%' : `${progress}%` }" /></div>
            <ol class="mt-4 max-h-80 space-y-1 overflow-y-auto">
              <li v-for="(step, index) in steps" :key="step.title">
                <button type="button" class="focus-ring flex w-full items-start gap-2 rounded px-2 py-1.5 text-left text-xs leading-5 hover:bg-gray-100" :class="index === stepIndex && !completed ? 'bg-blue-50 font-semibold text-yeying-blue' : 'text-gray-500'" @click="stepIndex = index; completed = false">
                  <span class="w-5 shrink-0 tabular-nums">{{ index + 1 }}.</span><span>{{ step.title }}</span>
                </button>
              </li>
            </ol>
          </div>
        </aside>

        <section class="min-w-0">
          <div v-if="completed" class="flex min-h-[420px] flex-col items-center justify-center px-4 text-center">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon class="h-7 w-7" /></div>
            <h2 class="mt-5 text-2xl font-semibold text-yeying-ink">操作指南已完成</h2>
            <p class="mt-2 text-sm text-gray-600">现在可以进入夜莺社区门户。</p>
            <a class="mt-6 inline-flex min-h-11 items-center rounded-md bg-yeying-blue px-5 text-sm font-semibold text-white hover:bg-blue-700" href="/market">进入社区门户</a>
          </div>

          <div v-else-if="currentStep" class="min-h-[420px]">
            <div class="flex items-start gap-3">
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-yeying-blue">{{ stepIndex + 1 }}</span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">操作步骤</p>
                <h2 class="mt-1 text-2xl font-semibold text-yeying-ink">{{ currentStep.title }}</h2>
              </div>
            </div>
            <p class="mt-5 max-w-3xl text-base leading-7 text-gray-700">
              <template v-if="currentStep.title === '登录模型服务'">使用浏览器打开 <a class="font-medium text-yeying-blue underline underline-offset-2 hover:text-blue-700" href="https://router.yeying.pub" target="_blank" rel="noreferrer">https://router.yeying.pub</a>。钱包登录时按提示解锁钱包并确认授权。</template>
              <template v-else>{{ currentStep.description }}</template>
            </p>
            <ul v-if="currentStep.details" class="mt-3 space-y-2 text-base leading-7 text-gray-700">
              <li v-for="detail in currentStep.details" :key="detail">{{ detail }}</li>
            </ul>
            <div v-if="currentStep.note" class="mt-5 flex gap-3 border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
              <ExclamationTriangleIcon class="mt-0.5 h-5 w-5 shrink-0" /><p>{{ currentStep.note }}</p>
            </div>
            <div v-if="currentStep.images?.length" class="mt-7 grid gap-5">
              <figure v-for="image in currentStep.images" :key="image" class="overflow-hidden rounded-md border border-gray-200 bg-white">
                <img class="mx-auto max-h-[520px] w-full object-contain" :src="`/images/usage/${image}`" :alt="currentStep.title" loading="lazy" />
              </figure>
            </div>
            <div v-if="!hasSelection" class="mt-7 rounded-md border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-600">请先完成左侧选择。</div>
          </div>
          <div v-else class="min-h-[420px]">
            <h2 class="font-display text-3xl font-semibold leading-tight text-yeying-ink sm:text-4xl">开启AI之旅</h2>
            <div class="mt-5 max-w-3xl text-sm leading-6 text-gray-700">
              <p>在使用本社区产品之前，请确认您的环境满足以下条件：</p>
              <ul class="mt-2 list-disc space-y-1 pl-5">
                <li><strong>操作系统：</strong>Windows 10(22H2及以上版本) 或 Windows 11； Ubuntu DeskTop(22.04.5 LTS 及以上版本)</li>
                <li><strong>浏览器：</strong>Edge(134.0.3124.83及以上版本) 或者 Chrome(155.0.8059.84及以上版本)</li>
                <li><strong>网络：</strong>能够访问<a class="font-medium text-yeying-blue underline underline-offset-2 hover:text-blue-700" href="https://chromewebstore.google.com/category/extensions" target="_blank" rel="noreferrer">Chrome 应用商店</a></li>
              </ul>
            </div>
            <p class="mt-5 text-base leading-7 text-gray-600">请根据使用环境进行选择。</p>
          </div>

          <div v-if="steps.length && !completed" class="mt-8 flex items-center justify-between border-t border-gray-200 pt-5">
            <button type="button" class="focus-ring inline-flex min-h-10 items-center gap-1 rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40" :disabled="stepIndex === 0" @click="previous"><ChevronLeftIcon class="h-4 w-4" />上一步</button>
            <RouterLink v-if="stepIndex === steps.length - 1" class="focus-ring inline-flex min-h-10 items-center gap-1 rounded-md bg-yeying-blue px-4 text-sm font-semibold text-white hover:bg-blue-700" to="/">返回主页</RouterLink>
            <button v-else type="button" class="focus-ring inline-flex min-h-10 items-center gap-1 rounded-md bg-yeying-blue px-4 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40" :disabled="!hasSelection" @click="next">下一步<ChevronRightIcon class="h-4 w-4" /></button>
          </div>
        </section>
      </div>
    </section>
    <Footer />
  </main>
</template>
