import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleDatePicker from "../../../../../../components/date/singleDatePicker/SingleDatePicker";
import { ConfigProvider } from "antd";
import Dropdown from "../../../../../../components/dropdown/Dropdown";
import { useFormik } from "formik";
import { workExperienceDetails } from "../../../../../../formikSchema/viewDetails";

function WorkExperience({ employeeDrawerData }) {
  const theme = useSelector((state) => state.theme);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const [addTableData, setAddTableData] = useState(false);

  const tbody = [
    {
      organisationname: "UNIQUE MOTORS GLOBE",
      dealer: "",
      location: "MALAD_SR",
      emp_role: "Dealer Principle",
      capabilityLevel: "",
      fromDate: "20 Jan 2021",
      toDate: "Current",
    },
    {
      organisationname: "UNIQUE MOTORS GLOBE",
      dealer: "",
      location: "MALAD_SR",
      emp_role: "Dealer Principle",
      capabilityLevel: "",
      fromDate: "24 Feb 2023",
      toDate: "Current",
    },
  ];

  const [tableBodyData, setTableBodyData] = useState(tbody);

  const role = [
    {
      name: "Warranty Administrator",
    },
    {
      name: "Dealer Principle",
    },
    {
      name: "Warranty Administrator 2",
    },
    {
      name: "Dealer Principle 2",
    },
  ];

  const industry = [
    {
      name: "Auto OEM",
    },
    {
      name: "Non Auto OEM",
    },
  ];

  const dealerName = [
    {
      name: "Option 1",
    },
    {
      name: "Option 2",
    },
    {
      name: "Option 3",
    },
  ];

  // handle button
  // const handleAddWorkExperienceTableData = async () => {};

  // formikSchema form initial values
  const initialValues = {
    industry: "",
    role: "",
    mahindraDealerName: "",
    from_date: "",
    to_date: "",
  };

  // useFormik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: workExperienceDetails,
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        console.log(values);
        // action.resetForm();
      },
    });

  // date from
  const handleFromDatePickerChange = (dateString) => {
    // handleChange
    handleChange("from_date")(dateString);
    // console.log(dateString);
  };

  // date to
  const handleToDatePickerChange = (dateString) => {
    // handleChange
    handleChange("to_date")(dateString);
    // console.log(dateString);
  };

  return (
    <div
      className="addEmployeeAccordionContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        borderColor: theme === "light" ? "#E6E6E6" : "#232324",
      }}
    >
      {/* header */}
      <div className="accordionHeader">
        <div className="editButton">
          {/* title */}
          <h5>Work Experience details</h5>
          {/* button */}
          <button type="button" onClick={() => setAddTableData(!addTableData)}>
            <span
              style={{
                color: addTableData === false ? "#FF3E5B" : "#B5B5B6",
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
                  d="M7 1.75C7.18122 1.75 7.32813 1.89691 7.32813 2.07812V6.67188H11.9219C12.1031 6.67188 12.25 6.81878 12.25 7C12.25 7.18122 12.1031 7.32813 11.9219 7.32813H7.32813V11.9219C7.32813 12.1031 7.18122 12.25 7 12.25C6.81878 12.25 6.67188 12.1031 6.67188 11.9219L6.67188 7.32813H2.07812C1.89691 7.32813 1.75 7.18122 1.75 7C1.75 6.81878 1.89691 6.67188 2.07812 6.67188H6.67188L6.67188 2.07812C6.67188 1.89691 6.81878 1.75 7 1.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span
              style={{
                color: addTableData === false ? "#FF3E5B" : "#B5B5B6",
              }}
            >
              Add
            </span>
          </button>
        </div>
        {/* cancel icons */}
        <span onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
          {isAccordionOpen === true ? (
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
                d="M19.2 12.0004C19.2 12.3318 18.9313 12.6004 18.6 12.6004L5.39995 12.6004C5.06858 12.6004 4.79995 12.3318 4.79995 12.0004C4.79995 11.669 5.06858 11.4004 5.39995 11.4004L18.6 11.4004C18.9313 11.4004 19.2 11.669 19.2 12.0004Z"
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

      {isAccordionOpen && (
        <div className="accordionContainerBody">
          {/* divider */}
          <div
            className="divider"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "",
            }}
          />
          {/* contents */}

          {addTableData && (
            <form onSubmit={handleSubmit}>
              {/* grid design */}
              <div className="grid">
                <div className="gridItems">
                  <label
                    style={{ color: theme === "light" ? "#545454" : "#858585" }}
                  >
                    Industry<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={industry}
                    selectedText={values.industry}
                    handleChange={(value) => handleChange("industry")(value)}
                    name="dealer_operations"
                    touched={touched.industry}
                    errors={errors.industry}
                  />
                </div>
              </div>

              <div className="grid" style={{ margin: "20px 0" }}>
                <div className="gridItems">
                  <label style={{ color: "#545454" }}>role</label>
                  <Dropdown
                    items={role}
                    selectedText={values.role}
                    handleChange={(value) => handleChange("role")(value)}
                    name="role"
                    touched={touched.role}
                    errors={errors.role}
                  />
                </div>

                <div className="gridItems">
                  <label
                    style={{ color: theme === "light" ? "#545454" : "#858585" }}
                  >
                    Mahindra Dealer Name
                  </label>
                  <Dropdown
                    items={dealerName}
                    selectedText={values.mahindraDealerName}
                    handleChange={(value) =>
                      handleChange("mahindraDealerName")(value)
                    }
                    name="mahindraDealerName"
                    touched={touched.mahindraDealerName}
                    errors={errors.mahindraDealerName}
                  />
                </div>

                <div className="gridItems">
                  <label
                    style={{ color: theme === "light" ? "#545454" : "#858585" }}
                  >
                    From Date
                  </label>
                  <ConfigProvider>
                    <SingleDatePicker
                      handleChange={handleFromDatePickerChange}
                      value=""
                      errors={errors.from_date}
                      touched={touched.from_date}
                      name="from_date"
                    />
                    {/* error */}
                    {touched.from_date && errors.from_date ? (
                      <p className="errors">{errors.from_date}</p>
                    ) : null}
                  </ConfigProvider>
                </div>

                <div className="gridItems">
                  <label
                    style={{ color: theme === "light" ? "#545454" : "#858585" }}
                  >
                    To Date
                  </label>
                  <ConfigProvider>
                    <SingleDatePicker
                      handleChange={handleToDatePickerChange}
                      value=""
                      errors={errors.to_date}
                      touched={touched.to_date}
                      name="to_date"
                    />
                    {/* error */}
                    {touched.to_date && errors.to_date ? (
                      <p className="errors">{errors.to_date}</p>
                    ) : null}
                  </ConfigProvider>
                </div>
              </div>

              {/* this content footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginTop: 20,
                }}
              >
                <button className="btns primaryBtn" type="submit">
                  Save
                </button>
                <button
                  className="btns outlineBtn"
                  type="button"
                  onClick={() => setAddTableData(false)}
                >
                  Cancel
                </button>
              </div>
              {/* divider */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "",
                }}
              />
            </form>
          )}

          {/* table */}
          <div
            className={`table ${theme === "light" ? "light" : "dark"}`}
            style={{
              backgroundColor: theme === "light" ? "#fff" : "#0B0B0C",
              border: `1px solid ${theme === "light" ? "#e6e6e6" : "#232324"}`,
              borderRadius: 4,
            }}
          >
            <table>
              <thead
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                }}
              >
                <tr>
                  <th style={{ borderTopLeftRadius: 4 }}>#</th>
                  <th>Organisation Name</th>
                  <th>Dealer For</th>
                  <th>Location</th>
                  <th>Emp. Role</th>
                  <th>Capability Level</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th
                    className={`stickyTableData ${
                      theme === "light" ? "lightHover" : "darkHover"
                    }`}
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#1C1C1C",
                      borderTopRightRadius: 4,
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableBodyData?.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {index + 1}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {ele.organisationname ? ele.organisationname : "-"}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {ele.dealer ? ele.dealer : "-"}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {ele.location ? ele.location : "-"}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {ele.emp_role ? ele.emp_role : "-"}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {ele.capabilityLevel ? ele.capabilityLevel : "-"}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {ele.fromDate ? ele.fromDate : "-"}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                      >
                        {ele.toDate ? ele.toDate : "-"}
                      </td>
                      <td
                        style={{
                          borderColor:
                            theme === "light" ? "#E6E6E6" : "#232324",
                        }}
                        className={`stickyTableData ${
                          theme === "light" ? "lightHover" : "darkHover"
                        }`}
                      >
                        <div className="actionBtns">
                          {/* edit */}
                          <button
                          // onClick={() =>
                          //   setEditWorkExperienceDrawer(
                          //     !editWorkExperienceDrawer
                          //   )
                          // }
                          >
                            <span>
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
                                  d="M15.6711 3.16368L8.82705 10.1252L8.66577 11.6604L10.1173 11.2694L16.6823 4.59169C16.6929 4.5809 16.704 4.57059 16.7156 4.56081C16.8405 4.45489 16.9587 4.23838 16.9915 3.96346C17.0237 3.6934 16.9643 3.44173 16.8333 3.2704C16.7135 3.11376 16.5112 3.01572 16.2654 3.00165C16.0231 2.98778 15.8027 3.06016 15.6711 3.16368ZM16.3226 2.00328C16.7899 2.03003 17.2926 2.22479 17.6277 2.66299C17.9515 3.08651 18.04 3.61606 17.9845 4.08179C17.9305 4.53454 17.7317 4.99982 17.3811 5.30729L10.7352 12.0673C10.6728 12.1308 10.5946 12.1764 10.5087 12.1996L8.22244 12.8154C8.06333 12.8583 7.89331 12.82 7.76793 12.7131C7.64255 12.6061 7.57791 12.4443 7.59513 12.2804L7.85077 9.84699C7.86259 9.7345 7.91219 9.62935 7.99149 9.5487L14.9766 2.44365C14.9872 2.43286 14.9983 2.42256 15.0099 2.41277C15.3677 2.1095 15.861 1.97687 16.3226 2.00328ZM2 3.28989C2 3.01374 2.22386 2.78989 2.5 2.78989H9.84439C10.1205 2.78989 10.3444 3.01374 10.3444 3.28989C10.3444 3.56603 10.1205 3.78989 9.84439 3.78989H3V17H15.9703V10.0683C15.9703 9.79212 16.1942 9.56826 16.4703 9.56826C16.7464 9.56826 16.9703 9.79212 16.9703 10.0683V17.5C16.9703 17.7761 16.7464 18 16.4703 18H2.5C2.22386 18 2 17.7761 2 17.5V3.28989Z"
                                  fill="#FF3E5B"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkExperience;
