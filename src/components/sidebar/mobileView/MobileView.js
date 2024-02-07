import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../../../data";

function MobileView({ collapsed, setCollapsed, handleSidebar }) {
  const [expanded, setExpanded] = useState({});
  const theme = useSelector((state) => state.theme);

  const router = useNavigate();

  const pathname = window.location.pathname;

  const toggleExpanded = (folderName) => {
    setExpanded((prev) => {
      return {
        ...prev,
        [folderName]: !prev[folderName],
      };
    });
  };

  const handleRedirect = (links) => {
    router(links);
    // sidebar closed
    // handleSidebar();
  };

  const handleCollapseRecursive = (item) => {
    // setCollapsed(false);
    // handleSidebar();
    toggleExpanded(item);
  };

  // word slice
  // const wordSlice = (word) => {
  //   if (word.length > 27) {
  //     return word.slice(0, 27) + "...";
  //   } else {
  //     return word;
  //   }
  // };

  // mobile view menuItems
  function renderMobileViewMenuItems(item) {
    const IsExpand = expanded[item.name];

    if (item.isFolder) {
      return (
        <div
          style={{
            color:
              pathname === item.link
                ? "#FF3E5B"
                : theme === "light"
                ? "#000"
                : "#fff",
          }}
          className="menuLists"
          key={item.key}
        >
          <div
            className="menuItemsHead"
            onClick={() => handleCollapseRecursive(item.name)}
          >
            {/* items */}
            <div
              className="items"
              style={{
                color: IsExpand || pathname === item.link ? "#FF3E5B" : "",
                margin: "0",
              }}
            >
              {item.icon && <small>{item.icon}</small>}
              {/* items name */}
              <div
                onClick={() => handleRedirect(item.link)}
                title={item.name && item.name}
                className="itemName"
              >
                {item.name}
                {/* {wordSlice(item.name)} */}
              </div>
            </div>
            {/* arrow icons */}
            <span
              style={{
                transform: IsExpand && "rotate(180deg)",
                // transition: "all 0.3s ease-in-out",
                color: IsExpand && "#FF3E5B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                style={{ transform: "rotate(270deg)" }}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                ></path>
              </svg>
            </span>
          </div>
          {IsExpand && (
            <ul style={{ paddingLeft: "34px" }}>
              {item.items.map(renderMobileViewMenuItems)}
            </ul>
          )}
        </div>
      );
    } else {
      return (
        <div
          key={item.key}
          className="menuLists"
          style={{
            color:
              pathname === item.link
                ? "#FF3E5B"
                : theme === "light"
                ? "#000"
                : "#fff",
          }}
        >
          <div
            className="items"
            style={{
              color: IsExpand ? "#FF3E5B" : "",
              margin: "0",
            }}
          >
            {/* icons */}
            {item.icon && <small>{item.icon}</small>}
            {/* items */}
            <div
              // style={{
              //   color:
              //     IsExpand || pathname === item.link
              //       ? "#FF3E5B"
              //       : theme === "light"
              //       ? "black"
              //       : "#f2f2f2",
              // }}
              onClick={() => {
                handleRedirect(item.link);
                handleSidebar();
              }}
              title={item.name && item.name}
              className="itemName"
            >
              {item.name}
              {/* {wordSlice(item.name)} */}
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <div
      className={`mobileViewMenuListContainer ${
        theme === "light" ? "lightScrollbar" : "darkScrollbar"
      }`}
    >
      {menuItems.map(renderMobileViewMenuItems)}
    </div>
  );
}

export default MobileView;
