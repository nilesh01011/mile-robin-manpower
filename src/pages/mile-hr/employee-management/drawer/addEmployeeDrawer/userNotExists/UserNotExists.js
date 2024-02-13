import React from "react";
import { useSelector } from "react-redux";

function UserNotExists() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className="messageContainer"
      style={{
        borderColor: "#F99C22",
        backgroundColor: theme === "light" ? "#FEE9CD" : "#321D01",
      }}
    >
      {/* icons */}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.0014 9.73341C38.3473 7.4222 41.6527 7.4222 42.9986 9.7334L71.5089 58.6947C72.9045 61.0914 71.1444 64 68.5103 64H11.4897C8.85558 64 7.09553 61.0914 8.49111 58.6947L37.0014 9.73341ZM40 12.5684L12.4228 59.9273H67.5772L40 12.5684ZM40 25.8186C41.1043 25.8186 41.9995 26.7303 41.9995 27.8549V45.1636C41.9995 46.2883 41.1043 47.2 40 47.2C38.8957 47.2 38.0005 46.2883 38.0005 45.1636V27.8549C38.0005 26.7303 38.8957 25.8186 40 25.8186ZM40.0001 50.5903C41.1044 50.5904 41.9996 51.5021 41.9995 52.6268L41.9995 52.7378C41.9994 53.8625 41.1042 54.7741 39.9999 54.7741C38.8955 54.774 38.0004 53.8622 38.0005 52.7376L38.0005 52.6265C38.0005 51.5018 38.8958 50.5902 40.0001 50.5903Z"
            fill="#F99C22"
          />
        </svg>
      </span>
      {/* error text */}
      <p
        style={{
          color: theme === "light" ? "#545454" : "#a3a3a3",
        }}
      >
        <span> No employee record found.</span>

        <span>
          Please{" "}
          <span
            style={{
              color: theme === "light" ? "#0B0B0C" : "#fff",
              fontWeight: 500,
            }}
          >
            "Add New Employee"
          </span>{" "}
          using button below
        </span>
      </p>
    </div>
  );
}

export default UserNotExists;
