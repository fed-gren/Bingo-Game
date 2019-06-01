// 액션 타입 정의
const START = 'starter/START';
const INIT = 'starter/INIT';

// 액션 생성 함수 정의
export const start = () => ({ type: START });
export const init = () => ({ type: INIT });

// 초기 상태 정의
const initialState = {
  text: "Start",
  playing: false
}

// 리듀서 정의
export default function starter(state = initialState, action) {
  switch(action.type) {
    case START:
      return {
        ...state,
        text: "Restart",
        playing: true
      };
    case INIT:
      return initialState;
    default:
      return state;
  }
}