import React from "react";
import { btn, itemLi, itemP, itemSpan } from "./ContactListItem.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import appOperation from "../../redux/app/appOperation";

let ContactListItem = ({ el, onDelContact, id }) => (
 <li className={itemLi}>
  <span className={itemP}>{el.name}:</span>
  <p>
   <span className={itemSpan}>{el.number}</span>
   <button
    className={btn}
    onClick={() => {
     onDelContact(id);
    }}
   >
    &#10006;
   </button>
  </p>
 </li>
);

const mapDispatchToProps = { onDelContact: appOperation.delContact };

export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
 el: PropTypes.object.isRequired,
 onDelContact: PropTypes.func.isRequired
};
