import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./styles.scss";

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale);

function DoughnutChart({ title, dataItems,graphsExpand }) {
  const theme = useSelector((state) => state.theme);
  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";
  const [counts, setCounts] = useState(0);
  // const [collapseGraph, setCollapseGraph] = useState(false);

  const sumOfArrays = (arrays) => {
    // create an array
    let myNums = arrays;

    let sum = 0;

    for (let i = 0; i < myNums.length; i++) {
      sum += myNums[i].count;
    }

    return sum;
  };

  useEffect(() => {
    setCounts(sumOfArrays(dataItems));
  }, [dataItems]);

  const options = {
    plugins: {
      // legend: {
      //   display: true,
      // },
      // datalabels: {
      //   formatter:(value,context) => {
      //     console.log(value)
      //     return "hello"
      //   }
      //   // display: true,
      //   // color: theme === "light" ? "black" : "white",
      //   // font: {
      //   //   size: 10,
      //   //   weight: "bold",
      //   // },
      //   // anchor: "start",
      //   // offset: 0,
      //   // align: "end",
      // },

      datalabels: {
        color: "#000",
        align: "end",
        anchor: "end",
        formatter: function (value, context) {
          // console.log(context.chart.data.labels[context.dataIndex]);
          // return context.chart.data.labels[context.dataIndex];
        },
        font: {
          size: 16,
          style: "bold",
        },
      },
    },
  };

  const labels = dataItems.map((ele) => {
    return ele.name;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: dataItems.map((ele) => {
          return ele.count;
        }),
        backgroundColor: dataItems.map((ele) => {
          return ele.bgColor;
        }),
        borderWidth: 0,
        offset: 6,
      },
    ],
    showDatapoints: true,
  };

  // const textCenter = {
  //   id: "textCenter",
  //   beforeDatasetsDraw(chart, args, pluginOptions) {
  //     const { ctx, data } = chart;
  //     ctx.save();
  //     ctx.font = `bolder 18px sans-serif`;
  //     ctx.fillStyle = theme === "light" ? "#0B0B0C" : "#ffffff";
  //     ctx.textAlign = "center";
  //     ctx.textBaseline = "middle";
  //     ctx.fillText('360',chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);
  //   },
  // };
  return (
    <div
      className="graphsDoughnutContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        borderColor: borderColor,
        height: graphsExpand === true ? 269 : "max-content",
      }}
    >
      <div
        className="headerCollapse"
        // onClick={() => setCollapseGraph(!collapseGraph)}
        style={{marginBottom:graphsExpand === true && 12}}
      >
        {/* title */}
        <h2>{title}</h2>
        {/* icons */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            style={{ transform: graphsExpand === true && "rotate(180deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.842 5.63523C18.0434 5.8241 18.0536 6.14052 17.8648 6.34197L10.3648 14.342C10.2702 14.4428 10.1382 14.5 10 14.5C9.86179 14.5 9.72975 14.4428 9.63523 14.342L2.13523 6.34197C1.94637 6.14052 1.95657 5.8241 2.15803 5.63523C2.35948 5.44637 2.6759 5.45657 2.86477 5.65803L10 13.2689L17.1352 5.65803C17.3241 5.45657 17.6405 5.44637 17.842 5.63523Z"
              fill="#FF3E5B"
            />
          </svg>
        </span>
      </div>
      {/* collapse graphs */}
      {graphsExpand && (
        <>
          {/* divider */}
          <div
            className="divider"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
            }}
          ></div>
          {/* graphs */}
          <div className="graphsWrapper">
            {/* graphs */}
            <div className="graphs">
              <Doughnut
                options={options}
                data={data}
                // plugins={[textCenter]}
              />

              <span
                className="graphMiddeltext"
                style={{ color: theme === "light" ? "#0B0B0C" : "#ffffff" }}
              >
                {counts}
              </span>
            </div>
            {/* divider */}
            <div
              className="divider"
              style={{
                backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
              }}
            ></div>
            {/* contents */}
            <div
              className="graphsContents"
              style={{ gridTemplateColumns: `repeat(${dataItems.length},1fr)` }}
            >
              {/* contents */}
              {dataItems.map((ele, index) => (
                <p key={index}>
                  <span
                    style={{
                      backgroundColor: ele.bgColor,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      display: "block",
                    }}
                  ></span>
                  <span>{ele.name}</span>
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DoughnutChart;
