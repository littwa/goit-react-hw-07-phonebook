import React from "react";
import ContactListItem from "../ContactListItem";
import PropTypes from "prop-types";
import style from "./ContactListStyl.module.css";

import animitem from "./ContactListAnimation.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

let ContactList = ({ contacts }) => (
  <section>
    <TransitionGroup component="ul" className={style.list}>
      {contacts.map((el) => (
        <CSSTransition key={el.id} timeout={200} classNames={animitem}>
          <ContactListItem el={el} id={el.id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </section>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
