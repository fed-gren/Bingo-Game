import {
  PLAYER_MESSAGES,
  NUM_BINGO_BLOCK,
  PLAYER_NUM_ARR,
  BINGO_ARR,
  ROW_BINGO_ARR,
  COL_BINGO_ARR,
  CROSS_BINGO_ARR
} from "../../constant/constant";

let selectedNumChangeFlag = false;

const genRandomNum = MAX => {
  return Math.floor(Math.random() * MAX + 1);
};

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

const checkRowBingo = (playerNums, checkedArr, bingoArr, selectedNum) => {
  const newRowList = ROW_BINGO_ARR.map(eachList =>
    eachList.map(element => playerNums[element])
  );

  newRowList.forEach((eachList, index) => {
    if (eachList.includes(selectedNum)) {
      if (eachList.every(el => checkedArr[playerNums.indexOf(el)])) {
        if (!bingoArr.includes(index + 1)) {
          bingoArr.push(index + 1);
        }
      }
    }
  });
};

const checkColBingo = (playerNums, checkedArr, bingoArr, selectedNum) => {
  const newColList = COL_BINGO_ARR.map(eachList =>
    eachList.map(element => playerNums[element])
  );

  newColList.forEach((eachList, index) => {
    if (eachList.includes(selectedNum)) {
      if (eachList.every(el => checkedArr[playerNums.indexOf(el)])) {
        if (!bingoArr.includes(index + 1)) {
          bingoArr.push(index + 1);
        }
      }
    }
  });
};

const checkCrossBingo = (playerNums, checkedArr, bingoArr, selectedNum) => {
  const newCrossList = CROSS_BINGO_ARR.map(eachList =>
    eachList.map(element => playerNums[element])
  );

  newCrossList.forEach((eachList, index) => {
    if (eachList.includes(selectedNum)) {
      if (eachList.every(el => checkedArr[playerNums.indexOf(el)])) {
        if (!bingoArr.includes(index + 1)) {
          bingoArr.push(index + 1);
        }
      }
    }
  });
};

const updateTotalScore = (
  rowBingoList = [],
  colBingoList = [],
  crossBingoList = []
) => {
  return rowBingoList.length + colBingoList.length + crossBingoList.length;
};

const checkGameOver = (player1TotalScore, player2TotalScore) => {
  if (player1TotalScore < 5 && player2TotalScore < 5) return 0;
  else if (player1TotalScore >= 5 && player2TotalScore < 5) return 1;
  else if (player1TotalScore < 5 && player2TotalScore >= 5) return 2;
  else if (player1TotalScore >= 5 && player2TotalScore >= 5) return 3;
};

// 액션 타입 정의
const CHECK_SELECTED_NUM = "player/CHECK_SELECTED_NUM";
const CLOSE_MODAL = "player/CLOSE_MODAL";
const INIT_GAME = "player/INIT_GAME";
const START_GAME = "player/START_GAME";

// 액션 생성 함수 정의
export const getSelectedNum = selectedNum => ({
  type: CHECK_SELECTED_NUM,
  selectedNum,
  playerNumber
});
export const closeModal = () => ({ type: CLOSE_MODAL });
export const initGame = () => ({ type: INIT_GAME });
export const startGame = () => ({ type: START_GAME });

// 초기 상태 정의
const initialState = {
  player1Nums: [...initCells],
  player1Checked: [],
  player2Nums: [...initCells],
  player2Checked: [],
  selectedNum: null,
  now: PLAYER_NUM_ARR[0],
  player1Message: PLAYER_MESSAGES.init,
  player2Message: PLAYER_MESSAGES.init,
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
  playing: false
};

// 리듀서 정의
export default (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
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
        ...initialState,
        player1Nums: [...player1NewNums],
        player1Checked: [...initCheckedArr],
        player2Nums: [...player2NewNums],
        player2Checked: [...initCheckedArr],
        //시작 혹은 재시작엔 무조건 1p가 먼저
        now: PLAYER_NUM_ARR[0],
        player1Message: PLAYER_MESSAGES.turn,
        player2Message: PLAYER_MESSAGES.wait,
        playing: true
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

      state.gameOver = checkGameOver(
        state.player1TotalScore,
        state.player2TotalScore
      );

      return {
        ...state,
        selectedNum: action.selectedNum,
        player1Checked: [...state.player1Checked],
        player2Checked: [...state.player2Checked],
        player1Message:
          state.now === PLAYER_NUM_ARR[0]
            ? PLAYER_MESSAGES.wait
            : PLAYER_MESSAGES.turn,
        player2Message:
          state.now === PLAYER_NUM_ARR[1]
            ? PLAYER_MESSAGES.wait
            : PLAYER_MESSAGES.turn,
        now:
          state.now === PLAYER_NUM_ARR[0]
            ? PLAYER_NUM_ARR[1]
            : PLAYER_NUM_ARR[0],
        invalidOrder: false,
        player1RowBingoList: [...state.player1RowBingoList],
        player1ColBingoList: [...state.player1ColBingoList],
        player1CrossBingoList: [...state.player1CrossBingoList],
        player2RowBingoList: [...state.player2RowBingoList],
        player2ColBingoList: [...state.player2ColBingoList],
        player2CrossBingoList: [...state.player2CrossBingoList]
      };
    case CLOSE_MODAL:
      return {
        ...state,
        invalidOrder: false
      };
    case INIT_GAME:
      return {
        ...initialState
      };
    case START_GAME:
      return {
        ...state
      };
    default:
      return state;
  }
};
