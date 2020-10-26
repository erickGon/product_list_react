import { combineReducers } from "redux";
import showDetails from "./showDetails";
import selectItem from "./selectItem";
import carCount from "./carCount";

export default combineReducers({ showDetails, selectItem, carCount });
