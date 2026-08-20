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
      <div class="mt-8 grid grid-cols-[auto_minmax(2rem,1fr)_auto_minmax(2rem,1fr)_auto] items-center overflow-x-auto border-t border-gray-200 pt-6 text-sm text-gray-700 whitespace-nowrap">
        <div class="flex items-center gap-x-4">
          <a class="inline-flex items-center gap-1" href="https://beian.mps.gov.cn/#/query/webSearch?code=33010902004112" target="_blank" rel="noreferrer">
            <img class="h-4 w-4" src="/images/police-icon.png" alt="" aria-hidden="true" />
            <span>{{ t('footer_public_security_record') }}</span>
          </a>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">{{ t('footer_icp_record') }}</a>
        </div>
        <span class="col-start-3">
          <a href="https://wwww.tidukongjian.com" target="_blank" rel="noreferrer" class="font-medium hover:text-yeying-blue">{{ t('footer_operator_name') }}</a>
          {{ t('footer_operator_support') }}
        </span>
        <span class="col-start-5 text-right">{{ t('footer_copyright') }}</span>
      </div>
    </div>
  </footer>
</template>
