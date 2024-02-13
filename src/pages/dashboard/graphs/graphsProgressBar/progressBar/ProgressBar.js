import React, { useState } from "react";
import { useSelector } from "react-redux";

function ProgressBar({ items }) {
  const [showTooltips, setShowTooltips] = useState(false);
  const theme = useSelector((state) => state.theme);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {/* count */}
      {/* <span>{items.count}</span> */}
      {/* progress bar */}
      <div
        className="progressBar"
        style={{ width: items.count, backgroundColor: items.bgColor }}
        onMouseOver={() => setShowTooltips(true)}
        onMouseLeave={() => setShowTooltips(false)}
      >
        {/* tooltips */}
        {showTooltips && (
          <div
            className="tooltips"
            style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#545454",
              boxShadow:
                theme === "light"
                  ? " 0 0 3px rgba(0, 0, 0, 0.2)"
                  : "1px 0px 1px 0px rgba(255, 255, 255, 0.15)",
              right:
                (items.count < 20 && "-87px") ||
                (items.count === 50 && "-87px") ||
                (items.count <= 120 && "-40px") ||
                (items.count >= 140 && "-10px"),
            }}
          >
            <p
              className={`${theme === "light" ? "lightTheme" : "darkTheme"}`}
              style={{ fontWeight: 600 }}
            >
              <span>{items.name}</span>
              <span>{items.count}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
