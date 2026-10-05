import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterSliderIcon, CheckIcon } from "../components/Icons.jsx";
import { postedRequirements, buyerSupplierOffers, buyerOrders } from "../data/requirementData.js";

function RequirementsHub() {
  const navigate = useNavigate();
  const [mainView, setMainView] = useState("requirements");
  const [activeTab, setActiveTab] = useState("all");
  const [ordersList, setOrdersList] = useState(buyerOrders);
  const [activeOrderTab, setActiveOrderTab] = useState("all");
  const [selectedReqForOffers, setSelectedReqForOffers] = useState(null);
  const [reachFilter, setReachFilter] = useState("all");
  const [transportModalOrder, setTransportModalOrder] = useState(null);
  const [transportForm, setTransportForm] = useState({
    pickup: "",
    delivery: "",
    weight: "",
    vehicleType: "20ft Commercial Truck",
    pickupDate: "2026-10-02"
  });
  const [transportSuccess, setTransportSuccess] = useState(false);
  const [invoiceModalOrder, setInvoiceModalOrder] = useState(null);
  const [orderNotice, setOrderNotice] = useState(null);

  const tabs = [
    { id: "all", label: "All" },
    { id: "accepted", label: "Accepted" },
    { id: "partial", label: "Partial" },
    { id: "completed", label: "Completed" }
  ];

  const orderTabs = [
    { id: "all", label: "All Orders" },
    { id: "In Transit", label: "In Transit" },
    { id: "Confirmed", label: "Confirmed" },
    { id: "Delivered", label: "Delivered" }
  ];

  const filteredRequirements = postedRequirements.filter((req) => {
    if (activeTab === "all") return true;
    if (activeTab === "accepted") return req.acceptedCount > 0;
    if (activeTab === "partial") return req.partialCount > 0;
    if (activeTab === "completed") return req.status === "completed";
    return true;
  });

  const filteredOrders = ordersList.filter((ord) => {
    if (activeOrderTab === "all") return true;
    return ord.status === activeOrderTab;
  });

  const currentOffers = selectedReqForOffers
    ? (buyerSupplierOffers[selectedReqForOffers.id] || []).filter((offer) => {
        if (reachFilter === "all") return true;
        return offer.reachZone === "Local Zone";
      })
    : [];

  const handleOpenOffers = (req) => {
    setSelectedReqForOffers(req);
    setReachFilter("all");
  };

  const handleAcceptOffer = (offer, req) => {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      reqId: req.id,
      title: req.title,
      supplier: offer.supplierName,
      quantity: offer.quantity,
      totalAmount: offer.totalPrice,
      orderDate: "Today",
      status: "Confirmed",
      statusColor: "#0D9488",
      vehicleType: "To be scheduled",
      vehicleNumber: "Pending dispatch",
      driverName: "Pending assignment",
      invoiceId: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`
    };

    setOrdersList([newOrder, ...ordersList]);
    setSelectedReqForOffers(null);
    setMainView("orders");
    setOrderNotice(`Order ${newOrder.id} successfully placed with ${offer.supplierName}!`);
    setTimeout(() => setOrderNotice(null), 4000);
  };

  const handleNegotiate = (offer, req) => {
    setSelectedReqForOffers(null);
    navigate("/buyer/chat", {
      state: {
        supplier: offer.supplierName,
        product: `${req.title} (${offer.supplyType})`
      }
    });
  };

  const handleOpenTransportModal = (ord) => {
    setTransportModalOrder(ord);
    setTransportForm({
      pickup: `${ord.supplier} Hub, Tamil Nadu`,
      delivery: "Buyer Facility / Warehouse",
      weight: ord.quantity,
      vehicleType: "20ft Commercial Truck",
      pickupDate: "2026-10-02"
    });
    setTransportSuccess(false);
  };

  const handleSubmitTransport = (e) => {
    e.preventDefault();
    setTransportSuccess(true);
    setTimeout(() => {
      setTransportModalOrder(null);
      setTransportSuccess(false);
      setOrderNotice(`Transport request for ${transportModalOrder.id} dispatched to 140+ verified transporters!`);
      setTimeout(() => setOrderNotice(null), 4500);
    }, 1500);
  };

  const handleExportExcel = () => {
    const headers = "Order ID,Requirement Ref,Product,Supplier,Quantity,Total Amount,Order Date,Status,Vehicle,Driver\n";
    const rows = ordersList
      .map((ord) => `"${ord.id}","${ord.reqId}","${ord.title}","${ord.supplier}","${ord.quantity}","${ord.totalAmount}","${ord.orderDate}","${ord.status}","${ord.vehicleType}","${ord.driverName}"`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `BIXOO_Orders_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPdf = (inv) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>BIXOO_Tax_Invoice_${inv.invoiceId}</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #0F172A; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #2AAFA9; padding-bottom: 16px; margin-bottom: 24px; }
            .logo { font-size: 28px; font-weight: 800; color: #007D75; }
            .invoice-title { font-size: 18px; font-weight: 700; text-align: right; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; background: #F8FAFC; padding: 16px; border-radius: 8px; }
            .meta-title { font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; margin-bottom: 6px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .table th, .table td { padding: 12px; border-bottom: 1px solid #E2E8F0; text-align: left; }
            .table th { background: #F1F5F9; font-size: 12px; text-transform: uppercase; color: #475569; }
            .total-row { font-size: 16px; font-weight: 700; color: #007D75; }
            .footer { margin-top: 40px; font-size: 11px; color: #94A3B8; text-align: center; border-top: 1px solid #E2E8F0; padding-top: 16px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">bixoo</div>
            <div class="invoice-title">TAX INVOICE<br/><span style="font-size:13px;font-weight:500;color:#64748B">#${inv.invoiceId}</span></div>
          </div>
          <div class="meta-grid">
            <div>
              <div class="meta-title">Buyer (Consignee)</div>
              <strong>Verified BIXOO Buyer</strong><br/>
              GSTIN: 33AAACB1234F1Z8<br/>
              Tamil Nadu, India
            </div>
            <div>
              <div class="meta-title">Seller (Supplier)</div>
              <strong>${inv.supplier}</strong><br/>
              GSTIN: 33ABCDE9876K1Z2<br/>
              Tamil Nadu, India
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Order Ref</th>
                <th>Quantity</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>${inv.title}</strong><br/><small style="color:#64748B">HSN / SAC: 7306</small></td>
                <td>${inv.id}</td>
                <td>${inv.quantity}</td>
                <td><strong>${inv.totalAmount}</strong></td>
              </tr>
            </tbody>
          </table>
          <div style="display:flex;justify-content:flex-end;">
            <div style="width:260px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span>Taxable Value:</span><span>${inv.totalAmount}</span></div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span>GST (18%):</span><span>Included</span></div>
              <div style="display:flex;justify-content:space-between;border-top:1px dashed #CBD5E1;padding-top:8px;" class="total-row"><span>Grand Total:</span><span>${inv.totalAmount}</span></div>
            </div>
          </div>
          <div class="footer">This is a system generated BIXOO B2B Tax Invoice. Verified digital transaction.</div>
          <script>
            window.onload = function() { window.print(); };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="reqhub-shell">
      <div className="reqhub-body">
        <div className="reqhub-view-switcher">
          <button
            type="button"
            className={mainView === "requirements" ? "reqhub-view-btn reqhub-view-btn-active" : "reqhub-view-btn"}
            onClick={() => setMainView("requirements")}
          >
            My Requirements ({postedRequirements.length})
          </button>
          <button
            type="button"
            className={mainView === "orders" ? "reqhub-view-btn reqhub-view-btn-active" : "reqhub-view-btn"}
            onClick={() => setMainView("orders")}
          >
            My Orders ({ordersList.length})
          </button>
        </div>

        {orderNotice && (
          <div className="reqhub-order-notice-toast">
            <CheckIcon style={{ width: 16, height: 16, stroke: "#16A34A", strokeWidth: 2.5 }} />
            <span>{orderNotice}</span>
          </div>
        )}

        {mainView === "requirements" && (
          <>
            <div className="reqhub-create-card">
              <div className="reqhub-create-bg-pattern" />
              <div className="reqhub-create-text">
                <h2>Create New Requirement</h2>
                <p>Post your business needs to get matching offers.</p>
              </div>
              <button
                type="button"
                className="reqhub-create-plus-btn"
                onClick={() => navigate("/buyer/post-requirement", { state: { step: 1 } })}
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
                    onClick={() => req.quotesCount > 0 && handleOpenOffers(req)}
                    style={{ cursor: req.quotesCount > 0 ? "pointer" : "default" }}
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
                          <span className="reqhub-pill-compare-hint">Click to Compare Offers →</span>
                        </div>
                      )}
                    </div>

                    <div className="reqhub-card-footer">
                      <div className="reqhub-footer-col">
                        <span className="reqhub-footer-label">QUANTITY</span>
                        <span className="reqhub-footer-val">{req.quantity}</span>
                      </div>
                      <div className="reqhub-footer-divider" />
                      <div className="reqhub-footer-col reqhub-footer-col-right">
                        <span className="reqhub-footer-label">POSTED</span>
                        <span className="reqhub-footer-val">{req.posted}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {mainView === "orders" && (
          <div className="reqhub-orders-container">
            <div className="reqhub-section-header">
              <div>
                <h2>Confirmed BIXOO Orders</h2>
                <span className="reqhub-orders-subtitle">{ordersList.length} Active & Fulfilled</span>
              </div>
              <button
                type="button"
                className="reqhub-export-excel-btn"
                onClick={handleExportExcel}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Export Excel (CSV)
              </button>
            </div>

            <div className="reqhub-tabs-row">
              {orderTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={activeOrderTab === tab.id ? "reqhub-tab-chip reqhub-tab-chip-active" : "reqhub-tab-chip"}
                  onClick={() => setActiveOrderTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="reqhub-orders-list">
              {filteredOrders.map((ord) => (
                <div key={ord.id} className="reqhub-order-card">
                  <div className="reqhub-order-card-header">
                    <div>
                      <div className="reqhub-order-id-row">
                        <span className="reqhub-order-id">Order #{ord.id}</span>
                        <span className="reqhub-order-reqid">Ref: #{ord.reqId}</span>
                      </div>
                      <h3 className="reqhub-order-title">{ord.title}</h3>
                    </div>
                    <span
                      className="reqhub-order-status-badge"
                      style={{ backgroundColor: `${ord.statusColor}18`, color: ord.statusColor }}
                    >
                      {ord.status}
                    </span>
                  </div>

                  <div className="reqhub-order-meta-grid">
                    <div className="reqhub-order-meta-item">
                      <span className="reqhub-order-meta-label">SUPPLIER</span>
                      <span className="reqhub-order-meta-val">{ord.supplier}</span>
                    </div>
                    <div className="reqhub-order-meta-item">
                      <span className="reqhub-order-meta-label">QUANTITY</span>
                      <span className="reqhub-order-meta-val">{ord.quantity}</span>
                    </div>
                    <div className="reqhub-order-meta-item">
                      <span className="reqhub-order-meta-label">TOTAL AMOUNT</span>
                      <span className="reqhub-order-meta-val reqhub-order-amount">{ord.totalAmount}</span>
                    </div>
                    <div className="reqhub-order-meta-item">
                      <span className="reqhub-order-meta-label">DATE</span>
                      <span className="reqhub-order-meta-val">{ord.orderDate}</span>
                    </div>
                  </div>

                  <div className="reqhub-order-logistics-box">
                    <div className="reqhub-order-logistics-header">
                      <span className="reqhub-order-logistics-label">LOGISTICS & DISPATCH</span>
                      <span className="reqhub-order-logistics-driver">Driver: {ord.driverName}</span>
                    </div>
                    <div className="reqhub-order-logistics-vehicle">
                      <span>Vehicle: {ord.vehicleType}</span>
                      <span className="reqhub-order-vehicle-no">{ord.vehicleNumber}</span>
                    </div>
                  </div>

                  <div className="reqhub-order-actions-row">
                    <button
                      type="button"
                      className="reqhub-order-action-btn reqhub-order-invoice-btn"
                      onClick={() => setInvoiceModalOrder(ord)}
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                      View Invoice
                    </button>
                    <button
                      type="button"
                      className="reqhub-order-action-btn reqhub-order-transport-btn"
                      onClick={() => handleOpenTransportModal(ord)}
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                      Request Transport
                    </button>
                    <button
                      type="button"
                      className="reqhub-order-action-btn reqhub-order-reorder-btn"
                      onClick={() => navigate("/buyer/post-requirement", { state: { step: 1 } })}
                    >
                      Reorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedReqForOffers && (
        <div className="reqhub-modal-overlay" onClick={() => setSelectedReqForOffers(null)}>
          <div className="reqhub-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="reqhub-modal-header">
              <div>
                <span className="reqhub-modal-sub">COMPARE SUPPLIER OFFERS</span>
                <h3 className="reqhub-modal-title">{selectedReqForOffers.title}</h3>
                <span className="reqhub-modal-qty">Target Quantity: {selectedReqForOffers.quantity}</span>
              </div>
              <button
                type="button"
                className="reqhub-modal-close-btn"
                onClick={() => setSelectedReqForOffers(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="reqhub-reach-selector-bar">
              <span className="reqhub-reach-label">Reach:</span>
              <button
                type="button"
                className={reachFilter === "all" ? "reqhub-reach-btn reqhub-reach-btn-active" : "reqhub-reach-btn"}
                onClick={() => setReachFilter("all")}
              >
                Tamil Nadu Wide
              </button>
              <button
                type="button"
                className={reachFilter === "local" ? "reqhub-reach-btn reqhub-reach-btn-active" : "reqhub-reach-btn"}
                onClick={() => setReachFilter("local")}
              >
                Local Zone Only
              </button>
            </div>

            <div className="reqhub-offers-list">
              {currentOffers.map((offer) => (
                <div key={offer.id} className="reqhub-offer-card">
                  <div className="reqhub-offer-top">
                    <div>
                      <div className="reqhub-offer-supplier-row">
                        <span className="reqhub-offer-supplier-name">{offer.supplierName}</span>
                        <span className="reqhub-offer-rating">★ {offer.rating}</span>
                      </div>
                      <span className="reqhub-offer-location">{offer.location} • {offer.reachZone}</span>
                    </div>
                    <span
                      className={
                        offer.supplyType === "Full Supply"
                          ? "reqhub-offer-type-badge reqhub-badge-full"
                          : "reqhub-offer-type-badge reqhub-badge-partial"
                      }
                    >
                      {offer.supplyType}
                    </span>
                  </div>

                  <div className="reqhub-offer-details-grid">
                    <div>
                      <span className="reqhub-offer-label">OFFERED QTY</span>
                      <span className="reqhub-offer-val">{offer.quantity}</span>
                    </div>
                    <div>
                      <span className="reqhub-offer-label">RATE</span>
                      <span className="reqhub-offer-val">{offer.pricePerUnit}</span>
                    </div>
                    <div>
                      <span className="reqhub-offer-label">TOTAL PRICE</span>
                      <span className="reqhub-offer-val reqhub-offer-price">{offer.totalPrice}</span>
                    </div>
                    <div>
                      <span className="reqhub-offer-label">DELIVERY</span>
                      <span className="reqhub-offer-val">{offer.deliveryTimeline}</span>
                    </div>
                  </div>

                  <div className="reqhub-offer-actions-row">
                    <button
                      type="button"
                      className="reqhub-offer-btn-accept"
                      onClick={() => handleAcceptOffer(offer, selectedReqForOffers)}
                    >
                      Accept & Confirm Order
                    </button>
                    <button
                      type="button"
                      className="reqhub-offer-btn-negotiate"
                      onClick={() => handleNegotiate(offer, selectedReqForOffers)}
                    >
                      Negotiate Deal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {transportModalOrder && (
        <div className="reqhub-modal-overlay" onClick={() => setTransportModalOrder(null)}>
          <div className="reqhub-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="reqhub-modal-header">
              <div>
                <span className="reqhub-modal-sub">LOGISTICS & FREIGHT REQUEST</span>
                <h3 className="reqhub-modal-title">Request Commercial Transport</h3>
                <span className="reqhub-modal-qty">For Order #{transportModalOrder.id}</span>
              </div>
              <button
                type="button"
                className="reqhub-modal-close-btn"
                onClick={() => setTransportModalOrder(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {transportSuccess ? (
              <div className="reqhub-transport-success-box">
                <CheckIcon style={{ width: 28, height: 28, stroke: "#16A34A", strokeWidth: 3 }} />
                <h4>Transport Load Request Dispatched!</h4>
                <p>140+ verified transporters in your corridor have been notified. Live bids will arrive shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitTransport} className="reqhub-transport-form">
                <div className="reqhub-form-field">
                  <label>Pickup Location</label>
                  <input
                    type="text"
                    value={transportForm.pickup}
                    onChange={(e) => setTransportForm({ ...transportForm, pickup: e.target.value })}
                    required
                  />
                </div>
                <div className="reqhub-form-field">
                  <label>Delivery Destination</label>
                  <input
                    type="text"
                    value={transportForm.delivery}
                    onChange={(e) => setTransportForm({ ...transportForm, delivery: e.target.value })}
                    required
                  />
                </div>
                <div className="reqhub-form-row">
                  <div className="reqhub-form-field">
                    <label>Cargo Weight / Qty</label>
                    <input
                      type="text"
                      value={transportForm.weight}
                      onChange={(e) => setTransportForm({ ...transportForm, weight: e.target.value })}
                      required
                    />
                  </div>
                  <div className="reqhub-form-field">
                    <label>Pickup Date</label>
                    <input
                      type="date"
                      value={transportForm.pickupDate}
                      onChange={(e) => setTransportForm({ ...transportForm, pickupDate: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="reqhub-form-field">
                  <label>Required Vehicle Type</label>
                  <select
                    value={transportForm.vehicleType}
                    onChange={(e) => setTransportForm({ ...transportForm, vehicleType: e.target.value })}
                  >
                    <option value="20ft Commercial Truck">20ft Commercial Truck (Heavy Freight)</option>
                    <option value="Mini Truck (Tata Ace)">Mini Truck (Tata Ace / Last Mile)</option>
                    <option value="Open Lorry Heavy">Open High Deck Lorry</option>
                    <option value="Multi-Axle Container">Multi-Axle Container Truck</option>
                  </select>
                </div>
                <button type="submit" className="reqhub-transport-submit-btn">
                  Dispatch Load to Transporters
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {invoiceModalOrder && (
        <div className="reqhub-modal-overlay" onClick={() => setInvoiceModalOrder(null)}>
          <div className="reqhub-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="reqhub-modal-header">
              <div>
                <span className="reqhub-modal-sub">BIXOO TAX INVOICE PREVIEW</span>
                <h3 className="reqhub-modal-title">Invoice #{invoiceModalOrder.invoiceId}</h3>
                <span className="reqhub-modal-qty">Linked Order #{invoiceModalOrder.id}</span>
              </div>
              <button
                type="button"
                className="reqhub-modal-close-btn"
                onClick={() => setInvoiceModalOrder(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="reqhub-invoice-preview-card">
              <div className="reqhub-invoice-meta-grid">
                <div>
                  <span className="reqhub-invoice-label">BUYER (CONSIGNEE)</span>
                  <p className="reqhub-invoice-val">Verified BIXOO Buyer</p>
                  <p className="reqhub-invoice-sub">GSTIN: 33AAACB1234F1Z8</p>
                </div>
                <div>
                  <span className="reqhub-invoice-label">SELLER (SUPPLIER)</span>
                  <p className="reqhub-invoice-val">{invoiceModalOrder.supplier}</p>
                  <p className="reqhub-invoice-sub">GSTIN: 33ABCDE9876K1Z2</p>
                </div>
              </div>

              <div className="reqhub-invoice-divider" />

              <div className="reqhub-invoice-item-row">
                <div>
                  <p className="reqhub-invoice-item-title">{invoiceModalOrder.title}</p>
                  <p className="reqhub-invoice-sub">HSN / SAC: 7306 • Quantity: {invoiceModalOrder.quantity}</p>
                </div>
                <span className="reqhub-invoice-item-total">{invoiceModalOrder.totalAmount}</span>
              </div>

              <div className="reqhub-invoice-divider" />

              <div className="reqhub-invoice-summary-row">
                <span>Taxable Amount</span>
                <span>{invoiceModalOrder.totalAmount}</span>
              </div>
              <div className="reqhub-invoice-summary-row">
                <span>GST (Integrated 18%)</span>
                <span>Included</span>
              </div>
              <div className="reqhub-invoice-summary-row reqhub-invoice-summary-bold">
                <span>Grand Total</span>
                <span>{invoiceModalOrder.totalAmount}</span>
              </div>

              <div className="reqhub-invoice-btn-row">
                <button
                  type="button"
                  className="reqhub-invoice-download-btn"
                  onClick={() => handleDownloadPdf(invoiceModalOrder)}
                >
                  Download Signed PDF Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequirementsHub;
