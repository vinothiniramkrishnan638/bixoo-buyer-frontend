import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrowIcon, BellIcon, SearchIcon, CheckIcon } from "../Icons.jsx";
import { productsByCategory } from "../../data/requirementData.js";

function ProductStep({ categoryId, selectedProduct, onSelect, onNext, onBack }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const key = categoryId === "vechiles" ? "vehicles" : (categoryId || "vehicles");
  const products = useMemo(() => productsByCategory[key] || productsByCategory.vehicles || [], [key]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return products;
    return products.filter((item) => item.name.toLowerCase().includes(term));
  }, [products, searchTerm]);

  const currentSelected = selectedProduct || (products[0] && products[0].id) || "";

  return (
    <div className="prod-page-shell">
      <div className="prod-topbar">
        <button
          type="button"
          className="prod-back-btn"
          onClick={onBack}
          aria-label="Back to Category Selection"
        >
          <BackArrowIcon style={{ width: 15.2, height: 15.2, color: "#006A66", strokeWidth: 2.2 }} />
        </button>

        <div className="prod-brand-logo-wrap">
          <span className="prod-brand-logo">bixoo</span>
        </div>

        <div className="prod-bell-wrap">
          <button
            type="button"
            className="prod-bell-btn"
            aria-label="Notifications"
            onClick={() => navigate("/buyer/notifications")}
          >
            <div className="prod-bell-icon-wrap">
              <BellIcon style={{ width: 15.2, height: 19, color: "#006A66" }} />
            </div>
          </button>
        </div>
      </div>

      <div className="prod-stepper-container">
        <div className="prod-stepper-track-bg" />
        <div className="prod-stepper-track-fill" />
        <div className="prod-step-node">
          <div className="prod-step-badge prod-badge-completed">
            <CheckIcon style={{ width: 14, height: 14, stroke: "#FFFFFF", strokeWidth: 3 }} />
          </div>
          <div className="prod-step-text-wrap">
            <span className="prod-step-micro-label prod-text-completed">Step 1:</span>
            <span className="prod-step-name-label prod-text-completed">Category</span>
          </div>
        </div>

        <div className="prod-step-node">
          <div className="prod-step-badge prod-badge-active">
            <span>2</span>
          </div>
          <div className="prod-step-text-wrap">
            <span className="prod-step-micro-label prod-text-active">Step 2:</span>
            <span className="prod-step-name-label prod-text-active">Product</span>
          </div>
        </div>

        <div className="prod-step-node">
          <div className="prod-step-badge prod-badge-upcoming">
            <span>3</span>
          </div>
          <div className="prod-step-text-wrap">
            <span className="prod-step-micro-label prod-text-upcoming">Step 3:</span>
            <span className="prod-step-name-label prod-text-upcoming">Type</span>
          </div>
        </div>

        <div className="prod-step-node">
          <div className="prod-step-badge prod-badge-upcoming">
            <span>4</span>
          </div>
          <div className="prod-step-text-wrap">
            <span className="prod-step-micro-label prod-text-upcoming">Step 4:</span>
            <span className="prod-step-name-label prod-text-upcoming">Details</span>
          </div>
        </div>
      </div>

      <div className="prod-header-block">
        <h1 className="prod-heading">What exactly do you need?</h1>
        <p className="prod-subtext">Select the specific product category to proceed.</p>
      </div>

      <div className="prod-search-wrap">
        <SearchIcon style={{ color: "#94A3B8", flexShrink: 0, width: 18, height: 18 }} />
        <input
          type="text"
          className="prod-search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="prod-grid-2col">
        {filteredProducts.map((product) => {
          const isSelected = currentSelected === product.id;
          return (
            <div
              key={product.id}
              className={`prod-grid-card${isSelected ? " prod-grid-card-active" : ""}`}
              onClick={() => onSelect(product.id)}
            >
              {isSelected && (
                <div className="prod-card-check-badge">
                  <CheckIcon style={{ width: 12, height: 10, stroke: "#FFFFFF", strokeWidth: 3 }} />
                </div>
              )}
              <div className="prod-grid-img-wrap">
                <img src={product.image} alt={product.name} className="prod-grid-img" />
              </div>
              <span className="prod-grid-name">{product.name}</span>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="wiz-primary-btn"
        onClick={onNext}
      >
        <span>Next</span>
      </button>
    </div>
  );
}

export default ProductStep;