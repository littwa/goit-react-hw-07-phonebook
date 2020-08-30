import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import appAction from "./appAction";

const appFilter = createReducer("", { [appAction.filter]: (state, action) => action.payload });

const appItems = createReducer([], {
  [appAction.addItemsFromLocalStor]: (state, action) => [...state, ...action.payload],
  [appAction.itemsAdd]: (state, action) => [...state, action.payload.items],
  [appAction.itemsDel]: (state, action) => state.filter((contact) => contact.id !== action.payload),
});

export default combineReducers({ filter: appFilter, items: appItems });
