const NUM_BINGO_BLOCK = 25;
const genRandomNum = (MAX) => {
  return Math.floor(Math.random() * MAX + 1);
}

// 액션 타입 정의
const NUMS_GENERATOR = 'counter/NUMS_GENERATOR';

// 액션 생성 함수 정의
export const numsGenerator = () => ({ type: NUMS_GENERATOR });

// 초기 상태 정의
const initialState = {
  nums: [],
}

// 리듀서 정의
export default (state = initialState, action) => {
  switch(action.type) {
    case NUMS_GENERATOR:
      const newNums = [];
      while(newNums.length < NUM_BINGO_BLOCK) {
        let randomNum = genRandomNum(NUM_BINGO_BLOCK);
        if(!newNums.includes(randomNum)) newNums.push(randomNum);
      }

      return {
        ...state,
        nums: [...newNums]
      };
    default:
      return state;
  }
}