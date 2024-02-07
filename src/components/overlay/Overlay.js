import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function Overlay({ showOverlay, hideOverlay }) {
  const theme = useSelector((state) => state.theme);
  const handleClosed = () => {
    hideOverlay(false)
  }
  return (
    <div
      className="overlay"
      style={{
        display: showOverlay ? "block" : "none",
        backgroundColor:
          theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(84, 84, 84, 0.8)",
      }}
      onClick={() => handleClosed()}
    />
  );
}

export default Overlay;
