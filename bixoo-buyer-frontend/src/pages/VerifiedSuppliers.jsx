import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackArrowIcon, BellIcon, SearchIcon, CheckIcon, FilterSliderIcon } from "../components/Icons.jsx";
import truckImg from "../assets/vechile commercial truck.jpg";
import miniTruckImg from "../assets/mini truck.jpg";
import cargoVanImg from "../assets/cargo van.jpg";
import openLorryImg from "../assets/open lorry.jpg";

const DEFAULT_SUPPLIERS = [
  {
    id: "SUP-01",
    name: "Metro Motors",
    city: "Salem, Tamil Nadu",
    rating: "4.9",
    verified: true,
    responseTime: "< 15 mins",
    dealsClosed: "1,240+",
    image: truckImg,
    badge: "Top Rated",
    inventoryCount: "35 in Stock"
  },
  {
    id: "SUP-02",
    name: "Southern Auto Hub",
    city: "Coimbatore, Tamil Nadu",
    rating: "4.8",
    verified: true,
    responseTime: "< 30 mins",
    dealsClosed: "980+",
    image: miniTruckImg,
    badge: "Verified Dealer",
    inventoryCount: "22 in Stock"
  },
  {
    id: "SUP-03",
    name: "Apex Logistics & Fleet",
    city: "Chennai, Tamil Nadu",
    rating: "4.7",
    verified: true,
    responseTime: "< 20 mins",
    dealsClosed: "2,150+",
    image: cargoVanImg,
    badge: "Direct OEM",
    inventoryCount: "48 in Stock"
  },
  {
    id: "SUP-04",
    name: "TN Commercial Vehicles",
    city: "Madurai, Tamil Nadu",
    rating: "4.9",
    verified: true,
    responseTime: "< 10 mins",
    dealsClosed: "1,420+",
    image: openLorryImg,
    badge: "Super Seller",
    inventoryCount: "19 in Stock"
  }
];

const TN_REGIONS = [
  {
    region: "North Tamil Nadu",
    cities: ["Chennai", "Kanchipuram", "Tiruvallur", "Vellore", "Ranipet", "Tirupattur"]
  },
  {
    region: "Central & West Tamil Nadu",
    cities: ["Coimbatore", "Salem", "Tirupur", "Erode", "Tiruchirappalli", "Karur", "Namakkal"]
  },
  {
    region: "South Tamil Nadu",
    cities: ["Madurai", "Tirunelveli", "Thoothukudi", "Dindigul", "Theni", "Virudhunagar"]
  }
];

