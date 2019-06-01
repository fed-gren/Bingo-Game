import { combineReducers } from "redux";
import starter from "./starter";
import player from "./player";

export default combineReducers({
  starter,
  player,
  //다른 리듀서를 만들게 되면 여기에 추가한다.
});