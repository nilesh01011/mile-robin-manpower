import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

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

function Dropdown({ items, disabled, width, position }) {
  const theme = useSelector((state) => state.theme);
  const [selected, setSelected] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // console.log(data)

  useEffect(() => {
    if (!selected) {
      return setSelected(items[0].name);
    } else {
      setSelected(selected);
    }
  }, [selected, setSelected]);

  let domNode = useClickOutSide(() => {
    setIsDropdownOpen(false);
  });

  return (
    <div
      ref={domNode}
      className="dropdownIndividualContainer"
      style={{ width: width }}
    >
      {/* select options fields */}
      <div
        className="optionsContainer"
        style={{
          borderColor: disabled
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
            color: disabled
              ? theme === "light"
                ? "#858585"
                : "#545454"
              : theme === "light"
              ? "#0B0B0C"
              : "#ffffff",
          }}
          className="selectedItems"
        >
          {selected}
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
      {/* dropdown items */}
      {isDropdownOpen && (
        <ul
          className={`dropdownMenuList ${
            theme === "light" ? "lightTheme" : "darkTheme"
          }`}
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
            top: position ? items.length <= 2 ? "-300%" : "-405%" : "125%",
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
                  setSelected(ele.name);
                  setIsDropdownOpen(!isDropdownOpen);
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
                {ele.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
