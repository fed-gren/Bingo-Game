// 액션 타입 정의
const START = 'counter/START';

// 액션 생성 함수 정의
export const start = () => ({ type: START });

// 초기 상태 정의
const initialState = {
  text: "Start"
}

// 리듀서 정의
export default function counter(state = initialState, action) {
  switch(action.type) {
    case START:
      return {
        ...state,
        text: "Restart",
      };
    default:
      return state;
  }
}