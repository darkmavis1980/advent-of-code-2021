import { fileToArray } from './lib/utils.mjs';

const findCommon = (list, position, bitToFind = '1') => {
  let ones = 0;
  for (let i = 0; i < list.length; i++) {
    const binary = list[i];
    const bit = binary.slice(position, position +1);
    if (bit === bitToFind) {
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

const solution2 = () => {
  const bits = fileToArray('./assetts/day3.txt');
  const binaryLength = bits[0].length;
  let oxygenList = [...bits];
  let co2List = [...bits];
  for (let pos = 0; pos < binaryLength; pos++) {
    // Find oxygen
    const ones = findCommon(oxygenList, pos);
    const commonBit = (ones >= oxygenList.length / 2) ? '1' : '0';
    if (oxygenList.length > 1) {
      oxygenList = oxygenList.filter(item => item[pos] === commonBit);
    }
    // Finx CO2
    const zeroes = findCommon(co2List, pos, '0');
    const leastCommonBit = (zeroes <= co2List.length / 2) ? '0' : '1';
    if (co2List.length > 1) {
      co2List = co2List.filter(item => item[pos] === leastCommonBit);
    }
  }

  const oxygen = parseInt(oxygenList[0],2);
  const co2 = parseInt(co2List[0],2);
  const lifeSupport = oxygen * co2;
  console.log(`Life Support value: ${lifeSupport}`);
}

// solution1();
solution2();