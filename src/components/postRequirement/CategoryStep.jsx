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
      return <TruckIcon style={{ width: 22, height: 22, color: "#3D4948" }} />;
    case "tractor":
      return <TractorIcon style={{ width: 22, height: 17.2, color: "#3D4948" }} />;
    case "tool":
      return <ToolIcon style={{ width: 22, height: 22, color: "#3D4948" }} />;
    case "chip":
      return <ChipIcon style={{ width: 22, height: 22, color: "#3D4948" }} />;
    case "layers":
      return <LayersIcon style={{ width: 22, height: 22, color: "#3D4948" }} />;
    case "box":
      return <BoxIcon style={{ width: 22, height: 22, color: "#3D4948" }} />;
    default:
      return <TruckIcon style={{ width: 22, height: 22, color: "#3D4948" }} />;
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
          className="cat-topbar-back-btn"
          onClick={onBack}
          aria-label="Back to Requirements Hub"
        >
          <BackArrowIcon style={{ width: 22, height: 22, color: "#006A66", strokeWidth: 2.2 }} />
        </button>
        <span className="cat-topbar-logo">bixoo</span>
        <div className="cat-topbar-spacer" />
      </div>

      <div className="cat-main-canvas">
        <div className="cat-stepper-margin">
          <div className="cat-stepper-container">
            <div className="cat-stepper-track" />
            <div className="cat-step-node cat-step-active">
              <div className="cat-step-circle-badge cat-circle-active">
                <span>1</span>
              </div>
              <div className="cat-step-text-wrap">
                <span className="cat-step-micro-label cat-micro-active">STEP 1</span>
                <span className="cat-step-bottom-label cat-bottom-active">Category</span>
              </div>
            </div>

            <div className="cat-step-node cat-step-inactive">
              <div className="cat-step-circle-badge cat-circle-inactive">
                <span>2</span>
              </div>
              <div className="cat-step-text-wrap">
                <span className="cat-step-micro-label cat-micro-inactive">STEP 2</span>
                <span className="cat-step-bottom-label cat-bottom-inactive">Quantity</span>
              </div>
            </div>

            <div className="cat-step-node cat-step-inactive">
              <div className="cat-step-circle-badge cat-circle-inactive">
                <span>3</span>
              </div>
              <div className="cat-step-text-wrap">
                <span className="cat-step-micro-label cat-micro-inactive">STEP 3</span>
                <span className="cat-step-bottom-label cat-bottom-inactive">Location</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cat-header-section">
          <h1 className="cat-header-title">What category do you need?</h1>
          <p className="cat-header-subtitle">
            Select the primary category for your requirement.
          </p>
        </div>

        <div className="cat-cards-stack">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const desc = cat.id === "packaging" ? "Boxes, materials, and logistics prep." : cat.description;
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
                  <div className="cat-card-text-group">
                    <h3 className="cat-card-title">{cat.name}</h3>
                    <p className="cat-card-desc">{desc}</p>
                  </div>
                  <div className="cat-card-icon-badge">
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