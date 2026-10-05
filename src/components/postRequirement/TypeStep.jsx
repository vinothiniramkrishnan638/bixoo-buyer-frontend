import { BackArrowIcon, CheckIcon } from "../Icons.jsx";

function SingleBoxCrateIcon({ isSelected }) {
  const strokeColor = isSelected ? "#FFFFFF" : "#21A598";
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <path d="M3.5 10.5h17" />
      <path d="M10 14.5h4" />
    </svg>
  );
}

function BulkCubeScanIcon({ isSelected }) {
  const strokeColor = isSelected ? "#FFFFFF" : "#21A598";
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8V5a1 1 0 0 1 1-1h3" />
      <path d="M16 4h3a1 1 0 0 1 1 1v3" />
      <path d="M4 16v3a1 1 0 0 0 1 1h3" />
      <path d="M16 20h3a1 1 0 0 0 1-1v-3" />
      <path d="m12 7.5 4.5 2.5v4l-4.5 2.5-4.5-2.5v-4z" />
      <path d="M12 7.5v9" />
      <path d="m12 12 4.5-2.5" />
      <path d="M12 12 7.5 9.5" />
    </svg>
  );
}

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
            <div className="type-step-inner-circle">
              <div className="type-step-inner-dot" />
            </div>
          </div>
          <span className="type-step-sub">STEP 2</span>
          <span className="type-step-name">Type</span>
        </div>
        <div className="type-step-line" />
        <div className="type-step-item">
          <div className="type-step-circle">
            <div className="type-step-circle-dot" />
          </div>
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
          <div className={`type-option-icon-circle${currentSelection === "single" ? " active" : ""}`}>
            <SingleBoxCrateIcon isSelected={currentSelection === "single"} />
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
          <div className={`type-option-icon-circle${currentSelection === "bulk" ? " active" : ""}`}>
            <BulkCubeScanIcon isSelected={currentSelection === "bulk"} />
          </div>
          <div className="type-option-content">
            <h3 className="type-option-title">BULK</h3>
            <p className="type-option-desc">Large quantity, wholesale, or lot.</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="type-next-btn"
        onClick={onNext}
      >
        <span>Next</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </button>
    </div>
  );
}

export default TypeStep;