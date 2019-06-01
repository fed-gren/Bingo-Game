import { combineReducers } from "redux";
import starter from "./starter";
import player from "./player";
import orderControl from "./orderControl";

export default combineReducers({
  starter,
  player,
  orderControl
  //다른 리듀서를 만들게 되면 여기에 추가한다.
});