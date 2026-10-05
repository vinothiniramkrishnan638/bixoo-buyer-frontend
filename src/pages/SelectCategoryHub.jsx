import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackArrowIcon,
  BellIcon,
  SearchIcon,
  FilterSliderIcon,
  TruckIcon,
  TractorIcon,
  ToolIcon,
  ChipIcon,
  LayersIcon,
  BoxIcon,
  FlaskIcon,
  SpoolIcon,
  HelpQuestionIcon
} from "../components/Icons.jsx";
import { verifiedSectors, sectorFilters } from "../data/requirementData.js";

function renderSectorIcon(iconType, isSelected) {
  const iconColor = isSelected ? "#1B736F" : "#334155";
  switch (iconType) {
    case "truck":
      return <TruckIcon style={{ width: 15, height: 11, color: iconColor }} />;
    case "tractor":
      return <TractorIcon style={{ width: 15, height: 11, color: iconColor }} />;
    case "tool":
      return <ToolIcon style={{ width: 12, height: 12, color: iconColor }} />;
    case "chip":
      return <ChipIcon style={{ width: 12, height: 12, color: iconColor }} />;
    case "layers":
      return <LayersIcon style={{ width: 12, height: 12, color: iconColor }} />;
    case "box":
      return <BoxIcon style={{ width: 13, height: 13, color: iconColor }} />;
    case "flask":
      return <FlaskIcon style={{ width: 12, height: 12, color: iconColor }} />;
    case "spool":
      return <SpoolIcon style={{ width: 12, height: 12, color: iconColor }} />;
    default:
      return <TruckIcon style={{ width: 15, height: 11, color: iconColor }} />;
  }
}

