import React from "react";
import Overlay from "../../../../../components/overlay/Overlay";
import { useSelector } from "react-redux";
import "./styles.scss";

function ViewBusinessPlan({
  setViewBusinessPlanDrawer,
  viewBusinessPlanDrawer,
}) {
  const theme = useSelector((state) => state.theme);

  const theadItems = [
    {
      name: "#",
    },
    {
      name: "Role",
    },
    {
      name: "Employee Required as per Business plan",
    },
    {
      name: "Available",
    },
  ];

  const tableBody = [
    {
      one: "1",
      two: "Accessories Executive",
      three: "8",
      four: "8",
      color: "#56AC18",
    },
    {
      one: "2",
      two: "Accessories Manager",
      three: "8",
      four: "9",
      color: "#56AC18",
    },
    {
      one: "3",
      two: "Accounts Manager",
      three: "8",
      four: "6",
      color: "#ED302D",
    },
    {
      one: "4",
      two: "Activity Coordinator",
      three: "5",
      color: "#ED302D",
      four: "2",
    },

    {
      one: "5",
      two: "Branch In-Charge",
      three: "6",
      color: "#ED302D",
      four: "1",
    },
    {
      one: "6",
      two: "Branch Manager",
      three: "0",
      four: "0",
    },
  ];
  return (
    <>
      <Overlay
        showOverlay={viewBusinessPlanDrawer}
        hideOverlay={setViewBusinessPlanDrawer}
      />
      <div
        className="drawerContainer viewBusinessPlan"
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#0B0B0C",
          // width: "93%",
          right: viewBusinessPlanDrawer ? 0 : "-150%",
        }}
      >
        {/* headers */}
        <div
          className="viewBusinessPlanHeader"
          style={{
            boxShadow:
              theme === "light"
                ? "0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                : "rgb(255 255 255 / 15%) 0px 1px 1px 0px",
          }}
        >
          {/* text */}
          <span className="title">View Business Plan</span>
          {/* icons */}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setViewBusinessPlanDrawer(!viewBusinessPlanDrawer)}
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
                d="M3.45529 3.45535C3.61801 3.29263 3.88183 3.29263 4.04455 3.45535L9.99992 9.41072L15.9553 3.45535C16.118 3.29263 16.3818 3.29263 16.5445 3.45535C16.7073 3.61807 16.7073 3.88189 16.5445 4.04461L10.5892 9.99998L16.5445 15.9554C16.7073 16.1181 16.7073 16.3819 16.5445 16.5446C16.3818 16.7073 16.118 16.7073 15.9553 16.5446L9.99992 10.5892L4.04455 16.5446C3.88183 16.7073 3.61801 16.7073 3.45529 16.5446C3.29257 16.3819 3.29257 16.1181 3.45529 15.9554L9.41066 9.99998L3.45529 4.04461C3.29257 3.88189 3.29257 3.61807 3.45529 3.45535Z"
                fill="#0B0B0C"
              />
            </svg>
          </span>
        </div>
        {/* contents */}
        <div className="viewBusinessPlanTableContainer">
          <div
            className="viewBusinessPlanTable"
            style={{
              border: `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
            }}
          >
            <table style={{ width: "100%", height: "100%", borderSpacing: 0 }}>
              <thead
                style={{
                  backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  width: "100%",
                }}
              >
                <tr>
                  {theadItems.map((ele, index) => (
                    <th
                      key={index}
                      style={{
                        textAlign: index <= 1 ? "left" : "right",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: index === 0 && 20,
                        paddingRight: theadItems.length - 1 === index && 20,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {ele.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="viewBusinessTableBody">
                {tableBody.map((ele, index) => (
                  <tr
                    key={index}
                    className={theme === "light" ? "lightHover" : "darkHover"}
                  >
                    <td
                      style={{
                        color: theme === "light" ? "#545454" : "#a3a3a3",
                        paddingLeft: 20,
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                      }}
                    >
                      {ele.one}
                    </td>
                    <td
                      style={{
                        color: theme === "light" ? "#545454" : "#a3a3a3",
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                      }}
                    >
                      {ele.two}
                    </td>
                    <td
                      style={{
                        color: theme === "light" ? "#545454" : "#a3a3a3",
                        textAlign: "right",
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                      }}
                    >
                      {ele.three}
                    </td>
                    <td
                      style={{
                        color: theme === "light" ? "#545454" : "#a3a3a3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: 4,
                        paddingRight: 20,
                        borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor: ele.color,
                          display: "block",
                        }}
                      ></span>{" "}
                      {ele.four}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBusinessPlan;
