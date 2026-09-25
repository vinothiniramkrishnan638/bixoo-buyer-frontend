import { BackArrowIcon } from "../Icons.jsx";
import { unitOptions } from "../../data/requirementData.js";

function DetailsStep({ quantity, unit, note, onChange, onNext, onBack }) {
  const canProceed = quantity && quantity.trim().length > 0;

  return (
    <div className="wiz-page-shell">
      <div className="wiz-topbar">
        <button
          type="button"
          className="wiz-back-btn"
          onClick={onBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
        <span className="wiz-topbar-title">Quantity &amp; Details</span>
      </div>

      <div className="wiz-header-block">
        <h1 className="wiz-heading">How much do you need?</h1>
        <p className="wiz-subtext">Set the quantity and add any short notes for suppliers.</p>
      </div>

      <div className="wiz-card">
        <label className="wiz-field-label">Quantity</label>
        <div className="wiz-quantity-row">
          <input
            type="number"
            min="0"
            className="wiz-amount-input"
            placeholder="0"
            value={quantity}
            onChange={(event) => onChange("quantity", event.target.value)}
          />
          <select
            className="wiz-select"
            value={unit}
            onChange={(event) => onChange("unit", event.target.value)}
          >
            {unitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <label className="wiz-field-label" style={{ marginTop: 16 }}>Short Note</label>
        <textarea
          className="wiz-textarea"
          placeholder="Any quick note about grade, size, or preference..."
          value={note}
          onChange={(event) => onChange("note", event.target.value)}
          rows={3}
        />
      </div>

      <button
        type="button"
        className="wiz-primary-btn"
        disabled={!canProceed}
        onClick={onNext}
      >
        <span>Next</span>
      </button>
    </div>
  );
}

export default DetailsStep;