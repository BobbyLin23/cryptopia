export const useLanguageState = defineStore('language', () => {
  const language = ref('en')

  const setLanguage = (lang: string) => {
    language.value = lang
  }

  return {
    language,
    setLanguage,
  }
})
