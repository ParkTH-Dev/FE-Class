import { combineReducers } from "redux";
// 04. movieReduer 가져오기
import movieReducer from "./movieReducer";

// ~ 01
export default combineReducers({ movie: movieReducer });
