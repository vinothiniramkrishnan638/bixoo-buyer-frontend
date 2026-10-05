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
        <div className="cat-back-btn-margin">
          <button
            type="button"
            className="cat-back-btn"
            onClick={onBack}
            aria-label="Back"
          >
            <div className="cat-back-btn-container">
              <BackArrowIcon style={{ width: 22, height: 22, color: "#006A66" }} />
            </div>
          </button>
        </div>
        <div className="cat-brand-container">
          <span className="cat-brand-logo">bixoo</span>
        </div>
      </div>

      <div className="cat-main-canvas">
        <div className="cat-stepper-margin">
          <div className="cat-stepper">
            <div className="cat-stepper-line" />

            <div className="cat-step-item active">
              <div className="cat-step-circle active">
                <div className="cat-step-glow" />
                <span className="cat-step-num">1</span>
              </div>
              <div className="cat-step-labels">
                <span className="cat-step-sub active">STEP 1</span>
                <span className="cat-step-name active">Category</span>
              </div>
            </div>

            <div className="cat-step-item">
              <div className="cat-step-circle">
                <span className="cat-step-num">2</span>
              </div>
              <div className="cat-step-labels">
                <span className="cat-step-sub">STEP 2</span>
                <span className="cat-step-name">Quantity</span>
              </div>
            </div>

            <div className="cat-step-item">
              <div className="cat-step-circle">
                <span className="cat-step-num">3</span>
              </div>
              <div className="cat-step-labels">
                <span className="cat-step-sub">STEP 3</span>
                <span className="cat-step-name">Location</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cat-header-margin">
          <div className="cat-header">
            <div className="cat-heading-wrap">
              <h1 className="cat-heading">What category do you need?</h1>
            </div>
            <div className="cat-subtext-wrap">
              <p className="cat-subtext">
                Select the primary category for your requirement.
              </p>
            </div>
          </div>
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
    </div>
  );
}

export default CategoryStep;