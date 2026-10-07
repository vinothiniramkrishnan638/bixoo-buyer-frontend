import { useNavigate } from "react-router-dom";
import RoleTabs from "./RoleTabs.jsx";
import SearchBar from "./SearchBar.jsx";
import BixooLogo from "../assets/Bixoo.svg";
import notificationIcon from "../assets/notification.png";
import chatIcon from "../assets/chat.png";
import profileIcon from "../assets/profile.png";

function Header({ activeRole, onRoleChange, searchTerm, onSearchChange }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-top">
        <div
          className="logo-badge"
          onClick={() => navigate("/buyer/dashboard")}
          style={{ cursor: "pointer" }}
        >
          <img src={BixooLogo} alt="Bixoo" />
        </div>
        <RoleTabs activeRole={activeRole} onRoleChange={onRoleChange} />
      </div>
      <div className="search-row">
        <SearchBar value={searchTerm} onChange={onSearchChange} />
        <div className="header-actions">
          <button
            className="icon-btn"
            type="button"
            aria-label="Notifications"
            onClick={() => navigate("/buyer/notifications")}
          >
            <img src={notificationIcon} alt="" className="action-icon notif-icon" />
            <span className="badge badge-dot badge-red" />
          </button>
          <button
            className="icon-btn"
            type="button"
            aria-label="Messages"
            onClick={() => navigate("/buyer/chat")}
          >
            <img src={chatIcon} alt="" className="action-icon chat-icon" />
            <span className="badge badge-dot badge-teal" />
          </button>
          <button
            className="icon-btn"
            type="button"
            aria-label="Profile"
            onClick={() => navigate("/buyer/profile")}
          >
            <img src={profileIcon} alt="" className="action-icon profile-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;