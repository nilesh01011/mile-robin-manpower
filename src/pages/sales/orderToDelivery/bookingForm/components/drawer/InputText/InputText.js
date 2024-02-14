import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { INDIA_FLAG } from "../../../../../../../assets";
// import { INDIA_FLAG } from "../../assets";

function InputText({ data, types, placeholder, inputTypes, text }) {
  const [inputText, setInputText] = useState(text ? text : "");
  const [edit, setEdit] = useState(false);
  const theme = useSelector((state) => state.theme);

  const handleChanged = (e) => {

    setInputText(e.target.value);
  };
  return (
    <div
      className="inputText"
      style={{
        backgroundColor:
          types === "disabled"
            ? theme === "light"
              ? "#E6E6E6"
              : "#232324"
            : theme === "light"
            ? "#FFFFFF"
            : "#0B0B0C",
        borderColor: theme === "light" ? "#B5B5B6" : "#545454",
      }}
    >
      <input
        type={inputTypes}
        maxLength={inputTypes === "tel" ? 10 : null}
        value={inputText}
        onChange={(e) =>
          //    setInputText(e.target.value)
          handleChanged(e)
        }
        placeholder={placeholder}
        style={{
          color:
            types === "disabled"
              ? theme === "light"
                ? "#858585"
                : "#545454"
              : theme === "light"
              ? "#0B0B0C"
              : "#ffffff",
          paddingLeft: types === "phoneNumber" && 79,
          fontSize: 14,
        }}
        disabled={types === "disabled" && true}
      />
      {types === "phoneNumber" && (
        <>
          <p className="dropdown">
            <span style={{ fontSize: 14 }}>+91</span>
            {/* flag icons */}
            <span>
              <img src={INDIA_FLAG} className="img" alt="flags" />
            </span>
            {/* arrow icons */}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.92098 2.81762C9.02171 2.91205 9.02682 3.07026 8.93238 3.17099L5.18238 7.17099C5.13512 7.2214 5.0691 7.25 5 7.25C4.9309 7.25 4.86488 7.2214 4.81761 7.17099L1.06762 3.17099C0.973183 3.07026 0.978286 2.91205 1.07901 2.81762C1.17974 2.72318 1.33795 2.72829 1.43238 2.82902L5 6.63447L8.56761 2.82902C8.66205 2.72829 8.82026 2.72318 8.92098 2.81762Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </p>
          {data.notEdit && (
            <span className="editText" onClick={() => setEdit(!edit)}>
              Edit
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default InputText;
