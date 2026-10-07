import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackArrowIcon, BellIcon, CheckIcon } from "../components/Icons.jsx";
import { figmaSupplierResponses, buyerOrders } from "../data/requirementData.js";

function SupplierResponses() {
  const navigate = useNavigate();
  const location = useLocation();

  const passedReq = location.state?.req;
  const reqId = passedReq?.id || "REQ-92841";
  const reqTitle = passedReq?.title || "Premium Basmati Rice";
  const reqQty = passedReq?.quantity || "500 Quintals";

  const [responses] = useState(figmaSupplierResponses);
  const [selectedOfferModal, setSelectedOfferModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleReviewOffer = (offer) => {
    setSelectedOfferModal(offer);
  };

  const handleNegotiate = (offer) => {
    navigate("/buyer/chat", {
      state: {
        supplier: offer.supplierName,
        product: `${reqTitle} (${offer.supplyType})`
      }
    });
  };

  const handleAcceptAndOrder = (offer) => {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      reqId: reqId,
      title: reqTitle,
      supplier: offer.supplierName,
      quantity: offer.offeredQty,
      totalAmount: offer.totalPrice,
      orderDate: "Today",
      status: "Confirmed",
      statusColor: "#0D9488",
      vehicleType: "20ft Commercial Truck",
      vehicleNumber: "Pending dispatch",
      driverName: "Pending assignment",
      invoiceId: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`
    };

    try {
      const storedOrders = localStorage.getItem("bixoo_user_orders");
      const currentOrders = storedOrders ? JSON.parse(storedOrders) : buyerOrders;
      localStorage.setItem("bixoo_user_orders", JSON.stringify([newOrder, ...currentOrders]));
    } catch (e) {}

    setSelectedOfferModal(null);
    setToastMessage(`Order ${newOrder.id} successfully created with ${offer.supplierName}!`);
    setTimeout(() => {
      navigate("/buyer/requirements");
    }, 1800);
  };

  return (
    <div className="resp-page-shell">
      <div className="resp-topbar">
        <button
          type="button"
          className="resp-back-btn"
          onClick={() => navigate("/buyer/requirements")}
          aria-label="Back to Requirements"
        >
          <BackArrowIcon style={{ width: 18, height: 18, stroke: "#1E293B", strokeWidth: 2.2 }} />
        </button>
        <span className="resp-brand-logo">bixoo</span>
        <button
          type="button"
          className="resp-bell-btn"
          onClick={() => navigate("/buyer/notifications")}
          aria-label="Notifications"
        >
          <BellIcon style={{ width: 18, height: 18, color: "#1E293B" }} />
        </button>
      </div>

      {toastMessage && (
        <div className="resp-toast-bar">
          <CheckIcon style={{ width: 16, height: 16, stroke: "#16A34A", strokeWidth: 3 }} />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="resp-header-block">
        <div className="resp-header-meta-row">
          <span className="resp-req-badge">#{reqId}</span>
          <span className="resp-target-qty">Target: {reqQty}</span>
        </div>
        <h1 className="resp-heading">Matching Sellers &amp; Responses</h1>
        <p className="resp-subtext">
          Showing 3 verified supplier offers received for <strong>{reqTitle}</strong>.
        </p>
      </div>

      <div className="resp-cards-container">
        {responses.map((item) => {
          const isFull = item.supplyType === "FULL SUPPLY";
          return (
            <div key={item.id} className="resp-card">
              <div className="resp-card-top">
                <div className="resp-supplier-info">
                  <div className="resp-avatar-circle">
                    <span>{item.initials}</span>
                  </div>
                  <div>
                    <div className="resp-name-row">
                      <h3 className="resp-supplier-name">{item.supplierName}</h3>
                      {item.verified && (
                        <span className="resp-verified-pill">
                          <CheckIcon style={{ width: 10, height: 8, stroke: "#0D9488", strokeWidth: 3 }} />
                          Verified Seller
                        </span>
                      )}
                      {!item.verified && (
                        <span className="resp-unverified-pill">Unverified</span>
                      )}
                    </div>
                    <span className="resp-location-text">
                      ★ {item.rating} • {item.location}
                    </span>
                  </div>
                </div>

                <span
                  className="resp-supply-tag"
                  style={{
                    backgroundColor: `${item.supplyBadgeColor}15`,
                    color: item.supplyBadgeColor
                  }}
                >
                  {item.supplyType}
                </span>
              </div>

              <div className="resp-metrics-grid">
                <div className="resp-metric-cell">
                  <span className="resp-cell-label">OFFERED QUANTITY</span>
                  <strong className="resp-cell-val">{item.offeredQty}</strong>
                </div>
                <div className="resp-metric-cell">
                  <span className="resp-cell-label">OFFERED PRICE</span>
                  <strong className="resp-cell-val">{item.offeredPrice}</strong>
                </div>
                <div className="resp-metric-cell">
                  <span className="resp-cell-label">TOTAL VALUE</span>
                  <strong className="resp-cell-val resp-total-val">{item.totalPrice}</strong>
                </div>
                <div className="resp-metric-cell">
                  <span className="resp-cell-label">DELIVERY</span>
                  <strong className="resp-cell-val">{item.deliveryTimeline}</strong>
                </div>
              </div>

              <div className="resp-card-actions">
                {item.actionType === "review" ? (
                  <button
                    type="button"
                    className="resp-action-btn resp-btn-review"
                    onClick={() => handleReviewOffer(item)}
                  >
                    <span>Review Offer</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="resp-action-btn resp-btn-negotiate"
                    onClick={() => handleNegotiate(item)}
                  >
                    <span>Negotiate</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedOfferModal && (
        <div className="resp-modal-overlay" onClick={() => setSelectedOfferModal(null)}>
          <div className="resp-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="resp-modal-header">
              <div>
                <span className="resp-modal-sub">OFFICIAL SUPPLIER QUOTATION</span>
                <h2 className="resp-modal-title">{selectedOfferModal.supplierName}</h2>
              </div>
              <button
                type="button"
                className="resp-modal-close"
                onClick={() => setSelectedOfferModal(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="resp-breakdown-card">
              <div className="resp-breakdown-row">
                <span>Product Item</span>
                <strong>{reqTitle}</strong>
              </div>
              <div className="resp-breakdown-row">
                <span>Offered Volume</span>
                <strong>{selectedOfferModal.offeredQty}</strong>
              </div>
              <div className="resp-breakdown-row">
                <span>Unit Rate</span>
                <strong>{selectedOfferModal.offeredPrice}</strong>
              </div>
              <div className="resp-breakdown-row">
                <span>Dispatch Corridor</span>
                <strong>{selectedOfferModal.location}</strong>
              </div>
              <div className="resp-breakdown-row">
                <span>Estimated Transit</span>
                <strong>{selectedOfferModal.deliveryTimeline}</strong>
              </div>
              <div className="resp-breakdown-divider" />
              <div className="resp-breakdown-row resp-breakdown-total">
                <span>Total Quotation Amount</span>
                <strong className="resp-total-highlight">{selectedOfferModal.totalPrice}</strong>
              </div>
            </div>

            <div className="resp-modal-actions-row">
              <button
                type="button"
                className="resp-sheet-accept-btn"
                onClick={() => handleAcceptAndOrder(selectedOfferModal)}
              >
                Accept &amp; Confirm Order
              </button>
              <button
                type="button"
                className="resp-sheet-chat-btn"
                onClick={() => handleNegotiate(selectedOfferModal)}
              >
                Negotiate Deal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SupplierResponses;
