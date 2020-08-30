import React from "react";
import { btn, itemLi, itemP, itemSpan } from "./ContactListItem.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import appAction from "../../redux/app/appAction";

let ContactListItem = ({ el, onDelItem, id }) => (
  <li className={itemLi}>
    <span className={itemP}>{el.name}:</span>
    <p>
      <span className={itemSpan}>{el.number}</span>
      <button
        className={btn}
        onClick={() => {
          onDelItem(id);
        }}
      >
        &#10006;
      </button>
    </p>
  </li>
);

const mapStateToProps = (state) => ({ app: state.app });

const mapDispatchToProps = { onDelItem: appAction.itemsDel };

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  el: PropTypes.object.isRequired,
  onDelItem: PropTypes.func.isRequired,
};
