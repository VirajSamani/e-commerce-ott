import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route
            path="/example"
            exact
            element={
              <div>
                Navigate to <Link to="/">home</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
