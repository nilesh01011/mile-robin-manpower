import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import Title from '../../../components/title';
import AdvanceFilterDrawer from './drawer/advanceFilterDrawer/AdvanceFilterDrawer';
import ViewBusinessPlan from './drawer/viewBusinessPlan/ViewBusinessPlan';
import AddEmployeeDrawer from './drawer/addEmployeeDrawer/AddEmployeeDrawer';
import TableData from '../../../components/table';
import { mileTableHead } from '../../../data';
import axios from 'axios';
import PaginationDropdown from '../../../components/paginationDropdown/PaginationDropdown';
import SearchDropdownWithInput from '../../../components/searchDropdownWithInput/SearchDropdownWithInput';
import ToastNotifications from '../../../components/toastNotifications/ToastNotifications';
import ViewDrawer from './drawer/ViewDrawer';

function EmployeeManagementPage() {
  const theme = useSelector((state) => state.theme);
  // tabs
  const [isActiveTabs, setIsActiveTabs] = useState('sales');
  // Search Filter inputs
  const [inputFields, setInputFields] = useState('');
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

  // table drawer select which one is open
  // const [tableDataDrawer, setTableDataDrawer] = useState([]);

  // search dropdown text
  const [selectDropdownFilterText, setSelectedDropdownFilterText] =
    useState('');

  const tabs = [
    {
      id: 1,
      name: 'sales',
    },
    {
      id: 2,
      name: 'services',
    },
    {
      id: 3,
      name: 'common',
    },
  ];

  const employeeManagementSearchList = [
    {
      id: 1,
      name: 'Mile ID',
      search: '',
    },
    {
      id: 2,
      name: 'Employee Name',
      search: '',
    },
    {
      id: 3,
      name: 'Location Name',
      search: '',
    },
    {
      id: 4,
      name: 'Mobile Number',
      search: '',
    },
  ];

  // Advance Filter Search Drawer
  const [advanceFilterSearch, setAdvancedFilterSearch] = useState(false);
  // View Business Plan Drawer
  const [viewBusinessPlanDrawer, setViewBusinessPlanDrawer] = useState(false);
  // Action Employee Drawer
  const [actionEmployeeDrawer, setActionEmployeeDrawer] = useState(false);
  // Table View Drawer
  const [tableViewDrawer, setTableViewDrawer] = useState(false);
  const [selectTableView, setSelectTableView] = useState([]);

  // table pagination
  const [tableData, setTableData] = useState([]);

  // active page
  const [currentPage, setCurrentPage] = useState(1);
  // table data fetch
  useEffect(() => {
    const fetchDataTable = async () => {
      const result = await axios
        .get('/data.json')
        .then((res) => setTableData(res.data))
        .catch((error) => console.log(error));

      return result;
    };

    fetchDataTable();
  }, []);

  // pages number
  const [tableDataPerPage, setTableDataPerPage] = useState(10);

  // 200 / 10 = 20
  const numOfTotalPages = Math.ceil(tableData.length / tableDataPerPage);

  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1); // starting from 1 not to 0

  const indexOfLastTodo = currentPage * tableDataPerPage; // 1 * 10 = 10
  const indexOfFirstTodo = indexOfLastTodo - tableDataPerPage; // 10 - 10 = 0

  const visibleTableData = tableData.slice(indexOfFirstTodo, indexOfLastTodo); // 200 slices 10, 0 = 190

  // prev page
  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  // next page
  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  // // debounced
  const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  // const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   if (tableData.length > 0 || !inputFields) {
  //     const indexOfLastTodo = currentPage * tableDataPerPage;
  //     const indexOfFirstTodo = indexOfLastTodo - tableDataPerPage;
  //     const visibleTableData = tableData.slice(
  //       indexOfFirstTodo,
  //       indexOfLastTodo
  //     );
  //     setFilteredData(visibleTableData);
  //   }
  // }, [tableData, currentPage, tableDataPerPage, inputFields]);

  // searching
  const handleSearch = myDebounce(() => {
    setError(false);
    // Fetch data based on selected option and search term
    console.log(
      `Searching for "${inputFields}" with option "${selectDropdownFilterText}"`
    );

    // empty search term
    // setSelectedDropdownFilterText('');
    // setInputFields('');

    if (inputFields === '') {
      setError(true);
      setCurrentPage(1);
      return;
    } else {
      setSearchResultsItems([...searchResultsItems, { name: inputFields }]);

      // filteredEmployees(inputFields)
    }
  }, 500);

  // filter data fetching
  // const filteredEmployees = (values) => {
  //     // filter data based on input fields and selected dropdown filter text
  //     const searchTerm = values.toLowerCase();

  //     const filteredData = tableData.filter((item) =>
  //       item.employeeName.toLowerCase().includes(searchTerm)
  //     );

  //     setFilteredData(filteredData);
  // }

  // const filteredEmployees = (values) => {
  //   console.log(values);
  //   // data fetch with json files
  //   const filteredEmployees = visibleTableData.filter((employee) => {
  //     const searchTerm = values.toLowerCase();
  //     const filterOption = selectDropdownFilterText.toLowerCase();

  //     if (filterOption === 'mile id') {
  //       return employee.employeeCode.toLowerCase().includes(searchTerm);
  //     } else if (filterOption === 'employee name') {
  //       return employee.employeeName.toLowerCase().includes(searchTerm);
  //     } else if (filterOption === 'location name') {
  //       return employee.employeeBusinessName.toLowerCase().includes(searchTerm);
  //     } else if (filterOption === 'mobile number') {
  //       return employee.employeeDesignation.toLowerCase().includes(searchTerm);
  //     } else if (searchTerm) {
  //       return employee.employeeStatus
  //         .toString()
  //         .toLowerCase()
  //         .includes(searchTerm);
  //     }

  //     // else if (filterOption === 'employee approval status') {
  //     //   return employee.employeeApprovalStatus
  //     //     .toLowerCase()
  //     //     .includes(searchTerm);
  //     // } else if (filterOption === 'employee location') {
  //     //   return employee.employeeLocation.toLowerCase().includes(searchTerm);
  //     // } else if (filterOption === 'employee status') {
  //     //   return employee.employeeStatus
  //     //     .toString()
  //     //     .toLowerCase()
  //     //     .includes(searchTerm);
  //     // }

  //     return false;
  //   });

  //   console.log(filteredEmployees);

  //   // filter data fetching
  //   // return filteredEmployees;
  //   // setFilteredEmployeesTableData(filteredEmployees);
  //   // setTableData(filteredEmployees);
  // };

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
    <tbody className="emptyDataTable" style={{ color: '#545454' }}>
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
            Please{' '}
            <span style={{ color: theme === 'light' ? 'black' : 'white' }}>
              "Add New Employee"
            </span>{' '}
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
    console.log(data);
    // setInputFields(data);
    // filteredEmployees(data);
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
            background: theme === 'light' ? 'white' : '#1C1C1C',
            boxShadow:
              theme === 'light'
                ? '0px 1px 1px 0px rgba(0, 0, 0, 0.15)'
                : '0px 1px 1px 0px rgba(255, 255, 255, 0.15)',
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
              border: `1px solid ${theme === 'light' ? '#E6E6E6' : '#232324'}`,
              backgroundColor: theme === 'light' ? '#f2f2f2' : '#1C1C1C',
            }}
            className="employeeManagementHeader"
          >
            <div className="topHeaderSide">
              {/* left side */}
              <div className="employeeManagementHeaderLeft">
                {/* tabs */}
                <div
                  className="tabs"
                  style={{
                    border: `1px solid ${
                      theme === 'light' ? '#B5B5B6' : '#232324'
                    }`,
                  }}
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setIsActiveTabs(tab.name)}
                      style={{
                        textTransform: 'capitalize',
                        background:
                          isActiveTabs === tab.name ? '#FF3E5B' : 'transparent',
                        color:
                          isActiveTabs === tab.name
                            ? '#fff'
                            : `${theme === 'light' ? 'black' : 'white'}`,
                      }}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
                {/* search filter box */}
                <div className="searchFilterContainer">
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
                  {/* Advanced filters drawer btn */}
                  <button
                    type="button"
                    // className="advanceFilter"
                    className="btns primary"
                    // style={{
                    //   cursor: 'pointer',
                    //   whiteSpace: 'nowrap',
                    //   display: 'flex',
                    //   alignItems: 'center',
                    // }}
                    onClick={() =>
                      setAdvancedFilterSearch(!advanceFilterSearch)
                    }
                  >
                    {/* icons */}
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                        color: '#FF3E5B',
                        fontWeight: 700,
                        marginLeft: 7,
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
                  {/* text */}
                  Add Employee
                </button>
              </div>
            </div>

            {/* search results */}
            {searchResultsItems.length !== 0 && (
              <>
                {/* divided */}
                <div
                  className="divided"
                  style={{
                    backgroundColor: theme === 'light' ? '#E6E6E6' : '#232324',
                  }}
                />
                <div className="searchResults">
                  <div className="searchResultsLeftSide">
                    <p>Search Result :</p>

                    <div className="searchResultsList">
                      {searchResultsItems?.map((ele, index) => (
                        <span
                          className="text"
                          key={index}
                          style={{
                            borderColor:
                              theme === 'light' ? '#B5B5B6' : '#545454',
                            color: theme === 'light' ? '#545454' : '#a3a3a3',
                            cursor: 'pointer',
                          }}
                          onClick={() => handlePreviousDataFetching(ele.name)}
                        >
                          {ele.name}
                          {/* icons */}
                          <span
                            style={{ cursor: 'pointer' }}
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
                  <div className="searchResultsRightSide"></div>
                </div>
              </>
            )}
          </div>
          {/* desktop table contents */}
          <div
            className="tableContainer"
            style={{
              borderColor: theme === 'light' ? '#e6e6e6' : '#232324',
              // minHeight: inputFields === ""
              //   ? 'calc(100vh - 320px)'
              //   : 'calc(100vh - 280px)',
              // maxHeight: inputFields === ""
              //   ? 'calc(100vh - 320px)'
              //   : 'calc(100vh - 280px)',
              minHeight:
                searchResultsItems.length === 0
                  ? 'calc(100vh - 280px)'
                  : 'calc(100vh - 320px)',
              maxHeight:
                searchResultsItems.length === 0
                  ? 'calc(100vh - 280px)'
                  : 'calc(100vh - 320px)',
            }}
          >
            <TableData
              // tableBody={filteredEmployeesTableData}
              // tableBody={
              //   inputFields === ''
              //     ? visibleTableData
              //     : filteredEmployeesTableData
              // }
              tableBody={visibleTableData}
              // tableBody={filteredData}
              inputFields={inputFields}
              // selectDropdownFilterText={selectDropdownFilterText}
              // tableBody={filteredData}
              // filteredEmployees={filteredEmployees}
              tableHead={mileTableHead}
              emptyTableData={emptyTableData}
              // drawer select data
              setSelectTableView={setSelectTableView}
              // View Drawer open
              tableViewDrawer={tableViewDrawer}
              setTableViewDrawer={setTableViewDrawer}
            />
          </div>
        </div>
        {/* pagination */}
        <div
          className={`paginationContainer ${
            theme === 'light' ? 'light' : 'dark'
          }`}
          style={{
            backgroundColor: theme === 'light' ? '#ffffff' : '#0B0B0C',
          }}
        >
          {/* left side */}
          <div className="leftSide">
            {/* total length of table data */}
            <p style={{ color: '#858585', fontSize: 14, whiteSpace: 'nowrap' }}>
              Total{' '}
              <span style={{ color: theme === 'light' ? 'black' : 'white' }}>
                {tableData.length}
              </span>{' '}
              items
            </p>
            {/* table data dropdown pagination limits */}
            <div className="dropdownContainer">
              <PaginationDropdown
                items={paginationItems}
                dropdownDirection="top"
                padding="4px 12px"
                selected={tableDataPerPage}
                setSelected={setTableDataPerPage}
                width={84}
              />
            </div>
          </div>
          {/* right side */}
          <div className="rightSide">
            {/* left pagination btn */}
            <button
              type="button"
              className={`btn ${currentPage === 1 && 'disabledBtn'}`}
              style={{
                border: `1px solid ${
                  theme === 'light' ? '#b5b5b6' : '#232324'
                }`,
              }}
              onClick={prevPageHandler}
              disabled={currentPage === 1}
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
            {/* table data first items */}
            {/* <button
              type="button"
              className="btn"
              style={{
                backgroundColor: theme === 'light' ? '#E6E6E6' : '#1C1C1C',
                border: `1px solid ${
                  theme === 'light' ? '#b5b5b6' : '#232324'
                }`,
              }}
            >
              1
            </button> */}
            {/* left Dots */}
            {/* <button type="button" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="4"
                viewBox="0 0 19 4"
                fill="none"
              >
                <path
                  d="M0.882812 2.0918C0.882812 1.61328 1.05143 1.2054 1.38867 0.868164C1.73047 0.530924 2.13835 0.362305 2.6123 0.362305C3.09082 0.362305 3.4987 0.530924 3.83594 0.868164C4.17773 1.2054 4.34863 1.61328 4.34863 2.0918C4.34863 2.57031 4.17773 2.98047 3.83594 3.32227C3.4987 3.65951 3.09082 3.82812 2.6123 3.82812C2.13835 3.82812 1.73047 3.65951 1.38867 3.32227C1.05143 2.98047 0.882812 2.57031 0.882812 2.0918ZM7.79102 2.0918C7.79102 1.61328 7.95964 1.2054 8.29688 0.868164C8.63867 0.530924 9.04655 0.362305 9.52051 0.362305C9.99902 0.362305 10.4069 0.530924 10.7441 0.868164C11.0859 1.2054 11.2568 1.61328 11.2568 2.0918C11.2568 2.57031 11.0859 2.98047 10.7441 3.32227C10.4069 3.65951 9.99902 3.82812 9.52051 3.82812C9.04655 3.82812 8.63867 3.65951 8.29688 3.32227C7.95964 2.98047 7.79102 2.57031 7.79102 2.0918ZM14.6992 2.0918C14.6992 1.61328 14.8678 1.2054 15.2051 0.868164C15.5469 0.530924 15.9548 0.362305 16.4287 0.362305C16.9072 0.362305 17.3151 0.530924 17.6523 0.868164C17.9941 1.2054 18.165 1.61328 18.165 2.0918C18.165 2.57031 17.9941 2.98047 17.6523 3.32227C17.3151 3.65951 16.9072 3.82812 16.4287 3.82812C15.9548 3.82812 15.5469 3.65951 15.2051 3.32227C14.8678 2.98047 14.6992 2.57031 14.6992 2.0918Z"
                  fill="#858585"
                />
              </svg>
            </button> */}
            {/* Middel table data */}
            {/* {middleButton.map((ele, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: theme === 'light' ? '#E6E6E6' : '#1C1C1C',
                    border: `1px solid ${
                      ele === 6
                        ? '#FF3E5B'
                        : theme === 'light'
                        ? '#b5b5b6'
                        : '#232324'
                    }`,
                    color: ele === 6 && '#FF3E5B',
                  }}
                >
                  {ele}
                </button>
              ))} */}
            {/* Middel table data end */}
            {pages.map((ele, index) => (
              <button
                key={index}
                className="btn paginationBtn"
                onClick={() => setCurrentPage(ele)}
                style={{
                  borderColor:
                    currentPage === ele
                      ? '#FF3E5B'
                      : theme === 'light'
                      ? '#b5b5b6'
                      : '#232324',
                  color: currentPage === ele && '#FF3E5B',
                  // backgroundColor:
                  // 	currentPage === ele && '#d7d7d7'
                }}
              >
                {ele}
              </button>
            ))}
            {/* right Dots */}
            {/* <button type="button" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="4"
                viewBox="0 0 19 4"
                fill="none"
              >
                <path
                  d="M0.882812 2.0918C0.882812 1.61328 1.05143 1.2054 1.38867 0.868164C1.73047 0.530924 2.13835 0.362305 2.6123 0.362305C3.09082 0.362305 3.4987 0.530924 3.83594 0.868164C4.17773 1.2054 4.34863 1.61328 4.34863 2.0918C4.34863 2.57031 4.17773 2.98047 3.83594 3.32227C3.4987 3.65951 3.09082 3.82812 2.6123 3.82812C2.13835 3.82812 1.73047 3.65951 1.38867 3.32227C1.05143 2.98047 0.882812 2.57031 0.882812 2.0918ZM7.79102 2.0918C7.79102 1.61328 7.95964 1.2054 8.29688 0.868164C8.63867 0.530924 9.04655 0.362305 9.52051 0.362305C9.99902 0.362305 10.4069 0.530924 10.7441 0.868164C11.0859 1.2054 11.2568 1.61328 11.2568 2.0918C11.2568 2.57031 11.0859 2.98047 10.7441 3.32227C10.4069 3.65951 9.99902 3.82812 9.52051 3.82812C9.04655 3.82812 8.63867 3.65951 8.29688 3.32227C7.95964 2.98047 7.79102 2.57031 7.79102 2.0918ZM14.6992 2.0918C14.6992 1.61328 14.8678 1.2054 15.2051 0.868164C15.5469 0.530924 15.9548 0.362305 16.4287 0.362305C16.9072 0.362305 17.3151 0.530924 17.6523 0.868164C17.9941 1.2054 18.165 1.61328 18.165 2.0918C18.165 2.57031 17.9941 2.98047 17.6523 3.32227C17.3151 3.65951 16.9072 3.82812 16.4287 3.82812C15.9548 3.82812 15.5469 3.65951 15.2051 3.32227C14.8678 2.98047 14.6992 2.57031 14.6992 2.0918Z"
                  fill="#858585"
                />
              </svg>
            </button> */}
            {/* table data last items */}
            {/* <button
              type="button"
              className="btn"
              style={{
                backgroundColor: theme === 'light' ? '#E6E6E6' : '#1C1C1C',
                border: `1px solid ${
                  theme === 'light' ? '#b5b5b6' : '#232324'
                }`,
              }}
            >
              {todos.length}
            </button> */}
            {/* right btn */}
            <button
              type="button"
              className={`btn ${
                numOfTotalPages === currentPage && 'disabledBtn'
              }`}
              style={{
                border: `1px solid ${
                  theme === 'light' ? '#b5b5b6' : '#232324'
                }`,
              }}
              onClick={nextPageHandler}
              disabled={numOfTotalPages === currentPage}
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
      </div>
      {/* footers */}
      <div
        className="footer"
        style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#0B0B0C' }}
      >
        <span>Copyright © 2023 ROBIN.</span>
      </div>
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

      {/* Table View Drawer */}
      <ViewDrawer
        tableViewDrawer={tableViewDrawer}
        setTableViewDrawer={setTableViewDrawer}

        // data
        selectTableView={selectTableView}
      />
    </>
  );
}

export default EmployeeManagementPage;
