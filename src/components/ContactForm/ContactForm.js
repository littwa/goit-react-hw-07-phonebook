import React from "react";
import st from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import appAction from "../../redux/app/appAction";

class ContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.changeIsAlready(this.state.name) && this.props.onAddItem(this.state.name, this.state.number);
    this.setState(() => {
      return { name: "", number: "" };
    });
  };

  handleChange = (e) => {
    let { value, name } = e.target;

    this.setState(() => {
      return { [name]: value };
    });
  };

  render() {
    return (
      <form className={st.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={st.TaskEditorLabel}>
          Name
          <input className={st.TaskEditorInput} onChange={this.handleChange} value={this.state.name} name="name" type="text" maxLength="12" autoComplete="off" required />
        </label>
        <label className={st.TaskEditorLabel}>
          Number
          <input className={st.TaskEditorInput} onChange={this.handleChange} value={this.state.number} name="number" type="tel" autoComplete="off" maxLength="13" />
        </label>
        <button className={st.TaskEditorButton}>Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ app: state.app });

const mapDispatchToProps = { onAddItem: appAction.itemsAdd };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
