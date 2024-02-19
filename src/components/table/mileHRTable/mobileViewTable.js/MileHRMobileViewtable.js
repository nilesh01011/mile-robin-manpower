import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function MileHRMobileViewTable({
  setViewTableDataDrawer,
  setEmployeeDrawerData,
  viewTableDataDrawer,
  tableBody,
}) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className="mileHRMobileViewTable"
      style={{ borderColor: theme === "light" ? "#e6e6e6" : "#232324" }}
    >
      {/* head */}
      <div
        className="mileHRMobileViewTableHead"
        style={{ backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C" }}
      >
        <span>Employee List</span>
        <span className="stickyActions">Action</span>
      </div>
      {/* body */}
      <div
        className={`mileHRMobileViewTableBody ${
          theme === "light" ? "lightTheme" : "darkTheme"
        }`}
        style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
      >
        {tableBody.map((ele, index) => (
          <div
            key={index}
            className={`mileHRMobileViewTableBodyEmployeeContainer ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
            style={{ borderColor: theme === "light" ? "#e6e6e6" : "#232324" }}
          >
            {/* employee list */}
            {/* <div className="mileHRMobileViewTableBodyEmployeeList">
            </div> */}
            {/* 1 */}
            <div className="employeeData">
              {/* employee name */}
              <p>
                <span
                  style={{ color: theme === "light" ? "#8c8c8c" : "#8c8c8c" }}
                >
                  Employee name:
                </span>
                <span>{ele.employeeName}</span>
              </p>
              {/* employee code */}
              <p>
                <span
                  style={{ color: theme === "light" ? "#8c8c8c" : "#8c8c8c" }}
                >
                  Employee Code:
                </span>
                <span>{ele.employeeCode}</span>
              </p>
              {/* designation */}
              <p>
                <span
                  style={{ color: theme === "light" ? "#8c8c8c" : "#8c8c8c" }}
                >
                  Designation:
                </span>
                <span>{ele.designation ? ele.designation : "--"}</span>
              </p>
            </div>
            {/* 2 */}
            <div className="employeeData">
              {/* employee name */}
              <p>
                <span
                  style={{ color: theme === "light" ? "#8c8c8c" : "#8c8c8c" }}
                >
                  business name:
                </span>
                <span>{ele.employeeName}</span>
              </p>
              {/* employee code */}
              <p>
                <span
                  style={{ color: theme === "light" ? "#8c8c8c" : "#8c8c8c" }}
                >
                  Approval Status:
                </span>
                <span>
                  {" "}
                  {ele.approvalStatus === true
                    ? "Approval"
                    : "Pending for ASM Approval"}
                </span>
              </p>
              {/* designation */}
              <p>
                <span
                  style={{ color: theme === "light" ? "#8c8c8c" : "#8c8c8c" }}
                >
                  Employee Status:
                </span>
                <span>{ele.employeeStatus ? "Active" : "Inctive"}</span>
              </p>
            </div>
            {/* actions */}
            <div
              className="mileHRMobileViewTableBodyAction"
              style={{
                backgroundColor: theme === "light" ? "#fff" : "#0B0B0C",
              }}
            >
              {/* view data */}
              <span
                title="View Details"
                style={{ cursor: "pointer" }}
                //   onClick={() => {
                //     setDrawerData(ele);
                //     setDrawerType("view");
                //     setIsDrawerOpen(true);
                //   }}
                // onClick={()=>{setViewTableDataDrawer(!viewTableDataDrawer);setEmployeeDrawerData(ele) }}
                // onClick={()=>{setSelectTableView(ele);setTableViewDrawer(!tableViewDrawer)}}
                onClick={() => {
                  setViewTableDataDrawer(!viewTableDataDrawer);
                  setEmployeeDrawerData(ele);
                }}
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
                    d="M4.37757 7.36505C5.76699 6.21336 7.75481 5 10 5C12.2452 5 14.233 6.21336 15.6224 7.36505C16.3242 7.94678 16.8909 8.52735 17.2824 8.96248C17.4784 9.18037 17.6312 9.36263 17.7358 9.49148C17.7881 9.55593 17.8285 9.60708 17.8561 9.64272C17.87 9.66054 17.8807 9.67449 17.8881 9.6843L17.8969 9.69585L17.8994 9.69924L17.9005 9.7007C17.9005 9.7007 17.9007 9.70099 17.5 10C17.9007 10.299 17.9005 10.2993 17.9005 10.2993L17.9002 10.2997L17.8994 10.3008L17.8969 10.3041L17.8881 10.3157C17.8807 10.3255 17.87 10.3395 17.8561 10.3573C17.8285 10.3929 17.7881 10.4441 17.7358 10.5085C17.6312 10.6374 17.4784 10.8196 17.2824 11.0375C16.8909 11.4726 16.3242 12.0532 15.6224 12.635C14.233 13.7866 12.2452 15 10 15C7.75481 15 5.76699 13.7866 4.37757 12.635C3.67577 12.0532 3.10908 11.4726 2.71765 11.0375C2.52164 10.8196 2.36882 10.6374 2.2642 10.5085C2.21187 10.4441 2.17155 10.3929 2.14387 10.3573C2.13002 10.3395 2.11933 10.3255 2.11187 10.3157L2.10312 10.3041L2.10057 10.3008L2.09976 10.2997L2.09948 10.2993C2.09948 10.2993 2.09926 10.299 2.5 10C2.09926 9.70099 2.09948 9.7007 2.09948 9.7007L2.10057 9.69924L2.10312 9.69585L2.11187 9.6843C2.11933 9.67449 2.13002 9.66054 2.14387 9.64272C2.17155 9.60708 2.21187 9.55593 2.2642 9.49148C2.36882 9.36263 2.52164 9.18037 2.71765 8.96248C3.10908 8.52735 3.67577 7.94678 4.37757 7.36505ZM2.5 10L2.09926 9.70099C1.96691 9.87836 1.96691 10.1216 2.09926 10.299L2.5 10ZM3.14093 10C3.22648 10.1023 3.33376 10.2272 3.4611 10.3687C3.82869 10.7774 4.36032 11.3218 5.01574 11.8651C6.34076 12.9634 8.10294 14 10 14C11.8971 14 13.6592 12.9634 14.9843 11.8651C15.6397 11.3218 16.1713 10.7774 16.5389 10.3687C16.6662 10.2272 16.7735 10.1023 16.8591 10C16.7735 9.89766 16.6662 9.77282 16.5389 9.63127C16.1713 9.22265 15.6397 8.67823 14.9843 8.13495C13.6592 7.03664 11.8971 6 10 6C8.10294 6 6.34076 7.03664 5.01574 8.13495C4.36032 8.67823 3.82869 9.22265 3.4611 9.63127C3.33376 9.77282 3.22648 9.89766 3.14093 10ZM17.5 10L17.9007 10.299C18.0331 10.1216 18.0331 9.87836 17.9007 9.70099L17.5 10ZM8.32062 8.32062C8.76602 7.87522 9.37011 7.625 10 7.625C10.6299 7.625 11.234 7.87522 11.6794 8.32062C12.1248 8.76602 12.375 9.37011 12.375 10C12.375 10.6299 12.1248 11.234 11.6794 11.6794C11.234 12.1248 10.6299 12.375 10 12.375C9.37011 12.375 8.76602 12.1248 8.32062 11.6794C7.87522 11.234 7.625 10.6299 7.625 10C7.625 9.37011 7.87522 8.76602 8.32062 8.32062ZM10 8.625C9.63533 8.625 9.28559 8.76987 9.02773 9.02773C8.76987 9.28559 8.625 9.63533 8.625 10C8.625 10.3647 8.76987 10.7144 9.02773 10.9723C9.28559 11.2301 9.63533 11.375 10 11.375C10.3647 11.375 10.7144 11.2301 10.9723 10.9723C11.2301 10.7144 11.375 10.3647 11.375 10C11.375 9.63533 11.2301 9.28559 10.9723 9.02773C10.7144 8.76987 10.3647 8.625 10 8.625Z"
                    fill="#FF3E5B"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MileHRMobileViewTable;
