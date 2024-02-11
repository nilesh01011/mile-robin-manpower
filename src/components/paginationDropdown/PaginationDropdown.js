import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const handlerEvent = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handlerEvent);

    return () => {
      document.removeEventListener('mousedown', handlerEvent);
    };
  }, [handler]);

  return domNode;
};

function PaginationDropdown(
{  items,
  dropdownDirection,
  padding,
  selected,
  setSelected,
  width}
) {
  const theme = useSelector((state) => state.theme);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let domNode = useClickOutSide(() => {
    setIsDropdownOpen(false);
  });

  useEffect(() => {
    if (!selected) {
      setSelected(items[0].name);
    } else {
      setSelected(selected);
    }
  }, [items, selected, setSelected]);

  return (
    <div className="pagination-dropdown-menu" ref={domNode}>
      <div className="selectOption">
        <div
          style={{
            height: '100%',
            borderColor: theme === 'light' ? '#DEDEDE' : '#232324',
            // backgroundColor: theme === 'light' ? '#E6E6E6' : '#232324',
            padding: padding,
            // width:width && width,
          }}
          className="selectOptionContainer"
        >
          {/* select fields */}
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="selectOptionFields"
          >
            <p
              style={{ color: theme === 'light' ? 'black' : 'white' }}
              className="selectFields desktopView"
            >
              {!selected ? items[0].name : selected} / page
            </p>

            {/* icons */}
            <div
              style={{
                transform: isDropdownOpen && 'rotate(180deg)',
                color: theme === 'light' ? 'black' : 'white',
              }}
              className="icons"
            >
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
                  d="M12.4894 3.94466C12.6304 4.07687 12.6375 4.29836 12.5053 4.43938L7.25531 10.0394C7.18915 10.11 7.09672 10.15 6.99997 10.15C6.90323 10.15 6.8108 10.11 6.74464 10.0394L1.49464 4.43938C1.36243 4.29836 1.36958 4.07687 1.5106 3.94466C1.65161 3.81246 1.87311 3.8196 2.00531 3.96062L6.99997 9.28826L11.9946 3.96062C12.1268 3.8196 12.3483 3.81246 12.4894 3.94466Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* all lists items */}
      {isDropdownOpen && (
        <ul
          style={{

            backgroundColor: theme === 'light' ? 'white' : '#1C1C1C',
          }}
          className={`allListItems ${dropdownDirection}`}
        >
          {items.map((ele, id) => {
            return (
              <li
                key={id}
                onClick={() => {
                  setSelected(ele.name);
                  setIsDropdownOpen(false);
                }}
                className={`allListItemsChild ${
                  theme === 'light' ? 'lightHover' : 'darkHover'
                }`}
                style={{
                  color: selected === ele.name && '#FF3E5B',
                  backgroundColor:
                    selected === ele.name
                      ? theme === 'light'
                        ? '#F2F2F2'
                        : '#232324'
                      : '',
                }}
              >
                {ele.name} / page
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PaginationDropdown;
