// utils/webSocketConnector.ts
export interface WebSocketConnectorProps {
    url: string;
    protocols?: string | string[];
    onOpen?: (event: Event) => void;
    onMessage?: (event: MessageEvent) => void;
    onError?: (event: Event) => void;
    onClose?: (event: CloseEvent) => void;
  }
  
  export const webSocketConnector = ({
    url,
    protocols,
    onOpen,
    onMessage,
    onError,
    onClose,
  }: WebSocketConnectorProps): WebSocket => {
    const socket = protocols ? new WebSocket(url, protocols) : new WebSocket(url);
  
    if (onOpen) socket.onopen = onOpen;
    if (onMessage) socket.onmessage = onMessage;
    if (onError) socket.onerror = onError;
    if (onClose) socket.onclose = onClose;
  
    return socket;
  };

  
 
// implement this in the app  




// App.tsx

// import React, { useEffect, useRef } from "react";
// import { webSocketConnector } from "./utils/webSocketConnector";

// const App: React.FC = () => {
//   const socketRef = useRef<WebSocket | null>(null);

//   useEffect(() => {
//     // Initialize WebSocket connection
//     socketRef.current = webSocketConnector({
//       url: "wss://echo.websocket.org", // For testing purposes
//       onOpen: () => {
//         console.log("✅ WebSocket connected");
//         socketRef.current?.send(JSON.stringify({ message: "Hello Server" }));
//       },
//       onMessage: (event) => {
//         console.log("📨 Message from server:", event.data);
//       },
//       onError: (error) => {
//         console.error("❌ WebSocket error", error);
//       },
//       onClose: () => {
//         console.log("🔌 WebSocket closed");
//       },
//     });

//     // Cleanup on unmount
//     return () => {
//       socketRef.current?.close();
//     };
//   }, []);

//   return (
//     <div style={{ padding: 24 }}>
//       <h1>🛰️ WebSocket Connector Example</h1>
//       <p>Open console to see WebSocket activity.</p>
//     </div>
//   );
// };

// export default App;
