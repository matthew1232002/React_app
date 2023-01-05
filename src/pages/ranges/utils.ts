import { addDays, chooseRandomly, formatDate, range } from '~/utils';
import { ColorsType } from '~/types';

const baseDate = new Date('2022-01-01');

const colors: ColorsType[] = [ColorsType.red, ColorsType.green, ColorsType.blue];

export const items = range(40, (index) => ({
  date: formatDate(addDays(baseDate, index)),
  color: chooseRandomly(colors),
}));

export const dataSample = {
  start: '2022-01-01',
  end: '2022-01-03',
  color: 'red',
};

export interface Range {
  start: string;
  end: string;
  color: ColorsType;
}

export const colorToClassName: Record<ColorsType, string> = {
  red: 'bg-red-300 text-red-900',
  green: 'bg-green-300 text-green-900',
  blue: 'bg-blue-300 text-blue-900',
};

