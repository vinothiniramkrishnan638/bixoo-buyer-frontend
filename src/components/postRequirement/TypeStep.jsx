import { BackArrowIcon, CheckIcon, SingleItemIcon, BulkBoxIcon } from "../Icons.jsx";

function TypeStep({ selectedType, onSelect, onNext, onBack }) {
  const currentSelection = selectedType || "single";

  return (
    <div className="type-page-shell">
      <div className="type-topbar">
        <button
          type="button"
          className="type-back-btn"
          onClick={onBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
      </div>

      <div className="type-stepper-3">
        <div className="type-step-item done">
          <div className="type-step-circle">
            <CheckIcon style={{ width: 14, height: 14, stroke: "#FFFFFF", strokeWidth: 3 }} />
          </div>
          <span className="type-step-sub">STEP 1</span>
          <span className="type-step-name">Category</span>
        </div>
        <div className="type-step-line done" />
        <div className="type-step-item active">
          <div className="type-step-circle">
            <div className="type-step-inner-dot" />
          </div>
          <span className="type-step-sub">STEP 2</span>
          <span className="type-step-name">Type</span>
        </div>
        <div className="type-step-line" />
        <div className="type-step-item">
          <div className="type-step-circle" />
          <span className="type-step-sub">STEP 3</span>
          <span className="type-step-name">Product</span>
        </div>
      </div>

      <div className="type-header-block">
        <h1 className="type-heading">Select Requirement Type</h1>
        <p className="type-subtext">Choose how you want to purchase these items.</p>
      </div>

      <div className="type-cards-list">
        <div
          className={`type-option-card${currentSelection === "single" ? " type-option-card-active" : ""}`}
          onClick={() => onSelect("single")}
        >
          {currentSelection === "single" && (
            <div className="type-check-badge">
              <CheckIcon style={{ width: 12, height: 10, stroke: "#FFFFFF", strokeWidth: 3 }} />
            </div>
          )}
          <div className="type-option-icon-circle">
            <SingleItemIcon style={{ width: 24, height: 24, color: "#FFFFFF" }} />
          </div>
          <div className="type-option-content">
            <h3 className="type-option-title">SINGLE</h3>
            <p className="type-option-desc">Specific item or limited quantity.</p>
          </div>
        </div>

        <div
          className={`type-option-card${currentSelection === "bulk" ? " type-option-card-active" : ""}`}
          onClick={() => onSelect("bulk")}
        >
          {currentSelection === "bulk" && (
            <div className="type-check-badge">
              <CheckIcon style={{ width: 12, height: 10, stroke: "#FFFFFF", strokeWidth: 3 }} />
            </div>
          )}
          <div className="type-option-icon-circle plain">
            <BulkBoxIcon style={{ width: 24, height: 24, color: "#64748B" }} />
          </div>
          <div className="type-option-content">
            <h3 className="type-option-title">BULK</h3>
            <p className="type-option-desc">Large quantity, wholesale, or lot.</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="wiz-primary-btn"
        onClick={onNext}
      >
        <span>Next</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

export default TypeStep;