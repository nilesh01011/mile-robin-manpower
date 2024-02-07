import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    if (!domNode.current) {
      return;
    }
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

function NotificationItems({ data, readMarkAll }) {
  const theme = useSelector((state) => state.theme);
  const [editMail, setEditMail] = useState(false);
  const [markAsRead, setMarkAsRead] = useState(true);

  let domNode = useClickOutSide(() => {
    setEditMail(false);
  });

  const handleMarkRead = () => {
    data.readMark = !data.readMark;
    setMarkAsRead(false);
    setEditMail(false);
  };

  return (
    <div
      ref={domNode}
      className={`notificationItems ${
        theme === "light" ? "lightTheme" : "darkTheme"
      }`}
      style={{
        backgroundColor: data.readMark === false || readMarkAll ? theme === "light" ? "#E6E6E6" : "#1C1C1C" : "",
      }}
    >
      {readMarkAll || (data.readMark === true && <span className="status"></span>)}
      {/* content */}
      <div className="content">
        {/* title */}
        <h4
        // className={`${data.readMark === true ? "active" : ""}`}
        >
          {data.title}
        </h4>
        {/* description text */}
        <p>{data.text}</p>
        {/* master and time data */}
        <div className="master_TimeData">
          {/* master */}
          <span style={{ color: theme === "light" ? "#545454" : "#858585" }}>
            {data.master}
          </span>
          {/* divider */}
          <div className="divider"></div>
          {/* time and date */}
          <p className="dateTime">
            {data.date && (
              <>
                <span>{data.date}</span>
                <span className="dots"></span>
              </>
            )}
            <span>{data.time}</span>
          </p>
        </div>
      </div>
      {/* edit */}
      <div className="edits">
        <span onClick={() => setEditMail(!editMail)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.99998 8.66668C8.36817 8.66668 8.66665 8.3682 8.66665 8.00001C8.66665 7.63182 8.36817 7.33334 7.99998 7.33334C7.63179 7.33334 7.33331 7.63182 7.33331 8.00001C7.33331 8.3682 7.63179 8.66668 7.99998 8.66668Z"
              fill="#FF3E5B"
              stroke="#FF3E5B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99998 3.99999C8.36817 3.99999 8.66665 3.70151 8.66665 3.33332C8.66665 2.96513 8.36817 2.66666 7.99998 2.66666C7.63179 2.66666 7.33331 2.96513 7.33331 3.33332C7.33331 3.70151 7.63179 3.99999 7.99998 3.99999Z"
              fill="#FF3E5B"
              stroke="#FF3E5B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99998 13.3333C8.36817 13.3333 8.66665 13.0349 8.66665 12.6667C8.66665 12.2985 8.36817 12 7.99998 12C7.63179 12 7.33331 12.2985 7.33331 12.6667C7.33331 13.0349 7.63179 13.3333 7.99998 13.3333Z"
              fill="#FF3E5B"
              stroke="#FF3E5B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {editMail && (
        <div
          className="editMails"
          style={{
            borderColor: theme === "light" ? "#0B0B0C" : "#f2f2f2",
            backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                : "0px 2px 4px 0px rgba(255, 255, 255, 0.15",
          }}
        >
          <span className={`${theme === "light" ? "light" : "dark"}`}>
            Archive
          </span>
          <span
            onClick={() => handleMarkRead()}
            className={`${theme === "light" ? "light" : "dark"}`}
          >
            Mark as read
          </span>
        </div>
      )}
    </div>
  );
}

export default NotificationItems;
