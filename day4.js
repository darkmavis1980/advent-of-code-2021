import { fileToList, fileToMatrix, sumArray } from './lib/utils.mjs';

const flipMatrix = matrix => {
  const newMatrix = [];
  for (let column = 0; column < 5; column++) {
    newMatrix[column] = [];
    for (let row = 0; row < 5; row++) {
      newMatrix[column].push(matrix[row][column]);
    }
  }
  return newMatrix;
}

const checkExtractedAgainstRow = (extracted, row) => {
  const bingo = [];
  for (let i in row) {
    if (extracted.includes(row[i])) {
      bingo.push(row[i]);
    }
  }
  if (bingo.length === 5) {
    return true;
  }

  return false;
}

const checkBoardNumbers = (board, numbers) => {
  let found = false;
  // check the rows
  for (let row in board) {
    found = checkExtractedAgainstRow(numbers, board[row]);
    if (found) {
      console.log(`Found in row ${row}`);
    }
  }

  if (found) {
    return found;
  }

  // check the column
  const flippedBoard = flipMatrix(board);
  for (let column in flippedBoard) {
    found = checkExtractedAgainstRow(numbers, flippedBoard[column]);
    if (found) {
      console.log(`Found in column ${column}`);
    }
  }
  
  return found;
}

const findWinningBoard = (boards, numbers) => {
  for (let x in numbers) {
    const currentNumber = numbers[x];
    const extrationList = numbers.slice(0, x);
    if (extrationList.length < 5) {
      continue;
    }
    // for (let i = 0; i < 2; i++) {
    for (let i = 0; i < boards.length ; i++) {  
      // console.log('='.repeat(5), 'new Board', '='.repeat(5));

      const isWinningBoard = checkBoardNumbers(boards[i], extrationList);

      if (isWinningBoard) {
        console.log(`Found on board ${i}, and current number is ${currentNumber}`);
        return {
          board: boards[i],
          extrationList: [...extrationList, currentNumber],
          currentNumber
        };
      }
    }
  }
}

const solution1 = () => {
  const numbers = fileToList('./assetts/day4_numbers.txt');
  const boards = fileToMatrix('./assetts/day4_boards.txt');
  const winningBoard = findWinningBoard(boards, numbers);
  let flatBoard = [];
  winningBoard.board.map(row => {
    flatBoard = [...flatBoard, ...row];
  });
  const unmarkedNumbers = flatBoard.filter(item => !winningBoard.extrationList.includes(item)).map(item => Number(item));
  const sumUnmarkedNumbers = unmarkedNumbers.reduce(sumArray);
  console.log(sumUnmarkedNumbers * winningBoard.currentNumber);
}

solution1();