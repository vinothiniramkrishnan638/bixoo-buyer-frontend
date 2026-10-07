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

  const currentSelected = selectedProduct || (products[1] && products[1].id) || "car";

  return (
    <div className="prod-page-shell">
      <div className="prod-topbar">
        <button
          type="button"
          className="prod-back-btn"
          onClick={onBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
        <span className="prod-brand-logo">bixoo</span>
        <button
          type="button"
          className="prod-bell-btn"
          aria-label="Notifications"
          onClick={() => navigate("/buyer/notifications")}
        >
          <BellIcon />
        </button>
      </div>

      <div className="del-stepper-8">
        <div className="del-track-container">
          <div className="del-track-bg-line" />
          <div className="del-track-fill-line del-track-fill-step2" />
          <div className="del-step-dot del-dot-done"><span>1</span></div>
          <div className="del-step-dot del-dot-active">
            <div className="del-dot-active-inner">
              <span>2</span>
            </div>
          </div>
          <div className="del-step-dot del-dot-inactive"><span>3</span></div>
          <div className="del-step-dot del-dot-inactive"><span>4</span></div>
          <div className="del-step-dot del-dot-inactive"><span>5</span></div>
        </div>
        <div className="del-stepper-meta">
          <div className="del-meta-left">
            <span className="del-step-title-teal">Step 2: Product</span>
          </div>
          <div className="del-meta-right">
            <span className="del-step-percent">40% Complete</span>
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