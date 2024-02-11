import React, { useState } from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import Overlay from '../../../../../components/overlay/Overlay';
import InputField from '../../../../../components/inputField/InputField';
import CalendarInput from '../../../../../components/calendarInput';
import Dropdown from '../../../../../components/dropdown/Dropdown';
import { useFormik } from 'formik';
import { employeeExists } from '../../../../../formikSchema/addEmployee';
import LoadingCircle from '../../../../../components/loadingCircle/LoadingCircle';
import axios from 'axios';
import moment from 'moment';

function ActionEmployeeDrawer({
  actionEmployeeDrawer,
  setActionEmployeeDrawer,
}) {
  const theme = useSelector((state) => state.theme);
  const [isLoading, setIsLoading] = useState(false);

  const [resultShow, setResultShow] = useState(false);

  const [resultsValues, setResultValues] = useState([]);

  // user not exists
  const [userNotExists, setUserNotExists] = useState(false);
  // user exists but inactive
  const [userExistsButInActive, setUserExistsButInActive] = useState(false);
  // user exists with active
  const [userExistsWithActive, setUserExistsWithActive] = useState(false);

  const genderItems = [
    {
      name: 'male',
    },
    {
      name: 'female',
    },
    {
      name: 'other',
    },
  ];

  const businessNameItems = [
    {
      name: 'AD',
    },
    {
      name: 'LMM',
    },
    {
      name: 'AD 2',
    },
    {
      name: 'AD 3',
    },
  ];

  // formikSchema form initial values
  const initialValues = {
    first_name: '',
    last_name: '',
    mother_name: '',
    dateBirth: '',
    gender: '',
    businessName: '',
  };

  // useFormik
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    validationSchema: employeeExists,
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      setIsLoading(true);

      // fetching to this setTimeout function
      try {
        const response = await axios.get('/mile-user-exists.json');

        const filterUserExists = response.data.filter(
          (user) =>
            user.first_name
              .toLowerCase()
              .includes(values.first_name.toLowerCase()) &&
            user.last_name
              .toLowerCase()
              .includes(values.last_name.toLowerCase()) &&
            user.mother_name
              .toLowerCase()
              .includes(values.mother_name.toLowerCase()) &&
            user.gender.toLowerCase().includes(values.gender.toLowerCase()) &&
            user.businessName
              .toLowerCase()
              .includes(values.businessName.toLowerCase())
        );

        console.log('Filtered user exists:', filterUserExists);

        setResultValues(filterUserExists);
        setResultShow(true);

        // // user not exists
        if (!filterUserExists) {
          console.log('user not found:', filterUserExists);
          setUserNotExists(!userNotExists);
        }

        // // user found check it's active or inactive
        if (!filterUserExists[0].employeeStatus) {
          console.log('user found but is inactive:', filterUserExists);
          setUserNotExists(false);
          setUserExistsButInActive(true);
          setUserExistsWithActive(false);
        }

        // user exists with active
        if (filterUserExists[0].employeeStatus) {
          setUserExistsWithActive(true);
        }

        action.resetForm();
      } catch (error) {
        console.error('Error fetching ', error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    },
  });

  // handle drawer closed
  const handleDrawerClosed = () => {
    setActionEmployeeDrawer(!actionEmployeeDrawer);
    setResultShow(false);
  };

  return (
    <>
      <Overlay
        showOverlay={actionEmployeeDrawer}
        hideOverlay={setActionEmployeeDrawer}
      />
      {/* <div
        className="overlay"
        style={{
          display: actionEmployeeDrawer ? 'block' : 'none',
          backgroundColor:
            theme === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(84, 84, 84, 0.8)',
        }}
        onClick={() => handleDrawerClosed()}
      /> */}
      {/* contents */}
      <form
        onSubmit={handleSubmit}
        method="post"
        autoComplete="off"
        className="drawerContainer actionEmployeeDrawer"
        style={{
          backgroundColor: theme === 'light' ? '#FFF' : '#0B0B0C',
          width: '93%',
          right: actionEmployeeDrawer ? 0 : '-150%',
        }}
      >
        {/* headers */}
        <div
          className="actionEmployeeDrawerHeader"
          style={{
            boxShadow:
              theme === 'light'
                ? '0px 2px 4px 0px rgba(0, 0, 0, 0.15)'
                : 'rgb(255 255 255 / 15%) 0px 1px 1px 0px',
          }}
        >
          {/* text */}
          <span className="title">Add Employee</span>
          {/* icons */}
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setActionEmployeeDrawer(!actionEmployeeDrawer);
              setResultShow(false);
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
                d="M3.45529 3.45535C3.61801 3.29263 3.88183 3.29263 4.04455 3.45535L9.99992 9.41072L15.9553 3.45535C16.118 3.29263 16.3818 3.29263 16.5445 3.45535C16.7073 3.61807 16.7073 3.88189 16.5445 4.04461L10.5892 9.99998L16.5445 15.9554C16.7073 16.1181 16.7073 16.3819 16.5445 16.5446C16.3818 16.7073 16.118 16.7073 15.9553 16.5446L9.99992 10.5892L4.04455 16.5446C3.88183 16.7073 3.61801 16.7073 3.45529 16.5446C3.29257 16.3819 3.29257 16.1181 3.45529 15.9554L9.41066 9.99998L3.45529 4.04461C3.29257 3.88189 3.29257 3.61807 3.45529 3.45535Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>

        <div className="actionEmployeeContainer">
          {isLoading ? (
            <div className="loadingContainer">
              {/* loading img */}
              <div>
                <LoadingCircle width={300} height={300} />
              </div>
              {/* text */}
              <span style={{ color: theme === 'light' ? '#262626' : '#fff' }}>
                Validating Employee Details...
              </span>
            </div>
          ) : resultShow ? (
            <>
              <div className="resultDataShow">
                {/* title */}
                <h5 className="title">Employee Details</h5>
                {/* data result */}
                <div
                  className="resultValues"
                  style={{
                    backgroundColor: theme === 'light' ? '#F2F2F2' : '#1C1C1C',
                    borderColor: theme === 'light' ? '#E6E6E6' : '#232324',
                  }}
                >
                  {/* first name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === 'light' ? '#545454' : '#545454',
                      }}
                    >
                      First Name:
                    </span>
                    <span>{resultsValues[0]?.first_name}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === 'light' ? '#E6E6E6' : '#232324',
                    }}
                  />
                  {/* last name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === 'light' ? '#545454' : '#545454',
                      }}
                    >
                      Last Name:
                    </span>
                    <span>{resultsValues[0]?.last_name}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === 'light' ? '#E6E6E6' : '#232324',
                    }}
                  />
                  {/* mother name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === 'light' ? '#545454' : '#545454',
                      }}
                    >
                      Mother's Name:
                    </span>
                    <span>{resultsValues[0]?.mother_name}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === 'light' ? '#E6E6E6' : '#232324',
                    }}
                  />
                  {/* date of birth */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === 'light' ? '#545454' : '#545454',
                      }}
                    >
                      date of birth:
                    </span>
                    <span>
                      {moment(resultsValues[0]?.dateBirth).format(
                        'DD MMM YYYY'
                      )}
                    </span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === 'light' ? '#E6E6E6' : '#232324',
                    }}
                  />
                  {/* gender */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === 'light' ? '#545454' : '#545454',
                      }}
                    >
                      Gender:
                    </span>
                    <span>{resultsValues[0]?.gender}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === 'light' ? '#E6E6E6' : '#232324',
                    }}
                  />
                  {/* business name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === 'light' ? '#545454' : '#545454',
                      }}
                    >
                      Business Name:
                    </span>
                    <span>{resultsValues[0]?.businessName}</span>
                  </div>
                </div>
                {/* messages container */}
                <div
                  className="messageContainer"
                  style={{ borderColor: '#F99C22', backgroundColor: '#FEE9CD' }}
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
                  <p style={{ color: '#545454' }}>
                    <span>
                      {' '}
                      {userExistsWithActive
                        ? 'User record exists in MILE but is currently active.'
                        : 'No employee record found.'}{' '}
                    </span>

                    <span>
                      Please{' '}
                      <span
                        style={{
                          color: theme === 'light' ? '#0B0B0C' : '#fff',
                          fontWeight: 500,
                        }}
                      >
                        {userExistsWithActive
                          ? `"Send Notification"`
                          : `"Add New Employee"`}
                      </span>{' '}
                      {userExistsWithActive
                        ? ` using below button to dealer employee for approval of
                        resignation.`
                        : `using button below`}
                    </span>
                  </p>
                </div>
              </div>

              {/* footer */}
              <div
                className="actionEmployeeFooter"
                style={{
                  boxShadow:
                    theme === 'light'
                      ? '0px -2px 4px 0px rgba(0, 0, 0, 0.15)'
                      : 'rgb(255 255 255 / 15%) 0px -1px 1px 0px',
                  backgroundColor: theme === 'light' ? '#FFFFFF' : '#0B0B0C',
                }}
              >
                {/* left btns */}
                <button
                  className="btns outlineBtn"
                  type="button"
                  onClick={() => {
                    handleDrawerClosed();
                  }}
                >
                  Cancel
                </button>
                {/* right btns */}
                <button
                  className="btns primaryBtn"
                  type="submit"
                  aria-label="submit"
                >
                  Add Employee
                </button>
              </div>
            </>
          ) : (
            <>
              {/* grid container */}
              <div className="userExistsCheckEmployeeContainer">
                <div
                  className="actionEmployeeContents"
                  style={{
                    backgroundColor: theme === 'light' ? '#F2F2F2' : '',
                  }}
                >
                  {/* first name */}
                  <div className="gridItems">
                    <label style={{ color: '#545454' }}>
                      First Name<span style={{ color: 'red' }}>*</span>
                    </label>
                    <InputField
                      types="text"
                      placeholder="Enter first name"
                      inputTypes="text"
                      text={values.first_name}
                      name="first_name"
                      errors={errors.first_name}
                      touched={touched.first_name}
                      handleChange={handleChange}
                    />
                  </div>

                  {/* last name */}
                  <div className="gridItems">
                    <label style={{ color: '#545454' }}>
                      Last Name<span style={{ color: 'red' }}>*</span>
                    </label>
                    <InputField
                      types="text"
                      placeholder="Enter last name"
                      inputTypes="text"
                      text={values.last_name}
                      name="last_name"
                      errors={errors.last_name}
                      touched={touched.last_name}
                      handleChange={handleChange}
                    />
                  </div>

                  {/* mother name */}
                  <div className="gridItems">
                    <label style={{ color: '#545454' }}>
                      Mother's Name<span style={{ color: 'red' }}>*</span>
                    </label>
                    <InputField
                      types="text"
                      placeholder="Enter mother's name"
                      inputTypes="text"
                      text={values.mother_name}
                      name="mother_name"
                      errors={errors.mother_name}
                      touched={touched.mother_name}
                      handleChange={handleChange}
                    />
                  </div>

                  {/* date */}
                  <div className="gridItems">
                    <label style={{ color: '#545454' }}>
                      Date of Birth<span style={{ color: 'red' }}>*</span>
                    </label>
                    <CalendarInput
                      text={values.dateBirth}
                      name="dateBirth"
                      errors={errors.dateBirth}
                      handleChange={(value) => handleChange('dateBirth')(value)}
                      touched={touched.dateBirth}
                    />
                  </div>

                  {/* dropdown */}
                  <div className="gridItems">
                    <label style={{ color: '#545454' }}>
                      Gender<span style={{ color: 'red' }}>*</span>
                    </label>
                    <Dropdown
                      items={genderItems}
                      selectedText={values.gender}
                      handleChange={(value) => handleChange('gender')(value)}
                      name="gender"
                      touched={touched.gender}
                      errors={errors.gender}
                    />
                  </div>

                  <div className="gridItems">
                    <label style={{ color: '#545454' }}>
                      Business Name<span style={{ color: 'red' }}>*</span>
                    </label>
                    <Dropdown
                      items={businessNameItems}
                      selectedText={values.businessName}
                      handleChange={(value) =>
                        handleChange('businessName')(value)
                      }
                      name="businessName"
                      touched={touched.businessName}
                      errors={errors.businessName}
                      // handleChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* footer */}
              <div
                className="actionEmployeeFooter"
                style={{
                  boxShadow:
                    theme === 'light'
                      ? '0px -2px 4px 0px rgba(0, 0, 0, 0.15)'
                      : 'rgb(255 255 255 / 15%) 0px -1px 1px 0px',
                  backgroundColor: theme === 'light' ? '#FFFFFF' : '#0B0B0C',
                }}
              >
                {/* left btns */}
                <button
                  className="btns outlineBtn"
                  type="button"
                  onClick={() => {
                    handleDrawerClosed();
                  }}
                >
                  Cancel
                </button>
                {/* right btns */}
                <button
                  className="btns primaryBtn"
                  type="submit"
                  aria-label="submit"
                >
                  Validate
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
}

export default ActionEmployeeDrawer;
