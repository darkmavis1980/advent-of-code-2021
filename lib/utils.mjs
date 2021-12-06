import fs from 'node:fs';

export const readFile = filePath => fs.readFileSync(filePath, 'utf-8');

export const fileToArray = filePath => readFile(filePath).split('\n');

export const sumArray = (prevValue, value) => Number(prevValue + value);

export const fileToList = filePath => readFile(filePath).split(',');

export const fileToMatrix = filePath => {
  const items = readFile(filePath).split('\n');
  const boards = [[]];
  let boardCount = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === '') {
      boardCount++;
      boards[boardCount] = [];
    } else {
      const row = items[i]
        .replace(/  +/g, ' ') // replace double spaces
        .replace(/^\s/, ''); // replace space at the beginning
      boards[boardCount].push(row.split(/\s/));
    }
  }
  return boards;
}