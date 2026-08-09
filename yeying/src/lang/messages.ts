import zhCNMessages from '@/lang/zh-CN'
import enUSMessages from '@/lang/en-US'
import { getLocaleRef, getStoredLocale, type Locale } from '@/lang/locale'

export const localMessages: Record<Locale, Record<string, string>> = {
  'zh-CN': zhCNMessages,
  'en-US': enUSMessages
}

export function interpolate(message: string, params?: Record<string, unknown>) {
  if (!params) {
    return message
  }
  return message.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = params[key]
    return value === undefined || value === null ? `{${key}}` : String(value)
  })
}

export function translate(key: string, params?: Record<string, unknown>) {
  const locale = getStoredLocale()
  const localMessage =
    localMessages[locale]?.[key] ?? localMessages['zh-CN']?.[key] ?? localMessages['en-US']?.[key]

  if (typeof localMessage === 'string' && localMessage.length > 0) {
    return interpolate(localMessage, params)
  }

  return key
}

export function useTranslate() {
  const locale = getLocaleRef()
  return (key: string, params?: Record<string, unknown>) => {
    locale.value
    return translate(key, params)
  }
}
