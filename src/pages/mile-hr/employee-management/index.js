import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Title from "../../../components/title";
import SearchDropdownFilter from "../../../components/searchdropdownfilter/Searchdropdownfilter";
import AdvanceFilterDrawer from "./drawer/advanceFilterDrawer/AdvanceFilterDrawer";
import ViewBusinessPlan from "./drawer/viewBusinessPlan/ViewBusinessPlan";
import ActionEmployeeDrawer from "./drawer/actionEmployeeDrawer/ActionEmployeeDrawer";

function EmployeeManagementPage() {
  const theme = useSelector((state) => state.theme);
  // tabs
  const [isActiveTabs, setIsActiveTabs] = useState("sales");
  // Search Filter inputs
  const [inputFields, setInputFields] = useState("");
  // table drawer select which one is open
  const [tableData, setTableData] = useState([]);
  // search dropdown text
  const [selectDropdownFilterText, setSelectedDropdownFilterText] =
    useState("");

  const tabs = [
    {
      id: 1,
      name: "sales",
    },
    {
      id: 2,
      name: "services",
    },
    {
      id: 3,
      name: "common",
    },
  ];

  const employeeManagementSearchList = [
    {
      id: 1,
      name: "Mile ID",
      search: "",
    },
    {
      id: 2,
      name: "Employee Name",
      search: "",
    },
    {
      id: 4,
      name: "Location Name",
      search: "",
    },
    {
      id: 5,
      name: "Mobile Number",
      search: "",
    },
  ];

  // Advance Filter Search Drawer
  const [advanceFilterSearch, setAdvancedFilterSearch] = useState(false);
  // View Business Plan Drawer
  const [viewBusinessPlanDrawer, setViewBusinessPlanDrawer] = useState(false);
    // Action Employee Drawer
    const [actionEmployeeDrawer, setActionEmployeeDrawer] = useState(false);
  return (
    <>
      <div className="employeeManagement minHeight">
        {/* ============ title ============ */}
        <div
          style={{
            background: theme === "light" ? "white" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
          className="container-fluid titleContainer"
        >
          <Title title="Employee Management" />
        </div>
        {/* contents */}
        <div className="employeeManagementContainer container-fluid">
          {/* header */}
          <div
            style={{
              border: `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
              backgroundColor: theme === "light" ? "#f2f2f2" : "#1C1C1C",
            }}
            className="employeeManagementHeader"
          >
            {/* left side */}
            <div className="employeeManagementHeaderLeft">
              {/* tabs */}
              <div
                className="tabs"
                style={{
                  border: `1px solid ${
                    theme === "light" ? "#B5B5B6" : "#232324"
                  }`,
                }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setIsActiveTabs(tab.name)}
                    style={{
                      textTransform: "capitalize",
                      background:
                        isActiveTabs === tab.name ? "#FF3E5B" : "transparent",
                      color:
                        isActiveTabs === tab.name
                          ? "#fff"
                          : `${theme === "light" ? "black" : "white"}`,
                    }}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="searchFilterContainer">
                {/* search filter dropdown */}
                <div className="searchFilterDropdown">
                  <SearchDropdownFilter
                    customersList={employeeManagementSearchList}
                    padding="6px 0"
                    setInputFields={setInputFields}
                    inputFields={inputFields}
                    setSelectedDropdownFilterText={
                      setSelectedDropdownFilterText
                    }
                    selectDropdownFilterText={selectDropdownFilterText}
                  />
                </div>
                {/* Advanced filters */}
                <div
                  className="advanceFilter"
                  style={{
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => setAdvancedFilterSearch(!advanceFilterSearch)}
                >
                  {/* icons */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
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
                        d="M11.6667 8.89581C11.9084 8.89581 12.1042 9.09169 12.1042 9.33331V12.25C12.1042 12.4916 11.9084 12.6875 11.6667 12.6875C11.4251 12.6875 11.2292 12.4916 11.2292 12.25V9.33331C11.2292 9.09169 11.4251 8.89581 11.6667 8.89581Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.47925 9.33331C9.47925 9.09169 9.67512 8.89581 9.91675 8.89581H13.4167C13.6584 8.89581 13.8542 9.09169 13.8542 9.33331C13.8542 9.57494 13.6584 9.77081 13.4167 9.77081H9.91675C9.67512 9.77081 9.47925 9.57494 9.47925 9.33331Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.33325 7.72919C2.57488 7.72919 2.77075 7.92506 2.77075 8.16669V12.25C2.77075 12.4916 2.57488 12.6875 2.33325 12.6875C2.09163 12.6875 1.89575 12.4916 1.89575 12.25V8.16669C1.89575 7.92506 2.09163 7.72919 2.33325 7.72919Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.145752 8.16669C0.145752 7.92506 0.341627 7.72919 0.583252 7.72919H4.08325C4.32488 7.72919 4.52075 7.92506 4.52075 8.16669C4.52075 8.40831 4.32488 8.60419 4.08325 8.60419H0.583252C0.341627 8.60419 0.145752 8.40831 0.145752 8.16669Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 6.5625C7.24162 6.5625 7.4375 6.75838 7.4375 7V12.25C7.4375 12.4916 7.24162 12.6875 7 12.6875C6.75838 12.6875 6.5625 12.4916 6.5625 12.25V7C6.5625 6.75838 6.75838 6.5625 7 6.5625Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.8125 4.66669C4.8125 4.42506 5.00838 4.22919 5.25 4.22919H8.75C8.99162 4.22919 9.1875 4.42506 9.1875 4.66669C9.1875 4.90831 8.99162 5.10419 8.75 5.10419H5.25C5.00838 5.10419 4.8125 4.90831 4.8125 4.66669Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6667 1.3125C11.9084 1.3125 12.1042 1.50838 12.1042 1.75V7C12.1042 7.24162 11.9084 7.4375 11.6667 7.4375C11.4251 7.4375 11.2292 7.24162 11.2292 7V1.75C11.2292 1.50838 11.4251 1.3125 11.6667 1.3125Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 1.3125C7.24162 1.3125 7.4375 1.50838 7.4375 1.75V4.66667C7.4375 4.90829 7.24162 5.10417 7 5.10417C6.75838 5.10417 6.5625 4.90829 6.5625 4.66667V1.75C6.5625 1.50838 6.75838 1.3125 7 1.3125Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.33325 1.3125C2.57488 1.3125 2.77075 1.50838 2.77075 1.75V5.83333C2.77075 6.07496 2.57488 6.27083 2.33325 6.27083C2.09163 6.27083 1.89575 6.07496 1.89575 5.83333V1.75C1.89575 1.50838 2.09163 1.3125 2.33325 1.3125Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  </span>
                  {/* text */}
                  <span
                    style={{
                      fontSize: 14,
                      color: "#FF3E5B",
                      fontWeight: 700,
                      marginLeft: 7,
                    }}
                  >
                    Advanced Filters
                  </span>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="employeeManagementHeaderRight">
              {/* view business plan */}
              <div className="viewBusinessPlan" onClick={() => setViewBusinessPlanDrawer(!viewBusinessPlanDrawer)}>
                {/* icons */}
                <span>
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
                      d="M3.0642 5.15554C4.0368 4.34935 5.42827 3.5 6.9999 3.5C8.57154 3.5 9.96301 4.34935 10.9356 5.15554C11.4269 5.56274 11.8236 5.96915 12.0976 6.27374C12.2348 6.42626 12.3417 6.55384 12.415 6.64404C12.4516 6.68915 12.4798 6.72496 12.4992 6.74991C12.5089 6.76238 12.5164 6.77215 12.5216 6.77901L12.5277 6.7871L12.5295 6.78946L12.5303 6.79049C12.5303 6.79049 12.5304 6.79069 12.2499 7C12.5304 7.20931 12.5303 7.20951 12.5303 7.20951L12.5301 7.20978L12.5295 7.21054L12.5277 7.2129L12.5216 7.22099C12.5164 7.22786 12.5089 7.23762 12.4992 7.2501C12.4798 7.27504 12.4516 7.31085 12.415 7.35596C12.3417 7.44616 12.2348 7.57375 12.0976 7.72627C11.8236 8.03085 11.4269 8.43726 10.9356 8.84447C9.96301 9.65065 8.57154 10.5 6.9999 10.5C5.42827 10.5 4.0368 9.65065 3.0642 8.84447C2.57294 8.43726 2.17626 8.03085 1.90226 7.72627C1.76505 7.57375 1.65807 7.44616 1.58484 7.35596C1.54821 7.31085 1.51999 7.27504 1.50061 7.2501C1.49092 7.23762 1.48343 7.22786 1.47821 7.22099L1.47208 7.2129L1.4703 7.21054L1.46974 7.20978L1.46954 7.20951C1.46954 7.20951 1.46939 7.20931 1.7499 7C1.46939 6.79069 1.46954 6.79049 1.46954 6.79049L1.4703 6.78946L1.47208 6.7871L1.47821 6.77901C1.48343 6.77215 1.49092 6.76238 1.50061 6.74991C1.51999 6.72496 1.54821 6.68915 1.58484 6.64404C1.65807 6.55384 1.76505 6.42626 1.90226 6.27374C2.17626 5.96915 2.57294 5.56274 3.0642 5.15554ZM1.7499 7L1.46939 6.79069C1.37674 6.91485 1.37674 7.08515 1.46939 7.20931L1.7499 7ZM2.19855 7C2.25844 7.07164 2.33354 7.15903 2.42267 7.25811C2.67998 7.54415 3.05213 7.92524 3.51092 8.30554C4.43843 9.07435 5.67196 9.8 6.9999 9.8C8.32785 9.8 9.56137 9.07435 10.4889 8.30554C10.9477 7.92524 11.3198 7.54415 11.5771 7.25811C11.6663 7.15903 11.7414 7.07164 11.8013 7C11.7414 6.92836 11.6663 6.84097 11.5771 6.74189C11.3198 6.45585 10.9477 6.07476 10.4889 5.69446C9.56137 4.92565 8.32785 4.2 6.9999 4.2C5.67196 4.2 4.43843 4.92565 3.51092 5.69446C3.05213 6.07476 2.67998 6.45585 2.42267 6.74189C2.33354 6.84097 2.25844 6.92836 2.19855 7ZM12.2499 7L12.5304 7.20931C12.6231 7.08515 12.6231 6.91485 12.5304 6.79069L12.2499 7ZM5.82434 5.82444C6.13612 5.51266 6.55898 5.3375 6.9999 5.3375C7.44083 5.3375 7.86369 5.51266 8.17547 5.82444C8.48725 6.13622 8.66241 6.55908 8.66241 7C8.66241 7.44092 8.48725 7.86379 8.17547 8.17557C7.86369 8.48735 7.44083 8.6625 6.9999 8.6625C6.55898 8.6625 6.13612 8.48735 5.82434 8.17557C5.51256 7.86379 5.3374 7.44092 5.3374 7C5.3374 6.55908 5.51256 6.13622 5.82434 5.82444ZM6.9999 6.0375C6.74463 6.0375 6.49982 6.13891 6.31931 6.31941C6.13881 6.49991 6.0374 6.74473 6.0374 7C6.0374 7.25527 6.13881 7.50009 6.31931 7.68059C6.49982 7.8611 6.74463 7.9625 6.9999 7.9625C7.25518 7.9625 7.49999 7.8611 7.6805 7.68059C7.861 7.50009 7.96241 7.25527 7.96241 7C7.96241 6.74473 7.861 6.49991 7.6805 6.31941C7.49999 6.13891 7.25518 6.0375 6.9999 6.0375Z"
                      fill="#FF3E5B"
                    />
                  </svg>
                </span>
                {/* text */}
                <span className="textLabel">View Business Plan</span>
              </div>
              {/* add employee */}
              <button className="btns primaryBtn" type="button" onClick={() => setActionEmployeeDrawer(!actionEmployeeDrawer)}>
                <span>
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
                      d="M7 1.75C7.18122 1.75 7.32813 1.89691 7.32813 2.07812V6.67188H11.9219C12.1031 6.67188 12.25 6.81878 12.25 7C12.25 7.18122 12.1031 7.32813 11.9219 7.32813H7.32813V11.9219C7.32813 12.1031 7.18122 12.25 7 12.25C6.81878 12.25 6.67188 12.1031 6.67188 11.9219L6.67188 7.32813H2.07812C1.89691 7.32813 1.75 7.18122 1.75 7C1.75 6.81878 1.89691 6.67188 2.07812 6.67188H6.67188L6.67188 2.07812C6.67188 1.89691 6.81878 1.75 7 1.75Z"
                      fill="white"
                    />
                  </svg>
                </span>
                {/* text */}
                Add Employee
              </button>
            </div>
          </div>
          {/* desktop table contents */}
        </div>
      </div>
      {/* footers */}
      <div
        className="footer"
        style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
      >
        <span>Copyright © 2023 ROBIN.</span>
      </div>
      {/* Advance Filter Drawer */}
      <AdvanceFilterDrawer
        setAdvancedFilterSearch={setAdvancedFilterSearch}
        advanceFilterSearch={advanceFilterSearch}
      />
      {/* View Business Plan Drawer */}
      <ViewBusinessPlan viewBusinessPlanDrawer={viewBusinessPlanDrawer} setViewBusinessPlanDrawer={setViewBusinessPlanDrawer} />

       {/* Action Employee Drawer */}
       <ActionEmployeeDrawer actionEmployeeDrawer={actionEmployeeDrawer} setActionEmployeeDrawer={setActionEmployeeDrawer} />
    </>
  );
}

export default EmployeeManagementPage;
