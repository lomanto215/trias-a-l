import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Menggabungkan class Tailwind; class yang bentrok dimenangkan yang terakhir (konvensi shadcn/ui). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
