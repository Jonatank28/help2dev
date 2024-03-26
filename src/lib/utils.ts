import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export   const  limitedText = (texto: string, limite: number) => {
  if (texto.length > limite) {
    return texto.substring(0, limite) + '...';
  }
  return texto;
}