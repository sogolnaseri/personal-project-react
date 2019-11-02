import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login.js";
import Events from "./components/Events.js";
import { connect } from "react-redux";
import { handleChangeUsername, login, getEventsData } from "./store/actions";

export class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.loggedIn !== this.props.loggedIn) {
      if (this.props.loggedIn) {
        this.props.getEventsData(this.props.username);
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.loggedIn ? (
          <Events events={this.props.events} userName={this.props.username} />
        ) : (
          <Login
            handleChange={this.props.handleChangeUsername}
            handleLogin={() => this.props.login(this.props.username)}
            username={this.props.username}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  username: state.username,
  profile: state.profile,
  events: state.events
});

const mapDispatchToProps = {
  handleChangeUsername,
  login,
  getEventsData
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
