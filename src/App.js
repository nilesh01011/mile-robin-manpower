import { useEffect, useState } from "react";
import SidebarRedevelop from "./components/sidebar";
import { useSelector } from "react-redux";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import EmployeeManagementPage from "./pages/mile-hr/employee-management";
import Reports from "./pages/mile-hr/reports/reports-1";
import Reports2 from "./pages/mile-hr/reports/reports-2";
import ModelBox from "./components/header/modelBox";
import BookingForm from "./pages/sales/orderToDelivery/bookingForm";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#0B0B0C";
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    if (theme === "dark") {
      document.body.style.backgroundColor = "#0B0B0C";
      document.body.style.color = "#ffffff";
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  // model
  const [modelListDetails, setModelListDetails] = useState("");

  const handleClosed = () => {
    setModelListDetails("");
    document.querySelector("body").classList.remove("removeScrollbar");
    document.querySelector("body").style.overflow = "auto";
  };
  return (
    <div className="container">
      {/* sidebar */}
      <SidebarRedevelop />
      {/* main container */}
      <div className="main-container">
        {/* Headers */}
        <Header setModelListDetails={setModelListDetails} />
        {/* model */}
        {modelListDetails && (
          <ModelBox
            text={modelListDetails}
            setModelListDetails={setModelListDetails}
          />
        )}

        <div
          style={{
            display: modelListDetails ? "block" : "none",
            backgroundColor:
              theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(84, 84, 84,0.7)",
          }}
          id="overlay_2"
          onClick={handleClosed}
        ></div>

        {/* main contents */}
        <Routes>
          {/* =================== dashboard ============= */}
          <Route exact path="/home" element={<DashboardPage />}></Route>
          {/* ==================== Mile/HR ============== */}
          <Route
            path="/mile-hr/employee-management"
            element={<EmployeeManagementPage />}
          ></Route>
          {/* Reports */}
          <Route
            path="/mile-hr/reports/reports-1"
            element={<Reports />}
          ></Route>

          <Route
            path="/mile-hr/reports/reports-2"
            element={<Reports2 />}
          ></Route>
           {/* ==================== Sales ============== */}
           <Route
            path="/sales/order-to-delivery/booking-form"
            element={<BookingForm />}
          ></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
