import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Title from "../../../components/title";
import AdvanceFilterDrawer from "./drawer/advanceFilterDrawer/AdvanceFilterDrawer";
import ViewBusinessPlan from "./drawer/viewBusinessPlan/ViewBusinessPlan";
import AddEmployeeDrawer from "./drawer/addEmployeeDrawer/AddEmployeeDrawer";
import { mileTableHead } from "../../../data";
import axios from "axios";
import PaginationDropdown from "../../../components/paginationDropdown/PaginationDropdown";
import SearchDropdownWithInput from "../../../components/searchDropdownWithInput/SearchDropdownWithInput";
import ToastNotifications from "../../../components/toastNotifications/ToastNotifications";
import ViewTableData from "./drawer/viewTableData/ViewTableData";
// import ViewDrawer from "./drawer/ViewDrawer";
import TableData from "../../../components/table/mileHRTable";
import MileHRMobileViewTable from "../../../components/table/mileHRTable/mobileViewTable.js/MileHRMobileViewtable";
import _ from "lodash";

function EmployeeManagementPage() {
  const theme = useSelector((state) => state.theme);
  // tabs
  const [isActiveTabs, setIsActiveTabs] = useState("S");
  // Search Filter inputs
  const [inputFields, setInputFields] = useState("");
  // Search results items
  const [searchResultsItems, setSearchResultsItems] = useState([]);
  // errors
  const [error, setError] = useState(false);

  const handleResultsItemsCanceled = (items) => {
    console.log(items);

    const deleteSearchResultItems = searchResultsItems.filter(
      (item) => item !== items
    );

    setSearchResultsItems(deleteSearchResultItems);
  };

  // search dropdown text
  const [selectDropdownFilterText, setSelectedDropdownFilterText] =
    useState("");

  const tabs = [
    {
      id: 1,
      name: "sales",
      tabs: "S",
    },
    {
      id: 2,
      name: "services",
      tabs: "V",
    },
    {
      id: 3,
      name: "common",
      tabs: "C",
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
      id: 3,
      name: "Location Name",
      search: "",
    },
    {
      id: 4,
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
  // View Table Data Drawer
  const [viewTableDataDrawer, setViewTableDataDrawer] = useState(false);
  const [employeeDrawerData, setEmployeeDrawerData] = useState([]);
  // Table View Drawer
  const [tableViewDrawer, setTableViewDrawer] = useState(false);
  const [selectTableView, setSelectTableView] = useState([]);

  // =========================== New Paginations Logics ================================

  // table pagination
  const [tableData, setTableData] = useState([]);

  const [page, setPage] = useState(0);
  const [limits, setLimits] = useState(10);

  const [totalDataLength, setTotalDataLength] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  let pageNo;

  if (page <= totalDataLength) {
    pageNo = page;
  } else {
    setPage(totalDataLength);
    pageNo = page;
  }

  const onPageChanged = async (value) => {
    let newPage;

    if (value === "&laquo;" || value === "... ") {
      newPage = 0;
    } else if (value === "&lsaquo;") {
      newPage = page - 1;
    } else if (value === "&rsaquo;") {
      newPage = page + 1;
    } else if (value === "&raquo;" || value === " ...") {
      newPage = Math.ceil(totalDataLength / limits) - 1;
    } else {
      newPage = value - 1;
    }

    // Fetch data for the new page

    if (inputFields === "") {
      const newData = await fetchDataForPage(newPage);
      // Set the new page and table data
      setPage(newPage);
      setTableData(newData);
    } else {
      const newData = await handleSearchAPIs(newPage);
      // Set the new page and table data
      setPage(newPage);
      setTableData(newData);
    }
  };

  // return pagination range
  const returnPaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageNoInArray = 7 + siblings;
    if (totalPageNoInArray >= totalPage) {
      return _.range(1, totalPage + 1);
    }

    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, totalPage);

    let showLeftDots = leftSiblingsIndex > 2;

    let showRightDots = rightSiblingsIndex < totalPage - 2;

    if (!showLeftDots && showRightDots) {
      let leftItemsCount = 3 + 2 * siblings;
      let leftRange = _.range(1, leftItemsCount + 1);
      return [...leftRange, " ...", totalPage];
    } else if (showLeftDots && !showRightDots) {
      let rightItemsCount = 3 + 2 * siblings;
      let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);

      return [1, "... ", ...rightRange];
    } else {
      let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);

      return [1, "... ", ...middleRange, " ...", totalPage];
    }
  };

  let siblings = 1;

  let array = returnPaginationRange(totalPages, page, limits, siblings);

  const authorization =
    "eyJraWQiOiJkR1lMQWhzS1JNK092SlwvMlRKRkdTYVJxcFVuN3RsZ0R2SkpTVkhhT3REND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9FSm1jYktacmoiLCJjb2duaXRvOnVzZXJuYW1lIjoicmVlbmEiLCJvcmlnaW5fanRpIjoiNGMzYzc2OTgtMDk1OS00Y2VjLWEyMzUtZTgyZGFiYzc1YzY2IiwiYXVkIjoiNThtNnE4a25wMTljYzk0amVnbHVucDRtdDgiLCJldmVudF9pZCI6Ijg3ZTVhMWQ4LTRjOTAtNDVkZC1hZjQzLWIyNGUwMDBiYzU2NCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzA4NzY3NDU3LCJleHAiOjE3MDg3NzEwNTcsImlhdCI6MTcwODc2NzQ1NywianRpIjoiMTNkZDk5ZWItYzMxMS00MWY3LTkxYTAtNWU0ZWZkZDY2NjIyIiwiZW1haWwiOiJhbmtpdGF5OTEyODhAZ21haWwuY29tIn0.xAo-zaEBHHkHROk2JrnlPGkJiINO2seSFNWmLagwP35_-E5eGSDRnq2EyimBc7iJxqzm5_PGxTEckyR84BznOBGGI2FjGjIlHXv79KQWEozkowDW9uT6zbc6c8uy7CdM_hHjfewCO20Mvx6UrIMaaN82R6Yfn8WbK7flNyGqCTgyWS9J42ZfIZXaEnlwJMJYT6lFMGtA7Lc8L4cKHrayaWzhZhsNHdv6yzhV5JMMAlk2HlqfpymEHwjchR7pb61sx9fWy1xRG8cGvt3-3Ofa6rsEH6-17Si9J6VO19Pw5iMkAdE3Kc3Mtt83dRYOuHn1hPnBvm3lDh3Ihpj0ycfG0g";
  const accessToken =
    "eyJraWQiOiJMVndUWU1OOTg4eUZwbDkyMGxoVzIxQ2NYYWF6ckk0aE1ZYndpSDV5d1Q4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX0VKbWNiS1pyaiIsImNsaWVudF9pZCI6IjU4bTZxOGtucDE5Y2M5NGplZ2x1bnA0bXQ4Iiwib3JpZ2luX2p0aSI6IjRjM2M3Njk4LTA5NTktNGNlYy1hMjM1LWU4MmRhYmM3NWM2NiIsImV2ZW50X2lkIjoiODdlNWExZDgtNGM5MC00NWRkLWFmNDMtYjI0ZTAwMGJjNTY0IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcwODc2NzQ1NywiZXhwIjoxNzA4NzcxMDU3LCJpYXQiOjE3MDg3Njc0NTcsImp0aSI6ImJjZmUzOGNmLTc1YmYtNDkxOC05MzAxLWRmMjQyNTdiMGQ0NyIsInVzZXJuYW1lIjoicmVlbmEifQ.RA1KhwSjI7gYCwhimY9_ErDSywR2UGSwatl6L7cafdTrZsQs-CQbMDicdkZ453JRJ263lzaSGOdQtTLBh8MJ9w2ZulwFrEQSCP9XKBPMOyU22Q4qhSFJG70GxZia2um9bp1g2-iFPYKPqCZTRnlXdiuKHOZFmbdQ-lGx0bYj7qZyo-94LYHPYuvcMT4-EIvzRKE7CNZqub20aqNSTdZ0n6i50nx9Ft-Dya5QwQ1R1WZ2_256SwbepPb_A8dQxDRMVcHgCNBN_EDiDTqH_ooexeQNAoFTTapK3r536Tx6DZfV1bcsVdFO9x_cYVnwl8C51CqOKd5uAkH9-LSKYOh6TA";

  // table data fetch
  const fetchDataForPage = async (newPage) => {
    // const baseURL = `/data.json`;
    const baseURL = `/mile/employee?divisionCode=${isActiveTabs}&page=${newPage}&size=${limits}`;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
          Accesstoken: accessToken,
        },
      };

      const response = await axios.get(baseURL, config);

      console.log(response);
      const { data } = response.data;
      // console.log("APIs Data:", data);

      setTotalDataLength(data.totalRecords);

      setTotalPages(data.totalPages);

      setPage(data.currentPage);

      return data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  // approval box text
  const [approvalText, setApprovalText] = useState("");

  const handleSelectEmployeeApprovalText = (text) => {
    console.log(text);
    const status = text === "Active" ? "Y" : "N";

    if (text === approvalText) {
      return setApprovalText("");
    }

    setApprovalText(status);

    // fetchApprovalStatus(status);
  };

  // const fetchApprovalStatus = async () => {
  //   const baseURL = `/mile/employee?divisionCode=${isActiveTabs}&page=${page}&size=${limits}&employeeStatus=${approvalText}`;
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${authorization}`,
  //         Accesstoken: accessToken,
  //       },
  //     };

  //     const response = await axios.get(baseURL, config);
  //     const { data } = response.data;
  //     console.log("APIs Data:", data);

  //     setTotalDataLength(data.totalRecords);

  //     setTotalPages(data.totalPages);

  //     setTableData(data.data);

  //     setPage(data.currentPage);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     return [];
  //   }
  // };

  // debounced

  const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  // search APIs call
  const handleSearchAPIs = async (newPage) => {
    const filterRename = selectDropdownFilterText.toLowerCase();
    let filterOption = "";

    const filterOptionsMap = {
      "mile id": "mileId",
      "employee name": "employeeName",
      "location name": "location",
      "mobile number": "mobileNumber",
    };

    filterOption = filterOptionsMap[filterRename];

    if (filterOption && inputFields !== "") {
      console.log(filterOption);
      // const baseURL = `/data.json`;
      const baseURL = `/mile/employee?divisionCode=${isActiveTabs}&page=${newPage}&size=${limits}&${filterOption}=${inputFields}`;

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
            Accesstoken: accessToken,
          },
        };

        const response = await axios.get(baseURL, config);
        const { data } = response.data;
        console.log("APIs Data:", data);

        // setTotalDataLength(data.totalRecords);

        // setTotalPages(data.totalPages);

        // setPage(data.currentPage);

        setTableData(data.data);

        // return data.data;

        setTotalDataLength(data.totalRecords);

        setTotalPages(data.totalPages);

        // setPage(data.currentPage);

        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        setTableData([]); // Clear table data on error
      }
    }
  };

  // searching
  const handleSearch = myDebounce(async () => {
    setError(false);
    // Fetch data based on selected option and search term
    if (inputFields === "") {
      setError(true);
      setPage(0);
      fetchDataForPage(page);
      return;
    } else {
      setSearchResultsItems([...searchResultsItems, { name: inputFields }]);

      handleSearchAPIs(page);
    }
  }, 500);

  // render if search input text is empty
  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchDataForPage(page);
      // console.log("Data Getting", newData);

      // if (approvalText !== "") {
      //   return fetchApprovalStatus(approvalText);
      // } else {
      //   return setTableData(newData);
      // }

      // else {
      setTableData(newData);

      // }
    };

    if (inputFields === "") {
      fetchData();
    }
  }, [page, limits, isActiveTabs, inputFields, approvalText]);

  // pagination items
  const paginationItems = [
    {
      name: 10,
    },
    {
      name: 20,
    },
    {
      name: 30,
    },
    {
      name: 40,
    },
  ];

  // empty table data
  const emptyTableData = () => (
    <tbody className="emptyDataTable" style={{ color: "#545454" }}>
      <tr>
        <td>
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
                d="M73.3337 39.9999H53.3337L46.667 49.9999H33.3337L26.667 39.9999H6.66699"
                stroke="#B5B5B6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.167 17.0333L6.66699 40V60C6.66699 61.7681 7.36937 63.4638 8.61961 64.714C9.86986 65.9643 11.5655 66.6666 13.3337 66.6666H66.667C68.4351 66.6666 70.1308 65.9643 71.381 64.714C72.6313 63.4638 73.3337 61.7681 73.3337 60V40L61.8337 17.0333C61.2817 15.9226 60.4309 14.9879 59.3768 14.3342C58.3228 13.6806 57.1073 13.334 55.867 13.3333H24.1337C22.8934 13.334 21.6779 13.6806 20.6238 14.3342C19.5697 14.9879 18.7189 15.9226 18.167 17.0333V17.0333Z"
                stroke="#B5B5B6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </td>
        <td style={{ marginBottom: 4 }}>
          {/* text */}
          <span>No employee record available.</span>
        </td>
        <td>
          {/* description */}
          <span>
            Please{" "}
            <span style={{ color: theme === "light" ? "black" : "white" }}>
              "Add New Employee"
            </span>{" "}
            using below button.
          </span>
        </td>

        {/* button */}
        <td>
          <button
            type="button"
            // className="addButton"
            className="btns primaryBtn"
            style={{ marginTop: 20 }}
            onClick={() => setActionEmployeeDrawer(!actionEmployeeDrawer)}
          >
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
            Add Employee
          </button>
        </td>
      </tr>
    </tbody>
  );

  // previous search results
  const handlePreviousDataFetching = (data) => {
    // filteredEmployees(data);
    // console.log(data);
    setInputFields(data);
    // filteredEmployees(data);
  };

  // Active and Approval Status
  const handleSelectApprovalText = (text) => {
    console.log(text);
  };

  return (
    <>
      {/* toast notifications */}
      {/* <ToastNotifications
        messagesHead="Resignation Notification Sent Successfully"
        messagesBody="Your notification for approval of user resignation has been sent successfully."
      /> */}
      {/* container */}
      <div className="employeeManagement">
        {/* ============ title ============ */}
        <div
          style={{
            background: theme === "light" ? "white" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
            marginBottom: paginationItems ? 0 : 38,
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
            {/* desktopview */}
            <div className="desktopView">
              <div className="topHeaderSide">
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
                        onClick={() => setIsActiveTabs(tab.tabs)}
                        style={{
                          textTransform: "capitalize",
                          background:
                            isActiveTabs === tab.tabs
                              ? "#FF3E5B"
                              : "transparent",
                          color:
                            isActiveTabs === tab.tabs
                              ? "#fff"
                              : `${theme === "light" ? "black" : "white"}`,
                        }}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>
                  {/* search filter box */}
                  <div className="searchFilterContainer">
                    {/* search filter dropdown */}
                    <div className="searchFilterDropdown desktopView">
                      <SearchDropdownWithInput
                        dropdownList={employeeManagementSearchList}
                        // dropdown text select
                        setSelectedDropdownFilterText={
                          setSelectedDropdownFilterText
                        }
                        selectDropdownFilterText={selectDropdownFilterText}
                        // search input text
                        setInputFields={setInputFields}
                        inputFields={inputFields}
                        // error message
                        setError={setError}
                        error={error}
                        // form submit
                        handleSearch={handleSearch}
                      />
                    </div>
                    {/* Advanced filters drawer btn */}
                    <button
                      type="button"
                      className="btns primary"
                      onClick={() =>
                        setAdvancedFilterSearch(!advanceFilterSearch)
                      }
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
                        }}
                      >
                        Advanced Filters
                      </span>
                    </button>
                  </div>
                </div>
                {/* right side */}
                <div className="employeeManagementHeaderRight">
                  {/* view business plan */}
                  {/* <div
                  className="viewBusinessPlan"
                  onClick={() =>
                    setViewBusinessPlanDrawer(!viewBusinessPlanDrawer)
                  }
                >
                  icons
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
                  text
                  <span className="textLabel">View Business Plan</span>
                </div> */}
                  {/* add employee */}
                  <button
                    className="btns primaryBtn"
                    type="button"
                    onClick={() =>
                      setActionEmployeeDrawer(!actionEmployeeDrawer)
                    }
                  >
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
            </div>

            {/* mobileView */}
            <div className="mobileView">
              <div className="topHeaderSide">
                {/* tabs and search filter */}
                <div className="tabsSearchFilter">
                  {/* left side tabs */}
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
                        onClick={() => setIsActiveTabs(tab.tabs)}
                        style={{
                          textTransform: "capitalize",
                          background:
                            isActiveTabs === tab.tabs
                              ? "#FF3E5B"
                              : "transparent",
                          color:
                            isActiveTabs === tab.tabs
                              ? "#fff"
                              : `${theme === "light" ? "black" : "white"}`,
                        }}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* search filter */}
                <div className="searchFilterContainer mobileView">
                  {/* search filter dropdown */}
                  <div className="searchFilterDropdown">
                    <SearchDropdownWithInput
                      dropdownList={employeeManagementSearchList}
                      // dropdown text select
                      setSelectedDropdownFilterText={
                        setSelectedDropdownFilterText
                      }
                      selectDropdownFilterText={selectDropdownFilterText}
                      // search input text
                      setInputFields={setInputFields}
                      inputFields={inputFields}
                      // error message
                      setError={setError}
                      error={error}
                      // form submit
                      handleSearch={handleSearch}
                    />
                  </div>
                </div>
                {/* advance filter and Add Employee */}
                <div className="advanceFilterWithAddEmployee">
                  {/* Advanced filters drawer btn */}
                  <button
                    type="button"
                    className="btns primary"
                    onClick={() =>
                      setAdvancedFilterSearch(!advanceFilterSearch)
                    }
                    style={{ paddingLeft: 0, fontSize: 12 }}
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
                        fontSize: 12,
                        color: "#FF3E5B",
                        fontWeight: 700,
                        // marginLeft: 6,
                      }}
                    >
                      Advanced Filters
                    </span>
                  </button>

                  {/* add employee */}
                  <button
                    className="btns primaryBtn"
                    type="button"
                    onClick={() =>
                      setActionEmployeeDrawer(!actionEmployeeDrawer)
                    }
                    style={{ fontSize: 12 }}
                  >
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
            </div>

            {/* search results */}
            {searchResultsItems.length !== 0 && (
              <>
                {/* divided */}
                <div
                  className="divided"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                  }}
                />
                <div className="searchResults">
                  <div className="searchResultsLeftSide">
                    <p>Search Result :</p>

                    {/* search result items */}
                    <div className="searchResultsList">
                      {searchResultsItems?.map((ele, index) => (
                        <span
                          className="text"
                          key={index}
                          style={{
                            borderColor:
                              theme === "light" ? "#B5B5B6" : "#545454",
                            color: theme === "light" ? "#545454" : "#a3a3a3",
                          }}
                        >
                          <span
                          style={{cursor: "pointer",}}
                            onClick={() => handlePreviousDataFetching(ele.name)}
                          >
                            {ele.name}
                          </span>
                          {/* icons */}
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => handleResultsItemsCanceled(ele)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.07884 2.07322C2.17647 1.97559 2.33476 1.97559 2.43239 2.07322L6.00561 5.64645L9.57884 2.07322C9.67647 1.97559 9.83476 1.97559 9.93239 2.07322C10.03 2.17085 10.03 2.32915 9.93239 2.42678L6.35917 6L9.93239 9.57322C10.03 9.67085 10.03 9.82915 9.93239 9.92678C9.83476 10.0244 9.67647 10.0244 9.57884 9.92678L6.00561 6.35355L2.43239 9.92678C2.33476 10.0244 2.17647 10.0244 2.07884 9.92678C1.98121 9.82915 1.98121 9.67085 2.07884 9.57322L5.65206 6L2.07884 2.42678C1.98121 2.32915 1.98121 2.17085 2.07884 2.07322Z"
                                fill="#545454"
                              />
                            </svg>
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* clear buttons */}
                  {/* setInputFields("") */}
                  <button
                    className="btns searchResultsRightSide"
                    onClick={() => {
                      setSearchResultsItems([]);
                    }}
                  >
                    clear
                  </button>
                </div>
              </>
            )}
          </div>
          {/* desktop table contents */}
          <div
            className="tableContainer"
            style={{
              borderColor: theme === "light" ? "#e6e6e6" : "#232324",
              // pagination is there height increased
              // searchResultsItems.length > 9 ? "calc(100vh - 360px)" :
              // tableData.length > 9
              // ? "calc(100vh - 260px)"
              // :
              minHeight:
                searchResultsItems.length !== 0
                  ? "calc(100vh - 290px)"
                  : "calc(100vh - 260px)",
              maxHeight:
                searchResultsItems.length !== 0
                  ? "calc(100vh - 290px)"
                  : "calc(100vh - 260px)",
            }}
          >
            <TableData
              tableBody={tableData}
              inputFields={inputFields}
              tableHead={mileTableHead}
              emptyTableData={emptyTableData}
              // ============Filter============
              // Active Text
              approvalText={approvalText}
              setApprovalText={setApprovalText}
              handleSelectApprovalText={handleSelectApprovalText}
              // Approval Text
              // employeeStatusText={employeeStatusText}
              handleSelectEmployeeApprovalText={
                handleSelectEmployeeApprovalText
              }
              // ============End Filter=============
              // Drawer Open state
              viewTableDataDrawer={viewTableDataDrawer}
              setViewTableDataDrawer={setViewTableDataDrawer}
              // Emplo data state
              setEmployeeDrawerData={setEmployeeDrawerData}
              // drawer select data
              setSelectTableView={setSelectTableView}
              // View Drawer open
              tableViewDrawer={tableViewDrawer}
              setTableViewDrawer={setTableViewDrawer}
            />
          </div>
          {/* mobile view table contents */}
          <MileHRMobileViewTable
            tableBody={tableData}
            emptyTableData={emptyTableData}
            // Drawer Open state
            viewTableDataDrawer={viewTableDataDrawer}
            setViewTableDataDrawer={setViewTableDataDrawer}
            // Emplo data state
            setEmployeeDrawerData={setEmployeeDrawerData}
            // drawer select data
            setSelectTableView={setSelectTableView}
            // View Drawer open
            tableViewDrawer={tableViewDrawer}
            setTableViewDrawer={setTableViewDrawer}
          />
        </div>
        {/* pagination */}
        {/* tableData.length */}
        {totalDataLength > 9 ? (
          <div
            className={`paginationContainer ${
              theme === "light" ? "light" : "dark"
            }`}
            style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
            }}
          >
            {/* left side */}
            <div className="leftSide">
              {/* total length of table data */}
              <p
                style={{ color: "#858585", fontSize: 14, whiteSpace: "nowrap" }}
              >
                Total{" "}
                <span style={{ color: theme === "light" ? "black" : "white" }}>
                  {totalDataLength}
                </span>{" "}
                items
              </p>
              {/* table data dropdown pagination limits */}
              <div className="dropdownContainer">
                <PaginationDropdown
                  items={paginationItems}
                  dropdownDirection="top"
                  padding="4px 12px"
                  // selected={tableDataPerPage}
                  // setSelected={setTableDataPerPage}
                  selected={limits}
                  setSelected={setLimits}
                  width={84}
                />
              </div>
            </div>
            {/* right side */}
            <div className="rightSide">
              {/* left pagination btn */}
              <button
                type="button"
                className={`btn`}
                style={{
                  border: `1px solid ${
                    theme === "light" ? "#b5b5b6" : "#858585"
                  }`,
                  cursor: page === 0 ? "not-allowed" : "pointer",
                }}
                onClick={() => onPageChanged("&lsaquo;")}
                disabled={page === 0}
              >
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
                      d="M10.0552 1.51062C9.92303 1.3696 9.70154 1.36246 9.56052 1.49466L3.96052 6.74466C3.88995 6.81083 3.8499 6.90326 3.8499 7C3.8499 7.09675 3.88995 7.18917 3.96052 7.25534L9.56052 12.5053C9.70154 12.6375 9.92303 12.6304 10.0552 12.4894C10.1874 12.3484 10.1803 12.1269 10.0393 11.9947L4.71164 7L10.0393 2.00534C10.1803 1.87314 10.1874 1.65164 10.0552 1.51062Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              {/* start */}
              {array.map((value, index) => {
                const getPage = page;

                // active btns
                if (value === " ..." || value === "... ") {
                  return (
                    <button
                      type="button"
                      key={index}
                      style={{
                        color:
                          value === getPage + 1
                            ? "#FF3E5B"
                            : theme === "light"
                            ? "#b5b5b6"
                            : "#858585",
                      }}
                      onClick={() => onPageChanged(value)}
                    >
                      •••
                    </button>
                  );
                } else {
                  return (
                    <button
                      className="btn"
                      key={index}
                      style={{
                        borderColor:
                          value === getPage + 1
                            ? "#FF3E5B"
                            : theme === "light"
                            ? "#b5b5b6"
                            : "#858585",
                        color:
                          value === getPage + 1
                            ? "#FF3E5B"
                            : theme === "light"
                            ? "#b5b5b6"
                            : "#858585",
                      }}
                      onClick={() => onPageChanged(value)}
                      // style={{
                      //   borderColor:
                      //     value === page + 1
                      //       ? "#FF3E5B"
                      //       : theme === "light"
                      //       ? "#b5b5b6"
                      //       : "#858585",
                      //   color:
                      //     value === page + 1
                      //       ? "#FF3E5B"
                      //       : theme === "light"
                      //       ? "#b5b5b6"
                      //       : "#858585",
                      // }}
                      // onClick={() => onPageChanged(value)}
                    >
                      {value}
                    </button>
                  );
                }
              })}
              {/* end */}
              {/* right btn */}
              <button
                type="button"
                className={`btn`}
                style={{
                  border: `1px solid ${
                    theme === "light" ? "#b5b5b6" : "#858585"
                  }`,
                  cursor: totalDataLength === page ? "not-allowed" : "pointer",
                }}
                onClick={() => onPageChanged("&rsaquo;")}
                disabled={totalDataLength === page}
              >
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
                      d="M3.94476 1.51062C4.07697 1.3696 4.29846 1.36246 4.43948 1.49466L10.0395 6.74466C10.1101 6.81083 10.1501 6.90326 10.1501 7C10.1501 7.09675 10.1101 7.18917 10.0395 7.25534L4.43948 12.5053C4.29846 12.6375 4.07697 12.6304 3.94476 12.4894C3.81256 12.3484 3.8197 12.1269 3.96072 11.9947L9.28836 7L3.96072 2.00534C3.8197 1.87314 3.81256 1.65164 3.94476 1.51062Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {/* footers */}
      {!paginationItems && (
        <div
          className="footer"
          style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
        >
          <span>Copyright © 2023 ROBIN.</span>
        </div>
      )}
      {/* Advance Filter Drawer */}
      <AdvanceFilterDrawer
        setAdvancedFilterSearch={setAdvancedFilterSearch}
        advanceFilterSearch={advanceFilterSearch}
      />
      {/* View Business Plan Drawer */}
      <ViewBusinessPlan
        viewBusinessPlanDrawer={viewBusinessPlanDrawer}
        setViewBusinessPlanDrawer={setViewBusinessPlanDrawer}
      />

      {/* Action Employee Drawer */}
      <AddEmployeeDrawer
        actionEmployeeDrawer={actionEmployeeDrawer}
        setActionEmployeeDrawer={setActionEmployeeDrawer}
      />

      {/* View Table Data */}
      <ViewTableData
        // Drawer Open state
        viewTableDataDrawer={viewTableDataDrawer}
        setViewTableDataDrawer={setViewTableDataDrawer}
        // Emplo data state
        setEmployeeDrawerData={setEmployeeDrawerData}
        employeeDrawerData={employeeDrawerData}
      />
      {/* Table View Drawer */}
      {/* <ViewDrawer
        tableViewDrawer={tableViewDrawer}
        setTableViewDrawer={setTableViewDrawer}
        // data
        selectTableView={selectTableView}
      /> */}
    </>
  );
}

export default EmployeeManagementPage;
