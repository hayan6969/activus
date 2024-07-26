import { Session, Chatbox } from "@talkjs/react";
import React from "react";

export default function Chat() {
  return (
    <Session appId="tBKvvdLS" userId="sample_user_alice" style={{backgroundColor: "#fff"}} >
      <Chatbox
        style={{backgroundColor: "#fff"}}
        className="h-full bg-white "
        showChatHeader={false}
        conversationId="sample_conversation"
      />
    </Session>
  );
}

// https://prod.spline.design/8a-NPOU9xt8CwNsu/scene.splinecode
