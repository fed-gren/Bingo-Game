const NUM_BINGO_BLOCK = 25;
const genRandomNum = MAX => {
  return Math.floor(Math.random() * MAX + 1);
};

const BINGO_ARR = ["B", "I", "N", "G", "O"];
const initCells = BINGO_ARR.concat(BINGO_ARR, BINGO_ARR, BINGO_ARR, BINGO_ARR);
const initCheckedArr = [];
for (let i = 0; i < NUM_BINGO_BLOCK; i += 1) {
  initCheckedArr.push(false);
}

// 액션 타입 정의
const NUMS_GENERATOR = "player/NUMS_GENERATOR";
const GET_SELECTED_NUM = "player/GET_SELECTED_NUM";

// 액션 생성 함수 정의
export const numsGenerator = () => ({ type: NUMS_GENERATOR });
export const getSelectedNum = selectedNum => ({ type: GET_SELECTED_NUM, selectedNum });

// 초기 상태 정의
const initialState = {
  player1Nums: [...initCells],
  player1Checked: [],
  player2Nums: [...initCells],
  player2Checked: [],
  selectedNum: null
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
      return {
        ...state,
        player1Nums: [...player1NewNums],
        player1Checked: [...initCheckedArr],
        player2Nums: [...player2NewNums],
        player2Checked: [...initCheckedArr]
      };
    case GET_SELECTED_NUM:
      return {
        ...state,
        selectedNum: action.selectedNum
      }
      return state;
    default:
      return state;
  }
};
