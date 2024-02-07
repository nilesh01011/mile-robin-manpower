import { useEffect, useState } from "react";
import SidebarRedevelop from "./components/sidebar";
import { useSelector } from "react-redux";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import EmployeeManagementPage from "./pages/mile-hr/employee-management";
import Reports from "./pages/mile-hr/reports/reports-1";
import Reports2 from "./pages/mile-hr/reports/reports-2";

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

        {/* main contents */}
        <Routes>
          {/* =================== dashboard ============= */}
          <Route exact path="/" element={<DashboardPage />}></Route>
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
