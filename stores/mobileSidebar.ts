export const useMobileSidebarState = defineStore('mobileSidebar', () => {
  const isOpen = ref(false)

  function setClose() {
    isOpen.value = false
  }

  function setOpen() {
    isOpen.value = true
  }

  return {
    isOpen,
    setClose,
    setOpen,
  }
})
