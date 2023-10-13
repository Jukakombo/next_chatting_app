"use client";
import React, { useContext } from "react";
import { Context } from "../context/index";
import { useRouter } from "next/navigation";
import axios from "axios";
const Auth = () => {
  const router = useRouter();
  const { username, setUsername, setSecret, secret } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        {
          headers: {
            "Private-Key": "026b1c2f-c304-424f-bf5b-d7ab356437d4",
          },
        }
      )
      .then((r) => {
        router.push("/chats");
      });
    // .catch((error) => {
    //   // Handle error
    //   console.error("Error:", error);
    // });
  };
  return (
    <div className="background">
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-title">Univ-chat</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign Up{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
