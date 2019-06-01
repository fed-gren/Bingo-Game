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

// 액션 타입 정의
const NUMS_GENERATOR = "player/NUMS_GENERATOR";
const CHECK_SELECTED_NUM = "player/CHECK_SELECTED_NUM";
const TOGGLE = "player/TOGGLE";

// 액션 생성 함수 정의
export const numsGenerator = () => ({ type: NUMS_GENERATOR });
export const getSelectedNum = selectedNum => ({
  type: CHECK_SELECTED_NUM,
  selectedNum,
  playerNumber
});
export const toggle = () => ({ type: TOGGLE });

// 초기 상태 정의
const initialState = {
  player1Nums: [...initCells],
  player1Checked: [],
  player2Nums: [...initCells],
  player2Checked: [],
  selectedNum: null,
  now: playerArr[0],
  player1Message: `빙고 한 판 할까요?`,
  player2Message: `빙고 한 판 할까요?`
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
        player2Message: playerMessages.wait,

      };
    case CHECK_SELECTED_NUM:
      console.log(`player ? ${action.playerNumber}`);
      console.log(`현재 순서와 다른 플레이어가 눌렀나요???`);
      if(state.now !== action.playerNumber) console.log("넹");
      else console.log("아니오. 아주 올바릅니다!");
      checkSelectedIndex(
        state.player1Checked,
        getIndex(state.player1Nums, action.selectedNum)
      );
      checkSelectedIndex(
        state.player2Checked,
        getIndex(state.player2Nums, action.selectedNum)
      );
      return {
        ...state,
        selectedNum: action.selectedNum,
        player1Checked: [...state.player1Checked],
        player2Checked: [...state.player2Checked],
        now: state.now,
      };
    case TOGGLE:
      if(!selectedNumChangeFlag) return state;
      return {
        ...state,
        now: state.now === playerArr[0] ? playerArr[1] : playerArr[0],
        player1Message: state.now === playerArr[0] ? playerMessages.turn : playerMessages.wait,
        player2Message: state.now === playerArr[1] ? playerMessages.turn : playerMessages.wait,
      };
    default:
      return state;
  }
};
