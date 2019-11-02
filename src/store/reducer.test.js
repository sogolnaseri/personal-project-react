import React from "react";
import { ACTION_TYPES } from "./actions";
import { reducer } from "./reducer";
const defaultState = {
  loggedIn: false,
  username: "",
  profile: {},
  events: []
};

describe("Reducer", () => {
  it("returns initial state", () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });
  it("returns updated username state", () => {
    const action = { type: ACTION_TYPES.CHANGE_USERNAME, payload: "pkanal" };
    const expectedState = {
      loggedIn: false,
      username: "pkanal",
      profile: {},
      events: []
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
  it("returns updated logedIn and profile state", () => {
    const expectedProfile = {
      login: "mojombo",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mojombo",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      following_url:
        "https://api.github.com/users/mojombo/following{/other_user}",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
      organizations_url: "https://api.github.com/users/mojombo/orgs",
      repos_url: "https://api.github.com/users/mojombo/repos",
      events_url: "https://api.github.com/users/mojombo/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mojombo/received_events",
      type: "User",
      site_admin: false
    };
    const action = { type: ACTION_TYPES.SET_LOGIN, payload: expectedProfile };
    const expectedState = {
      loggedIn: true,
      username: "",
      profile: expectedProfile,
      events: []
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
  it("returns updated events state", () => {
    const expectedEvents = [
      {
        id: "10707670350",
        type: "PushEvent",
        actor: {
          id: 8810222,
          login: "pkanal",
          display_login: "pkanal",
          gravatar_id: "",
          url: "https://api.github.com/users/pkanal",
          avatar_url: "https://avatars.githubusercontent.com/u/8810222?"
        },
        repo: {
          id: 217356213,
          name: "bridge-school/deploy-workshop-frontend",
          url:
            "https://api.github.com/repos/bridge-school/deploy-workshop-frontend"
        },
        payload: {
          push_id: 4191154999,
          size: 1,
          distinct_size: 1,
          ref: "refs/heads/master",
          head: "a16deb26ec74a65e5b4f801207d31b519a22af4f",
          before: "8582c34994aa1ab5ab338472a00a5c0a7a55802f",
          commits: [
            {
              sha: "a16deb26ec74a65e5b4f801207d31b519a22af4f",
              author: {
                email: "purvikanal92@gmail.com",
                name: "Purvi Kanal"
              },
              message: "my second feature",
              distinct: true,
              url:
                "https://api.github.com/repos/bridge-school/deploy-workshop-frontend/commits/a16deb26ec74a65e5b4f801207d31b519a22af4f"
            }
          ]
        },
        public: true,
        created_at: "2019-10-24T17:59:03Z",
        org: {
          id: 30509997,
          login: "bridge-school",
          gravatar_id: "",
          url: "https://api.github.com/orgs/bridge-school",
          avatar_url: "https://avatars.githubusercontent.com/u/30509997?"
        }
      }
    ];

    const action = { type: ACTION_TYPES.SET_EVENTS, payload: expectedEvents };
    const expectedState = {
      loggedIn: false,
      username: "",
      profile: {},
      events: expectedEvents
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
