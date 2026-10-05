import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PostRequirement from "./pages/PostRequirement";
import RequirementsHub from "./pages/RequirementsHub";
import SelectCategoryHub from "./pages/SelectCategoryHub";
import SubCategoryHub from "./pages/SubCategoryHub";
import NotificationsHub from "./pages/NotificationsHub";
import ChatHub from "./pages/ChatHub";
import ProfileHub from "./pages/ProfileHub";
import AuctionsHub from "./pages/AuctionsHub";
import RequestCategory from "./pages/RequestCategory";

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
            path="/buyer/select-category"
            element={<SelectCategoryHub />}
          />

          <Route
            path="/buyer/request-category"
            element={<RequestCategory />}
          />

          <Route
            path="/buyer/sub-category"
            element={<SubCategoryHub />}
          />

          <Route
            path="/buyer/post-requirement"
            element={<PostRequirement />}
          />

          <Route
            path="/buyer/notifications"
            element={<NotificationsHub />}
          />

          <Route
            path="/buyer/chat"
            element={<ChatHub />}
          />

          <Route
            path="/buyer/profile"
            element={<ProfileHub />}
          />

          <Route
            path="/buyer/auctions"
            element={<AuctionsHub />}
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