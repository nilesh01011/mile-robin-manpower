import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

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

function CheckBoxSelectDropdown({
  items,
  width,
  disabled,
  position,
  // setSelectedText,
  selectedText,
  handleChange,
  name,
  errors,
  touched,
}) {
  const theme = useSelector((state) => state.theme);
  const [selected, setSelected] = useState(selectedText ? selectedText : "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let domNode = useClickOutSide(() => {
    setIsDropdownOpen(false);
  });

  const handleDropdownClick = (ele) => {
    setSelected(ele);
    setIsDropdownOpen(!isDropdownOpen);
    if (handleChange) {
      handleChange(ele);
    }
  };
  return (
    <div ref={domNode} className="checkboxDropdown" style={{ width: width }}>
      {/* select options fields */}
      <div
        className="optionsContainer"
        style={{
          borderColor:
            touched && errors && !selected
              ? "#ED302D"
              : disabled
              ? theme === "light"
                ? "#E6E6E6"
                : "#232324"
              : isDropdownOpen === true
              ? theme === "light"
                ? "#0B0B0C"
                : "#ffffff"
              : theme === "light"
              ? "#B5B5B6"
              : "#545454",
          cursor: disabled ? "not-allowed" : "pointer",
          backgroundColor: disabled
            ? theme === "light"
              ? "#E6E6E6"
              : "#232324"
            : theme === "light"
            ? "#FFFFFF"
            : "#0B0B0C",
        }}
        onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
      >
        <p
          style={{
            userSelect: "none",
            color: disabled
              ? theme === "light"
                ? "#858585"
                : "#545454"
              : theme === "light"
              ? "#545454"
              : "#ffffff",
          }}
          className="selectedItems"
          name={name}
        >
          {!selected ? "Select" : selected}
        </p>
        {/* icons */}
        <div
          style={{
            transform: isDropdownOpen && "rotate(180deg)",
          }}
          className="icons"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.607 4.50858C14.7681 4.65967 14.7763 4.9128 14.6252 5.07397L8.62521 11.474C8.54959 11.5546 8.44396 11.6004 8.3334 11.6004C8.22283 11.6004 8.1172 11.5546 8.04158 11.474L2.04158 5.07397C1.89049 4.9128 1.89866 4.65967 2.05982 4.50858C2.22099 4.35748 2.47412 4.36565 2.62521 4.52681L8.3334 10.6155L14.0416 4.52682C14.1927 4.36565 14.4458 4.35748 14.607 4.50858Z"
              fill={disabled ? "#858585" : "#FF3E5B"}
            />
          </svg>
        </div>
      </div>
      {/* error */}
      {errors && touched && !selected ? (
        <p className="errors">{errors}</p>
      ) : null}
      {/* dropdown items */}
      {isDropdownOpen && (
        <ul
          className={`dropdownMenuList ${
            theme === "light" ? "lightTheme" : "darkTheme"
          }`}
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
            top: position ? (items.length <= 2 ? "-300%" : "-405%") : "125%",
          }}
        >
          {items.map((ele, index) => {
            return (
              <li
                key={index}
                className={`listChild ${
                  theme === "light" ? "lightTheme" : "darkTheme"
                }`}
                onClick={() => {
                  handleDropdownClick(ele.name);
                }}
                style={{
                  color: selected === ele.name && "#FF3E5B",
                  backgroundColor:
                    selected === ele.name
                      ? theme === "light"
                        ? "#F2F2F2"
                        : "#232324"
                      : "",
                }}
              >
                {/* check box icons */}
                <p
                  style={{
                    borderColor: theme === "light" ? "#B5B5B6" : "white",
                  }}
                >
                  {selected === ele.name && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                      >
                        <path
                          d="M3.23158 6.1272C3.09084 6.12783 2.95552 6.07293 2.85499 5.97443L1.09804 4.21748C1.04207 4.16955 0.996603 4.11056 0.964507 4.04422C0.932411 3.97788 0.914376 3.90562 0.911531 3.83198C0.908687 3.75833 0.921095 3.6849 0.947978 3.61628C0.974861 3.54766 1.01564 3.48534 1.06775 3.43323C1.11986 3.38112 1.18218 3.34034 1.2508 3.31346C1.31942 3.28658 1.39285 3.27417 1.46649 3.27701C1.54013 3.27986 1.61239 3.29789 1.67873 3.32999C1.74507 3.36209 1.80406 3.40755 1.852 3.46352L3.22242 4.83394L7.32526 0.78533C7.37457 0.735466 7.43327 0.695878 7.49798 0.66886C7.56269 0.641842 7.63212 0.62793 7.70224 0.62793C7.77237 0.62793 7.84179 0.641842 7.9065 0.66886C7.97121 0.695878 8.02992 0.735466 8.07922 0.78533C8.17881 0.885517 8.23471 1.02104 8.23471 1.16231C8.23471 1.30357 8.17881 1.4391 8.07922 1.53929L3.59978 5.96526C3.55272 6.01597 3.49577 6.0565 3.43245 6.08435C3.36912 6.1122 3.30076 6.12679 3.23158 6.1272Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    </span>
                  )}
                </p>
                {ele.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CheckBoxSelectDropdown;
