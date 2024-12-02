'use client'

import { usePathname } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb'
import { Separator } from './ui/separator'
import { SidebarTrigger } from './ui/sidebar'
import { Fragment, useMemo } from 'react'
import { ModeToggle } from './mode-toggle'
import { TimePicker } from './time-picker'

export const NavigationBar = () => {
  const pathname = usePathname()

  const pageTitles = useMemo(() => {
    const path = pathname.split('/')
    if (!path) return ['Home']
    return path
      .map((item) =>
        item.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()),
      )
      .filter((item) => item !== '')
  }, [pathname])

  return (
    <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {pageTitles.map((title, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/${pageTitles
                      .slice(0, index + 1)
                      .join('/')
                      .toLowerCase()}`}
                  >
                    {title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index !== pageTitles.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mr-2 flex items-center gap-2">
        <TimePicker />
        <ModeToggle />
      </div>
    </header>
  )
}
