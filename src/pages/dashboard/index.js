import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Title from "../../components/title";
import {
  actionItems,
  billingBarGraphs,
  ibndstock,
  latestNews,
  recentlyVisited,
  retailBarGraphs,
  todayBirthday,
  upcomingBirthday,
} from "../../data";
import ActionItemsCollapsed from "./actionitems";
import LatestNews from "./latestnews";
import Drawer from "./drawer";
import BirthdayCalendar from "./birthdaycalendar";
import TrendingNewsCarousel from "./trendingNewsCarousel/TrendingNewsCarousel";
import KeyhightlightCarousel from "./keyhightlightCarousel/KeyhightlightCarousel";
import RecentlyView from "./recentlyView";
// Bar Charts
import GraphsProgressBar from "./graphs/graphsProgressBar/GraphsProgressBar";
// Doughnut Chart
import DoughnutChart from "./graphs/doughnutChart/DoughnutChart";

function DashboardPage() {
  const theme = useSelector((state) => state.theme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerSliderID, setDrawerSliderID] = useState(0);
  const [drawerType, setDrawerType] = useState("");

  // scrollbar in action items
  const [actionItemsScrollBar, setActionItemsScrollBar] = useState(false);
  const [latestNewsScrollBar, setLatestNewsScrollBar] = useState(false);
  const [birthdayListScrollBar, setBirthdayListScrollBar] = useState(false);

  const [recentlyViewScrollbar, setRecentlyViewScrollbar] = useState(false);

  const [graphsExpand, setGraphsExpand] = useState(false);

  const handleDrawerClosed = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = "auto";
    // document.body.classList.remove("overflow-hidden");
  };

  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";

  return (
    <>
      <div className="dashboard minHeight">
        {/* ============ title ============ */}
        <div
          style={{
            background: theme === "light" ? "white" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
          className="container-fluid titleContainer"
        >
          <Title title="Home" />
        </div>
        {/* =============== Content ================ */}
        <div className="boxContainer container-fluid">
          {/* ========== New Design ========== */}

          {/* heading */}
          <div
            className="key_highlights_heading"
            style={{
              color: theme === "light" ? "black" : "white",
              backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              borderColor: borderColor,
              overflowX: "hidden",
            }}
          >
            {/* Carousel Sections End */}
            <div style={{ width: "100%", overflow: "hidden" }}>
              <KeyhightlightCarousel />
            </div>
          </div>
          {/* action items and carousel contents */}
          <div
            className="actionItems_container"
            style={{ backgroundColor: theme === "light" ? "white" : "" }}
          >
            {/* left side */}
            <div className="actionItems_left_side box_Contents">
              {/* title */}
              <h4 style={{ fontSize: 18, fontWeight: 700 }}>Action Items</h4>
              {/* contents */}
              <div
                className={`actionItems_contents ${
                  theme === "light" ? "light" : "dark"
                } ${actionItemsScrollBar && "active"}`}
                style={{
                  borderColor: borderColor,
                }}
                onMouseEnter={() => setActionItemsScrollBar(true)}
                onMouseLeave={() => setActionItemsScrollBar(false)}
              >
                {actionItems.map((ele) => {
                  return (
                    <ActionItemsCollapsed
                      key={ele.id}
                      items={ele}
                      setIsDrawerOpen={setIsDrawerOpen}
                      setDrawerSliderID={setDrawerSliderID}
                      setDrawerType={setDrawerType}
                    />
                  );
                })}
              </div>
            </div>
            {/* recently view */}
            <div className="actionItems_left_side box_Contents">
              {/* title */}
              <h4 style={{ fontSize: 18, fontWeight: 700 }}>
                Recently Visited
              </h4>
              {/* contents */}
              <div
                className={`recentlyViewContent ${
                  theme === "light" ? "light" : "dark"
                } ${recentlyViewScrollbar && "active"}`}
                style={{
                  borderColor: borderColor,
                }}
                onMouseEnter={() => setRecentlyViewScrollbar(true)}
                onMouseLeave={() => setRecentlyViewScrollbar(false)}
              >
                {recentlyVisited.map((ele, index) => {
                  return <RecentlyView key={index} items={ele} />;
                })}
              </div>
            </div>
            {/* Ads right side */}
            <div
              className="actionItems_right_side box_Contents"
              style={{ borderColor: borderColor }}
            >
              {/* title */}
              <h4 style={{ fontSize: 18, fontWeight: 700 }}>What's New</h4>
              <TrendingNewsCarousel />
            </div>
          </div>
          {/* dashboard API */}
          <div className="dashboard_api">
            <div className="dashboard_api_title">
              {/* title */}
              <h2>Business KPIs</h2>
              {/* buttons */}
              <button
                type="button"
                className="addWidgetBtn"
                onClick={() => setGraphsExpand(!graphsExpand)}
              >
                {/* icons */}
                {/* <span>
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
                      d="M7 1.75C7.18122 1.75 7.32813 1.89691 7.32813 2.07812V6.67188H11.9219C12.1031 6.67188 12.25 6.81878 12.25 7C12.25 7.18122 12.1031 7.32813 11.9219 7.32813H7.32813V11.9219C7.32813 12.1031 7.18122 12.25 7 12.25C6.81878 12.25 6.67188 12.1031 6.67188 11.9219L6.67188 7.32813H2.07812C1.89691 7.32813 1.75 7.18122 1.75 7C1.75 6.81878 1.89691 6.67188 2.07812 6.67188H6.67188L6.67188 2.07812C6.67188 1.89691 6.81878 1.75 7 1.75Z"
                      fill="white"
                    />
                  </svg>
                </span> */}
                {graphsExpand === false ? "Expand" : "Collapse"} KPIs
                {/* Add KPI */}
              </button>
            </div>

            {/* graphs contents */}
            <div className="graphs_container">
              <GraphsProgressBar
                title="Retail"
                dataItems={retailBarGraphs}
                graphsExpand={graphsExpand}
              />

              {/* billing bar charts */}
              <GraphsProgressBar
                title="Billing"
                dataItems={billingBarGraphs}
                graphsExpand={graphsExpand}
              />
              {/* doughnut chart */}
              <DoughnutChart
                title="IBND Stock"
                dataItems={ibndstock}
                graphsExpand={graphsExpand}
              />
            </div>
          </div>
          {/* news and birthdays */}
          <div className="news_birthday">
            {/* news */}
            <div
              className={`newsContainer boxs`}
              // style={{ borderColor: borderColor }}
            >
              {/* title */}
              <h4
                style={{
                  backgroundColor: theme === "light" ? "white" : "#0B0B0C",
                }}
              >
                Latest News
              </h4>
              <div
                className={`newsWrapper ${
                  theme === "light" ? "light" : "dark"
                } ${latestNewsScrollBar && "active"}`}
                onMouseEnter={() => setLatestNewsScrollBar(true)}
                onMouseLeave={() => setLatestNewsScrollBar(false)}
                style={{ border: `1px solid ${borderColor}`, borderRadius: 4 }}
              >
                {latestNews.map((ele) => (
                  <LatestNews
                    key={ele.id}
                    items={ele}
                    setIsDrawerOpen={setIsDrawerOpen}
                    setDrawerSliderID={setDrawerSliderID}
                    isDrawerOpen={isDrawerOpen}
                    drawerSliderID={drawerSliderID}
                    setDrawerType={setDrawerType}
                  />
                ))}
              </div>
            </div>
            {/* birthday */}
            <div className={`birthdaySection boxs`}>
              {/* title */}
              <h4>Birthday Calendar</h4>

              {/* contents */}
              <div
                className={`birthdatListWapper ${
                  theme === "light" ? "light" : "dark"
                } ${birthdayListScrollBar && "active"}`}
                onMouseEnter={() => setBirthdayListScrollBar(true)}
                onMouseLeave={() => setBirthdayListScrollBar(false)}
                style={{ border: `1px solid ${borderColor}`, borderRadius: 4 }}
              >
                <div
                  className="birthdayListContainer"
                  style={{
                    backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                    padding: "12px 16px",
                    borderRadius: 4,
                  }}
                >
                  {/* title */}
                  <h5
                    style={{ marginBottom: 20, fontSize: 16, fontWeight: 700 }}
                  >
                    Today’s Birthday
                  </h5>

                  {/* birthday username */}
                  <div
                    className="birthdayList"
                    style={{ gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}
                  >
                    {todayBirthday.map((ele) => (
                      <BirthdayCalendar key={ele.id} userData={ele} />
                    ))}
                  </div>
                </div>

                <div className="birthdayListContainer">
                  {/* title */}
                  <h5
                    style={{ marginBottom: 20, fontSize: 16, fontWeight: 700 }}
                  >
                    Upcoming Birthday
                  </h5>

                  {/* birthday username */}
                  <div className="birthdayList">
                    {upcomingBirthday.map((ele) => (
                      <BirthdayCalendar
                        key={ele.id}
                        userData={ele}
                        divider={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer"
        style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
      >
        <span>Copyright © 2023 ROBIN.</span>
      </div>

      {/* News Drawer */}
      <Drawer
        drawerSliderID={drawerSliderID}
        isDrawerOpen={isDrawerOpen}
        drawerType={drawerType}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      {/* overlay */}
      <div
        id="newsDrawerOverlay"
        style={{
          display: isDrawerOpen ? "block" : "none",
          backgroundColor:
            theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(84, 84, 84,0.8)",
        }}
        onClick={() => handleDrawerClosed()}
      ></div>
    </>
  );
}

export default DashboardPage;
