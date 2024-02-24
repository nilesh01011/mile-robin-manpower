import React, { useState } from "react";
import { useSelector } from "react-redux";
import Overlay from "../../../../../components/overlay/Overlay";
import "./styles.scss";
import moment from "moment";
import TransferModel from "./transferModel";
import EmployeeDetails from "./employeeDetails/EmployeeDetails";
import BankDetails from "./bankDetails/BankDetails";
import RoleDetails from "./roleDetails/RoleDetails";
import WorkExperience from "./workExperience/WorkExperience";

function ViewTableData({
  viewTableDataDrawer,
  setViewTableDataDrawer,
  // Emplo data state
  setEmployeeDrawerData,
  employeeDrawerData,
}) {
  // console.log("Emplo data:", employeeDrawerData);
  const theme = useSelector((state) => state.theme);
  const [leftSideScrollBar, setLeftSideScrollBar] = useState(false);
  const userNameSplit = employeeDrawerData.employeeName
    ? employeeDrawerData.employeeName?.split(" ")
    : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";

  // Transfer Model
  const [transferModel, setTransferModel] = useState(false);

  return (
    <>
      <Overlay
        showOverlay={viewTableDataDrawer}
        hideOverlay={setViewTableDataDrawer}
      />

      {/* contents */}
      <div
        className={`drawerContainer ${
          theme === "light" ? "light" : "dark"
        } actionEmployeeDrawer`}
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#0B0B0C",
          // width: "93%",
          right: viewTableDataDrawer ? 0 : "-150%",
        }}
      >
        <div
          className="drawerDataHeader"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
        >
          <h3>View Details</h3>
          <span onClick={() => setViewTableDataDrawer(!viewTableDataDrawer)}>
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
                d="M3.45505 3.95529C3.61777 3.79257 3.88158 3.79257 4.0443 3.95529L9.99967 9.91066L15.955 3.95529C16.1178 3.79257 16.3816 3.79257 16.5443 3.95529C16.707 4.11801 16.707 4.38183 16.5443 4.54455L10.5889 10.4999L16.5443 16.4553C16.707 16.618 16.707 16.8818 16.5443 17.0445C16.3816 17.2073 16.1178 17.2073 15.955 17.0445L9.99967 11.0892L4.0443 17.0445C3.88158 17.2073 3.61777 17.2073 3.45505 17.0445C3.29233 16.8818 3.29233 16.618 3.45505 16.4553L9.41042 10.4999L3.45505 4.54455C3.29233 4.38183 3.29233 4.11801 3.45505 3.95529Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>

        {/* data */}
        <div className="drawerData">
          {/* left side */}
          <div
            className={`leftSide ${leftSideScrollBar && "activeScroll"} ${
              theme === "light" ? "light" : "dark"
            }`}
            style={{
              backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              boxShadow:
                theme === "light"
                  ? "1px 0px 1px 0px rgba(0, 0, 0, 0.15)"
                  : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
            }}
            onMouseEnter={() => setLeftSideScrollBar(true)}
            onMouseLeave={() => setLeftSideScrollBar(false)}
          >
            {/* user profile */}
            <div
              className="leftSideTopHeaders"
              style={{
                backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              }}
            >
              <div
                className={`userProfile ${
                  theme === "light" ? "lightTheme" : "darkTheme"
                }`}
                style={{
                  border: `1px solid ${
                    theme === "light" ? "#B5B5B6" : "#545454"
                  }`,
                  // backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                }}
              >
                {/* user header section */}
                <div className="userImgNameId">
                  {/* user images */}
                  <div
                    className="userImg"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#545454",
                      border: `1px solid ${
                        theme === "light" ? "#B5B5B6" : "#545454"
                      }`,
                    }}
                  >
                    {/* {data.userImg ? (
                    <img src={data.userImg} alt={data.username} />
                  ) : (
                    <span
                      style={{
                        borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
                      }}
                    >
                      {firstLetter + "" + lastLetter}
                    </span>
                  )} */}
                    <span
                      style={{
                        borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
                      }}
                    >
                      {firstLetter + "" + lastLetter}
                    </span>
                  </div>
                  {/* user name and Id */}
                  <div className="userName_id">
                    <h3
                    // onMouseEnter={() =>
                    //   data.three.length > 22 && setTextTrucat(true)
                    // }
                    // onMouseLeave={() =>
                    //   data.three.length > 22 && setTextTrucat(false)
                    // }
                    >
                      {/* employee name */}
                      <span className="userName">
                        {employeeDrawerData?.employeeName}
                      </span>
                    </h3>
                    {/* employee code */}
                    {/* <p>{employeeDrawerData?.employeeCode}</p> */}
                    <p>13OU0579</p>
                  </div>
                </div>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* Dealer code */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Dealer Code:
                  </span>
                  <span className="rightText">MU010451</span>
                </p>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* location name */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Location Name:
                  </span>
                  <span className="rightText">
                    {employeeDrawerData?.location
                      ? employeeDrawerData.location
                      : "--"}
                  </span>
                </p>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* employee status */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Status:
                  </span>
                  <span
                    className="rightText"
                    style={{
                      color: employeeDrawerData?.employeeStatus
                        ? "#56AC18"
                        : "#ff3e5b",
                    }}
                  >
                    {employeeDrawerData?.employeeStatus ? "Active" : "Inactive"}
                  </span>
                </p>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* employee status */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Active Since:
                  </span>
                  <span className="rightText">
                    {moment().format("Do MMM YYYY")}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="rightSide">
            {/* contents */}
            <div
              className={`contents ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
            >
              {/*Employee Details accordions */}
              <EmployeeDetails
                employeeDrawerData={employeeDrawerData}
                userNameSplit={userNameSplit}
              />

              {/* bank details accordions */}
              <BankDetails employeeDrawerData={employeeDrawerData} />

              {/* role details */}
              <RoleDetails employeeDrawerData={employeeDrawerData} />

              {/* Work Experience details */}
              <WorkExperience employeeDrawerData={employeeDrawerData} />
            </div>
            {/* footer side */}
            <div
              className="footerSide"
              style={{
                boxShadow:
                  theme === "light"
                    ? "1px 0px 0px 1px rgba(0, 0, 0, 0.15)"
                    : "0px -1px 1px 0px rgba(255, 255, 255, 0.15)",
                backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
                marginLeft: theme === "light" ? "1px" : "0px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button
                  type="button"
                  className="btns primaryBtn"
                  onClick={() => setTransferModel(!transferModel)}
                >
                  Transfer
                </button>

                <button
                  type="button"
                  className="btns primaryBtn"
                  // onClick={() => setDrawerType("edit")}
                >
                  Resign
                </button>
              </div>

              {/* right side button */}
              {/* <div
                className="rightSideBtn"
              >

              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Edit Work Experience Drawer */}
      {transferModel && (
        <TransferModel
          setTransferModel={setTransferModel}
          transferModel={transferModel}
        />
      )}
    </>
  );
}

export default ViewTableData;
