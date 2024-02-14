import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Dropdown from "../dropdown";
import InputText from "../InputText/InputText";

function GridContent({ data, type, allData, drawerType }) {
  const theme = useSelector((state) => state.theme);

  const wordSlice = (word) => {
    if (word.length > 20) {
      return word.slice(0, 20) + "...";
    } else {
      return word;
    }
  };

  return (
    <div className="detailsContents">
      <span
        style={{
          color:
            type === "form"
              ? theme === "light"
                ? "#0B0B0C"
                : "#ffffff"
              : theme === "light"
              ? "#545454"
              : "#858585",
          textTransform: type === "form" ? "" : "capitalize",
          fontWeight: type === "form" ? 500 : 400,
          fontSize: 14,
          // marginBottom: 3,
          boxShadow:
            type === "form" && theme === "light"
              ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
              : "",
          padding: type === "form" && "10px 20px",
          display: type === "form" && "flex",
          alignItems: type === "form" && "center",
          justifyContent: type === "form" && "space-between",
          // marginBottom: type === "form" && 20,
          borderRadius: 4,
          border:
            type === "form" &&
            `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
        }}
      >
        {/* title */}
        <span className="title">{wordSlice(data.title)}</span>

        {type === "form" && (
          <span style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.37757 7.86505C5.76699 6.71336 7.75481 5.5 10 5.5C12.2452 5.5 14.233 6.71336 15.6224 7.86505C16.3242 8.44678 16.8909 9.02735 17.2824 9.46248C17.4784 9.68037 17.6312 9.86263 17.7358 9.99148C17.7881 10.0559 17.8285 10.1071 17.8561 10.1427C17.87 10.1605 17.8807 10.1745 17.8881 10.1843L17.8969 10.1959L17.8994 10.1992L17.9005 10.2007C17.9005 10.2007 17.9007 10.201 17.5 10.5C17.9007 10.799 17.9005 10.7993 17.9005 10.7993L17.9002 10.7997L17.8994 10.8008L17.8969 10.8041L17.8881 10.8157C17.8807 10.8255 17.87 10.8395 17.8561 10.8573C17.8285 10.8929 17.7881 10.9441 17.7358 11.0085C17.6312 11.1374 17.4784 11.3196 17.2824 11.5375C16.8909 11.9726 16.3242 12.5532 15.6224 13.135C14.233 14.2866 12.2452 15.5 10 15.5C7.75481 15.5 5.76699 14.2866 4.37757 13.135C3.67577 12.5532 3.10908 11.9726 2.71765 11.5375C2.52164 11.3196 2.36882 11.1374 2.2642 11.0085C2.21187 10.9441 2.17155 10.8929 2.14387 10.8573C2.13002 10.8395 2.11933 10.8255 2.11187 10.8157L2.10312 10.8041L2.10057 10.8008L2.09976 10.7997L2.09948 10.7993C2.09948 10.7993 2.09926 10.799 2.5 10.5C2.09926 10.201 2.09948 10.2007 2.09948 10.2007L2.10057 10.1992L2.10312 10.1959L2.11187 10.1843C2.11933 10.1745 2.13002 10.1605 2.14387 10.1427C2.17155 10.1071 2.21187 10.0559 2.2642 9.99148C2.36882 9.86263 2.52164 9.68037 2.71765 9.46248C3.10908 9.02735 3.67577 8.44678 4.37757 7.86505ZM2.5 10.5L2.09926 10.201C1.96691 10.3784 1.96691 10.6216 2.09926 10.799L2.5 10.5ZM3.14093 10.5C3.22648 10.6023 3.33376 10.7272 3.4611 10.8687C3.82869 11.2774 4.36032 11.8218 5.01574 12.3651C6.34076 13.4634 8.10294 14.5 10 14.5C11.8971 14.5 13.6592 13.4634 14.9843 12.3651C15.6397 11.8218 16.1713 11.2774 16.5389 10.8687C16.6662 10.7272 16.7735 10.6023 16.8591 10.5C16.7735 10.3977 16.6662 10.2728 16.5389 10.1313C16.1713 9.72265 15.6397 9.17823 14.9843 8.63495C13.6592 7.53664 11.8971 6.5 10 6.5C8.10294 6.5 6.34076 7.53664 5.01574 8.63495C4.36032 9.17823 3.82869 9.72265 3.4611 10.1313C3.33376 10.2728 3.22648 10.3977 3.14093 10.5ZM17.5 10.5L17.9007 10.799C18.0331 10.6216 18.0331 10.3784 17.9007 10.201L17.5 10.5ZM8.32062 8.82062C8.76602 8.37522 9.37011 8.125 10 8.125C10.6299 8.125 11.234 8.37522 11.6794 8.82062C12.1248 9.26602 12.375 9.87011 12.375 10.5C12.375 11.1299 12.1248 11.734 11.6794 12.1794C11.234 12.6248 10.6299 12.875 10 12.875C9.37011 12.875 8.76602 12.6248 8.32062 12.1794C7.87522 11.734 7.625 11.1299 7.625 10.5C7.625 9.87011 7.87522 9.26602 8.32062 8.82062ZM10 9.125C9.63533 9.125 9.28559 9.26987 9.02773 9.52773C8.76987 9.78559 8.625 10.1353 8.625 10.5C8.625 10.8647 8.76987 11.2144 9.02773 11.4723C9.28559 11.7301 9.63533 11.875 10 11.875C10.3647 11.875 10.7144 11.7301 10.9723 11.4723C11.2301 11.2144 11.375 10.8647 11.375 10.5C11.375 10.1353 11.2301 9.78559 10.9723 9.52773C10.7144 9.26987 10.3647 9.125 10 9.125Z"
                fill="#FF3E5B"
              />
            </svg>
          </span>
        )}
      </span>
      {/* <span
        style={{
          color:data.textColor ? data.textColor : theme === "light" ? "#0B0B0C" : "#ffffff",
          textTransform: "capitalize",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        {data.text}
      </span> */}
      {drawerType === "view" ? (
        <span
          style={{
            color: data.textColor
              ? data.textColor
              : theme === "light"
              ? "#0B0B0C"
              : "#ffffff",
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          {data.text ? data.text : "--"}
        </span>
      ) : (
        <>
          {data.text && (
            <div>
              {data.input && (
                <>
                  {/* {data.inputType === "text" && (
                    <InputText
                      types={data.inputType}
                      placeholder={data.placeholder}
                      data={data}
                      inputTypes={data.input}
                      text={data.text}
                    />
                  )} */}

                  <InputText
                    types={data.inputType}
                    placeholder={data.placeholder}
                    data={data}
                    inputTypes={data.input}
                    text={data.text}
                  />

                  {/* {data.inputType === "textarea" && (
                    <Textarea
                      placeholder={data.placeholder}
                      types={data.input}
                    />
                  )} */}
                </>
              )}
              {/* not edit */}
              {!data.inputType && (
                <span
                  style={{
                    color: data.textColor
                      ? data.textColor
                      : theme === "light"
                      ? "#0B0B0C"
                      : "#ffffff",
                    textTransform: "capitalize",
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  {data.text ? data.text : "--"}
                </span>
              )}
              {/* dropdown */}
              {data.dropdownList && (
                <Dropdown
                  position={allData ? allData.position : null}
                  items={data.dropdownList}
                  disabled={data.disabled}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default GridContent;
