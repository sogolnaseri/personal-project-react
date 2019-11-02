export const ACTION_TYPES = {
  SET_EVENTS: "set events data",
  SET_LOGIN: "set loged in",
  CHANGE_USERNAME: "change user name"
};

export const handleChangeUsername = event => ({
  type: ACTION_TYPES.CHANGE_USERNAME,
  payload: event.target.value
});

const handleLogin = profile => ({
  type: ACTION_TYPES.SET_LOGIN,
  payload: profile
});

const getGithubUser = username =>
  fetch(`https://api.github.com/users/${username}`);

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)));
};

const saveEvents = events => ({
  type: ACTION_TYPES.SET_EVENTS,
  payload: events
});

const getGithubEvents = username =>
  fetch(`https://api.github.com/users/${username}/events`);

export const getEventsData = username => dispatch => {
  getGithubEvents(username)
    .then(res => res.json())
    .then(events => dispatch(saveEvents(events)));
};
