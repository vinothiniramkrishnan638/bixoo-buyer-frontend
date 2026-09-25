import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PostRequirement from "./pages/PostRequirement";
import RequirementsHub from "./pages/RequirementsHub";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route
            path="/buyer/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/buyer/requirements"
            element={<RequirementsHub />}
          />

          <Route
            path="/buyer/post-requirement"
            element={<PostRequirement />}
          />

          <Route
            path="/"
            element={<Navigate to="/buyer/dashboard" replace />}
          />

          <Route
            path="*"
            element={<Navigate to="/buyer/dashboard" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;