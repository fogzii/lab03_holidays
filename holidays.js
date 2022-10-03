// TODO: Add more imports here.
import promptSync from 'prompt-sync';
import { format } from 'date-fns';
import { getValentinesDay, getEaster, getChristmas } from 'date-fns-holiday-us';

/**
 * Given a starting year and an ending year:
 * - If `start` is not at least 325, return an empty array.
 * - If `start` is strictly greater than `end`, return an empty array.
 * - Otherwise, return an array of objects containing information about the valentine,
 * easter and christmas date strings in the given (inclusive) range.
 *
 * An example format for christmas in 1970 is
 * - Friday, 25.12.1970
 *
 * @param {number} start - starting year, inclusive
 * @param {number} end - ending year, inclusive
 * @returns {Array<{valentinesDay: string, easter: string, christmas: string}>}
 */
export function holidaysInRange(start, end) {
  if (start < 325 || start > end) {
    return [];
  }

  const arr = [];

  for (let date = start; date <= end; date++) {
    arr.push(
      {
        valentinesDay: format(getValentinesDay(date), 'EEEE, dd.MM.yyyy'),
        easter: format(getEaster(date), 'EEEE, dd.MM.yyyy'),
        christmas: format(getChristmas(date), 'EEEE, dd.MM.yyyy'),
      }
    );
  }

  return arr;
}

/**
 * TODO: Implement the two lines in the "main" function below.
 * This function is imported and called in main.js
 */
export function main() {
  let prompt = promptSync();
  
  let start = prompt('Enter start: ');
  let end = prompt('Enter end: ');

  start = parseInt(start);
  end = parseInt(end);

  const holidays = holidaysInRange(start, end);
  console.log(holidays);
}
