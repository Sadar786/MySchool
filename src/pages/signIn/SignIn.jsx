// SignIn.js
import React, { useState } from "react";
import "./signIn.css";
import { Button } from "../../components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log("Sign In:", email, password);
  };

  return (
    <div className="signIn-container" id="signIn">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Forgot Password" />
        </label>
        <br />
        <button className="buttonSign" type="submit">
          Sign In
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default SignIn;
