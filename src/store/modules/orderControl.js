const playerArr = ["player1", "player2"];

// 액션 타입 정의
const TOGGLE = "orderControl/TOGGLE";

// 액션 생성 함수 정의
export const toggle = () => ({ type: TOGGLE });

// 초기 상태 정의
const initialState = {
  now: playerArr[0],
  message: `${playerArr[0]} 차례입니다.`
};

// 리듀서 정의
export default function counter(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        now: state.now === playerArr[0] ? playerArr[1] : playerArr[0],
        message: `${state.now} 차례입니다.`
      };
    default:
      return state;
  }
}
