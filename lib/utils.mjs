import fs from 'node:fs';

export const readFile = filePath => fs.readFileSync(filePath, 'utf-8');

export const fileToArray = filePath => readFile(filePath).split('\n');

export const sumArray = (prevValue, value) => Number(prevValue + value);