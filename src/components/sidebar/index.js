import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../../store/slices/ThemeSlices";
import SearchInput from "./sidebarSearchInput/SidebarSearchInput";
import {
  B_DARK_THEME,
  B_LIGHT_THEME,
  ROBIN_DARK_THEME,
  ROBIN_LIGHT_THEME,
} from "../../assets";
import MenuItems from "./menuItems/MenuItems";
import { menuItems, searchItems } from "../../data";
import MobileView from "./mobileView/MobileView";

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const handlerEvent = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);

    return () => {
      document.removeEventListener("mousedown", handlerEvent);
    };
  }, [handler]);

  return domNode;
};

function SidebarRedevelop() {
  const [collapsed, setCollapsed] = useState(true);
  const [searchMenuItems, setSearchMenuItems] = useState("");

  // Scrollbar
  const [sidebarScrollBar, setSidebarScrollBar] = useState(false);
  // Search
  const [searchResultsData, setSearchResultData] = useState([]);
  const [searchBoxClicked, setSearchBoxClicked] = useState(false);

  const [resultNotFound, setResultNotFound] = useState(false);

  let domNode = useClickOutSide(() => {
    setSearchBoxClicked(false);
  });

  const pathname = window.location.pathname;

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const router = useNavigate();
  // Theme changed
  const handleThemeChange = (theme) => {
    dispatch(toggleTheme(theme));
  };
  // Sidebar collapsed
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onSearch = (value) => {
    const searchValue = value.toLowerCase();
    setSearchMenuItems(searchValue);

    // console.log("Value:", value);

    if (!searchMenuItems) return setSearchResultData([]);

    if (searchMenuItems) {
      const results =
        value &&
        searchItems.filter((ele) => {
          return ele.name.toLowerCase().includes(searchValue);
        });

      // console.log(results);

      if (!results) {
        setSearchResultData([]);
        setResultNotFound(!resultNotFound);
      }

      setSearchResultData(results);
    }
  };

  const handleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector("#overlay");

    if (sidebar && overlay) {
      sidebar.style.left = "-150%";
      overlay.style.display = "none";
      document.querySelector("body").style.overflow = "auto";
    }
  };

  // menu items expand
  const [expandItemsKey, setExpandItemsKey] = useState(0);

  // search menu items word slice
  const wordSlice = (word) => {
    if (word.length > 32) {
      return word.slice(0, 32) + "...";
    } else {
      return word;
    }
  };
  return (
    <>
      <aside
        className={`sidebar ${collapsed ? "desktopCollapse" : "desktopStrip"}`}
        style={{
          background: theme === "light" ? "white" : "#1C1C1C",
          boxShadow:
            theme === "light"
              ? " 0 0 3px rgba(0, 0, 0, 0.2)"
              : "1px 0px 1px 0px rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* ================ main sidebar ================ */}
        <div
          className={`sidebarContainer ${
            theme === "light" ? "lightTheme" : "darkTheme"
          }`}
          // style={{ maxWidth: collapsed ? "100%" : 60 }}
        >
          {/* ============= toggle button ================= */}
          <div
            onClick={toggleCollapsed}
            className="sidebarBtn desktopViewBtn"
            style={
              {
                // backgroundColor: theme === "light" ? "white" : "#1C1C1C",
              }
            }
          >
            {/* images */}
            {collapsed ? (
              <img
                src={theme === "light" ? ROBIN_LIGHT_THEME : ROBIN_DARK_THEME}
                alt="logo"
                height={26}
              />
            ) : (
              <img
                src={theme === "light" ? B_LIGHT_THEME : B_DARK_THEME}
                alt="logo"
                height={24}
              />
            )}
            {/* icons */}
            <span
              className={`icons ${collapsed ? "iconRotate" : ""}`}
              style={{
                color:
                  collapsed === false
                    ? theme === "light"
                      ? "#0B0B0C"
                      : "#ffffff"
                    : "#FF3E5B",
                marginLeft: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <svg
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
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.63523 2.15803C5.8241 1.95657 6.14052 1.94637 6.34197 2.13523L14.342 9.63523C14.4428 9.72976 14.5 9.8618 14.5 10C14.5 10.1382 14.4428 10.2702 14.342 10.3648L6.34197 17.8648C6.14052 18.0536 5.8241 18.0434 5.63523 17.842C5.44637 17.6405 5.45657 17.3241 5.65803 17.1352L13.2689 10L5.65803 2.86477C5.45657 2.67591 5.44637 2.35949 5.63523 2.15803Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          {/* mobile view cancel buttons */}
          <div className="sidebarBtn mobileViewBtn">
            <img
              src={theme === "light" ? ROBIN_LIGHT_THEME : ROBIN_DARK_THEME}
              alt="logo"
              height={26}
              onClick={() => {
                // router("/dashboard");
                handleSidebar();
              }}
            />
            {/* mobile view icons */}
            <span
              className="mobileIcons"
              style={{
                color: "#FF3E5B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.63523 2.15803C5.8241 1.95657 6.14052 1.94637 6.34197 2.13523L14.342 9.63523C14.4428 9.72976 14.5 9.8618 14.5 10C14.5 10.1382 14.4428 10.2702 14.342 10.3648L6.34197 17.8648C6.14052 18.0536 5.8241 18.0434 5.63523 17.842C5.44637 17.6405 5.45657 17.3241 5.65803 17.1352L13.2689 10L5.65803 2.86477C5.45657 2.67591 5.44637 2.35949 5.63523 2.15803Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          {/* ================= search inputs ================ */}
          <div
            className="searchInputContainer desktopView"
            ref={domNode}
            style={{
              paddingTop: collapsed === false ? 8 : 0,
              paddingBottom: 14,
              top: collapsed === false ? 52 : 54,
              // backgroundColor: theme === "light" ? "white" : "#1C1C1C",
              display: collapsed === false && "flex",
              justifyContent: collapsed === false && "center",
              paddingLeft: collapsed ? 14 : 0,
              paddingRight: collapsed ? 14 : 0,
              maxWidth: collapsed ? "100%" : 68,
              // maxWidth: collapsed ? "100%" : 60,
            }}
          >
            {collapsed === true && (
              <SearchInput
                setSearchMenuItems={setSearchMenuItems}
                onSearch={onSearch}
                searchMenuItems={searchMenuItems}
                collapsed={collapsed}
                // Search box clicked
                searchBoxClicked={searchBoxClicked}
                setSearchBoxClicked={setSearchBoxClicked}
              />
            )}
            {/* {collapsed === false && ( */}
            <span
              onClick={() => setCollapsed(true)}
              style={{
                color:
                  collapsed === true && searchMenuItems.length !== 0
                    ? "#ff3e5b"
                    : theme === "light"
                    ? "black"
                    : "white",
                cursor: "pointer",
              }}
              className={`searchIcons ${
                collapsed === true && "searchIconsAbsolute"
              }`}
            >
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="20"
                width="29"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg> */}
              {collapsed === true ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.69565 2C4.99775 2 2 4.99775 2 8.69565C2 12.3936 4.99775 15.3913 8.69565 15.3913C10.3646 15.3913 11.891 14.7807 13.0635 13.7706L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L13.7706 13.0635C14.7807 11.891 15.3913 10.3646 15.3913 8.69565C15.3913 4.99775 12.3936 2 8.69565 2ZM3 8.69565C3 5.55003 5.55003 3 8.69565 3C11.8413 3 14.3913 5.55003 14.3913 8.69565C14.3913 11.8413 11.8413 14.3913 8.69565 14.3913C5.55003 14.3913 3 11.8413 3 8.69565Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4348 2.40002C5.99729 2.40002 2.39999 5.99732 2.39999 10.4348C2.39999 14.8723 5.99729 18.4696 10.4348 18.4696C12.4376 18.4696 14.2692 17.7368 15.6762 16.5248L20.5757 21.4243C20.81 21.6586 21.1899 21.6586 21.4243 21.4243C21.6586 21.19 21.6586 20.8101 21.4243 20.5758L16.5247 15.6762C17.7368 14.2692 18.4696 12.4376 18.4696 10.4348C18.4696 5.99732 14.8723 2.40002 10.4348 2.40002ZM3.59999 10.4348C3.59999 6.66006 6.66003 3.60002 10.4348 3.60002C14.2095 3.60002 17.2696 6.66006 17.2696 10.4348C17.2696 14.2096 14.2095 17.2696 10.4348 17.2696C6.66003 17.2696 3.59999 14.2096 3.59999 10.4348Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </span>
            {/* )} */}

            {/* search results */}
            {searchMenuItems &&
              collapsed === true &&
              searchResultsData.length >= 1 && (
                <div
                  className={`searchResults ${
                    theme === "light" ? "lightThemeScroll" : "darkThemeScroll"
                  }`}
                  style={{
                    backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
                    borderColor: theme === "light" ? "#b5b5b6" : "#342c2c",
                    color: theme === "light" ? "#0B0B0C" : "#ffffff",
                    zIndex: 1000,
                  }}
                >
                  <ul
                    className={`${
                      theme === "light" ? "lightTheme" : "darkTheme"
                    }`}
                  >
                    {searchResultsData !== 0 &&
                      searchResultsData?.map((ele, index) => {
                        // const regex = new RegExp(ele);

                        // console.log(searchMenuItems);
                        return (
                          <li
                            key={index}
                            // className={`${pathname === ele.link && "active"}`}
                            onClick={() => {
                              router(ele.link);
                              setSearchBoxClicked(false);
                              setSearchResultData([]);
                              setSearchMenuItems("");
                            }}
                            // style={{
                            //   color: pathname === ele.name && "#ff3e5b",
                            // }}
                          >
                            {wordSlice(ele.name)}
                          </li>
                        );
                      })}

                    {/* {resultNotFound && <span>No result found.</span>} */}
                  </ul>
                </div>
              )}
            {/* search not found */}
            {searchBoxClicked &&
              collapsed === true &&
              searchResultsData.length === 0 && (
                <div
                  className={`searchResults ${
                    theme === "light" ? "lightThemeScroll" : "darkThemeScroll"
                  }`}
                  style={{
                    backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
                    borderColor: theme === "light" ? "#b5b5b6" : "#342c2c",
                    color: theme === "light" ? "#0B0B0C" : "#ffffff",
                    borderRadius: 4,
                    padding: 6,
                    fontSize: 14,
                    minHeight: "40.8px",
                    display: "flex",
                  }}
                >
                  <span
                    style={{
                      padding: "5px 12px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    No result found.
                  </span>
                </div>
              )}
          </div>

          {/* mobiles view search inputs */}
          <div
            className="searchInputContainer mobileViewSearch"
            ref={domNode}
            style={{
              paddingBottom: 10,
            }}
          >
            <SearchInput
              setSearchMenuItems={setSearchMenuItems}
              onSearch={onSearch}
              searchMenuItems={searchMenuItems}
              collapsed={collapsed}
              // Search box clicked
              searchBoxClicked={searchBoxClicked}
              setSearchBoxClicked={setSearchBoxClicked}
            />
            {/* search icons */}
            <span
              onClick={() => setCollapsed(true)}
              style={{
                // color:
                //   collapsed === true && searchMenuItems.length !== 0
                //     ? "#ff3e5b"
                //     : theme === "light"
                //     ? "black"
                //     : "white",
                color: "#ff3e5b",
                cursor: "pointer",
                top: 6,
              }}
              className="searchIcons searchIconsAbsolute"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4348 2.40002C5.99729 2.40002 2.39999 5.99732 2.39999 10.4348C2.39999 14.8723 5.99729 18.4696 10.4348 18.4696C12.4376 18.4696 14.2692 17.7368 15.6762 16.5248L20.5757 21.4243C20.81 21.6586 21.1899 21.6586 21.4243 21.4243C21.6586 21.19 21.6586 20.8101 21.4243 20.5758L16.5247 15.6762C17.7368 14.2692 18.4696 12.4376 18.4696 10.4348C18.4696 5.99732 14.8723 2.40002 10.4348 2.40002ZM3.59999 10.4348C3.59999 6.66006 6.66003 3.60002 10.4348 3.60002C14.2095 3.60002 17.2696 6.66006 17.2696 10.4348C17.2696 14.2096 14.2095 17.2696 10.4348 17.2696C6.66003 17.2696 3.59999 14.2096 3.59999 10.4348Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/* search results */}
            {searchMenuItems &&
              collapsed === true &&
              searchResultsData.length >= 1 && (
                <div
                  className={`searchResults ${
                    theme === "light" ? "lightThemeScroll" : "darkThemeScroll"
                  }`}
                  style={{
                    backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
                    borderColor: theme === "light" ? "#b5b5b6" : "#342c2c",
                    color: theme === "light" ? "#0B0B0C" : "#ffffff",
                  }}
                >
                  <ul
                    className={`${
                      theme === "light" ? "lightTheme" : "darkTheme"
                    }`}
                  >
                    {searchResultsData !== 0 &&
                      searchResultsData?.map((ele, index) => {
                        return (
                          <li
                            key={index}
                            className={`${pathname === ele.link && "active"}`}
                            onClick={() => {
                              router(ele.link);
                              setSearchBoxClicked(false);
                              setSearchResultData([]);
                              setSearchMenuItems("");
                            }}
                            style={{
                              color: pathname === ele.name && "#ff3e5b",
                            }}
                          >
                            {wordSlice(ele.name)}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            {/* search not found */}
            {searchBoxClicked &&
              collapsed === true &&
              searchResultsData.length === 0 && (
                <div
                  className={`searchResults ${
                    theme === "light" ? "lightThemeScroll" : "darkThemeScroll"
                  }`}
                  style={{
                    backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
                    borderColor: theme === "light" ? "#b5b5b6" : "#342c2c",
                    color: theme === "light" ? "#0B0B0C" : "#ffffff",
                    borderRadius: 4,
                    padding: 6,
                    fontSize: 14,
                    minHeight: "40.8px",
                    display: "flex",
                  }}
                >
                  <span
                    style={{
                      padding: "5px 12px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    No result found.
                  </span>
                </div>
              )}
          </div>

          {/* ================= menu items ================== */}
          <div
            className={`sidebarMenuItemsContainer desktopView ${
              theme === "light" ? "lightTheme" : "darkTheme"
            } ${
              sidebarScrollBar === true && collapsed === true
                ? "activeScrollbar"
                : ""
            }`}
            // onMouseEnter={() => {
            //   collapsed === true && setSidebarScrollBar(!sidebarScrollBar);
            // }}
            // onMouseLeave={() => {
            //   collapsed === true && setSidebarScrollBar(!sidebarScrollBar);
            // }}
            style={{
              overflowX: collapsed === false ? "" : "hidden",
              overflowY: collapsed === false ? "" : "scroll",
              paddingLeft: collapsed ? 14 : 0,
              paddingRight: collapsed ? 9 : 0,
              paddingTop: collapsed ? 0 : 5,
            }}
          >
            {/* desktop views */}
            <ul
              className="desktopViewSidebar"
              style={{
                paddingLeft: 0,
                color: theme === "light" ? "#0B0B0C" : "#ffffff",
                gap: 8,
              }}
            >
              {menuItems.map((ele, index) => (
                <MenuItems
                  key={index}
                  ele={ele}
                  id={index}
                  collapsed={collapsed}
                  setCollapsed={setCollapsed}
                  expandItemsKey={expandItemsKey}
                  setExpandItemsKey={setExpandItemsKey}
                  toggleCollapsed={toggleCollapsed}
                />
              ))}
            </ul>
          </div>

          <div
            className={`sidebarMenuItemsContainer mobileView ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
            // style={{
            //   overflowY: collapsed === false ? "" : "scroll",
            //   overflowX: collapsed === false ? "" : "hidden",
            //   paddingRight: collapsed ? 9 : 6,
            // }}
          >
            {/* Mobile View */}
            <MobileView
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              handleSidebar={handleSidebar}
            />
          </div>
        </div>
        {/* footer items */}
        {/* ================ theme buttons ================= */}
        <div
          className="themeContainer desktopView"
          style={{
            padding: collapsed === false ? 10 : "10px 16px",
            // padding: collapsed === false ? "7px 10px" : "10px 16px",
            backgroundColor: theme === "light" ? "#F2F2F2" : "#232324",
          }}
        >
          <div
            className="themeWrapper"
            style={{
              border: `1px solid ${theme === "dark" ? "#545454" : "#E6E6E6"}`,
            }}
          >
            {collapsed === false ? (
              <>
                {theme === "dark" ? (
                  <button
                    type="button"
                    title="Dark Theme"
                    className="themeBtn"
                    onClick={() => handleThemeChange("dark")}
                    style={{
                      backgroundColor: theme === "light" ? "#F2F2F2" : "",
                    }}
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z"
                        fill={`${
                          theme === "dark"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    title="Light Theme"
                    className="themeBtn"
                    onClick={() => handleThemeChange("light")}
                    style={{
                      backgroundColor:
                        theme === "light" ? "#F2F2F2" : "#0B0B0C",
                      cursor: "pointer",
                      width: "100%",
                      height: "26px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z"
                        fill={`${
                          theme === "light"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </button>
                )}
              </>
            ) : (
              <>
                <button
                  className="themeCollapsedBtn"
                  onClick={() => handleThemeChange("light")}
                  type="button"
                  title="Light Theme"
                  style={{
                    backgroundColor: "transparent",
                    color: theme === "light" ? "#FF3E5B" : "#fff",
                    border: `1px solid ${
                      theme === "light" ? "#FF3E5B" : "transparent"
                    }`,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z"
                        fill={`${
                          theme === "light"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </span>
                  Light Mode
                </button>
                <button
                  className="themeCollapsedBtn"
                  onClick={() => handleThemeChange("dark")}
                  type="button"
                  title="Dark Theme"
                  style={{
                    backgroundColor: "transparent",
                    color: theme === "dark" ? "#FF3E5B" : "black",
                    border: `1px solid ${
                      theme === "dark" ? "#FF3E5B" : "transparent"
                    }`,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z"
                        fill={`${
                          theme === "dark"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </span>
                  Dark Mode
                </button>
              </>
            )}
          </div>
        </div>
        {/* ================================================= */}
        {/* =============== mobile view theme ================ */}
        <div
          className="themeContainer mobileViewThemeWrapper"
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#232324",
            // position: "absolute",
            // bottom: 0,
            // left: 0,
            // right: 0,
          }}
        >
          <div
            className="themeWrapper"
            style={{
              borderTop: `1px solid ${
                theme === "dark" ? "#545454" : "#E6E6E6"
              }`,
            }}
          >
            <button
              className="themeCollapsedBtn"
              onClick={() => handleThemeChange("light")}
              type="button"
              title="Light Theme"
              style={{
                backgroundColor: "transparent",
                color: theme === "light" ? "#FF3E5B" : "#fff",
                border: `1px solid ${
                  theme === "light" ? "#FF3E5B" : "transparent"
                }`,
                whiteSpace: "nowrap",
              }}
            >
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z"
                    fill={`${
                      theme === "light"
                        ? "#FF3E5B"
                        : `${theme === "dark" ? "white" : "black"}`
                    }`}
                  />
                </svg>
              </span>
              Light Mode
            </button>
            <button
              className="themeCollapsedBtn"
              onClick={() => handleThemeChange("dark")}
              type="button"
              title="Dark Theme"
              style={{
                backgroundColor: "transparent",
                color: theme === "dark" ? "#FF3E5B" : "black",
                border: `1px solid ${
                  theme === "dark" ? "#FF3E5B" : "transparent"
                }`,
                whiteSpace: "nowrap",
              }}
            >
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z"
                    fill={`${
                      theme === "dark"
                        ? "#FF3E5B"
                        : `${theme === "dark" ? "white" : "black"}`
                    }`}
                  />
                </svg>
              </span>
              Dark Mode
            </button>
          </div>
        </div>
      </aside>
      {/* mobile device */}
      {/* overlay */}
      <div id="overlay" onClick={handleSidebar}  style={{backgroundColor:theme === "light"?"rgba(0, 0, 0, 0.8)":"rgba(84, 84, 84, 0.8)"}}></div>
    </>
  );
}

export default SidebarRedevelop;
