import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import GridContent from "../gridContent/GridContent";

function Accordion({
  data,
  type,
  id,
  defaultType,
  indicator,
  setIndicator,
  drawerType,
  addressType,
  checked,
}) {
  const theme = useSelector((state) => state.theme);
  const [accordionCollapsed, setAccordionCollapsed] = useState(false);

  const [tableHead, setTableHead] = useState([]);
  const [tableBody, setTableBody] = useState([]);

  const handleChecked = (id) => {
    checked = !checked;
    setIndicator(id);
    // console.log("Id:",id)
    // console.log("Checked:",checked)
  };

  useEffect(() => {
    if (data.type === "gridTable") {
      data.contents.map((ele) => {
        setTableHead(ele.headContent);
        setTableBody(ele.bodyContent);
      });
    }
  }, [data.type]);

  return (
    <div
      className="accordionContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        border: `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
        boxShadow:
          type === "accordionTwo"
            ? theme === "light"
              ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
              : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)"
            : "",
      }}
    >
      <div className="accordionHeader">
        <span style={{ fontSize: 16, fontWeight: 700 }}>{data.title}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {type === "accordionTwo" && (
            <div className="markDefault">
              {/* <Checkbox
                label="Mark As Default"
                indicator={indicator}
                setIndicator={setIndicator}
                id={id}
                checked={checked}
                handleChecked={handleChecked}
                // disabled={id}
                drawerType={drawerType}
              /> */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#858585" : "#858585",
                }}
              />

              <span style={{ fontSize: 14, color: "#858585" }}>
                {addressType}
              </span>
            </div>
          )}
          {/* icons */}
          <span
            onClick={() => setAccordionCollapsed(!accordionCollapsed)}
            style={{ cursor: "pointer" }}
          >
            {accordionCollapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2002 11.9999C19.2002 12.3313 18.9316 12.5999 18.6002 12.5999L5.4002 12.5999C5.06882 12.5999 4.80019 12.3313 4.80019 11.9999C4.80019 11.6685 5.06882 11.3999 5.4002 11.3999L18.6002 11.3999C18.9316 11.3999 19.2002 11.6685 19.2002 11.9999Z"
                  fill="#FF3E5B"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                  fill="#FF3E5B"
                />
              </svg>
            )}
          </span>
        </div>
      </div>

      {/* contents */}
      {accordionCollapsed && (
        <>
          {data.type === "gridTable" ? (
            <div
              className="accordionContents"
              style={{ borderColor: theme === "light" ? "" : "" }}
            >
              <table
                className="table gridTableContainer"
                style={{
                  borderColor: theme === "light" ? "#e6e6e6" : "#232324",
                }}
              >
                <thead>
                  {tableHead &&
                    tableHead.map((ele, index) => {
                      return (
                        <th key={index} className="tableHeadText">
                          {ele.text}
                        </th>
                      );
                    })}
                </thead>
                {/* table contents */}
                <tbody
                  style={{
                    backgroundColor: theme === "light" ? "white" : "#0B0B0C",
                  }}
                >
                  {tableBody &&
                    tableBody.map((ele, index) => {
                      return (
                        <tr key={index}>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#e6e6e6" : "#232324",
                              color: theme === "light" ? "#545454" : "#B5B5B6",
                            }}
                          >
                            {ele.one ? ele.one : "--"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#e6e6e6" : "#232324",
                              color: theme === "light" ? "#545454" : "#B5B5B6",
                            }}
                          >
                            {ele.two ? ele.two : "--"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#e6e6e6" : "#232324",
                              color: theme === "light" ? "#545454" : "#B5B5B6",
                            }}
                          >
                            {ele.three ? ele.three : "--"}
                          </td>
                          {ele.four && (
                            <td
                              style={{
                                borderColor:
                                  theme === "light" ? "#e6e6e6" : "#232324",
                                color:
                                  theme === "light" ? "#545454" : "#B5B5B6",
                              }}
                            >
                              {ele.four ? ele.four : "--"}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            type === "accordionGridFlex" && (
              <div
              // className={`accordionContents ${data.type}`}
              // style={{
              //   borderTop: `1px solid ${
              //     theme === "light" ? "#e6e6e6" : "#232324"
              //   }`,
              //   paddingTop: "20px",
              //   paddingBottom: "20px",
              // }}
              >
                {data.contents.map((ele, index) => {
                  if (ele.type === "gridContents") {
                    return (
                      <div
                        className={`accordionContents ${data.type}`}
                        style={{
                          borderTop: `1px solid ${
                            theme === "light" ? "#e6e6e6" : "#232324"
                          }`,
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        }}
                      >
                        {ele.contents.map((el, index) => {
                          return (
                            <GridContent
                              data={el}
                              key={index}
                              type={data.type}
                              drawerType={drawerType}
                            />
                          );
                        })}
                      </div>
                    );
                  }

                  if (ele.type === "flexColumnData") {
                    return ele.contents.map((el, index) => {
                      return (
                        <div key={index} className="flexColumnData">
                          {/* title */}
                          <span
                            style={{
                              fontSize: 14,
                              color: theme === "light" ? "#545454" : "#858585",
                              marginBottom: 2,
                            }}
                          >
                            {el.title}
                          </span>
                          {drawerType === "edit" && el.input == "textarea" ? (
                            <textarea
                            disabled={el.inputType === "disabled" ? true : false}
                              placeholder={el.placeholder}
                              style={{
                                backgroundColor: el.inputType === "disabled" ? theme === "light" ? "#E6E6E6" : "#232324" :
                                  theme === "light" ? "#FFFFFF" : "#0B0B0C",
                                borderColor:
                                  theme === "light" ? "#B5B5B6" : "#545454",
                                color:
                                  theme === "light" ? "#0B0B0C" : "#FFFFFF",
                                  marginTop:3
                              }}
                            ></textarea>
                          ) : (
                            <span
                              style={{
                                fontSize: 14,
                              }}
                            >
                              {el.text}
                            </span>
                          )}
                        </div>
                      );
                    });
                  }
                })}

                {/* {console.log(data.type)} */}
              </div>
            )
          )}

          {defaultType === "gridContents" && defaultType === "gridContents" ? (
            <div
              className={`accordionContents ${data.type}`}
              style={{
                borderTop: `1px solid ${
                  theme === "light" ? "#e6e6e6" : "#232324"
                }`,
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              {data.contents.map((ele, index) => (
                <GridContent
                  data={ele}
                  key={index}
                  type={data.type}
                  drawerType={drawerType}
                />
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default Accordion;
