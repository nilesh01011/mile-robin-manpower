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

function Dropdown({ items, minWidth, dropdownMenWidth, defaultSelected }) {
  const theme = useSelector((state) => state.theme);
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState(
    defaultSelected ? defaultSelected : ""
  );

  useEffect(() => {
    if (!selected) {
      setSelected(items[0].name);
    } else {
      setSelected(selected);
    }
  }, [selected, items]);

  let domNode = useClickOutSide(() => {
    setCollapsed(false);
  });

  return (
    <div
      className="dropdown-container"
      ref={domNode}
      onClick={() => setCollapsed(!collapsed)}
    >
      <div
        //   onClick={(e) => handleClicksFinalYearListDropdown(e)}
        className="dropdown-header"
      >
        <p
          className="dropdown-head"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              whiteSpace: "nowrap",
              color: "#ff3e5b",
              width: minWidth ? minWidth : null,
            }}
            className="selectedText"
          >
            {selected}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: collapsed && "rotate(180deg)",
                // transition: "transform 0.3s ease-in-out",
              }}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7052 3.38119C10.8261 3.49451 10.8322 3.68436 10.7189 3.80523L6.21886 8.60523C6.16215 8.66573 6.08292 8.70005 6 8.70005C5.91708 8.70005 5.83786 8.66573 5.78114 8.60523L1.28114 3.80523C1.16782 3.68436 1.17395 3.49451 1.29482 3.38119C1.41569 3.26787 1.60554 3.27399 1.71886 3.39487L6 7.96142L10.2811 3.39487C10.3945 3.27399 10.5843 3.26787 10.7052 3.38119Z"
                fill="#FF3E5B"
              />
            </svg>
          </span>
        </p>
      </div>
      {/* dropdown menu */}
      {collapsed && (
        <div
          className="dropdown_menu"
          style={{
            borderColor: theme === "light" ? "#0B0B0C" : "#ffffff",
            backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "rgb(0 0 0 / 20%) 0px 0px 3px"
                : "rgb(255 255 255 / 15%) 1px 0px 1px 0px",
            minWidth: dropdownMenWidth ? dropdownMenWidth : null,
          }}
        >
          {items.map((ele, index) => (
            <div
              title={ele.text}
              key={index}
              className={`lists ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
              onClick={() => {
                setSelected(ele.name);
                setCollapsed(!collapsed);
              }}
            >
              {/* final year name */}
              <p
                style={{
                  width: "100%",
                  color:
                    selected === ele.name
                      ? "#ff3e5b"
                      : theme === "light"
                      ? "black"
                      : "white",
                  backgroundColor:
                    selected === ele.name
                      ? theme === "light"
                        ? "#F2F2F2"
                        : "#232324"
                      : "",
                  fontSize: 14,
                }}
              >
                {ele.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