function SelectCategoryHub() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("vehicles");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredSectors = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    let result = verifiedSectors.filter((item) => {
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term);
      const matchesFilter =
        activeFilter === "all" ||
        item.id === activeFilter ||
        item.sector === activeFilter ||
        (Array.isArray(item.sectors) && item.sectors.includes(activeFilter));
      return matchesSearch && matchesFilter;
    });

    if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "suppliers-desc") {
      result = [...result].sort((a, b) => {
        const countA = parseInt(a.suppliers, 10) || 0;
        const countB = parseInt(b.suppliers, 10) || 0;
        return countB - countA;
      });
    }

    return result;
  }, [searchTerm, activeFilter, sortBy]);

  const handleSelectSector = (id) => {
    setSelectedSector(id);
    navigate("/buyer/sub-category", { state: { categoryId: id } });
  };

  return (
    <div className="hub-page-shell">
      <div className="hub-topbar">
        <button
          type="button"
          className="hub-circle-btn"
          onClick={() => navigate("/buyer/dashboard")}
          aria-label="Back"
        >
          <BackArrowIcon style={{ width: 14, height: 14, stroke: "#334155" }} />
        </button>

        <div className="hub-brand-group">
          <span className="hub-brand-logo">
            bix<span className="hub-brand-teal">oo</span>
          </span>
          <span className="hub-b2b-badge">B2B</span>
        </div>

        <button
          type="button"
          className="hub-circle-btn hub-notif-btn"
          aria-label="Notifications"
          onClick={() => navigate("/buyer/notifications")}
        >
          <BellIcon style={{ width: 16, height: 16, stroke: "#334155" }} />
          <span className="hub-notif-dot" />
        </button>
      </div>

      <div className="hub-main-canvas">
        <div className="hub-header">
          <h1 className="hub-title">Select Category</h1>
          <p className="hub-subtitle">
            Choose a primary business sector to source certified suppliers
          </p>
        </div>

        <div className="hub-search-wrap">
          <SearchIcon className="hub-search-icon" style={{ width: 14, height: 14 }} />
          <input
            type="text"
            className="hub-search-input"
            placeholder="Search categories, commodities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
          />
          {searchTerm && (
            <button
              type="button"
              className="hub-search-clear-btn"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
          <button
            type="button"
            className={`hub-filter-icon-btn${sortBy !== "default" ? " active" : ""}`}
            onClick={() => setIsFilterOpen((prev) => !prev)}
            aria-label="Filter options"
          >
            <FilterSliderIcon style={{ width: 13, height: 13, stroke: sortBy !== "default" ? "#2AAFA9" : "#64748B" }} />
            {sortBy !== "default" && <span className="hub-filter-active-dot" />}
          </button>

          {isFilterOpen && (
            <div className="hub-filter-dropdown">
              <div className="hub-filter-dropdown-header">
                <span className="hub-filter-dropdown-title">Sort &amp; Filter</span>
                <button
                  type="button"
                  className="hub-filter-close-btn"
                  onClick={() => setIsFilterOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="hub-filter-options-list">
                <button
                  type="button"
                  className={`hub-filter-option${sortBy === "default" ? " selected" : ""}`}
                  onClick={() => {
                    setSortBy("default");
                    setIsFilterOpen(false);
                  }}
                >
                  <span>Default (Featured)</span>
                  {sortBy === "default" && <span className="hub-filter-check">✓</span>}
                </button>
                <button
                  type="button"
                  className={`hub-filter-option${sortBy === "name-asc" ? " selected" : ""}`}
                  onClick={() => {
                    setSortBy("name-asc");
                    setIsFilterOpen(false);
                  }}
                >
                  <span>Alphabetical (A → Z)</span>
                  {sortBy === "name-asc" && <span className="hub-filter-check">✓</span>}
                </button>
                <button
                  type="button"
                  className={`hub-filter-option${sortBy === "name-desc" ? " selected" : ""}`}
                  onClick={() => {
                    setSortBy("name-desc");
                    setIsFilterOpen(false);
                  }}
                >
                  <span>Alphabetical (Z → A)</span>
                  {sortBy === "name-desc" && <span className="hub-filter-check">✓</span>}
                </button>
                <button
                  type="button"
                  className={`hub-filter-option${sortBy === "suppliers-desc" ? " selected" : ""}`}
                  onClick={() => {
                    setSortBy("suppliers-desc");
                    setIsFilterOpen(false);
                  }}
                >
                  <span>Most Suppliers (High → Low)</span>
                  {sortBy === "suppliers-desc" && <span className="hub-filter-check">✓</span>}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="hub-pills-row">
          {sectorFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                className={`hub-filter-pill${isActive ? " hub-filter-pill-active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="hub-section-row">
          <span className="hub-section-label">POPULAR SECTORS</span>
          <span className="hub-verified-count">
            {filteredSectors.length} Verified {filteredSectors.length === 1 ? "Sector" : "Sectors"}
          </span>
        </div>

        {filteredSectors.length === 0 ? (
          <div className="hub-empty-state">
            <div className="hub-empty-icon-wrap">
              <SearchIcon style={{ width: 26, height: 26, color: "#94A3B8" }} />
            </div>
            <h3 className="hub-empty-title">This category is not available</h3>
            <p className="hub-empty-desc">
              We could not find any category matching "{searchTerm}". Try checking for spelling errors or submit a custom RFQ below.
            </p>
            <button
              type="button"
              className="hub-empty-reset-btn"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
                setSortBy("default");
              }}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="hub-sector-grid">
            {filteredSectors.map((sector) => {
              const isSelected = selectedSector === sector.id;
              return (
                <div
                  key={sector.id}
                  className={`hub-sector-card${isSelected ? " hub-sector-card-selected" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${sector.name} category`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectSector(sector.id);
                    }
                  }}
                  onClick={() => handleSelectSector(sector.id)}
                >
                  <div className="hub-card-image-wrap">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="hub-card-image"
                    />
                    <div className="hub-card-gradient" />
                    <span className="hub-supplier-badge">
                      {sector.suppliers}
                    </span>
                    {isSelected && (
                      <div className="hub-card-check-pill">
                        <svg viewBox="0 0 12 12" width="10" height="8" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2.5 6 4.8 8.5 9.5 3.5" />
                        </svg>
                      </div>
                    )}
                    <div className="hub-floating-icon-badge">
                      {renderSectorIcon(sector.iconType, isSelected)}
                    </div>
                  </div>

                  <div className="hub-card-body">
                    <h3 className="hub-sector-name">{sector.name}</h3>
                    <p className="hub-sector-desc">{sector.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="hub-rfq-banner">
          <div className="hub-rfq-left">
            <div className="hub-rfq-icon-wrap">
              <HelpQuestionIcon style={{ width: 14, height: 16, color: "#239590" }} />
            </div>
            <div className="hub-rfq-text">
              <h4 className="hub-rfq-title">Can't find your category?</h4>
              <p className="hub-rfq-sub">
                Submit custom RFQ or request a new sector
              </p>
            </div>
          </div>
          <button
            type="button"
            className="hub-rfq-btn"
            onClick={() => navigate("/buyer/request-category")}
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectCategoryHub;
