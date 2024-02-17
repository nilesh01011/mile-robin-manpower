import React, { useState } from "react";
import { useSelector } from "react-redux";

function InputFields({ mileId }) {
  const theme = useSelector((state) => state.theme);

  const [copiedText, setCopiedText] = useState("");

  const handleCopy = text => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  }

  // console.log(copiedText)
  return (
    <div className="mileIDKeyboard">
      {/* mileIDKey */}
      <div
        className="mileIDKey"
        style={{ backgroundColor: theme === "light" ? "#F2F2F2" : "" }}
      >
        <p>Mile ID:.</p>
        <span>{mileId}</span>
      </div>
      {/* mileIDKey button */}
      <button
        className="btns primaryBtn"
        type="button"
        onClick={() => handleCopy(mileId)}
      >
        {/* icons */}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.3912 5.71979C6.02127 5.71979 5.72138 6.01968 5.72138 6.38961V11.2123C5.72138 11.5822 6.02127 11.8821 6.3912 11.8821H11.2139C11.5838 11.8821 11.8837 11.5822 11.8837 11.2123V6.38961C11.8837 6.01968 11.5838 5.71979 11.2139 5.71979H6.3912ZM4.9176 6.38961C4.9176 5.57577 5.57735 4.91602 6.3912 4.91602H11.2139C12.0277 4.91602 12.6875 5.57577 12.6875 6.38961V11.2123C12.6875 12.0261 12.0277 12.6859 11.2139 12.6859H6.3912C5.57735 12.6859 4.9176 12.0261 4.9176 11.2123V6.38961Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.64022 1.96979C2.46257 1.96979 2.2922 2.04036 2.16659 2.16598C2.04097 2.29159 1.97041 2.46196 1.97041 2.63961V7.46229C1.97041 7.63993 2.04097 7.8103 2.16659 7.93592C2.2922 8.06153 2.46257 8.1321 2.64022 8.1321H3.17607C3.39803 8.1321 3.57796 8.31203 3.57796 8.53399C3.57796 8.75595 3.39803 8.93588 3.17607 8.93588H2.64022C2.2494 8.93588 1.87458 8.78063 1.59823 8.50427C1.32188 8.22792 1.16663 7.85311 1.16663 7.46229V2.63961C1.16663 2.24879 1.32188 1.87397 1.59823 1.59762C1.87458 1.32127 2.2494 1.16602 2.64022 1.16602H7.4629C7.85372 1.16602 8.22853 1.32127 8.50488 1.59762C8.78124 1.87397 8.93649 2.24879 8.93649 2.63961V3.17546C8.93649 3.39742 8.75656 3.57735 8.5346 3.57735C8.31264 3.57735 8.13271 3.39742 8.13271 3.17546V2.63961C8.13271 2.46196 8.06214 2.29159 7.93653 2.16598C7.81091 2.04036 7.64054 1.96979 7.4629 1.96979H2.64022Z"
              fill="white"
            />
          </svg>
        </span>
        {/* text */}
        {copiedText ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default InputFields;
