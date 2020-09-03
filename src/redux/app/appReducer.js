import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import appAction from "./appAction";

const appFilter = createReducer("", { [appAction.filter]: (state, action) => action.payload });

const appContacts = createReducer([], {
 [appAction.getContactsSuccess]: (state, action) => action.payload,
 [appAction.addContactSuccess]: (state, action) => [...state, action.payload],
 [appAction.delContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload)
});

const loading = createReducer(false, {
 [appAction.addContactRequest]: () => true,
 [appAction.addContactSuccess]: () => false,
 [appAction.addContactError]: () => false,
 [appAction.getContactsRequest]: () => true,
 [appAction.getContactsSuccess]: () => false,
 [appAction.getContactsError]: () => false,
 [appAction.delContactRequest]: () => true,
 [appAction.delContactSuccess]: () => false,
 [appAction.delContactError]: () => false
});

export default combineReducers({ filter: appFilter, contacts: appContacts, loading });
