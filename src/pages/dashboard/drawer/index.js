import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { actionItems, latestNews } from "../../../data";
import ItemsList from "../actionitems/itemsList/ItemsList";

function NewsDrawer({
  drawerSliderID,
  isDrawerOpen,
  setIsDrawerOpen,
  drawerType,
}) {
  const theme = useSelector((state) => state.theme);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (drawerType) {
      // console.log(drawerType);
    }
  }, [drawerType]);

  useEffect(() => {
    setContent([]);
    if (drawerType === "Latest News") {
      if (drawerSliderID) {
        latestNews.map((ele) => {
          if (ele.id === drawerSliderID) {
            return setContent(ele);
          }
        });
      }
    }
    // Action Items
    if (drawerType === "Action Items") {
      if (drawerSliderID) {
        actionItems.map((ele) => {
          if (ele.id === drawerSliderID) {
            return setContent(ele.contents);
          }
        });
      }
    }
  }, [drawerType, drawerSliderID]);

  const handleDrawerClosed = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`drawerContainer ${theme === "light" ? "light" : "dark"}`}
      style={{
        right: isDrawerOpen ? "0" : "-150%",
        backgroundColor: theme === "light" ? "white" : "#242424",
        boxShadow:"-5px 0px 50px 0px #00000033"
      }}
    >
      {/* title */}
      <div
        className="title"
        style={{
          borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
          backgroundColor: theme === "light" ? "white" : "#242424",
          zIndex: 5,
        }}
      >
        {/* mobile view cancel icon */}
        <span
          className="mobileViewCloseIcons"
          onClick={() => handleDrawerClosed()}
          style={{ cursor: "pointer" }}
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
              d="M14.3648 2.15803C14.1759 1.95657 13.8595 1.94637 13.658 2.13523L5.65803 9.63523C5.5572 9.72976 5.5 9.8618 5.5 10C5.5 10.1382 5.5572 10.2702 5.65803 10.3648L13.658 17.8648C13.8595 18.0536 14.1759 18.0434 14.3648 17.842C14.5536 17.6405 14.5434 17.3241 14.342 17.1352L6.73106 10L14.342 2.86477C14.5434 2.67591 14.5536 2.35949 14.3648 2.15803Z"
              fill="#FF3E5B"
            />
          </svg>
        </span>

        <h4 style={{ fontSize: 18 }}>{drawerType}</h4>
        {/* cancel icon */}
        <span
          onClick={() => handleDrawerClosed()}
          style={{ cursor: "pointer" }}
          className="desktopViewCloseIcons"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.45535 3.95541C3.61807 3.79269 3.88189 3.79269 4.04461 3.95541L9.99998 9.91078L15.9554 3.95541C16.1181 3.79269 16.3819 3.79269 16.5446 3.95541C16.7073 4.11813 16.7073 4.38195 16.5446 4.54467L10.5892 10.5L16.5446 16.4554C16.7073 16.6181 16.7073 16.8819 16.5446 17.0447C16.3819 17.2074 16.1181 17.2074 15.9554 17.0447L9.99998 11.0893L4.04461 17.0447C3.88189 17.2074 3.61807 17.2074 3.45535 17.0447C3.29263 16.8819 3.29263 16.6181 3.45535 16.4554L9.41072 10.5L3.45535 4.54467C3.29263 4.38195 3.29263 4.11813 3.45535 3.95541Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      {/* contents */}
      <div
        className={`contents ${
          drawerType === "Latest News" && "latestNewsDiv"
        }`}
      >
        {drawerType === "Latest News" && (
          <>
            {/* heading */}
            <div className="newsHeading">
              <h5>{content.newsTitle}</h5>
              {/* date */}
              <p
                className="date"
                style={{
                  backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  borderColor: theme === "light" ? "#E6E6E6" : "#635d5d",
                  color: "#858585",
                }}
              >
                {content.date}
              </p>
            </div>
            {/* text one */}
            <p style={{ color: theme === "light" ? "#545454" : "#858585" }}>
              {content.newsText}
            </p>
            <p style={{ color: theme === "light" ? "#545454" : "#858585" }}>
              {content.newsText1}
            </p>
            <img src={content.newsImgSrc} />
            <p style={{ color: theme === "light" ? "#545454" : "#858585" }}>
              {content.newsText2}
            </p>
          </>
        )}
        {/* Action Items */}
        {drawerType === "Action Items" &&
          Object.values(content).map((ele) => (
            <ItemsList key={ele.id} items={ele} />
          ))}
      </div>
    </div>
  );
}

export default NewsDrawer;
