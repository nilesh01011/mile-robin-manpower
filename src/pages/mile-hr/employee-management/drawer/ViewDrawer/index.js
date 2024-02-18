import React from 'react';
import Overlay from '../../../../../components/overlay/Overlay';
import { useSelector } from 'react-redux';
import './styles.scss';

function ViewDrawer({ tableViewDrawer, setTableViewDrawer, selectTableView }) {
  const theme = useSelector((state) => state.theme);

  // console.log(selectTableView);
  return (
    <>
      <Overlay showOverlay={tableViewDrawer} hideOverlay={setTableViewDrawer} />
      {/* contents */}
      <div
        className="drawerContainer actionEmployeeDrawer"
        style={{
          backgroundColor: theme === 'light' ? '#FFF' : '#0B0B0C',
          // width: '93%',
          right: tableViewDrawer ? 0 : '-150%',
        }}
      >
        {/* header */}
        <div
          className="drawerHeader"
          style={{
            backgroundColor: theme === 'light' ? '#fff' : '#1C1C1C',
            boxShadow:
              theme === 'light'
                ? '0px 1px 1px 0px rgba(0, 0, 0, 0.15)'
                : '0px 1px 1px 0px rgba(255, 255, 255, 0.15)',
          }}
        >
          <h3>View Details</h3>
          <span onClick={() => setTableViewDrawer(false)}>
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
                d="M3.45505 3.95529C3.61777 3.79257 3.88158 3.79257 4.0443 3.95529L9.99967 9.91066L15.955 3.95529C16.1178 3.79257 16.3816 3.79257 16.5443 3.95529C16.707 4.11801 16.707 4.38183 16.5443 4.54455L10.5889 10.4999L16.5443 16.4553C16.707 16.618 16.707 16.8818 16.5443 17.0445C16.3816 17.2073 16.1178 17.2073 15.955 17.0445L9.99967 11.0892L4.0443 17.0445C3.88158 17.2073 3.61777 17.2073 3.45505 17.0445C3.29233 16.8818 3.29233 16.618 3.45505 16.4553L9.41042 10.4999L3.45505 4.54455C3.29233 4.38183 3.29233 4.11801 3.45505 3.95529Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        {/* data */}
        <div className="drawerDataContainer">
          {/* left side */}
          <div
            //   className={`leftSide ${leftSideScrollBar && "activeScroll"} ${
            //     theme === "light" ? "light" : "dark"
            //   }`}
            className="leftSide"
            style={{
              backgroundColor: theme === 'light' ? '#F2F2F2' : '#1C1C1C',
              boxShadow:
                theme === 'light'
                  ? '1px 0px 1px 0px rgba(0, 0, 0, 0.15)'
                  : '0px 1px 1px 0px rgba(255, 255, 255, 0.15)',
            }}
          >
            {/* user profile */}
            <div
              className="leftSideTopHeaders"
              style={{
                backgroundColor: theme === 'light' ? '#F2F2F2' : '#1C1C1C',
              }}
            >
              <div
                className={`userProfile ${
                  theme === 'light' ? 'lightTheme' : 'darkTheme'
                }`}
                style={{
                  border: `1px solid ${
                    theme === 'light' ? '#B5B5B6' : '#545454'
                  }`,
                  // backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                }}
              >
                {/* user header section */}
                <div className="userImgNameId">
                  {/* user images */}
                  <div
                    className="userImg"
                    style={{
                      backgroundColor:
                        theme === 'light' ? '#E6E6E6' : '#545454',
                      border: `1px solid ${
                        theme === 'light' ? '#B5B5B6' : '#545454'
                      }`,
                    }}
                  >
                    {/* {data.userImg ? (
                    <img src={data.userImg} alt={data.username} />
                  ) : (
                    <span
                      style={{
                        borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
                      }}
                    >
                      {firstLetter + "" + lastLetter}
                    </span>
                  )} */}
                  </div>
                  {/* user name and Id */}
                  <div className="userName_id">
                    <h3>
                      {/* {data.two} */}

                      {/* <span style={{ opacity: textTrucat ? "0" : "1" }}>
                      {wordSlice(data.three)}
                    </span> */}

                      {/* <span
                      className="userNameSpan"
                      style={{
                        opacity: textTrucat ? "1" : "0",
                        backgroundColor: textTrucat
                          ? theme === "light"
                            ? "#ffffff"
                            : "#0B0B0C"
                          : "",
                      }}
                    >
                      {data.three}
                    </span> */}
                    </h3>
                    {/* <p>C{data.one}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="rightSide">
            {/* contents */}
            <div
              className={`contents ${
                theme === 'light' ? 'lightTheme' : 'darkTheme'
              }`}
            ></div>
            {/* footer side */}
            <div
              className="footerSide"
              style={{
                boxShadow:
                  theme === 'light'
                    ? '1px 0px 0px 1px rgba(0, 0, 0, 0.15)'
                    : '0px -1px 1px 0px rgba(255, 255, 255, 0.15)',
                backgroundColor: theme === 'light' ? '#ffffff' : '#1C1C1C',
                marginLeft: theme === 'light' ? '1px' : '0px',
              }}
            >
              footer
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDrawer;
