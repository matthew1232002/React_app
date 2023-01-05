import clsx from 'clsx';
import untypedItems from './items.json';
import untypedRanges from './ranges.json';
import { colorToClassName, dataSample, Range } from './utils';
import { Item } from '~/types';

const items = untypedItems as Item[];
const ranges = untypedRanges as Range[];

const transform = (items: Item[]) => {
  const transformedRange: Range[] = [];
  let startedItem = items[0];

  for (let i = 0; i < items.length; i ++) {
    if (i !== items.length -1 && items[i].color !== items[i+1].color) {
      transformedRange.push({color: items[i].color, start: startedItem.date, end: items[i].date})
      startedItem = items[i+1];
    } else if (i === items.length - 1)  transformedRange.push({color: items[i].color, start: startedItem.date, end: items[i].date})
  }

  return transformedRange;
}

const RangesView = ({ ranges }: { ranges: Range[] }) => (
  <ul className="space-y-4">
    {ranges.map((item) => (
      <li
        key={item.start + item.end}
        className={clsx(
          'h-10 flex items-center justify-between px-5 rounded',
          colorToClassName[item.color],
        )}
      >
        <span>{item.start}</span>
        <span>{item.end}</span>
      </li>
    ))}
  </ul>
);

export const Ranges = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 grid grid-cols-3 gap-8">
      <div className="col-span-3">
        <h2 className="text-2xl mb-4">Convert adjacent items of same type into ranges</h2>
        <p>The data of individual item should look like this: </p>
        <pre>{JSON.stringify(dataSample, null, 2)}</pre>
      </div>

      <h3 className="text-xl font-bold row-start-2">Discretes</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.date}
            className={clsx('h-10 flex items-center px-5 rounded', colorToClassName[item.color])}
          >
            {item.date}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold row-start-2">Ranges example</h3>
      <RangesView ranges={ranges} />

      <h3 className="text-xl font-bold row-start-2">Ranges implementation</h3>
      <RangesView ranges={transform(items)} />
    </div>
  );
};
