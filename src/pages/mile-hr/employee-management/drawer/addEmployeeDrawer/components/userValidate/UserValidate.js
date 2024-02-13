import React from "react";
import "./styles.scss";
import { useFormik } from "formik";
import { employeeExists } from "../../../../../../../formikSchema/addEmployee";
import axios from "axios";
import { useSelector } from "react-redux";
import Dropdown from "../../../../../../../components/dropdown/Dropdown";
import CalendarInput from "../../../../../../../components/calendarInput";
import InputField from "../../../../../../../components/inputField/InputField";
import LoadingCircle from "../../../../../../../components/loadingCircle/LoadingCircle";

function UserValidate({
  // userValidate drawer show
  setUserValidate,
  userValidate,
  // loading
  isLoading,
  setIsLoading,
  // result show
  setResultShow,
  // user typed data
  setResultValues,
  // user exists but in active
  setUserExistsButInActive,
  // user exists with active
  setUserExistsWithActive,
  // user not exists
  setUserNotExists,
  userNotExists,

  // drader closed event
  handleDrawerClosed,
}) {
  // theme
  const theme = useSelector((state) => state.theme);
  // formikSchema form initial values
  const initialValues = {
    first_name: "",
    last_name: "",
    mother_name: "",
    date_birth: "",
    gender: "",
    businessName: "",
  };

  // useFormik
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    validationSchema: employeeExists,
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      setIsLoading(true);

      // fetching to this setTimeout function
      try {
        const response = await axios.get("/mile-user-exists.json");

        const filterUserExists = response.data.filter((user) => {
          let firstNameExists = user.first_name
            .toLowerCase()
            .includes(values.first_name.toLowerCase());

          let lastNameExists = user.last_name
            .toLowerCase()
            .includes(values.last_name.toLowerCase());

          let motherNameExists = user.mother_name
            .toLowerCase()
            .includes(values.mother_name.toLowerCase());

          let date_birthExists = user.date_birth
            .toLowerCase()
            .includes(values.date_birth.toLowerCase());

          let genderExists = user.gender
            .toLowerCase()
            .includes(values.gender.toLowerCase());

          let businessNameExists = user.businessName
            .toLowerCase()
            .includes(values.businessName.toLowerCase());

          return (
            firstNameExists &&
            lastNameExists &&
            motherNameExists &&
            date_birthExists &&
            genderExists &&
            businessNameExists
          );
        });

        console.log("Filtered user exists:", filterUserExists);

        setResultShow(true);

        setUserValidate(false);

        if (filterUserExists.length > 0) {
          // user found check it's active or inactive
          if (!filterUserExists[0].employeeStatus) {
            // console.log("user found but is inactive:", filterUserExists);
            setUserExistsButInActive(true);

            setResultValues(filterUserExists);
          }

          // user exists with active
          if (filterUserExists[0].employeeStatus) {
            setUserExistsWithActive(true);

            setUserExistsButInActive(false);

            setUserNotExists(false); // false

            setResultValues(filterUserExists);
          }
        }

        // user not exists
        if (filterUserExists.length === 0) {
          console.log("user not found:", values);
          setUserNotExists(!userNotExists); // true

          setUserExistsWithActive(false);

          setUserExistsButInActive(false);

          setResultValues([values]);
          console.log("user not found:", values);
        }

        action.resetForm();
      } catch (error) {
        console.error("Error fetching ", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    },
  });

  // dummy data

  const genderItems = [
    {
      name: "male",
    },
    {
      name: "female",
    },
    {
      name: "other",
    },
  ];

  const businessNameItems = [
    {
      name: "AD",
    },
    {
      name: "LMM",
    },
    {
      name: "AD 2",
    },
    {
      name: "AD 3",
    },
  ];
  return (
    <form onSubmit={handleSubmit} method="post" autoComplete="off">
      {/* validates contents */}
      {/* grid container */}
      <div className="userExistsCheckEmployeeContainer">
        <div
          className="actionEmployeeContents"
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
          }}
        >
          {/* first name */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              First Name<span style={{ color: "red" }}>*</span>
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
            {/* error */}
            {touched.first_name && errors.first_name ? (
              <p className="errors">{errors.first_name}</p>
            ) : null}
          </div>

          {/* last name */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Last Name<span style={{ color: "red" }}>*</span>
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
            {/* error */}
            {touched.last_name && errors ? (
              <p className="errors">{errors.last_name}</p>
            ) : null}
          </div>

          {/* mother name */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Mother's Name<span style={{ color: "red" }}>*</span>
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
            {/* error */}
            {touched.mother_name && errors ? (
              <p className="errors">{errors.mother_name}</p>
            ) : null}
          </div>

          {/* date */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Date of Birth<span style={{ color: "red" }}>*</span>
            </label>
            <CalendarInput
              text={values.date_birth}
              name="dateBirth"
              errors={errors.date_birth}
              handleChange={(value) => handleChange("date_birth")(value)}
              touched={touched.date_birth}
            />
          </div>

          {/* dropdown */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Gender<span style={{ color: "red" }}>*</span>
            </label>
            <Dropdown
              items={genderItems}
              selectedText={values.gender}
              handleChange={(value) => handleChange("gender")(value)}
              name="gender"
              touched={touched.gender}
              errors={errors.gender}
            />
          </div>

          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Business Name<span style={{ color: "red" }}>*</span>
            </label>
            <Dropdown
              items={businessNameItems}
              selectedText={values.businessName}
              handleChange={(value) => handleChange("businessName")(value)}
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
            theme === "light"
              ? "0px -2px 4px 0px rgba(0, 0, 0, 0.15)"
              : "rgb(255 255 255 / 15%) 0px -1px 1px 0px",
          backgroundColor: theme === "light" ? "#FFFFFF" : "#0B0B0C",
        }}
      >
        {/* left btn */}
        <button
          className="btns outlineBtn"
          type="reset"
          onClick={() => {
            handleDrawerClosed();
          }}
        >
          Cancel
        </button>
        {/* right btn */}
        <button className="btns primaryBtn" type="submit" aria-label="submit">
          Validate
        </button>
      </div>
    </form>
  );
}

export default UserValidate;
