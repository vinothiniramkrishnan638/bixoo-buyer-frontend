import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackArrowIcon,
  HelpQuestionIcon,
  CheckIcon,
  PinIcon
} from "../components/Icons.jsx";

const CERTIFICATION_OPTIONS = [
  "ISO 9001",
  "CE Certified",
  "BIS / ISI",
  "GMP",
  "RoHS",
  "MSME Verified"
];

const UNIT_OPTIONS = [
  "Pieces",
  "Metric Tons (MT)",
  "Kilograms (Kg)",
  "Liters",
  "Boxes/Cartons",
  "Containers",
  "Meters"
];

function RequestCategory() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sectorName: "",
    productName: "",
    specifications: "",
    quantity: "",
    unit: "Pieces",
    location: "",
    urgency: "Standard (15 - 30 Days)",
    certifications: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCertification = (cert) => {
    setFormData((prev) => {
      const exists = prev.certifications.includes(cert);
      return {
        ...prev,
        certifications: exists
          ? prev.certifications.filter((item) => item !== cert)
          : [...prev.certifications, cert]
      };
    });
  };

  const isFormValid =
    formData.sectorName.trim() !== "" &&
    formData.productName.trim() !== "" &&
    formData.quantity.trim() !== "" &&
    formData.location.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    const randomId = "REQ-" + Math.floor(10000 + Math.random() * 90000);
    setReferenceId(randomId);
    setIsSubmitted(true);
  };

  return (
    <div className="request-page-shell">
      <div className="request-topbar">
        <button
          type="button"
          className="request-circle-btn"
          onClick={() => navigate("/buyer/select-category")}
          aria-label="Back to categories"
        >
          <BackArrowIcon style={{ width: 14, height: 14, stroke: "#334155" }} />
        </button>

        <div className="request-topbar-title-wrap">
          <span className="request-topbar-title">Custom Sourcing</span>
        </div>

        <div className="request-b2b-badge">B2B</div>
      </div>

      <div className="request-main-canvas">
        <div className="request-header">
          <h1 className="request-title">Request a New Sector</h1>
          <p className="request-subtitle">
            Can't find your commodity? Submit your requirements and our procurement network will verify qualified suppliers.
          </p>
        </div>

        <div className="request-info-banner">
          <div className="request-info-icon-wrap">
            <HelpQuestionIcon style={{ width: 16, height: 18, color: "#239590" }} />
          </div>
          <div className="request-info-text">
            <h4 className="request-info-title">Need custom sourcing?</h4>
            <p className="request-info-desc">
              Tell us the specifications and target volume. Verified suppliers will be onboarded to quote on your RFQ.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="request-form">
          <div className="request-form-group">
            <label className="request-label" htmlFor="sectorName">
              Proposed Category / Sector <span className="request-req-star">*</span>
            </label>
            <input
              id="sectorName"
              type="text"
              className="request-input"
              placeholder="e.g. Solar Energy, Heavy Foundry, Medical Equipment"
              value={formData.sectorName}
              onChange={(e) => updateField("sectorName", e.target.value)}
              required
            />
          </div>

          <div className="request-form-group">
            <label className="request-label" htmlFor="productName">
              Specific Commodity or Product <span className="request-req-star">*</span>
            </label>
            <input
              id="productName"
              type="text"
              className="request-input"
              placeholder="e.g. 550W Monocrystalline PV Solar Panels"
              value={formData.productName}
              onChange={(e) => updateField("productName", e.target.value)}
              required
            />
          </div>

          <div className="request-form-group">
            <label className="request-label" htmlFor="specifications">
              Technical Specifications &amp; Requirements
            </label>
            <textarea
              id="specifications"
              className="request-textarea"
              rows={3}
              placeholder="Specify technical grade, dimensions, purity, packing type, or manufacturer preferences..."
              value={formData.specifications}
              onChange={(e) => updateField("specifications", e.target.value)}
            />
          </div>

          <div className="request-form-group">
            <label className="request-label">
              Target Sourcing Quantity &amp; Unit <span className="request-req-star">*</span>
            </label>
            <div className="request-two-col">
              <input
                type="number"
                min="1"
                className="request-input"
                placeholder="Quantity (e.g. 500)"
                value={formData.quantity}
                onChange={(e) => updateField("quantity", e.target.value)}
                required
              />
              <select
                className="request-select"
                value={formData.unit}
                onChange={(e) => updateField("unit", e.target.value)}
              >
                {UNIT_OPTIONS.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="request-form-group">
            <label className="request-label" htmlFor="location">
              Delivery Location or Port <span className="request-req-star">*</span>
            </label>
            <div className="request-input-with-icon">
              <PinIcon style={{ width: 15, height: 15, color: "#64748B" }} />
              <input
                id="location"
                type="text"
                className="request-input-inner"
                placeholder="City, State or Pincode (e.g. Mumbai, 400001)"
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="request-form-group">
            <label className="request-label">
              Expected Delivery Urgency
            </label>
            <div className="request-pill-options">
              {["Urgent (Within 7 Days)", "Standard (15 - 30 Days)", "Flexible / Long-term"].map((opt) => {
                const isSelected = formData.urgency === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    className={`request-urgency-pill${isSelected ? " active" : ""}`}
                    onClick={() => updateField("urgency", opt)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="request-form-group">
            <label className="request-label">
              Required Certifications (Optional)
            </label>
            <div className="request-pill-options">
              {CERTIFICATION_OPTIONS.map((cert) => {
                const isChecked = formData.certifications.includes(cert);
                return (
                  <button
                    key={cert}
                    type="button"
                    className={`request-cert-chip${isChecked ? " active" : ""}`}
                    onClick={() => toggleCertification(cert)}
                  >
                    {isChecked && <CheckIcon style={{ width: 12, height: 12, strokeWidth: 3 }} />}
                    <span>{cert}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="request-actions">
            <button
              type="submit"
              className="request-submit-btn"
              disabled={!isFormValid}
            >
              Submit Custom Request
            </button>
            <button
              type="button"
              className="request-cancel-btn"
              onClick={() => navigate("/buyer/select-category")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="request-modal-overlay">
          <div className="request-modal-card">
            <div className="request-modal-success-circle">
              <CheckIcon style={{ width: 24, height: 24, stroke: "#FFFFFF", strokeWidth: 3 }} />
            </div>

            <h3 className="request-modal-title">Request Submitted!</h3>
            <p className="request-modal-desc">
              Your sourcing request for <strong>{formData.productName}</strong> under the <strong>{formData.sectorName}</strong> sector has been registered.
            </p>

            <div className="request-modal-id-box">
              <span className="request-modal-id-label">Reference Tracking ID</span>
              <span className="request-modal-id-val">{referenceId}</span>
            </div>

            <p className="request-modal-subtext">
              Our BIXOO category specialists are verifying qualified suppliers to invite competitive quotes for your requirement.
            </p>

            <div className="request-modal-actions">
              <button
                type="button"
                className="request-modal-primary-btn"
                onClick={() => navigate("/buyer/requirements")}
              >
                View in Requirements
              </button>
              <button
                type="button"
                className="request-modal-secondary-btn"
                onClick={() => navigate("/buyer/select-category")}
              >
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestCategory;
