import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter/Filter";
import IsAlreadyTrue from "./IsAlreadyTrue";
import animation from "./Appanimation.module.css";
import animationIsAlready from "./IsAlreadyTrue/isAlreadyTrueAnimation.module.css";
import FilterAnimation from "./Filter/FilterAnimation.module.css";
import { connect } from "react-redux";
import appAction from "../redux/app/appAction";

class App extends Component {
  state = {
    isAlready: false,
  };

  componentDidMount() {
    let localStorContacts = JSON.parse(localStorage.getItem("items"));
    localStorContacts && this.props.addItemLocalStor(localStorContacts);
  }

  componentDidUpdate(prevProps) {
    if (this.props.app.items !== prevProps.app.items) {
      localStorage.setItem("items", JSON.stringify(this.props.app.items));
    }
  }

  changeIsAlready = (name) => {
    if (this.props.app.items.find((contact) => name === contact.name)) {
      this.setState({ isAlready: true });
      return false;
    } else {
      this.setState({ isAlready: false });
    }
    return true;
  };

  render() {
    const { items } = this.props.app;
    const { filter } = this.props.app;
    const filterLowerCase = filter.toLowerCase();

    const contactsArrayFiltered = items.filter((contact) => contact.name.toLowerCase().includes(filterLowerCase));

    return (
      <>
        <CSSTransition in={this.state.isAlready === true} timeout={300} classNames={animationIsAlready} unmountOnExit>
          <IsAlreadyTrue onChangeIsAlready={this.changeIsAlready} />
        </CSSTransition>

        <div className={animation.container}>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={animation} unmountOnExit>
            {(stage) => {
              return (
                <>
                  <h1 className={animation.title}>Phonebook</h1>
                  <CSSTransition in={stage === "entered"} timeout={300} classNames={animation} unmountOnExit>
                    <p className={animation.p}> &#9742;</p>
                  </CSSTransition>
                </>
              );
            }}
          </CSSTransition>

          <ContactForm changeIsAlready={this.changeIsAlready} />

          <CSSTransition in={items.length > 1} timeout={300} classNames={FilterAnimation} unmountOnExit>
            <Filter />
          </CSSTransition>

          <ContactList contacts={contactsArrayFiltered} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ app: state.app });

let mapDispatchToProps = { addItemLocalStor: appAction.addItemsFromLocalStor };

export default connect(mapStateToProps, mapDispatchToProps)(App);
