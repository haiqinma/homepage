<script lang="ts" setup>
import logoUrl from '@/assets/img/logo.svg'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
</script>

<template>
  <footer class="mt-20 border-t border-gray-200 bg-white/80">
    <div class="mx-auto max-w-6xl px-5 py-10 lg:px-0">
      <div class="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <img class="h-8 w-auto" :src="logoUrl" alt="YeYing" />
        <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-700">
          <RouterLink class="focus-ring rounded-lg hover:text-yeying-blue" to="/docs">{{ t('h_docs') }}</RouterLink>
          <a class="focus-ring rounded-lg hover:text-yeying-blue" href="https://github.com/yeying-community" target="_blank" rel="noreferrer">GitHub</a>
          <a class="focus-ring rounded-lg hover:text-yeying-blue" :href="`mailto:${t('footer_email')}`">{{ t('footer_email') }}</a>
        </div>
      </div>
      <div class="mt-8 flex flex-col justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
        <div class="flex flex-wrap gap-x-4 gap-y-2">
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=33010902004112" target="_blank" rel="noreferrer">{{ t('footer_public_security_record') }}</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">{{ t('footer_icp_record') }}</a>
        </div>
        <span>{{ t('footer_copyright') }}</span>
      </div>
    </div>
  </footer>
</template>
