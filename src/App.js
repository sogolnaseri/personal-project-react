import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login.js";
import Events from "./components/Events.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: "",
      profile: {},
      events: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleLogin() {
    this.getGithubUser(this.state.username)
      .then(res => res.json())
      .then(data => this.setState({ profile: data, loggedIn: true }))
      .catch(err => this.setState({ error: err }));
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }

  getGithubEvents(username) {
    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => res.json())
      .then(data => this.setState({ events: data }))
      .catch(err => this.setState({ error: err }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.state.loggedIn) {
      if (this.state.loggedIn) {
        this.getGithubEvents(this.state.username);
      }
    }
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="App">
        {this.state.profile.name && this.state.username ? (
          <Events events={this.state.events} userName={this.state.username} />
        ) : (
          <Login
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            username={this.state.username}
          />
        )}
      </div>
    );
  }
}
