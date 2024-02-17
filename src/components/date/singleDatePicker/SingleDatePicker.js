import { DatePicker } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "../styles.scss";
import { useSelector } from "react-redux";
import moment from "moment";

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    if (!domNode.current) {
      return;
    }
    const handlerEvent = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);

    return () => {
      document.removeEventListener("mousedown", handlerEvent);
    };
  }, [handler]);

  return domNode;
};

function SingleDatePicker({
  name,
  errors,
  touched,
  text,
  value,
  handleChange,
}) {
  const theme = useSelector((state) => state.theme);

  // date picker visible
  // const [isAntdVisible, setIsAntdVisible] = useState(value ? true : false);

  // value
  const [isValues, setIsValues] = useState(value ? value : "");

  // border colors
  const [isClicked, setIsClicked] = useState(false);

  let domNode = useClickOutSide(() => {
    setIsClicked(false);
  });

  const handleChangedCalendar = (date, dateString) => {
    handleChange(dateString);
    setIsValues(dateString);
    // console.log(dateString);
  };

  return (
    <>
      {isValues ? (
        <>
          <div
            className="defaultInputs"
            style={{
              borderColor: isClicked
                ? theme === "light"
                  ? "#0B0B0C"
                  : "#ffffff"
                : theme === "light"
                ? "#B5B5B6"
                : "#545454",
              backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
            }}
            onClick={() => {
              setIsClicked(true);
              setIsValues(isValues);
              // setIsAntdVisible(false);
            }}
            ref={domNode}
          >
            <input
              type="text"
              readOnly
              className="inputDefault"
              value={isValues}
              style={{ color: theme === "light" ? "#0B0B0C" : "#ffffff" }}
              // onClick={()=>setIsDateVisible(true)}
            />
            {/* icons */}
            <span>
              {/* date icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="dateIcons"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.66667 0C4.94281 0 5.16667 0.223858 5.16667 0.5V1.5H10.8333V0.5C10.8333 0.223858 11.0572 0 11.3333 0C11.6095 0 11.8333 0.223858 11.8333 0.5V1.5H13C14.606 1.5 16 2.68297 16 4.25V13.25C16 14.817 14.606 16 13 16H3C1.394 16 0 14.817 0 13.25V4.25C0 2.68297 1.394 1.5 3 1.5H4.16667V0.5C4.16667 0.223858 4.39052 0 4.66667 0ZM1 6.5V13.25C1 14.1682 1.84457 15 3 15H13C14.1554 15 15 14.1682 15 13.25V6.5H1ZM15 5.5H1V4.25C1 3.33175 1.84457 2.5 3 2.5H13C14.1554 2.5 15 3.33175 15 4.25V5.5Z"
                  fill="#FF3E5B"
                />
              </svg>
              {/* cancel icons */}
              <svg
                className="cancelButton"
                fillRule="evenodd"
                viewBox="64 64 896 896"
                focusable="false"
                width="1em"
                height="1em"
                fill="#FF3E5B"
                aria-hidden="true"
                onClick={() => {
                  setIsValues("");
                }}
              >
                <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
              </svg>
            </span>
          </div>
        </>
      ) : (
        <DatePicker
          className={`cal1`}
          name={name && name}
          style={{
            borderColor:
              touched && errors && !value
                ? "#ED302D"
                : theme === "light"
                ? "#b5b5b6"
                : "#545454",
            backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
          }}
          onChange={handleChangedCalendar}
          placeholder="DD-MM-YYYY"
        />
      )}
    </>
  );
}

export default SingleDatePicker;
