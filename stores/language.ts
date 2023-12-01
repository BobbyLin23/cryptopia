export const useLanguageState = defineStore('language', () => {
  const language = ref(localStorage.getItem('language') || 'zh')

  const setLanguage = (lang: string) => {
    language.value = lang
    localStorage.setItem('language', lang)
  }

  return {
    language,
    setLanguage,
  }
})
