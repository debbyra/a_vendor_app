import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "../components/DashSidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Dashboard from "./scenes/dashboard";

function Dash() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const closeSidebar = () => {
    console.log("Closing sidebar"); // Debugging
    props.toggleSidebar(); // Use toggleSidebar to close the sidebar
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="combine">
          <div className="app">
            {/* <img
              src="/icons/close.png"
              className="close-icon"
              alt=""
              onClick={closeSidebar}
            /> */}
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Dashboard />
            </main>
          </div>
          <div className="overlay active" onClick={closeSidebar}></div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dash;
