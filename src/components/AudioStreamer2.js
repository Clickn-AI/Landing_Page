import React, { useState, useRef } from "react";
import { useMicVAD } from "@ricky0123/vad-react";


const AudioStreamer2 = () => {
  const vad = useMicVAD({
    startOnLoad: true,
    onSpeechEnd: (audio) => {
      console.log("User stopped talking");
      // Handle audio data (e.g., send to server)
    },
  });

  return (
    <div>
      <h1>Voice Activity Detection</h1>
      {vad.userSpeaking && <p>User is speaking</p>}
    </div>
  );
};

export default AudioStreamer2;
