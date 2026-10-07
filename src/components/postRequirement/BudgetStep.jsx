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
          <BackArrowIcon style={{ width: 16, height: 16, stroke: "#3D4948", strokeWidth: 2.2 }} />
        </button>
      </div>

      <div className="del-stepper-8">
        <div className="del-track-container">
          <div className="del-track-bg-line" />
          <div className="del-track-fill-line del-track-fill-step5" />
          <div className="del-step-dot del-dot-done"><span>1</span></div>
          <div className="del-step-dot del-dot-done"><span>2</span></div>
          <div className="del-step-dot del-dot-done"><span>3</span></div>
          <div className="del-step-dot del-dot-done"><span>4</span></div>
          <div className="del-step-dot del-dot-active">
            <div className="del-dot-active-inner">
              <span>5</span>
            </div>
          </div>
        </div>
        <div className="del-stepper-meta">
          <div className="del-meta-left">
            <span className="del-step-title-teal">Step 5: Budget</span>
          </div>
          <div className="del-meta-right">
            <span className="del-step-percent">100% Complete</span>
          </div>
        </div>
      </div>

      <div className="budget-header-block">
        <div className="budget-heading-wrap">
          <h1 className="budget-heading">Budget &amp; Additional Details</h1>
        </div>
        <div className="budget-subtext-wrap">
          <p className="budget-subtext">
            Set your expectations and add any relevant files for better matches.
          </p>
        </div>
      </div>

      <div className="budget-form-card">
        <div className="budget-field-group">
          <label className="budget-field-label">Expected Budget (₹)</label>
          <div className="budget-input-wrap">
            <span className="budget-currency-symbol">₹</span>
            <input
              type="text"
              inputMode="decimal"
              className="budget-amount-input"
              placeholder="0.00"
              value={budget}
              onChange={(event) => onChange("budget", event.target.value)}
            />
          </div>
        </div>

        <div className="budget-separator-wrap">
          <div className="budget-separator" />
        </div>

        <div className="budget-field-group">
          <div className="budget-label-row">
            <label className="budget-field-label-text">Requirement Details</label>
            <span className="budget-optional-tag">Optional</span>
          </div>
          <div className="budget-textarea-wrap">
            <textarea
              className="budget-textarea"
              placeholder="Describe specific quality standards, delivery timelines, or packaging requirements..."
              value={details}
              onChange={(event) => onChange("details", event.target.value)}
              rows={3}
            />
          </div>
        </div>
      </div>

      <div className="budget-attach-section">
        <div className="budget-attach-heading-wrap">
          <h2 className="budget-section-heading">Attachments</h2>
        </div>

        <button
          type="button"
          className="budget-dropzone"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <div className="budget-dropzone-icon-wrap">
            <div className="budget-dropzone-icon-circle">
              <UploadIcon style={{ color: "#2AAFA9", width: 18, height: 18 }} />
            </div>
          </div>
          <span className="budget-dropzone-title">
            {attachmentName || "Add Photo/Document"}
          </span>
          <span className="budget-dropzone-sub">
            {attachmentName ? "Click to change file" : "JPG, PNG, PDF up to 5MB"}
          </span>
          {attachmentName && (
            <div
              role="button"
              tabIndex={0}
              className="budget-dropzone-remove-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (fileInputRef.current) fileInputRef.current.value = "";
                onChange("attachmentName", "");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  if (fileInputRef.current) fileInputRef.current.value = "";
                  onChange("attachmentName", "");
                }
              }}
            >
              <span>✕</span> Remove File
            </div>
          )}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          className="budget-file-hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="budget-actions-footer">
        <button
          type="button"
          className="budget-next-btn"
          onClick={onNext}
        >
          <span className="budget-next-btn-text">Next Step</span>
          <svg className="budget-next-btn-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BudgetStep;