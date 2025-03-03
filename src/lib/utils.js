import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

export const scrollToSection = ref => {
  ref.current?.scrollIntoView({ behavior: 'smooth' })
}
