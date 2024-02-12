import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function ToastNotifications({ messagesHead, messagesBody, toastType }) {
  const theme = useSelector((state) => state.theme);

  const [toastStatus, setToastStatus] = useState(true);

    useEffect(() => {
        if (toastStatus === true) {
          setTimeout(() => {
            setToastStatus(false);
          }, 5500);
        }
      }, [toastStatus]);

  return (
    <div className="toastNotification">
      <div
        className={`toastContainer`}
        style={{
          backgroundColor: theme === "light" ? "#E2F9D2" : "#162D06",
          right: toastStatus === true ? "16px" : "-120%",
        }}
      >
        {/* left side */}
        <div className="leftSideToast">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
                d="M10 3.5C6.13401 3.5 3 6.63401 3 10.5C3 14.366 6.13401 17.5 10 17.5C13.866 17.5 17 14.366 17 10.5C17 6.63401 13.866 3.5 10 3.5ZM2 10.5C2 6.08172 5.58172 2.5 10 2.5C14.4183 2.5 18 6.08172 18 10.5C18 14.9183 14.4183 18.5 10 18.5C5.58172 18.5 2 14.9183 2 10.5ZM14.5345 7.66131C14.7215 7.86444 14.7085 8.18076 14.5054 8.36781L9.0755 13.3678C8.88269 13.5454 8.58551 13.5439 8.39448 13.3644L5.49101 10.6372C5.28974 10.4481 5.27983 10.1317 5.46889 9.9304C5.65795 9.72913 5.97438 9.71923 6.17566 9.90829L8.74019 12.3172L13.828 7.63219C14.0311 7.44513 14.3474 7.45817 14.5345 7.66131Z"
                fill="#56AC18"
              />
            </svg>
          </span>
          {/* text */}
          <div className="toastContents">
            <p
              style={{
                color: theme === "light" ? "#56AC18" : "#56AC18",
                textTransform: "capitalize",
              }}
            >
              {messagesHead}
            </p>
            <span>{messagesBody}</span>
          </div>
        </div>
        {/* right side */}
        <div className="rightSideToast">
          <span onClick={() => setToastStatus(!toastStatus)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.41746 2.41941C2.53136 2.30551 2.71603 2.30551 2.82994 2.41941L6.9987 6.58817L11.1675 2.41941C11.2814 2.30551 11.466 2.30551 11.5799 2.41941C11.6938 2.53331 11.6938 2.71799 11.5799 2.83189L7.41118 7.00065L11.5799 11.1694C11.6938 11.2833 11.6938 11.468 11.5799 11.5819C11.466 11.6958 11.2814 11.6958 11.1675 11.5819L6.9987 7.41313L2.82994 11.5819C2.71603 11.6958 2.53136 11.6958 2.41746 11.5819C2.30356 11.468 2.30356 11.2833 2.41746 11.1694L6.58622 7.00065L2.41746 2.83189C2.30356 2.71799 2.30356 2.53331 2.41746 2.41941Z"
                fill="#56AC18"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ToastNotifications;
