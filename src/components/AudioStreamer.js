import React, { useState, useRef } from "react";
import { MicVAD } from "@ricky0123/vad-web";

const AudioStreamer = ({ podId, port = 8080, subdomain = "proxy.runpod.net" }) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const audioQueue = useRef([]);
  const isPlaying = useRef(false);
  const audioContext = useRef(new (window.AudioContext || window.webkitAudioContext)());
  const socket = useRef(null);

  const processQueue = async () => {
    if (audioQueue.current.length > 0) {
      isPlaying.current = true;
      const { streamData, resolve } = audioQueue.current.shift();
      playAudioStream(streamData, resolve);
    } else {
      isPlaying.current = false;
    }
  };

  const playAudioStream = (streamData, resolve) => {
    const source = audioContext.current.createBufferSource();
    source.buffer = streamData;
    source.connect(audioContext.current.destination);
    source.start(0);
    source.onended = () => {
      resolve();
      isPlaying.current = false;
      processQueue(); // Process the next stream in the queue
    };
  };

  const play = async (streamData) => {
    await new Promise((resolve) => {
      audioQueue.current.push({ streamData, resolve });
      if (!isPlaying.current) {
        processQueue();
      }
    });
  };

  const handleWebSocketMessage = async (event) => {
    const arrayBuffer = await event.data.arrayBuffer();
    const audioBuffer = await audioContext.current.decodeAudioData(arrayBuffer);
    play(audioBuffer);
  };

  const initializeWebSocket = () => {
    socket.current = new WebSocket(`wss://${podId}-${port}.${subdomain}/ws/transcribe`);

    socket.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socket.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.current.onmessage = handleWebSocketMessage;
  };

  const handleSpeechEnd = (audio) => {
    const audioBlob = new Blob([audio], { type: "audio/wav" });
    const reader = new FileReader();
    reader.readAsArrayBuffer(audioBlob);
    reader.onloadend = () => {
      if (socket.current.readyState === WebSocket.OPEN) {
        socket.current.send(reader.result);
        console.log("Audio sent to the backend");
      } else {
        console.error("WebSocket connection is not open");
      }
    };
  };

  const initializeVAD = async () => {
    const myvad = await MicVAD.new({
      onSpeechEnd: handleSpeechEnd,
    });

    myvad.start();
  };

  const startStreaming = async () => {
    initializeWebSocket();
    await initializeVAD();
    setIsStreaming(true);
  };

  return (
    <div>
      <button onClick={startStreaming} disabled={isStreaming}>
        {isStreaming ? "..." : "Start to Talk"}
      </button>
    </div>
  );
};

export default AudioStreamer;
