import React from "react";
import { filterContainer, filterLabel, filterInput } from "./Filter.module.css";
import PropTypes from "prop-types";
import appAction from "../../redux/app/appAction";
import { connect } from "react-redux";

let Filter = ({ filter, onChangeFilter }) => {
  return (
    <form className={filterContainer}>
      <label className={filterLabel}>
        Find contacts by name
        <input className={filterInput} onChange={(e) => onChangeFilter(e.target.value)} value={filter} name="filter" type="text" autoComplete="off" />
      </label>
    </form>
  );
};

const mapStateToProps = (state) => ({ app: state.app });

const mapDispatchToProps = { onChangeFilter: appAction.filter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
