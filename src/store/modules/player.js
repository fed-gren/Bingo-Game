const NUM_BINGO_BLOCK = 25;
const playerArr = [1, 2];
const playerMessages = {
  turn: `숫자를 선택하세요.`,
  wait: `상대방의 선택을 기다리는 중입니다.`
};

let selectedNumChangeFlag = false;

const genRandomNum = MAX => {
  return Math.floor(Math.random() * MAX + 1);
};

const BINGO_ARR = ["B", "I", "N", "G", "O"];
const initCells = BINGO_ARR.concat(BINGO_ARR, BINGO_ARR, BINGO_ARR, BINGO_ARR);
const initCheckedArr = [];
for (let i = 0; i < NUM_BINGO_BLOCK; i += 1) {
  initCheckedArr.push(false);
}

//해당 숫자 인덱스 알아내는 함수
const getIndex = (arr, selectedNum) => arr.indexOf(selectedNum);

//선택된 인덱스 true로 수정
const checkSelectedIndex = (arr, index) => {
  if (arr[index] === false) {
    arr[index] = true;
    selectedNumChangeFlag = true;
  } else {
    selectedNumChangeFlag = false;
  }
};

const rowList = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
];

const colList = [
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
];

const crossList = [
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];

const checkRowBingo = (playerNums, checkedArr, bingoArr, selectedNum) => {
  const newRowList = rowList.map(eachList => eachList.map(element => playerNums[element]));

  newRowList.forEach((eachList, index) => {
    if(eachList.includes(selectedNum)) {
      if(eachList.every(el => checkedArr[playerNums.indexOf(el)])) {
        if(!bingoArr.includes(index + 1)) {
          bingoArr.push(index + 1);
        }
      }
    }
  });
};

const checkColBingo = (playerNums, checkedArr, bingoArr, selectedNum) => {
  const newColList = colList.map(eachList => eachList.map(element => playerNums[element]));

  newColList.forEach((eachList, index) => {
    if(eachList.includes(selectedNum)) {
      if(eachList.every(el => checkedArr[playerNums.indexOf(el)])) {
        if(!bingoArr.includes(index + 1)) {
          bingoArr.push(index + 1);
        }
      }
    }
  });
};

const checkCrossBingo = (playerNums, checkedArr, bingoArr, selectedNum) => {
  const newCrossList = crossList.map(eachList => eachList.map(element => playerNums[element]));

  newCrossList.forEach((eachList, index) => {
    if(eachList.includes(selectedNum)) {
      if(eachList.every(el => checkedArr[playerNums.indexOf(el)])) {
        if(!bingoArr.includes(index + 1)) {
          bingoArr.push(index + 1);
        }
      }
    }
  });
};

const updateTotalScore = (rowBingoList=[], colBingoList=[], crossBingoList=[]) => {
  return rowBingoList.length + colBingoList.length + crossBingoList.length;
}

const checkGameOver = (player1TotalScore, player2TotalScore) => {
  if(player1TotalScore < 5 && player2TotalScore < 5) return 0;
  else if(player1TotalScore >= 5 && player2TotalScore < 5) return 1;
  else if(player1TotalScore < 5 && player2TotalScore >= 5) return 2;
  else if(player1TotalScore >= 5 && player2TotalScore >= 5) return 3;
}

// 액션 타입 정의
const NUMS_GENERATOR = "player/NUMS_GENERATOR";
const CHECK_SELECTED_NUM = "player/CHECK_SELECTED_NUM";
const CLOSE_MODAL = "player/CLOSE_MODAL";

// 액션 생성 함수 정의
export const numsGenerator = () => ({ type: NUMS_GENERATOR });
export const getSelectedNum = selectedNum => ({
  type: CHECK_SELECTED_NUM,
  selectedNum,
  playerNumber
});
export const closeModal = () => ({ type: CLOSE_MODAL });

