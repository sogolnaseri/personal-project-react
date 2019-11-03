import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

export default ({ handleChange, handleLogin, username }) => {
  return (
    <div className="login">
      <h2>Github UserName :</h2>
      <TextField
        name="username"
        handleChange={handleChange}
        id="github-username"
        value={username}
      />
      <div className="Get User button">
        <Button value="GET USER" handleClick={handleLogin} />
      </div>
    </div>
  );
};
