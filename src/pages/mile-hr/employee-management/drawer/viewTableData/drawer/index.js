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
    <>
      {/* overlay 2 */}
      <div
        className="overlay_2"
        style={{
          //   display: editWorkExperienceDrawer ? "block" : "none",
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
            backgroundColor: theme === "light" ? "#ffffff" : "#000",
            boxShadow:
              theme === "light" ? "0px 2px 4px 0px rgba(0, 0, 0, 0.15)" : "",
          }}
        ></div>
      </div>
    </>
  );
}

export default EditWorkExperience;
