import { CheckIcon } from "../Icons.jsx";
import { productsByCategory } from "../../data/requirementData.js";

function PostedConfirmation({ formData, requirementId, onBackToDashboard, onViewRequirement }) {
  const allProducts = Object.values(productsByCategory).flat();
  const product = allProducts.find((item) => item.id === formData.product);

  const productName = product ? product.name : (formData.product ? formData.product : "Premium Basmati Rice");
  const quantityText = formData.quantity ? `${formData.quantity} ${formData.unit || "Quintals"}` : "500 Quintals";
  const targetDateText = formData.date ? formData.date : "Oct 24, 2023";

  return (
    <div className="conf-page-shell">
      <div className="conf-halo-wrap">
        <div className="conf-halo-glow" />
        <div className="conf-icon-circle">
          <CheckIcon style={{ width: 32, height: 32, stroke: "#FFFFFF", strokeWidth: 3 }} />
        </div>
      </div>

      <h1 className="conf-heading">Requirement Posted</h1>
      <div className="conf-id-pill">
        <span>ID: {requirementId || "#REQ-92841"}</span>
      </div>

      <p className="conf-body-text">
        Matching in progress... We are currently notifying verified suppliers who match your criteria. You will receive a live alert as soon as a match is found.
      </p>

      <div className="conf-summary-card">
        <span className="conf-summary-heading">REQUIREMENT SUMMARY</span>
        <div className="conf-summary-row">
          <span className="conf-summary-label">Product</span>
          <span className="conf-summary-val">{productName}</span>
        </div>
        <div className="conf-summary-row">
          <span className="conf-summary-label">Quantity</span>
          <span className="conf-summary-val">{quantityText}</span>
        </div>
        <div className="conf-summary-row no-border">
          <span className="conf-summary-label">Target Date</span>
          <span className="conf-summary-val">{targetDateText}</span>
        </div>
      </div>

      <div className="conf-actions-group">
        <button
          type="button"
          className="conf-view-req-btn"
          onClick={onViewRequirement}
        >
          <span>View Requirement</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <button
          type="button"
          className="conf-dashboard-btn"
          onClick={onBackToDashboard}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default PostedConfirmation;