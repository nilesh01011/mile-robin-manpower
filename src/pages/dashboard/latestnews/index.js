import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function LatestNews({
  items,
  setDrawerSliderID,
  setIsDrawerOpen,
  isDrawerOpen,
  setDrawerType,
}) {
  const theme = useSelector((state) => state.theme);

  const handleDrawer = (id) => {
    setDrawerSliderID(id);
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = "hidden";
    setDrawerType("Latest News");
  };

  const wordSlice = (word) => {
    if (word.length > 42) {
      return word.slice(0, 42) + "...";
    } else {
      return word;
    }
  };

  return (
    <div
      className={`latestNews ${theme === "light" ? "lightHover" : "darkHover"}`}
      style={{ borderColor: theme === "light" ? "#E6E6E6" : "#232324" }}
      onClick={() => handleDrawer(items.id)}
    >
      {/* text */}
      <div className="text">
        <h5>{items.title}</h5>
        <p style={{ color: "#858585", fontSize: 14 }}>{items.desc}</p>
        {/* <p style={{ color: "#858585", fontSize: 14 }}>{wordSlice(items.desc)}</p> */}
      </div>
      {/* date */}
      <p
        className="date"
        style={{
          backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
          borderColor: theme === "light" ? "#E6E6E6" : "#232324",
          color: "#858585",
          whiteSpace: "nowrap"
        }}
      >
        {items.date}
      </p>
    </div>
  );
}

export default LatestNews;
