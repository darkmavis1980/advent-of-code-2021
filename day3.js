import { fileToArray } from './lib/utils.mjs';

const findCommon = (list, position) => {
  let ones = 0;
  for (let i = 0; i < list.length; i++) {
    const binary = list[i];
    const bit = binary.slice(position, position +1);
    if (bit === '1') {
      ones++;
    }
  }
  return ones;
}

const reverseBinary = binary => {
  const arr = binary.split('');
  let reversed = [];
  for (let i in arr) {
    arr[i] === '0' ? reversed.push('1') : reversed.push('0');
  }
  return reversed.join('');
}

const solution1 = () => {
  const bits = fileToArray('./assetts/day3.txt');
  const binaryLength = bits[0].length;
  const commonBits = [];
  for (let i = 0; i < binaryLength; i++) {
    const ones = findCommon(bits, i);
    (ones > bits.length / 2) ? commonBits[i] = '1' : commonBits[i] = '0';
  }
  const gammaBinary = commonBits.join('');
  const gamma = parseInt(gammaBinary,2);
  const epsylonBinary = reverseBinary(gammaBinary);
  const epsylon = parseInt(epsylonBinary, 2);
  const power = gamma * epsylon;
  console.log(`Gamma: ${gamma}, Epsylon: ${epsylon}`);
  console.log(`Solution: ${power}`);
}

solution1();