import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const getContactsRequest = createAction("contact/getRequest");
const getContactsSuccess = createAction("contacts/getSuccess");
const getContactsError = createAction("contacts/getError");

const delContactRequest = createAction("contact/delRequest");
const delContactSuccess = createAction("contact/delSuccess");
const delContactError = createAction("contact/delError");

const filter = createAction("app/filter");

export default {
 addContactRequest,
 addContactSuccess,
 addContactError,
 getContactsRequest,
 getContactsSuccess,
 getContactsError,
 delContactRequest,
 delContactSuccess,
 delContactError,
 filter
};
