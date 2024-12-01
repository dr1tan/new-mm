import type { ClassValue } from 'clsx'; // Top-level type-only import
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export type ObjectValues<T> = T[keyof T];
