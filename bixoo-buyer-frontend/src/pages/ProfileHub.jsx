import { useNavigate } from "react-router-dom";
import { BackArrowIcon, CheckIcon } from "../components/Icons.jsx";

function ProfileHub() {
  const navigate = useNavigate();

  return (
    <div className="profile-page-shell">
      <div className="profile-topbar">
        <button
          type="button"
          className="profile-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <BackArrowIcon style={{ width: 18, height: 18, stroke: "#1E293B" }} />
        </button>
        <h1 className="profile-title">Buyer Profile</h1>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          <span>SI</span>
        </div>
        <div className="profile-identity">
          <div className="profile-name-row">
            <h2 className="profile-company-name">Southern Industrial Corp</h2>
            <span className="profile-verified-badge">
              <CheckIcon style={{ width: 10, height: 10, stroke: "#006A66", strokeWidth: 3 }} /> Verified
            </span>
          </div>
          <p className="profile-role-sub">B2B Verified Corporate Buyer</p>
          <div className="profile-meta-details">
            <span className="profile-meta-item">GSTIN: 33AAAAA0000A1Z5</span>
            <span className="profile-meta-item">Coimbatore, Tamil Nadu</span>
            <span className="profile-meta-item">contact@southernindustrial.com</span>
          </div>
        </div>
      </div>

      <div className="profile-links-section">
        <h3 className="profile-section-heading">Quick Actions</h3>
        <div className="profile-links-list">
          <button
            type="button"
            className="profile-nav-item"
            onClick={() => navigate("/buyer/requirements")}
          >
            <span>My Requirements</span>
            <span className="profile-arrow">→</span>
          </button>
          <button
            type="button"
            className="profile-nav-item"
            onClick={() => navigate("/buyer/select-category")}
          >
            <span>Browse Categories</span>
            <span className="profile-arrow">→</span>
          </button>
          <button
            type="button"
            className="profile-nav-item"
            onClick={() => navigate("/buyer/post-requirement", { state: { step: 1 } })}
          >
            <span>Create New Requirement</span>
            <span className="profile-arrow">→</span>
          </button>
          <button
            type="button"
            className="profile-nav-item"
            onClick={() => navigate("/buyer/notifications")}
          >
            <span>Notifications Center</span>
            <span className="profile-arrow">→</span>
          </button>
          <button
            type="button"
            className="profile-nav-item"
            onClick={() => navigate("/buyer/chat")}
          >
            <span>Messages &amp; Deals</span>
            <span className="profile-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHub;
