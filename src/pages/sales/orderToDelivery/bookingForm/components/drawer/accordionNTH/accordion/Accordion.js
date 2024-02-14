import React, { useState } from "react";
import { useSelector } from "react-redux";
import GridContent from "../../gridContent/GridContent";

function Accordion({ data,drawerType }) {
  const theme = useSelector((state) => state.theme);
  const [accordionCollapsed, setAccordionCollapsed] = useState(false);
  return (
    <div
      //   className="accordionNTH"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        border: `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
        padding: 20,
        borderRadius:4,
        boxShadow:theme === "light" ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)" : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)"
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{data.title}</span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: theme === "light" ? "#858585" : "#858585",
            }}
          >
            {data.text}
          </span>
        </p>
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
        <div className={`gridContents`} style={{marginTop:20}}>
          {data.contents.map((ele, index) => {
            return ele.contents.map((el,index) => {
                // console.log(el)
                return <GridContent data={el} key={index} drawerType={drawerType} />
            })
          })}
        </div>
      )}
    </div>
  );
}

export default Accordion;
