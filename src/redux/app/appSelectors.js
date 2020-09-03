import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.app.loading;
const getContactsSelector = state => state.app.contacts;
const getFilter = state => state.app.filter;

const contactsArrayFilteredSel = createSelector(
 [getContactsSelector, getFilter],
 (contacts, filterSelelector) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filterSelelector.toLowerCase()))
);

const getContactIsAlready = createSelector([(state, name) => name, getContactsSelector], (name, contacts) =>
 contacts.find(contact => name === contact.name)
);

export default {
 getLoading,
 getContactsSelector,
 getFilter,
 contactsArrayFilteredSel,
 getContactIsAlready
};
