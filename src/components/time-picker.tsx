'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { Clock } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectValue } from './ui/select'
import { SelectTrigger } from '@radix-ui/react-select'
import { useSystemConfig } from '@/hooks/use-system-config'

const allTimeZones = Intl.supportedValuesOf('timeZone')

export function TimePicker() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedTimeZone, setSelectedTimeZone] = useState('')

  const { handleSetSystemConfig } = useSystemConfig()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSelectedTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getTimeInZone = (timeZone: string) => {
    try {
      const zonedTime = formatInTimeZone(currentTime, timeZone, 'HH:mm:ss')
      return zonedTime
    } catch {
      return format(currentTime, 'HH:mm:ss')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Clock className="h-4 w-4" />
          <span>{getTimeInZone(selectedTimeZone)}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>选择时间和时区</DialogTitle>
        <DialogDescription>选择一个时区以查看当前时间。</DialogDescription>
        <div className="space-y-4">
          <Input
            type="text"
            value={getTimeInZone(selectedTimeZone)}
            readOnly
            className="w-full"
          />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="选择时区" />
            </SelectTrigger>
            <SelectContent>
              {allTimeZones.map((zone) => (
                <SelectItem
                  key={zone}
                  value={zone}
                  onClick={() => handleSetSystemConfig({ timeZone: zone })}
                >
                  {zone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <DialogClose asChild>
          <Button className="mt-4">确定</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
