import appAction from "./appAction";
import axios from "axios";

const addContact = (name, number) => dispatch => {
 dispatch(appAction.addContactRequest());
 axios
  .post("http://localhost:2000/contacts", { name, number })
  .then(respons => dispatch(appAction.addContactSuccess(respons.data)))
  .catch(error => dispatch(appAction.addContactError(error)));
};

const getContacts = () => dispatch => {
 dispatch(appAction.getContactsRequest());

 axios
  .get("http://localhost:2000/contacts")
  .then(respons => dispatch(appAction.getContactsSuccess(respons.data)))
  .catch(error => dispatch(appAction.getContactsError(error)));
};

const delContact = id => dispatch => {
 dispatch(appAction.delContactRequest());

 axios
  .delete("http://localhost:2000/contacts/" + id)
  .then(dispatch(appAction.delContactSuccess(id)))
  .catch(error => dispatch(appAction.delContactError(error)));
};

export default { addContact, getContacts, delContact };
