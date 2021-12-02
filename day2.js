import { fileToArray, sumArray } from './lib/utils.mjs';

const getDistance = movements => movements
  .filter(item => item.startsWith('forward'))
  .map(item => Number(item.slice(8)))
  .reduce(sumArray);

const getDepth = movements => {
  let depth = 0;
  movements
    .filter(item => !item.startsWith('forward'))
    .forEach(item => {
      const re = /(down|up)\s([0-9]+)/;
      const match = item.match(re);
      const distance = Number(match[2]);
      match[1] === 'up' ? depth += distance : depth -= distance;
    })
  return depth;
}

const solution1 = () => {
  const movements = fileToArray('./assetts/day2.txt');
  const distance = getDistance(movements);
  console.log(`Distance: ${distance}m`);
  const depth = getDepth(movements);
  console.log(`Depth: ${depth}m`);
  console.log(`Solution: ${distance * depth}`);
}

const solution2 = () => {
  const movements = fileToArray('./assetts/day2.txt');
  let aim = 0;
  let depth = 0;
  let distance = 0;
  movements.forEach(movement => {
    const re = /(down|up|forward)\s([0-9]+)/;
    const match = movement.match(re);
    const aimMovement = Number(match[2]);
    switch(match[1]) {
      case 'up':
        aim -= aimMovement;
        break;
      case 'down':
        aim += aimMovement;
        break;
      case 'forward':
        distance += aimMovement;
        depth += aim * aimMovement;
        break;
    }
  });
  console.log(`Distance: ${distance}m`);
  console.log(`Depth: ${depth}m`);
  console.log(`Solution: ${distance * depth}`);
}

// solution1();
solution2();