// 초기 상태 정의
const initialState = {
  player1Nums: [...initCells],
  player1Checked: [],
  player2Nums: [...initCells],
  player2Checked: [],
  selectedNum: null,
  now: playerArr[0],
  player1Message: `빙고 한 판 할까요?`,
  player2Message: `빙고 한 판 할까요?`,
  invalidOrder: false,
  player1RowBingoList: [],
  player1ColBingoList: [],
  player1CrossBingoList: [],
  player1TotalScore: 0,
  player2RowBingoList: [],
  player2ColBingoList: [],
  player2CrossBingoList: [],
  player2TotalScore: 0,
  gameOver: 0,
};

// 리듀서 정의
export default (state = initialState, action) => {
  switch (action.type) {
    case NUMS_GENERATOR:
      const player1NewNums = [];
      const player2NewNums = [];
      let randomNum = 0;

      while (player1NewNums.length < NUM_BINGO_BLOCK) {
        randomNum = genRandomNum(NUM_BINGO_BLOCK);
        if (!player1NewNums.includes(randomNum)) player1NewNums.push(randomNum);
      }
      while (player2NewNums.length < NUM_BINGO_BLOCK) {
        randomNum = genRandomNum(NUM_BINGO_BLOCK);
        if (!player2NewNums.includes(randomNum)) player2NewNums.push(randomNum);
      }
      selectedNumChangeFlag = true;
      return {
        ...state,
        player1Nums: [...player1NewNums],
        player1Checked: [...initCheckedArr],
        player2Nums: [...player2NewNums],
        player2Checked: [...initCheckedArr],
        //시작 혹은 재시작엔 무조건 1p가 먼저
        now: playerArr[0],
        player1Message: playerMessages.turn,
        player2Message: playerMessages.wait
      };
    case CHECK_SELECTED_NUM:
      if (!selectedNumChangeFlag) return state;
      if (state.now !== action.playerNumber) {
        return {
          ...state,
          invalidOrder: true
        };
      }
      checkSelectedIndex(
        state.player1Checked,
        getIndex(state.player1Nums, action.selectedNum)
      );
      checkSelectedIndex(
        state.player2Checked,
        getIndex(state.player2Nums, action.selectedNum)
      );

      checkRowBingo(
        state.player1Nums,
        state.player1Checked,
        state.player1RowBingoList,
        action.selectedNum
      );
      checkColBingo(
        state.player1Nums,
        state.player1Checked,
        state.player1ColBingoList,
        action.selectedNum
      );
      checkCrossBingo(
        state.player1Nums,
        state.player1Checked,
        state.player1CrossBingoList,
        action.selectedNum
      );

      state.player1TotalScore = updateTotalScore(
        state.player1RowBingoList,
        state.player1ColBingoList,
        state.player1CrossBingoList
      );

      checkRowBingo(
        state.player2Nums,
        state.player2Checked,
        state.player2RowBingoList,
        action.selectedNum
      );

      checkColBingo(
        state.player2Nums,
        state.player2Checked,
        state.player2ColBingoList,
        action.selectedNum
      );
      checkCrossBingo(
        state.player2Nums,
        state.player2Checked,
        state.player2CrossBingoList,
        action.selectedNum
      );
      state.player2TotalScore = updateTotalScore(
        state.player2RowBingoList,
        state.player2ColBingoList,
        state.player2CrossBingoList
      );

      state.gameOver = checkGameOver(state.player1TotalScore, state.player2TotalScore);

      return {
        ...state,
        selectedNum: action.selectedNum,
        player1Checked: [...state.player1Checked],
        player2Checked: [...state.player2Checked],
        player1Message:
          state.now === playerArr[0]
            ? playerMessages.wait
            : playerMessages.turn,
        player2Message:
          state.now === playerArr[1]
            ? playerMessages.wait
            : playerMessages.turn,
        now: state.now === playerArr[0] ? playerArr[1] : playerArr[0],
        invalidOrder: false,
        player1RowBingoList: [...state.player1RowBingoList],
      };
    case CLOSE_MODAL:
      return {
        ...state,
        invalidOrder: false
      };
    default:
      return state;
  }
};
