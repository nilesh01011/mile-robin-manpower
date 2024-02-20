import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function EditWorkExperience({
  editWorkExperienceDrawer,
  setEditWorkExperienceDrawer,
}) {
  const theme = useSelector((state) => state.theme);
  const handleClosed = () => {
    setEditWorkExperienceDrawer(!editWorkExperienceDrawer);
  };
  return (
    <div className="editWorkModelBox">
      {/* overlay 2 */}
      <div
        className="overlay_2"
        style={{
          backgroundColor:
            theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(84, 84, 84, 0.8)",
        }}
        onClick={() => handleClosed()}
      />
      {/* container */}
      <div className="editWorkExperienceContainer">
        {/* box model */}
        <div
          className="boxModel"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
            boxShadow:
              theme === "light" ? "0px 2px 4px 0px rgba(0, 0, 0, 0.15)" : "",
          }}
        >
          {/* headers */}
          <div className="modelHeaders">
            <div className="headTitle">
              {/* title */}
              <h4>Confirmation</h4>
              {/* icons */}
              <span onClick={() => handleClosed()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.76432 2.7656C2.89449 2.63543 3.10555 2.63543 3.23572 2.7656L8.00002 7.5299L12.7643 2.7656C12.8945 2.63543 13.1055 2.63543 13.2357 2.7656C13.3659 2.89577 13.3659 3.10683 13.2357 3.237L8.47142 8.0013L13.2357 12.7656C13.3659 12.8958 13.3659 13.1068 13.2357 13.237C13.1055 13.3672 12.8945 13.3672 12.7643 13.237L8.00002 8.47271L3.23572 13.237C3.10555 13.3672 2.89449 13.3672 2.76432 13.237C2.63414 13.1068 2.63414 12.8958 2.76432 12.7656L7.52862 8.0013L2.76432 3.237C2.63414 3.10683 2.63414 2.89577 2.76432 2.7656Z"
                    fill="#FF3E5B"
                  />
                </svg>
              </span>
            </div>

            {/* divider */}
            <div
              className="divider"
              style={{
                backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
              }}
            />
          </div>
          {/* text */}
          <p>Are you sure you want to transfer this employee?</p>
          <div className="footerBtn">
            <button type="button" className="btns outlineBtn" onClick={() => handleClosed()}>No</button>
            <button type="button" className="btns primaryBtn">Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWorkExperience;
