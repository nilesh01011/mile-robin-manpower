import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RecentlyView({ items }) {
  const theme = useSelector((state) => state.theme);
  const router = useNavigate();
  const pathname = window.location.pathname;
  return (
    <div
      className="recentlyViewContainer"
      onClick={() => items.link && router(items.link)}
      style={{ borderColor: theme === "light" ? "#E6E6E6" : "#232324" }}
    >
      {/* text */}
      <p style={{textTransform:"capitalize"}}>{items.name}</p>
      {/* icons */}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_19561_3426)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.33983 4.86479C5.34114 4.58865 5.56606 4.36586 5.84219 4.36717L15.1672 4.41136C15.4415 4.41266 15.6635 4.63469 15.6648 4.90899L15.709 14.234C15.7103 14.5101 15.4875 14.735 15.2114 14.7363C14.9352 14.7376 14.7103 14.5148 14.709 14.2387L14.6705 6.11277L4.91175 15.8715C4.71648 16.0668 4.3999 16.0668 4.20464 15.8715C4.00938 15.6762 4.00938 15.3597 4.20464 15.1644L13.9634 5.40567L5.83746 5.36715C5.56132 5.36585 5.33852 5.14093 5.33983 4.86479Z"
              fill="#FF3E5B"
            />
          </g>
          <defs>
            <clipPath id="clip0_19561_3426">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
}

export default RecentlyView;
