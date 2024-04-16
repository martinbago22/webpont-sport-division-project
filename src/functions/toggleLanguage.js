import { ref } from 'vue'

export default function useToggleLanguage() {
  const currentLanguage = ref('en')

  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'hu' : 'en'
  }

  return {
    currentLanguage,
    toggleLanguage
  }
}
