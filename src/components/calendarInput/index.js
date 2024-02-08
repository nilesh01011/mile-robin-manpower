import React from "react";
import "./styles.scss";

function CalendarInput() {
  return (
    <div className="datePicker">
      <input type="date" className="no-calendar" />
      {/* icons */}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66667 2C6.94281 2 7.16667 2.22386 7.16667 2.5V3.5H12.8333V2.5C12.8333 2.22386 13.0572 2 13.3333 2C13.6095 2 13.8333 2.22386 13.8333 2.5V3.5H15C16.606 3.5 18 4.68297 18 6.25V15.25C18 16.817 16.606 18 15 18H5C3.394 18 2 16.817 2 15.25V6.25C2 4.68297 3.394 3.5 5 3.5H6.16667V2.5C6.16667 2.22386 6.39052 2 6.66667 2ZM3 8.5V15.25C3 16.1682 3.84457 17 5 17H15C16.1554 17 17 16.1682 17 15.25V8.5H3ZM17 7.5H3V6.25C3 5.33175 3.84457 4.5 5 4.5H15C16.1554 4.5 17 5.33175 17 6.25V7.5Z"
            fill="#FF3E5B"
          />
        </svg>
      </span>
    </div>
  );
}

export default CalendarInput;
