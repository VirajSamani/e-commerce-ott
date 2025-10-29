import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "./App.css";

function App() {
  return (
    <>
      <div>Header</div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                Navigate to <Link to="/example">example</Link>
                <Button variant="contained">Hello world</Button>
              </div>
            }
          />
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
      <div>Footer</div>
    </>
  );
}

export default App;
