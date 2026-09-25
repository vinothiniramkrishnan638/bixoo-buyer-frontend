import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrowIcon, FilterSliderIcon, CheckIcon, CloseIcon } from "../components/Icons.jsx";
import { postedRequirements } from "../data/requirementData.js";

function RequirementsHub() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedReq, setSelectedReq] = useState(null);

  const tabs = [
    { id: "all", label: "All" },
    { id: "accepted", label: "Accepted" },
    { id: "partial", label: "Partial" },
    { id: "completed", label: "Completed" }
  ];

  const filteredRequirements = postedRequirements.filter((req) => {
    if (activeTab === "all") return true;
    if (activeTab === "accepted") return req.acceptedCount > 0;
    if (activeTab === "partial") return req.partialCount > 0;
    if (activeTab === "completed") return req.status === "completed";
    return true;
  });

  return (
    <div className="reqhub-shell">
      <div className="reqhub-topbar">
        <button
          type="button"
          className="reqhub-back-btn"
          onClick={() => navigate("/buyer/dashboard")}
        >
          <BackArrowIcon />
        </button>
        <span className="reqhub-topbar-title">My Requirements</span>
      </div>

      <div className="reqhub-body">
        <div className="reqhub-create-card">
          <div className="reqhub-create-bg-pattern" />
          <div className="reqhub-create-text">
            <h2>Create New Requirement</h2>
            <p>Post your business needs to get matching offers.</p>
          </div>
          <button
            type="button"
            className="reqhub-create-plus-btn"
            onClick={() => navigate("/buyer/post-requirement")}
            aria-label="Create New Requirement"
          >
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        <div className="reqhub-header-filter-group">
          <div className="reqhub-section-header">
            <h2>My Requirements</h2>
            <button type="button" className="reqhub-filter-btn" aria-label="Filter requirements">
              <FilterSliderIcon />
            </button>
          </div>

          <div className="reqhub-tabs-row">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={activeTab === tab.id ? "reqhub-tab-chip reqhub-tab-chip-active" : "reqhub-tab-chip"}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="reqhub-cards-list">
          {filteredRequirements.map((req) => {
            const cardAccentClass = req.status === "quotes" ? "reqhub-card-lime" : "reqhub-card-teal";

            return (
              <div
                key={req.id}
                className={`reqhub-card ${cardAccentClass}`}
                onClick={() => setSelectedReq(req)}
                style={{ cursor: "pointer" }}
              >
                <div className="reqhub-card-left-bar" />
                <div className="reqhub-card-body">
                  <div className="reqhub-card-header">
                    <div>
                      <h3 className="reqhub-card-title">{req.title}</h3>
                      <span className="reqhub-card-id">Req ID: #{req.id}</span>
                    </div>
                    <div className="reqhub-card-thumb-wrap">
                      <img src={req.image} alt={req.title} className="reqhub-card-thumb" />
                    </div>
                  </div>

                  <div className="reqhub-progress-wrap">
                    <div className="reqhub-timeline-bar-bg" />
                    <div
                      className={
                        req.status === "quotes"
                          ? "reqhub-timeline-bar-fill reqhub-timeline-bar-quotes"
                          : "reqhub-timeline-bar-fill reqhub-timeline-bar-matching"
                      }
                    />

                    <div className="reqhub-progress-nodes">
                      <div className="reqhub-node reqhub-node-done">
                        <CheckIcon style={{ width: 10, height: 8, stroke: "#FFFFFF", strokeWidth: 3 }} />
                      </div>

                      {req.status === "quotes" ? (
                        <div className="reqhub-node reqhub-node-done">
                          <CheckIcon style={{ width: 10, height: 8, stroke: "#FFFFFF", strokeWidth: 3 }} />
                        </div>
                      ) : (
                        <div className="reqhub-node reqhub-node-active-ring">
                          <div className="reqhub-node-inner-overlay" />
                          <div className="reqhub-node-inner-dot" />
                          <span className="reqhub-node-label">Matching...</span>
                        </div>
                      )}

                      {req.status === "quotes" ? (
                        <div className="reqhub-node reqhub-node-quotes">
                          <div className="reqhub-quotes-badge">
                            <span>{req.quotesCount}</span>
                          </div>
                          <span className="reqhub-quotes-chip">Quotes</span>
                        </div>
                      ) : (
                        <div className="reqhub-node reqhub-node-inactive">
                          <div className="reqhub-node-inactive-dot" />
                        </div>
                      )}
                    </div>
                  </div>

                  {req.quotesCount > 0 && (
                    <div className="reqhub-quotes-pill-row">
                      <span className="reqhub-pill-accepted">{req.acceptedCount} Accepted</span>
                      <span className="reqhub-pill-partial">{req.partialCount} Partial</span>
                    </div>
                  )}
                </div>

                <div className="reqhub-card-footer">
                  <div className="reqhub-footer-col">
                    <span className="reqhub-footer-label">QUANTITY</span>
                    <span className="reqhub-footer-val">{req.quantity}</span>
                  </div>
                  <div className="reqhub-footer-divider" />
                  <div className="reqhub-footer-col" style={{ alignItems: "flex-end" }}>
                    <span className="reqhub-footer-label" style={{ textAlign: "right" }}>POSTED</span>
                    <span className="reqhub-footer-val" style={{ fontWeight: 500, textAlign: "right" }}>{req.posted}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedReq && (
        <div className="reqhub-modal-backdrop" onClick={() => setSelectedReq(null)}>
          <div className="reqhub-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="reqhub-modal-drag-handle" />
            <div className="reqhub-modal-header">
              <div>
                <h2 className="reqhub-modal-title">{selectedReq.title}</h2>
                <span className="reqhub-card-id">Req ID: #{selectedReq.id}</span>
              </div>
              <button
                type="button"
                className="reqhub-modal-close-btn"
                onClick={() => setSelectedReq(null)}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="reqhub-modal-body">
              <div className="conf-row">
                <span className="conf-row-label">Quantity</span>
                <span className="conf-row-value">{selectedReq.quantity}</span>
              </div>
              <div className="conf-row">
                <span className="conf-row-label">Posted Date</span>
                <span className="conf-row-value">{selectedReq.posted}</span>
              </div>
              <div className="conf-row">
                <span className="conf-row-label">Status</span>
                <span className="conf-row-value">{selectedReq.statusLabel}</span>
              </div>
              {selectedReq.quotesCount > 0 && (
                <div className="conf-row" style={{ borderBottom: "none" }}>
                  <span className="conf-row-label">Responses</span>
                  <span className="conf-row-value">{selectedReq.acceptedCount} Accepted, {selectedReq.partialCount} Partial</span>
                </div>
              )}
            </div>

            <button
              type="button"
              className="reqhub-create-modal-btn"
              onClick={() => {
                setSelectedReq(null);
                navigate("/buyer/post-requirement");
              }}
            >
              Post Similar Requirement
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequirementsHub;
