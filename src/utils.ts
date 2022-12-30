/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { ColorsType, Item } from '~/types';

export const useRenderHighlight = (className: string) => {
  const ref = useRef<HTMLElement>(null);

  if (ref.current) {
    ref.current.classList.add(className);
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove(className);
      }
    }, 200);
  }

  return ref;
};

export const range = (n: number, fn: (n: number) => Item): Item[] => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fn(i + 1));
  }
  return result;
};

export const chooseRandomly = (items: ColorsType[]) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const addDays = (date: Date, amount: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

export const formatDate = (date: Date) => date.toISOString().split('T')[0];