function VerifiedSuppliers() {
  const navigate = useNavigate();
  const location = useLocation();

  const [reachMode, setReachMode] = useState(() => location.state?.reachMode || "all_tn");
  const [itemCondition, setItemCondition] = useState(() => location.state?.itemCondition || "brand_new");
  const [selectedCities, setSelectedCities] = useState(() => location.state?.selectedCities || ["Salem", "Coimbatore", "Chennai"]);
  const [citySearch, setCitySearch] = useState("");
  const [expandedRegions, setExpandedRegions] = useState({
    "North Tamil Nadu": true,
    "Central & West Tamil Nadu": true,
    "South Tamil Nadu": true
  });

  const [isReachModalOpen, setIsReachModalOpen] = useState(false);
  const [isCitiesModalOpen, setIsCitiesModalOpen] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState("all");

  const toggleCity = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const toggleRegion = (regionName) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [regionName]: !prev[regionName]
    }));
  };

  const filteredRegions = useMemo(() => {
    const q = citySearch.trim().toLowerCase();
    if (!q) return TN_REGIONS;
    return TN_REGIONS.map((reg) => ({
      ...reg,
      cities: reg.cities.filter((c) => c.toLowerCase().includes(q))
    })).filter((reg) => reg.cities.length > 0);
  }, [citySearch]);

  const handleSupplierSelect = (supplier) => {
    navigate("/buyer/delivery", {
      state: {
        ...location.state,
        selectedSupplier: supplier.name,
        step: 3
      }
    });
  };

  const handleProceedToDelivery = () => {
    navigate("/buyer/delivery", {
      state: {
        ...location.state,
        step: 3
      }
    });
  };

  return (
    <div className="vsup-page-shell">
      <div className="vsup-topbar">
        <button
          type="button"
          className="vsup-back-btn"
          onClick={() => navigate("/buyer/select-cities", { state: location.state })}
          aria-label="Back"
        >
          <BackArrowIcon style={{ width: 18, height: 18, stroke: "#1E293B", strokeWidth: 2.2 }} />
        </button>
        <span className="vsup-brand-logo">bixoo</span>
        <button
          type="button"
          className="vsup-bell-btn"
          onClick={() => navigate("/buyer/notifications")}
          aria-label="Notifications"
        >
          <BellIcon style={{ width: 18, height: 18, color: "#1E293B" }} />
        </button>
      </div>

      <div className="vsup-banner">
        <div className="vsup-banner-content">
          <div className="vsup-badge-row">
            <span className="vsup-shield-badge">VERIFIED SELLERS ONLY</span>
            <button
              type="button"
              className="vsup-refine-trigger-btn"
              onClick={() => navigate("/buyer/refine-reach", { state: location.state })}
            >
              <FilterSliderIcon style={{ width: 13, height: 13, color: "#006A66" }} />
              <span>Refine Reach</span>
            </button>
          </div>
          <h1 className="vsup-title">Verified Suppliers Showcase</h1>
          <p className="vsup-subtitle">
            {reachMode === "all_tn"
              ? "Displaying suppliers across all 38 districts in Tamil Nadu."
              : `Targeting ${selectedCities.length} selected district hubs in Tamil Nadu.`}
          </p>
        </div>
      </div>

      <div className="vsup-filter-chips-row">
        <button
          type="button"
          className={`vsup-chip ${activeFilterTab === "all" ? "vsup-chip-active" : ""}`}
          onClick={() => setActiveFilterTab("all")}
        >
          All ({DEFAULT_SUPPLIERS.length})
        </button>
        <button
          type="button"
          className={`vsup-chip ${activeFilterTab === "top" ? "vsup-chip-active" : ""}`}
          onClick={() => setActiveFilterTab("top")}
        >
          ★ 4.8+ Rating
        </button>
        <button
          type="button"
          className={`vsup-chip ${activeFilterTab === "fast" ? "vsup-chip-active" : ""}`}
          onClick={() => setActiveFilterTab("fast")}
        >
          Fast Response (&lt; 20m)
        </button>
      </div>

      <div className="vsup-grid">
        {DEFAULT_SUPPLIERS.map((supplier) => (
          <div key={supplier.id} className="vsup-card">
            <div className="vsup-card-thumb-wrap">
              <img src={supplier.image} alt={supplier.name} className="vsup-card-thumb" />
              <span className="vsup-card-badge">{supplier.badge}</span>
            </div>
            <div className="vsup-card-body">
              <div className="vsup-card-header">
                <div>
                  <h3 className="vsup-card-name">{supplier.name}</h3>
                  <span className="vsup-card-city">{supplier.city}</span>
                </div>
                <div className="vsup-rating-pill">
                  <span>★ {supplier.rating}</span>
                </div>
              </div>

              <div className="vsup-metrics-row">
                <div className="vsup-metric">
                  <span className="vsup-metric-label">RESPONSE</span>
                  <span className="vsup-metric-val">{supplier.responseTime}</span>
                </div>
                <div className="vsup-metric">
                  <span className="vsup-metric-label">DEALS</span>
                  <span className="vsup-metric-val">{supplier.dealsClosed}</span>
                </div>
                <div className="vsup-metric">
                  <span className="vsup-metric-label">STOCK</span>
                  <span className="vsup-metric-val">{supplier.inventoryCount}</span>
                </div>
              </div>

              <button
                type="button"
                className="vsup-request-btn"
                onClick={() => handleSupplierSelect(supplier)}
              >
                <span>Request Quotation</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="vsup-footer-action-wrap">
        <button
          type="button"
          className="vsup-skip-btn"
          onClick={handleProceedToDelivery}
        >
          <span>Continue to Delivery Details (All Suppliers) →</span>
        </button>
      </div>

      {isReachModalOpen && (
        <div className="vsup-modal-overlay" onClick={() => setIsReachModalOpen(false)}>
          <div className="vsup-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="vsup-modal-header">
              <div>
                <span className="vsup-modal-step-tag">STEP 3 OF 4</span>
                <h2 className="vsup-modal-title">Refine Your Reach</h2>
              </div>
              <button
                type="button"
                className="vsup-modal-close"
                onClick={() => setIsReachModalOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="vsup-modal-section">
              <span className="vsup-modal-sec-title">GEOGRAPHIC REACH</span>
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
                  <p>Target specific industrial clusters and supply corridors ({selectedCities.length} chosen).</p>
                </div>
              </div>

              {reachMode === "selected" && (
                <button
                  type="button"
                  className="vsup-open-cities-btn"
                  onClick={() => {
                    setIsReachModalOpen(false);
                    setIsCitiesModalOpen(true);
                  }}
                >
                  <span>Select Districts ({selectedCities.length} Selected) →</span>
                </button>
              )}
            </div>

            <div className="vsup-modal-section">
              <span className="vsup-modal-sec-title">ITEM CONDITION</span>
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

            <div className="vsup-modal-footer">
              <button
                type="button"
                className="vsup-modal-apply-btn"
                onClick={() => setIsReachModalOpen(false)}
              >
                Apply Filters &amp; View Suppliers
              </button>
            </div>
          </div>
        </div>
      )}

      {isCitiesModalOpen && (
        <div className="vsup-modal-overlay" onClick={() => setIsCitiesModalOpen(false)}>
          <div className="vsup-modal-sheet vsup-modal-sheet-lg" onClick={(e) => e.stopPropagation()}>
            <div className="vsup-modal-header">
              <div>
                <span className="vsup-modal-step-tag">DISTRICT TARGETING</span>
                <h2 className="vsup-modal-title">Select Cities in Tamil Nadu</h2>
              </div>
              <button
                type="button"
                className="vsup-modal-close"
                onClick={() => setIsCitiesModalOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="vsup-search-box">
              <SearchIcon style={{ width: 16, height: 16, color: "#64748B" }} />
              <input
                type="text"
                placeholder="Search districts or cities..."
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
              />
            </div>

            <div className="vsup-regions-list">
              {filteredRegions.map((reg) => (
                <div key={reg.region} className="vsup-region-block">
                  <div
                    className="vsup-region-header"
                    onClick={() => toggleRegion(reg.region)}
                  >
                    <span className="vsup-region-name">{reg.region}</span>
                    <span className="vsup-region-toggle">
                      {expandedRegions[reg.region] ? "▲" : "▼"}
                    </span>
                  </div>

                  {expandedRegions[reg.region] && (
                    <div className="vsup-cities-grid">
                      {reg.cities.map((city) => {
                        const isChecked = selectedCities.includes(city);
                        return (
                          <div
                            key={city}
                            className={`vsup-city-item ${isChecked ? "vsup-city-checked" : ""}`}
                            onClick={() => toggleCity(city)}
                          >
                            <div className="vsup-checkbox">
                              {isChecked && (
                                <CheckIcon style={{ width: 11, height: 9, stroke: "#FFFFFF", strokeWidth: 3 }} />
                              )}
                            </div>
                            <span className="vsup-city-label">{city}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="vsup-modal-footer vsup-cities-footer">
              <div className="vsup-selected-tally">
                <strong>{selectedCities.length}</strong> districts selected
              </div>
              <button
                type="button"
                className="vsup-modal-apply-btn"
                onClick={() => {
                  setIsCitiesModalOpen(false);
                  setIsReachModalOpen(true);
                }}
              >
                Apply Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifiedSuppliers;
