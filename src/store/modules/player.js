const NUM_BINGO_BLOCK = 25;
const genRandomNum = MAX => {
  return Math.floor(Math.random() * MAX + 1);
};

const BINGO_ARR = ['B', 'I', 'N', 'G', 'O'];
const initCells = BINGO_ARR.concat(BINGO_ARR, BINGO_ARR, BINGO_ARR, BINGO_ARR);

// 액션 타입 정의
const NUMS_GENERATOR = "counter/NUMS_GENERATOR";

// 액션 생성 함수 정의
export const numsGenerator = () => ({ type: NUMS_GENERATOR });

// 초기 상태 정의
const initialState = {
  player1Nums: [...initCells],
  player2Nums: [...initCells]
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
        player2Nums: [...player2NewNums]
      };
    default:
      return state;
  }
};
