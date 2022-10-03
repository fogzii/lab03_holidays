import { holidaysInRange } from './holidays';

test('Invalid start', () => {
  expect(holidaysInRange(324, 1972)).toStrictEqual([]);
});

test('Invalid range', () => {
  expect(holidaysInRange(1972, 324)).toStrictEqual([]);
});

test('General tests', () => {
  expect(holidaysInRange(1970, 1972)).toStrictEqual([
    {
      valentinesDay: 'Saturday, 14.02.1970',
      easter: 'Sunday, 29.03.1970',
      christmas: 'Friday, 25.12.1970',
    },
    {
      valentinesDay: 'Sunday, 14.02.1971',
      easter: 'Sunday, 11.04.1971',
      christmas: 'Saturday, 25.12.1971',
    },
    {
      valentinesDay: 'Monday, 14.02.1972',
      easter: 'Sunday, 02.04.1972',
      christmas: 'Monday, 25.12.1972',
    }
  ]);
});

test('0 year difference', () => {
  expect(holidaysInRange(1970, 1970)).toStrictEqual([
    {
      valentinesDay: 'Saturday, 14.02.1970',
      easter: 'Sunday, 29.03.1970',
      christmas: 'Friday, 25.12.1970',
    }
  ]);
});