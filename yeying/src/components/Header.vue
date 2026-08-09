<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import logoUrl from '@/assets/img/logo.svg'
import Language from '@/components/Language.vue'
import { useTranslate } from '@/lang/messages'

const t = useTranslate()
const menuDrawerOpen = ref(false)
const navigation = computed(() => [
  { title: t('h_solution'), to: '/solution' },
  { title: t('h_doc'), to: '/docs' },
  { title: t('h_blog'), to: '/blog' },
  { title: t('h_about'), to: '/about' }
])

function closeMenu() {
  menuDrawerOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white/78 backdrop-blur-xl">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-0" aria-label="Global navigation">
      <RouterLink to="/" class="focus-ring flex items-center gap-3 rounded-lg" @click="closeMenu">
        <img class="h-8 w-auto" :src="logoUrl" alt="YeYing" />
        <span class="sr-only">{{ t('h_top') }}</span>
      </RouterLink>

      <div class="hidden items-center gap-8 text-sm font-medium text-gray-700 lg:flex">
        <RouterLink
          v-for="item in navigation"
          :key="item.title"
          class="focus-ring rounded-lg px-1 py-2 hover:text-yeying-blue"
          active-class="text-yeying-blue"
          :to="item.to"
        >
          {{ item.title }}
        </RouterLink>
      </div>

      <div class="hidden items-center gap-4 lg:flex">
        <a class="focus-ring rounded-lg text-sm font-medium text-gray-700 hover:text-yeying-blue" href="mailto:yeying.community@gmail.com">
          {{ t('h_contact') }}
        </a>
        <Language />
      </div>

      <button type="button" class="focus-ring rounded-lg p-2 text-gray-700 lg:hidden" @click="menuDrawerOpen = true">
        <span class="sr-only">Menu</span>
        <Bars3Icon class="h-6 w-6" />
      </button>
    </nav>

    <Dialog class="lg:hidden" :open="menuDrawerOpen" @close="menuDrawerOpen = false">
      <div class="fixed inset-0 z-40 bg-black/20" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-xl">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="focus-ring rounded-lg" @click="closeMenu">
            <img class="h-8 w-auto" :src="logoUrl" alt="YeYing" />
          </RouterLink>
          <button type="button" class="focus-ring rounded-lg p-2 text-gray-700" @click="menuDrawerOpen = false">
            <span class="sr-only">Close</span>
            <XMarkIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="mt-8 space-y-2">
          <RouterLink
            v-for="item in navigation"
            :key="item.title"
            class="focus-ring block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
            active-class="text-yeying-blue"
            :to="item.to"
            @click="closeMenu"
          >
            {{ item.title }}
          </RouterLink>
          <a class="focus-ring block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50" href="mailto:yeying.community@gmail.com" @click="closeMenu">
            {{ t('h_contact') }}
          </a>
        </div>
        <div class="mt-8 border-t border-gray-100 pt-6">
          <Language />
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
