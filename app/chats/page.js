"use client";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "@/context";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);
const chats = () => {
  const { username, secret } = useContext(Context);
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });
  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  });
  if (!showChat) return <div />;
  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          projectID="c1198bac-cfc4-45d4-a82e-0ad9db792522"
          userName={username}
          userSecret={secret}
          height="calc(100vh - 200px)"
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
};

export default chats;
