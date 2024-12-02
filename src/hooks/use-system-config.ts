import { atom, useAtom } from 'jotai'

interface SystemConfig {
  sidebarPosition: 'left' | 'right'
  timeZone: string
}

const systemConfigAtom = atom<SystemConfig>({
  sidebarPosition: 'left',
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
})

export const useSystemConfig = () => {
  const [systemConfig, setSystemConfig] = useAtom(systemConfigAtom)

  const handleSetSystemConfig = (config: Partial<SystemConfig>) => {
    setSystemConfig((prev) => ({ ...prev, ...config }))
  }

  return { systemConfig, handleSetSystemConfig }
}
