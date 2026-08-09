<script lang="ts" setup>
import { getLocaleRef } from '@/lang/locale'

const locale = getLocaleRef()
</script>

<template>
  <RouterView :key="locale" />
</template>
