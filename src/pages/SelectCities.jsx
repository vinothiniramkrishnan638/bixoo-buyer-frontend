import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackArrowIcon, SearchIcon, CheckIcon } from "../components/Icons.jsx";

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

const ALL_CITIES = TN_REGIONS.flatMap((reg) => reg.cities);

function SelectCities() {
  const navigate = useNavigate();
  const location = useLocation();

  const reachMode = location.state?.reachMode || "all_tn";

  const [selectedCities, setSelectedCities] = useState(() => {
    if (reachMode === "all_tn") {
      return ALL_CITIES;
    }
    if (location.state?.selectedCities && location.state.selectedCities.length > 0) {
      return location.state.selectedCities;
    }
    return [];
  });
  const [citySearch, setCitySearch] = useState("");
  const [expandedRegions, setExpandedRegions] = useState({
    "North Tamil Nadu": true,
    "Central & West Tamil Nadu": true,
    "South Tamil Nadu": true
  });

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

  const handleToggleAll = () => {
    if (selectedCities.length === ALL_CITIES.length) {
      setSelectedCities([]);
    } else {
      setSelectedCities(ALL_CITIES);
    }
  };

  const filteredRegions = useMemo(() => {
    const q = citySearch.trim().toLowerCase();
    if (!q) return TN_REGIONS;
    return TN_REGIONS.map((reg) => ({
      ...reg,
      cities: reg.cities.filter((c) => c.toLowerCase().includes(q))
    })).filter((reg) => reg.cities.length > 0);
  }, [citySearch]);

  const handleBack = () => {
    navigate("/buyer/refine-reach", {
      state: {
        ...location.state,
        selectedCities,
        reachMode
      }
    });
  };

  const handleApply = () => {
    navigate("/buyer/verified-suppliers", {
      state: {
        ...location.state,
        selectedCities,
        reachMode
      }
    });
  };

  return (
    <div className="cities-page-shell">
      <div className="cities-topbar">
        <button
          type="button"
          className="cities-back-btn"
          onClick={handleBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
        <span className="cities-topbar-tag">DISTRICT TARGETING</span>
        <div style={{ width: 40 }} />
      </div>

      <div className="cities-header-block">
        <h1 className="cities-heading">Select Cities in Tamil Nadu</h1>
        <p className="cities-subtext">Choose target districts to filter verified local suppliers.</p>
      </div>

      <div className="cities-search-wrap">
        <div className="vsup-search-box">
          <SearchIcon style={{ width: 16, height: 16, color: "#64748B" }} />
          <input
            type="text"
            placeholder="Search districts or cities..."
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
          />
        </div>
      </div>

      <div className="cities-quick-actions-row">
        <span className="cities-mode-badge">
          {reachMode === "all_tn" ? "Tamil Nadu Wide Mode" : "Selected Districts Mode"}
        </span>
        <button
          type="button"
          className="cities-toggle-all-btn"
          onClick={handleToggleAll}
        >
          {selectedCities.length === ALL_CITIES.length ? "Clear All" : "Select All"}
        </button>
      </div>

      <div className="cities-regions-scroll">
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
      </div>

      <div className="cities-footer-action">
        <div className="cities-selected-tally">
          {reachMode === "all_tn" && selectedCities.length === ALL_CITIES.length ? (
            <span>All <strong>{selectedCities.length}</strong> districts selected (Tamil Nadu Wide)</span>
          ) : (
            <span><strong>{selectedCities.length}</strong> districts selected</span>
          )}
        </div>
        <button
          type="button"
          className="cities-submit-btn"
          onClick={handleApply}
        >
          <span>Apply Selection &amp; View Suppliers →</span>
        </button>
      </div>
    </div>
  );
}

export default SelectCities;
