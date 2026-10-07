import { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BackArrowIcon,
  SearchIcon,
  FilterSliderIcon,
  ShieldCheckIcon,
  PinIcon,
  HeartIcon,
  FigmaChatRailIcon,
  ShareIcon,
  TruckIcon,
  TractorIcon,
  ToolIcon,
  ChipIcon,
  LayersIcon,
  BoxIcon,
  FlaskIcon,
  SpoolIcon
} from "../components/Icons.jsx";
import { subCategoryShowcaseData, verifiedSectors } from "../data/requirementData.js";

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

function SubCategoryHub() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCat, setSelectedCat] = useState(null);
  const currentCategoryId = selectedCat || location.state?.categoryId || "vehicles";
  const sectorData = subCategoryShowcaseData[currentCategoryId] || subCategoryShowcaseData.vehicles;

  const [activeChip, setActiveChip] = useState("all");
  const [savedItems, setSavedItems] = useState({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentCategoryId]);

  const filteredShorts = useMemo(() => {
    let list = sectorData.shorts || [];
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((short) => {
        const titleMatch = typeof short.title === "string" && short.title.toLowerCase().includes(q);
        const tagMatch = typeof short.categoryTag === "string" && short.categoryTag.toLowerCase().includes(q);
        const locMatch = typeof short.location === "string" && short.location.toLowerCase().includes(q);
        const chipMatch = typeof short.chipId === "string" && short.chipId.toLowerCase().includes(q);
        return titleMatch || tagMatch || locMatch || chipMatch;
      });
    } else if (activeChip !== "all") {
      list = list.filter((short) => short.chipId === activeChip);
    }
    return list;
  }, [activeChip, sectorData, searchQuery]);

  const toggleSave = (id) => {
    setSavedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShare = (title) => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href
      }).catch(() => {});
    }
  };

  const handleOpenDelivery = (short) => {
    navigate("/buyer/delivery", {
      state: {
        category: currentCategoryId,
        product: short.title,
        productImage: short.image,
        step: 3
      }
    });
  };

  return (
    <div className="subcat-page-shell">
      <div className="subcat-topbar">
        <button
          type="button"
          className="subcat-back-btn"
          onClick={() => navigate("/buyer/select-category")}
          aria-label="Back to Select Category"
        >
          <BackArrowIcon style={{ width: 15.57, height: 15.16, stroke: "#334155" }} />
        </button>

        <div className="subcat-header-center">
          <div className="subcat-title-row">
            <h1 className="subcat-title">{sectorData.title}</h1>
            <span className="subcat-status-badge">{sectorData.badge}</span>
          </div>
          <p className="subcat-subtitle">{sectorData.subtitle}</p>
        </div>

        <div className="subcat-top-actions">
          <button
            type="button"
            className="subcat-action-circle-btn"
            aria-label="Search items"
            onClick={() => {
              setIsSearchOpen((prev) => !prev);
              if (isFilterOpen) setIsFilterOpen(false);
            }}
          >
            <SearchIcon style={{ width: 16.11, height: 16.11, stroke: "#334155" }} />
          </button>
          <button
            type="button"
            className={`subcat-action-filter-btn${isFilterOpen ? " active" : ""}`}
            aria-label="Filter by category"
            onClick={() => {
              setIsFilterOpen((prev) => !prev);
              if (isSearchOpen) setIsSearchOpen(false);
            }}
          >
            <FilterSliderIcon style={{ width: 15, height: 15, stroke: isFilterOpen ? "#006A66" : "#58AF9D" }} />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="subcat-search-inline-wrap">
          <SearchIcon style={{ width: 14, height: 14, color: "#94A3B8" }} />
          <input
            type="text"
            className="subcat-search-input"
            placeholder={`Search ${sectorData.title.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
            autoFocus
          />
          {searchQuery && (
            <button
              type="button"
              className="subcat-clear-btn"
              onClick={() => setSearchQuery("")}
            >
              ×
            </button>
          )}
        </div>
      )}

      {isFilterOpen && (
        <div className="subcat-cat-dropdown">
          <div className="subcat-cat-dropdown-header">
            <span className="subcat-cat-dropdown-title">Select Category</span>
            <button
              type="button"
              className="subcat-cat-close-btn"
              onClick={() => setIsFilterOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="subcat-cat-grid">
            {verifiedSectors.map((sector) => {
              const isSelected = sector.id === currentCategoryId;
              return (
                <button
                  key={sector.id}
                  type="button"
                  className={`subcat-cat-item${isSelected ? " active" : ""}`}
                  onClick={() => {
                    setSelectedCat(sector.id);
                    setActiveChip("all");
                    setSearchQuery("");
                    setIsFilterOpen(false);
                  }}
                >
                  <div className="subcat-cat-icon-wrap">
                    {renderSectorIcon(sector.iconType, isSelected)}
                  </div>
                  <div className="subcat-cat-info">
                    <span className="subcat-cat-name">{sector.name}</span>
                    <span className="subcat-cat-count">{sector.suppliers}</span>
                  </div>
                  {isSelected && <span className="subcat-cat-check">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="subcat-chips-row">
        {sectorData.chips.map((chip, idx) => {
          const isActive = activeChip === chip.id && !searchQuery.trim();
          const displayCount = idx === 0
            ? sectorData.shorts.length
            : sectorData.shorts.filter((s) => s.chipId === chip.id).length;
          return (
            <button
              key={chip.id}
              type="button"
              className={`subcat-chip-card${isActive ? " subcat-chip-card-active" : ""}`}
              onClick={() => {
                setActiveChip(chip.id);
                setSearchQuery("");
              }}
            >
              <div className="subcat-chip-thumb-wrap">
                <img
                  src={chip.image}
                  alt={chip.label}
                  className="subcat-chip-thumb"
                />
                <span className={`subcat-chip-count${isActive ? " subcat-chip-count-active" : ""}`}>
                  {displayCount}
                </span>
              </div>
              <span className={`subcat-chip-label${isActive ? " subcat-chip-label-active" : ""}`}>
                {chip.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="subcat-shorts-feed">
        {filteredShorts.length === 0 ? (
          <div className="subcat-empty-state">
            <p className="subcat-empty-title">
              {searchQuery ? `No verified items found for "${searchQuery}"` : "No verified items found for this selection."}
            </p>
            <button
              type="button"
              className="subcat-empty-reset-btn"
              onClick={() => {
                setActiveChip("all");
                setSearchQuery("");
              }}
            >
              Reset to All {sectorData.title}
            </button>
          </div>
        ) : (
          filteredShorts.map((short) => {
            const isSaved = !!savedItems[short.id];

            return (
              <div key={short.id} className="subcat-short-card">
                <img
                  src={short.image}
                  alt={short.title}
                  className="subcat-short-bg-img"
                  onClick={() => handleOpenDelivery(short)}
                  style={{ cursor: "pointer" }}
                />
                <div
                  className="subcat-short-gradient-overlay"
                  onClick={() => handleOpenDelivery(short)}
                  style={{ cursor: "pointer" }}
                />

                <div className="subcat-card-top-row">
                  <div className="subcat-badge-verified">
                    <ShieldCheckIcon style={{ width: 13.34, height: 12.79, stroke: "#059669" }} />
                    <span>{short.supplierBadge}</span>
                  </div>

                  <div className="subcat-badges-right">
                    <div className="subcat-badge-pill subcat-badge-loc">
                      <PinIcon style={{ width: 9.33, height: 11.27, stroke: "#58AF9D" }} />
                      <span>{short.location}</span>
                    </div>
                    <div className="subcat-badge-pill subcat-badge-units">
                      <span>{short.readyUnits}</span>
                    </div>
                  </div>
                </div>

                <div className="subcat-action-rail">
                  <button
                    type="button"
                    className="subcat-rail-btn"
                    onClick={() => toggleSave(short.id)}
                    aria-label="Save"
                  >
                    <div className={`subcat-rail-icon-wrap${isSaved ? " subcat-rail-icon-saved" : ""}`}>
                      <HeartIcon
                        style={{
                          width: 17,
                          height: 15,
                          fill: isSaved ? "#EF4444" : "none",
                          stroke: isSaved ? "#EF4444" : "#FFFFFF"
                        }}
                      />
                    </div>
                    <span className="subcat-rail-label">Save</span>
                  </button>

                  <button
                    type="button"
                    className="subcat-rail-btn"
                    onClick={() => navigate("/buyer/chat", { state: { supplier: short.supplierBadge, product: short.title } })}
                    aria-label="Chat"
                  >
                    <div className="subcat-rail-icon-wrap">
                      <FigmaChatRailIcon style={{ width: 22, height: 22 }} />
                    </div>
                    <span className="subcat-rail-label">Chat</span>
                  </button>

                  <button
                    type="button"
                    className="subcat-rail-btn"
                    onClick={() => handleShare(short.title)}
                    aria-label="Share"
                  >
                    <div className="subcat-rail-icon-wrap">
                      <ShareIcon style={{ width: 15, height: 17, stroke: "#FFFFFF" }} />
                    </div>
                    <span className="subcat-rail-label">Share</span>
                  </button>
                </div>

                <div className="subcat-bottom-card">
                  <div className="subcat-bottom-top-row">
                    <div className="subcat-bottom-title-col">
                      <div className="subcat-tags-wrap">
                        <span className="subcat-category-tag">{short.categoryTag}</span>
                        <div className="subcat-rating-pill">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="#F59E0B">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span>{short.rating}</span>
                        </div>
                      </div>
                      <h2
                        className="subcat-item-title"
                        onClick={() => handleOpenDelivery(short)}
                        style={{ cursor: "pointer" }}
                      >
                        {short.title}
                      </h2>
                    </div>

                    <div className="subcat-price-contract">
                      <span className="subcat-price-label">CONTRACT</span>
                      <span className="subcat-price-rate">{short.contractPrice}</span>
                    </div>
                  </div>

                  <div className="subcat-bottom-action-row">
                    <div className="subcat-price-outright">
                      <span className="subcat-price-label">OUTRIGHT</span>
                      <div className="subcat-price-amount-wrap">
                        <span className="subcat-price-main">{short.outrightPrice}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="subcat-request-btn"
                      onClick={() => handleOpenDelivery(short)}
                      aria-label={`Request quotation for ${short.title}`}
                    >
                      <span>Request</span>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default SubCategoryHub;
