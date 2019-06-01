// 액션 타입 정의
const SHOW = "modal/SHOW";
const CLOSE = "modal/CLOSE";

// 액션 생성 함수 정의
export const show = message => ({ type: SHOW, message });
export const close = () => ({ type: CLOSE });

// 초기 상태 정의
const initialState = {
  message: `모달입니다!`,
  isShow: false
};

// 리듀서 정의
export default function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        message: action.message,
        isShow: true
      };
    case CLOSE:
      return {
        ...state,
        isShow: false
      };
    default:
      return state;
  }
}
