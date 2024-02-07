import React from 'react'
import Title from '../../../components/title';
import { useSelector } from 'react-redux';

function Master() {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className="masterPage minHeight">
        {/* ============ title ============ */}
        <div
          style={{
            background: theme === "light" ? "white" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
          className="container-fluid titleContainer"
        >
          <Title title="Master" />
        </div>
      </div>
      {/* footers */}
      <div
        className="footer"
        style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
      >
        <span>Copyright © 2023 ROBIN.</span>
      </div>
    </>
  );
}

export default Master