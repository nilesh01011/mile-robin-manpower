import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import TableItems from "./tableItems/index";

function ResponsiveTable({
  // tableHead,
  tableBody,
  inputFields,
  // searchDropdownText,
  emptyTableData,
  setDrawerData,
  setDrawerType,
  setIsDrawerOpen,
}) {
  const theme = useSelector((state) => state.theme);
  const [tableScrollBar, setTableScrollBar] = useState(false);
  const filterData = tableBody.filter((item) => {
    return inputFields.toLowerCase() === ""
      ? item
      : item.one.includes(inputFields) ||
          item.two.toLowerCase().includes(inputFields) ||
          item.three.includes(inputFields) ||
          item.four.includes(inputFields);
  });

  return (
    <div className="responsiveTable">
      {/* header */}
      <div
        className="responsiveTableHeaders"
        style={{ backgroundColor: theme === "light" ? "#f2f2f2" : "#1C1C1C" }}
      >
        <p>Corporate</p>
        <p>Actions</p>
      </div>
      {/* contents */}
      {filterData.length === 0 || !filterData ? (
        emptyTableData()
      ) : (
        <div
          className={`responsiveTableContents ${
            theme === "light" ? "light" : "dark"
          } ${tableScrollBar && "active"}`}
          onMouseEnter={() => setTableScrollBar(true)}
          onMouseLeave={() => setTableScrollBar(false)}
        >
          {filterData.map((ele, index) => (
            <TableItems
              key={index}
              items={ele}
              setDrawerData={setDrawerData}
              setDrawerType={setDrawerType}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ResponsiveTable;
