import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.scss";

const Tooltips = (
  items,
  setCollapsed,
  collapsed,
  handleSidebarCollapsed,
  toggleCollapsed
) => {
  const theme = useSelector((state) => state.theme);
  // current routes
  const router = useNavigate();
  const pathname = window.location.pathname;
  const activeRoutes = pathname.split("/")[1];
  const [activeLinks, setActiveLinks] = useState("");

  useEffect(() => {
    if (!activeLinks) {
      if (pathname === items.items.link) {
        setActiveLinks(activeRoutes);
      }
    } else {
      setActiveLinks(activeRoutes);
    }
  }, [items]);

  // collapsed
  const [activeExpand, setActiveExpand] = useState(false);
  const handleExpanded = () => {
    setActiveExpand(!activeExpand);
  };

  const handleRoutes = (links) => {
    router(links);
    setActiveLinks(links);

    // open sidebar
    // const sidebar = document.querySelector(".sidebar");

    // sidebar.classList.add("desktopCollapse");
    // sidebar.classList.remove("desktopStrip");
  };

  return (
    <div
      className={`sidebarClosed ${
        theme === "light" ? "lightTheme" : "darkTheme"
      }`}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          cursor: "pointer",
        }}
        onClick={() => handleExpanded()}
      >
        <span
          style={{
            color:
              activeExpand === true
                ? "#ff3e5b"
                : activeRoutes || (pathname === items.items.link && "#ff3e5b"),
          }}
          onClick={() => handleRoutes(items?.items?.link)}
        >
          {items?.items?.name}
        </span>
        {/* arrow icons */}
        {/* {items.items.isFolder && (
          <span
            style={{
              transition: "transform 0.3s ease-in-out",
              color: activeExpand && "#FF3E5B",
              transform: activeExpand && "rotate(180deg)",
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
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </span>
        )} */}
      </div>
      {/* {activeExpand && items.items.isFolder && (
        <ul className="tooltip-sub-menu">
          {items.items.items.map((el, index) => (
            <Tooltips key={index} items={el} />
          ))}
        </ul>
      )} */}
    </div>
  );
};

function MenuItems({
  ele,
  collapsed,
  setCollapsed,
  expandItemsKey,
  setExpandItemsKey,
  toggleCollapsed,
}) {
  const theme = useSelector((state) => state.theme);

  const [expands, setExpands] = useState(false);
  const [activeTooltips, setActiveTooltips] = useState("");
  const router = useNavigate();

  const [activeLinks, setActiveLinks] = useState("");

  const pathname = window.location.pathname;

  // useEffect(() => {
  //   const slashCount = (pathname.match(/\//g) || []).length;

  //   console.log(slashCount > 1);
  // }, [pathname]);

  const handleExpanded = (key) => {
    if (collapsed === true) {
      if (ele.isFolder) {
        setExpands(!expands);
        // setExpandItems(id)

        // if (expandItemsKey === key) {
        //   setExpandItemsKey(0);
        // } else {
        //   setExpandItemsKey(key);
        // }
      }
    }
  };

  const handleRoutes = (ele) => {
    router(ele);
  };

  const handleSidebarCollapsed = () => {
    if (collapsed === false) {
      setCollapsed(!collapsed);
    }
  };

  useEffect(() => {
    if (collapsed === false) {
      setActiveTooltips("");
    }
  }, [collapsed]);

  useEffect(() => {
    const activeLinksExpand = pathname.split("/")[1];
    setActiveLinks(activeLinksExpand);
  }, [ele.link, pathname]);

  const wordSlice = (word) => {
    if (word.length > 22) {
      return word.slice(0, 22) + "...";
    } else {
      return word;
    }
  };

  return (
    <li
      style={{
        justifyContent: collapsed ? "space-between" : "center",
      }}
      onMouseLeave={() => collapsed === false && setActiveTooltips("")}
    >
      <div
        style={{
          justifyContent: collapsed ? "" : "center",
          cursor: ele.isFolder && "pointer",
        }}
        className={`menu-items-heading ${ele.isFolder && "cursorPointer"}`}
        onClick={() => handleExpanded(ele.key)}
      >
        <p
          onClick={() => handleRoutes(ele.link)}
          onMouseOver={() => collapsed === false && setActiveTooltips(ele.name)}
          style={{ cursor: ele.name && "pointer" }}
        >
          {/* icons */}
          {/* ele.isFolder && collapsed === true
                    ? expands && "#ff3e5b"
                    : activeLinks === ele.link && "#ff3e5b" */}
          {ele.icon && (
            <small
              style={{
                // color:ele.isFolder && collapsed && expands && "#ff3e5b" || activeLinks === ele.link && "#ff3e5b",
                color:
                  ele.isFolder && collapsed === true
                    ? (expands && "#ff3e5b") ||
                      (pathname === ele.link && "#ff3e5b")
                    : pathname === ele.link && "#ff3e5b",
              }}
              onClick={() => handleSidebarCollapsed()}
            >
              {ele.icon}
            </small>
          )}
          {/* items text */}
          {collapsed === true && (
            <span
              className={`${
                collapsed
                  ? ""
                  : `sidebarClosed ${
                      theme === "light" ? "lightTheme" : "darkTheme"
                    }`
              }`}
              style={{
                color: ele.isFolder
                  ? expands && "#ff3e5b"
                  : pathname === ele.link && "#ff3e5b",
              }}
              title={ele.name}
            >
              {/* {ele.name} */}
              {wordSlice(ele.name)}
            </span>
          )}
        </p>
        {/* arrow icons */}
        {collapsed && ele.isFolder && (
          <span
            style={{
              zIndex: "-1",
              transform: expands && "rotate(180deg)",
              // transform: expandItemsKey === ele.key && "rotate(180deg)",
              // transition: "transform 0.3s ease-in-out",
              color: expands && "#FF3E5B",
              // color: expandItemsKey === ele.key && "#FF3E5B",
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
        )}
      </div>
      {ele.isFolder && collapsed === true && expands && (
        <ul className="sub-menu">
          {ele.items.map((el, index) => (
            <MenuItems
              key={index}
              ele={el}
              collapsed={collapsed}
              // id={index}
              // expandsKey={expandsKey}
              // setExpandsKey={setExpandsKey}
            />
          ))}
        </ul>
      )}
      {/* tooltips */}
      {collapsed === false && activeTooltips && (
        <div
          className="tooltips"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#545454",
            boxShadow:
              theme === "light"
                ? " 0 0 3px rgba(0, 0, 0, 0.2)"
                : "1px 0px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
        >
          <Tooltips
            items={ele}
            handleRoutes={handleRoutes}
            // setCollapsed={setCollapsed}
            // collapsed={collapsed}
            // handleSidebarCollapsed={handleSidebarCollapsed}
            toggleCollapsed={toggleCollapsed}
          />
        </div>
      )}
    </li>
  );
}

export default MenuItems;
