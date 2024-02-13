import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function BirthdayCalendar({ userData, divider }) {
  const theme = useSelector((state) => state.theme);

  const userNameSplit = userData.username.split(" ");
  const firstLetter = userNameSplit[0][0];
  const lastLetter = userNameSplit[userNameSplit.length - 1][0];

  return (
    <div
      className={`birthdayContainer ${divider && "borderLine"}`}
      style={{ borderColor: theme === "light" ? "#E6E6E6" : "#232324" }}
    >
      {/* user image */}
      <div className="userimages">
        {userData.userImg ? (
          <img src={userData.userImg} alt={userData.username} />
        ) : (
          <span
            style={{
              borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
              backgroundColor: theme === "light" ? "#f2f2f2" : "#545454",
            }}
          >
            {firstLetter + "" + lastLetter}
          </span>
        )}
      </div>
      {/* user name and date */}
      <div className="userDetails">
        <h5>{userData.username}</h5>
        <p>{userData.date}</p>
      </div>
    </div>
  );
}

export default BirthdayCalendar;
