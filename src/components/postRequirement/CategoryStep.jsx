import {
  BackArrowIcon,
  TruckIcon,
  TractorIcon,
  ToolIcon,
  ChipIcon,
  LayersIcon,
  BoxIcon
} from "../Icons.jsx";
import { categories } from "../../data/requirementData.js";

function renderCategoryIcon(iconType) {
  switch (iconType) {
    case "truck":
      return <TruckIcon style={{ width: 22, height: 22, color: "#141B2B" }} />;
    case "tractor":
      return <TractorIcon style={{ width: 22, height: 22, color: "#141B2B" }} />;
    case "tool":
      return <ToolIcon style={{ width: 22, height: 22, color: "#141B2B" }} />;
    case "chip":
      return <ChipIcon style={{ width: 22, height: 22, color: "#141B2B" }} />;
    case "layers":
      return <LayersIcon style={{ width: 22, height: 22, color: "#141B2B" }} />;
    case "box":
      return <BoxIcon style={{ width: 22, height: 22, color: "#141B2B" }} />;
    default:
      return <TruckIcon style={{ width: 22, height: 22, color: "#141B2B" }} />;
  }
}

function CategoryStep({ selectedCategory, onSelect, onNext, onBack }) {
  const handleCardClick = (id) => {
    onSelect(id);
    onNext();
  };

  return (
    <div className="cat-page-shell">
      <div className="cat-topbar">
        <button
          type="button"
          className="cat-back-btn"
          onClick={onBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
        <span className="cat-brand-logo">bixoo</span>
      </div>

      <div className="wiz-stepper-3">
        <div className="wiz-step-item active">
          <div className="wiz-step-circle">1</div>
          <span className="wiz-step-sub">STEP 1</span>
          <span className="wiz-step-name">Category</span>
        </div>
        <div className="wiz-step-divider" />
        <div className="wiz-step-item">
          <div className="wiz-step-circle">2</div>
          <span className="wiz-step-sub">STEP 2</span>
          <span className="wiz-step-name">Quantity</span>
        </div>
        <div className="wiz-step-divider" />
        <div className="wiz-step-item">
          <div className="wiz-step-circle">3</div>
          <span className="wiz-step-sub">STEP 3</span>
          <span className="wiz-step-name">Location</span>
        </div>
      </div>

      <div className="cat-header-block">
        <h1 className="cat-heading">What category do you need?</h1>
        <p className="cat-subtext">
          Select the primary category for your requirement.
        </p>
      </div>

      <div className="cat-cards-stack">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <div
              key={cat.id}
              className={`cat-visual-card${isSelected ? " cat-visual-card-selected" : ""}`}
              onClick={() => handleCardClick(cat.id)}
            >
              <div className="cat-card-img-wrap">
                <img src={cat.image} alt={cat.name} className="cat-card-img" />
              </div>
              <div className="cat-card-info-row">
                <div className="cat-card-text">
                  <h3 className="cat-card-title">{cat.name}</h3>
                  <p className="cat-card-desc">{cat.description}</p>
                </div>
                <div className="cat-card-icon-wrap">
                  {renderCategoryIcon(cat.iconType)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryStep;