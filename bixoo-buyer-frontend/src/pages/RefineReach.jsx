import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackArrowIcon } from "../components/Icons.jsx";

const ALL_TN_CITIES = [
  "Chennai", "Kanchipuram", "Tiruvallur", "Vellore", "Ranipet", "Tirupattur",
  "Coimbatore", "Salem", "Tirupur", "Erode", "Tiruchirappalli", "Karur", "Namakkal",
  "Madurai", "Tirunelveli", "Thoothukudi", "Dindigul", "Theni", "Virudhunagar"
];

function RefineReach() {
  const navigate = useNavigate();
  const location = useLocation();

  const [reachMode, setReachMode] = useState(() => {
    return location.state?.reachMode || "all_tn";
  });
  const [itemCondition, setItemCondition] = useState(() => {
    return location.state?.itemCondition || "brand_new";
  });

  const handleBack = () => {
    navigate("/buyer/type", { state: location.state });
  };

  const handleNext = () => {
    navigate("/buyer/select-cities", {
      state: {
        ...location.state,
        reachMode,
        itemCondition,
        selectedCities: reachMode === "all_tn" ? ALL_TN_CITIES : []
      }
    });
  };

  const handleOpenCities = () => {
    navigate("/buyer/select-cities", {
      state: {
        ...location.state,
        reachMode: "selected",
        itemCondition,
        selectedCities: []
      }
    });
  };

  return (
    <div className="reach-page-shell">
      <div className="reach-topbar">
        <button
          type="button"
          className="reach-back-btn"
          onClick={handleBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
        <span className="reach-topbar-tag">STEP 3.5 OF 5</span>
        <div style={{ width: 40 }} />
      </div>

      <div className="reach-header-block">
        <h1 className="reach-heading">Refine Your Reach</h1>
        <p className="reach-subtext">Define geographic reach and item condition for suppliers.</p>
      </div>

      <div className="reach-content-card">
        <div className="reach-section">
          <span className="reach-sec-label">GEOGRAPHIC REACH</span>
          <div
            className={`vsup-reach-option ${reachMode === "all_tn" ? "vsup-reach-active" : ""}`}
            onClick={() => setReachMode("all_tn")}
          >
            <div className="vsup-radio-circle">
              {reachMode === "all_tn" && <div className="vsup-radio-dot" />}
            </div>
            <div className="vsup-reach-text">
              <strong>Tamil Nadu Wide</strong>
              <p>Broadcast requirement to all verified suppliers across 38 districts.</p>
            </div>
          </div>

          <div
            className={`vsup-reach-option ${reachMode === "selected" ? "vsup-reach-active" : ""}`}
            onClick={() => setReachMode("selected")}
          >
            <div className="vsup-radio-circle">
              {reachMode === "selected" && <div className="vsup-radio-dot" />}
            </div>
            <div className="vsup-reach-text">
              <strong>Selected Districts Only</strong>
              <p>Target specific industrial clusters and supply corridors.</p>
            </div>
          </div>

          {reachMode === "selected" && (
            <button
              type="button"
              className="vsup-open-cities-btn"
              onClick={handleOpenCities}
              style={{ marginTop: 8 }}
            >
              <span>Choose Specific Districts →</span>
            </button>
          )}
        </div>

        <div className="reach-section" style={{ marginTop: 24 }}>
          <span className="reach-sec-label">ITEM CONDITION</span>
          <div className="vsup-condition-grid">
            <button
              type="button"
              className={`vsup-cond-chip ${itemCondition === "brand_new" ? "vsup-cond-active" : ""}`}
              onClick={() => setItemCondition("brand_new")}
            >
              Brand New Only
            </button>
            <button
              type="button"
              className={`vsup-cond-chip ${itemCondition === "refurbished" ? "vsup-cond-active" : ""}`}
              onClick={() => setItemCondition("refurbished")}
            >
              Refurbished / Certified
            </button>
          </div>
        </div>
      </div>

      <div className="reach-footer-action">
        <button
          type="button"
          className="reach-submit-btn"
          onClick={handleNext}
        >
          <span>Continue to Select Cities →</span>
        </button>
      </div>
    </div>
  );
}

export default RefineReach;
