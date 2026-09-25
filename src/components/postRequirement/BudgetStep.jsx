import { useRef } from "react";
import { BackArrowIcon, UploadIcon } from "../Icons.jsx";

function BudgetStep({ budget, details, attachmentName, onChange, onNext, onBack }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    onChange("attachmentName", file ? file.name : "");
  };

  return (
    <div className="budget-page-shell">
      <div className="budget-topbar">
        <button
          type="button"
          className="budget-back-btn"
          onClick={onBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
        <span className="budget-step-counter">Step 6 of 8</span>
      </div>

      <div className="budget-progress-track">
        <div className="budget-progress-fill" style={{ width: "75%" }} />
      </div>

      <div className="budget-header-block">
        <h1 className="budget-heading">Budget &amp; Additional Details</h1>
        <p className="budget-subtext">
          Set your expectations and add any relevant files for better matches.
        </p>
      </div>

      <div className="budget-form-card">
        <div className="budget-field-group">
          <label className="budget-field-label">Expected Budget (₹)</label>
          <div className="budget-input-wrap">
            <span className="budget-currency-symbol">₹</span>
            <input
              type="text"
              className="budget-amount-input"
              placeholder="0.00"
              value={budget}
              onChange={(event) => onChange("budget", event.target.value)}
            />
          </div>
        </div>

        <div className="budget-field-group">
          <div className="budget-label-row">
            <label className="budget-field-label">Requirement Details</label>
            <span className="budget-optional-tag">Optional</span>
          </div>
          <textarea
            className="budget-textarea"
            placeholder="Describe specific quality standards, delivery timelines, or packaging requirements..."
            value={details}
            onChange={(event) => onChange("details", event.target.value)}
            rows={4}
          />
        </div>
      </div>

      <div className="budget-attach-section">
        <h2 className="budget-section-heading">Attachments</h2>

        <button
          type="button"
          className="budget-dropzone"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <div className="budget-dropzone-icon-circle">
            <UploadIcon style={{ color: "#199587", width: 22, height: 22 }} />
          </div>
          <span className="budget-dropzone-title">
            {attachmentName || "Add Photo/Document"}
          </span>
          <span className="budget-dropzone-sub">
            JPG, PNG, PDF up to 5MB
          </span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          className="budget-file-hidden"
          onChange={handleFileChange}
        />
      </div>

      <button
        type="button"
        className="wiz-primary-btn"
        onClick={onNext}
      >
        <span>Next Step</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

export default BudgetStep;