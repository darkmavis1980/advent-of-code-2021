import { fileToArray, sumArray } from './lib/utils.mjs';

const solution1 = () => {
  const readings  = fileToArray('./assetts/day1.txt');
  let increases = 0;
  let prevReading = Number(readings[0]);
  for (let i = 0; i < readings.length; i++) {
    let reading = Number(readings[i]);
    if (reading > prevReading) {
      increases++;
      console.log(reading, 'increased')
    } else {
      console.log(reading, 'no Increase')
    }
    prevReading = Number(readings[i]);
  }
  console.log(increases);
};

const sumValues = (list, index) => {
  const values = list.slice(index, index + 3);
  return values.reduce(sumArray);
}

const solution2 = () => {
  const readings = fileToArray('./assetts/day1.txt').map(item => Number(item));
  let increases = 0;
  let prevReading = sumValues(readings, 0);
  for (let i = 0; i < readings.length - 2; i++) {
    let reading = sumValues(readings, i);
    if (reading > prevReading) {
      increases++;
      console.log(reading, 'increased')
    } else {
      console.log(reading, 'no Increase')
    }
    prevReading = Number(reading);
  }
  console.log(increases);
}

solution1();
// solution2();