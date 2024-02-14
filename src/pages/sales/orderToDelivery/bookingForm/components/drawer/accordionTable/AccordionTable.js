import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function AccordionTable({ data, dataType, type }) {
  const theme = useSelector((state) => state.theme);
  const [accordionCollapsed, setAccordionCollapsed] = useState(false);

  return (
    <div
      className="accordionTable"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        border: `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
        // boxShadow:
        //   type === "accordionTwo"
        //     ? theme === "light"
        //       ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
        //       : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)"
        //     : "",
      }}
    >
      <div className="accordionHeader">
        <span style={{ fontSize: 16, fontWeight: 700 }}>{data.title}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* icons */}
          <span
            onClick={() => setAccordionCollapsed(!accordionCollapsed)}
            style={{ cursor: "pointer" }}
          >
            {accordionCollapsed ? (
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
                  d="M19.2002 11.9999C19.2002 12.3313 18.9316 12.5999 18.6002 12.5999L5.4002 12.5999C5.06882 12.5999 4.80019 12.3313 4.80019 11.9999C4.80019 11.6685 5.06882 11.3999 5.4002 11.3999L18.6002 11.3999C18.9316 11.3999 19.2002 11.6685 19.2002 11.9999Z"
                  fill="#FF3E5B"
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
                  d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                  fill="#FF3E5B"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
      {/* contents */}
      {accordionCollapsed && (
        <div
          className={`accordionContents ${data.type}`}
          style={{
            borderTop: `1px solid ${theme === "light" ? "#e6e6e6" : "#232324"}`,
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <table
            className="table"
            style={{ borderColor: theme === "light" ? "#e6e6e6" : "#232324" }}
          >
            {/* table head */}
            <thead className="tableHead">
              {data.headContent.map((ele, index) => {
                return (
                  <th key={index} className="tableHeadText">
                    {ele.text}
                  </th>
                );
              })}
            </thead>
            {/* body content */}
            <tbody
              style={{
                backgroundColor: theme === "light" ? "white" : "#0B0B0C",
              }}
            >
              {data.bodyContent.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td
                      style={{
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      {ele.one ? ele.one : "--"}
                    </td>
                    <td
                      style={{
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      {ele.two ? ele.two : "--"}
                    </td>
                    <td
                      style={{
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      {ele.three ? ele.three : "--"}
                    </td>
                    <td
                      style={{
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      {ele.four ? ele.four : "--"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AccordionTable;
