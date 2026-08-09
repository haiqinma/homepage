<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ensureDefaultLocale, getLocaleRef, setLocale } from '@/lang/locale'

ensureDefaultLocale()

const locale = getLocaleRef()
const menuList = ref([
  { title: '中文', code: 'zh-CN' },
  { title: 'English', code: 'en-US' }
])
const currentLabel = computed(() => (locale.value === 'en-US' ? 'EN' : '中文'))
const altLabel = computed(() => (locale.value === 'en-US' ? '中文' : 'EN'))

function changeLang(code: string) {
  setLocale(code)
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="lang-trigger focus-ring" :aria-label="currentLabel">
      <span class="lang-trigger-text">{{ currentLabel }}</span>
      <span class="lang-trigger-sep">/</span>
      <span class="lang-trigger-alt">{{ altLabel }}</span>
    </MenuButton>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <MenuItems class="absolute right-0 z-20 mt-2 w-28 origin-top-right rounded-lg bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
        <MenuItem v-for="item in menuList" :key="item.code" v-slot="{ active }">
          <button
            type="button"
            class="block w-full px-4 py-2 text-left text-sm"
            :class="active ? 'bg-gray-100 text-gray-950' : 'text-gray-700'"
            @click="changeLang(item.code)"
          >
            {{ item.title }}
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.lang-trigger {
  height: 32px;
  padding: 0 10px;
  border: 1px solid rgba(21, 28, 44, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.82);
  color: rgba(21, 28, 44, 0.76);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-trigger:hover {
  border-color: rgba(21, 28, 44, 0.28);
  color: rgba(21, 28, 44, 0.94);
}

.lang-trigger-text {
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
}

.lang-trigger-sep,
.lang-trigger-alt {
  font-size: 12px;
  line-height: 1;
  color: rgba(21, 28, 44, 0.45);
}
</style>
