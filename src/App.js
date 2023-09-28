import React from "react";
import Index from "./components/index.jsx";

export default function App() {
  return (
    <div>
      <div class="video-container">
        <video autoPlay loop muted src="/video/fondo.mp4" type="video/mp4" />
        <div className="content">
          <Index />
        </div>
      </div>
    </div>
  );
}
