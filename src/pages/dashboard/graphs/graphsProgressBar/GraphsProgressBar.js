import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import ProgressBar from "./progressBar/ProgressBar";

function GraphsProgressBar({ title, dataItems,graphsExpand }) {
  const theme = useSelector((state) => state.theme);

  // const [collapseGraph, setCollapseGraph] = useState(false);

  const wordSlice = (word) => {
    if (word.length > 16) {
      return word.slice(0, 16) + "...";
    } else {
      return word;
    }
  };

  // const wordSlice_2 = (word) => {
  //   if (word.length > 14) {
  //     return word.slice(0, 14) + "...";
  //   } else {
  //     return word;
  //   }
  // };

  // const wordSlice_3 = (word) => {
  //   if (word.length > 12) {
  //     return word.slice(0, 12) + "...";
  //   } else {
  //     return word;
  //   }
  // };
  
  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";
  return (
    <div
      className="graphsProgressBarContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        borderColor: borderColor,
        height: graphsExpand === true ? 269 : "max-content",
      }}
    >
      <div
        className="headerCollapse"
        // onClick={() => setCollapseGraph(!collapseGraph)}
        style={{ marginBottom: graphsExpand === true && 12 }}
      >
        {/* title */}
        <h2>{title}</h2>
        {/* icons */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            style={{ transform: graphsExpand === true && "rotate(180deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.842 5.63523C18.0434 5.8241 18.0536 6.14052 17.8648 6.34197L10.3648 14.342C10.2702 14.4428 10.1382 14.5 10 14.5C9.86179 14.5 9.72975 14.4428 9.63523 14.342L2.13523 6.34197C1.94637 6.14052 1.95657 5.8241 2.15803 5.63523C2.35948 5.44637 2.6759 5.45657 2.86477 5.65803L10 13.2689L17.1352 5.65803C17.3241 5.45657 17.6405 5.44637 17.842 5.63523Z"
              fill="#FF3E5B"
            />
          </svg>
        </span>
      </div>
      {/* collapse graphs */}
      {graphsExpand && (
        <>
          {/* divider */}
          <div
            className="divider"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
            }}
          />
          {/* graph */}
          <div
            className={`${dataItems.length > 8 && "addScrollBar"} ${
              theme === "light" ? "light" : "dark"
            } graphsDataWrapper`}
          >
            {/* left side */}
            <div className="graphsProgressBarLeftSide">
              {/* name and bgColor */}
              {dataItems.map((ele, index) => (
                <div className="graphsProgressBarData" key={index}>
                  <p>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        display: "block",
                        backgroundColor: ele.bgColor,
                      }}
                    ></span>
                    {/* 1523px screen */}
                    <span className="name biggScreen" title={ele.name}>
                      {wordSlice(ele.name)}
                    </span>
                    {/* 1366px screen */}
                    {/* <span className="name middleScreen" title={ele.name}>
                  {wordSlice_2(ele.name)}
                </span> */}
                    {/* 1280px screen */}
                    {/* <span className="name smallScreen" title={ele.name}>
                  {wordSlice_3(ele.name)}
                </span> */}
                  </p>
                  {/* count */}
                  <span>{ele.count}</span>
                </div>
              ))}
            </div>
            {/* right side */}
            <div className="graphsProgressBarRightSide">
              {dataItems.map((ele, index) => (
                <ProgressBar key={index} items={ele} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GraphsProgressBar;
