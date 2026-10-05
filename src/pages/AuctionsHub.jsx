import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackArrowIcon, CheckIcon } from "../components/Icons.jsx";
import { auctions as initialAuctions } from "../data/dashboardData.js";

function AuctionsHub() {
  const navigate = useNavigate();
  const location = useLocation();
  const [auctionList, setAuctionList] = useState(initialAuctions);
  const [activeTab, setActiveTab] = useState("all");

  const initialTargetAuction = location.state?.selectedAuctionId
    ? initialAuctions.find((a) => a.id === location.state.selectedAuctionId)
    : null;
  const shouldAutoBid = Boolean(initialTargetAuction && location.state?.autoBid);

  const [selectedAuction, setSelectedAuction] = useState(() => (shouldAutoBid ? initialTargetAuction : null));
  const [bidAmount, setBidAmount] = useState(() => {
    if (shouldAutoBid && initialTargetAuction) {
      const num = parseInt(initialTargetAuction.currentBid.replace(/,/g, ""), 10) || 50000;
      return String(num + 1000);
    }
    return "";
  });
  const [bidSuccess, setBidSuccess] = useState(false);

  const filteredAuctions = auctionList.filter((auc) => {
    if (activeTab === "all") return true;
    if (activeTab === "live") return auc.live;
    if (activeTab === "closing") return auc.endsIn.includes("m") || auc.endsIn.includes("1h");
    return true;
  });

  const handleOpenBid = (auction) => {
    setSelectedAuction(auction);
    const num = parseInt(auction.currentBid.replace(/,/g, ""), 10) || 50000;
    setBidAmount(String(num + 1000));
    setBidSuccess(false);
  };

  const handlePlaceBid = (e) => {
    e.preventDefault();
    if (!bidAmount || !selectedAuction) return;

    setAuctionList((prev) =>
      prev.map((auc) =>
        auc.id === selectedAuction.id
          ? { ...auc, currentBid: Number(bidAmount).toLocaleString("en-IN") }
          : auc
      )
    );
    setBidSuccess(true);
    setTimeout(() => {
      setSelectedAuction(null);
      setBidSuccess(false);
    }, 1500);
  };

  return (
    <div className="auctions-page-shell">
      <div className="auctions-topbar">
        <button
          type="button"
          className="auctions-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <BackArrowIcon style={{ width: 18, height: 18, stroke: "#1E293B" }} />
        </button>
        <div className="auctions-title-wrap">
          <h1 className="auctions-title">Today's Auctions</h1>
          <span className="auctions-live-indicator">
            <span className="auctions-pulse-dot" /> LIVE DEALS
          </span>
        </div>
      </div>

      <div className="auctions-tabs-row">
        {[
          { id: "all", label: "All Auctions" },
          { id: "live", label: "Live Bidding" },
          { id: "closing", label: "Closing Soon" }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`auctions-tab-pill${activeTab === tab.id ? " active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="auctions-grid">
        {filteredAuctions.map((auc) => (
          <div key={auc.id} className="auction-card-full">
            <div className="auction-card-img-wrap">
              <img src={auc.image} alt={auc.title} className="auction-card-img" />
              {auc.live && (
                <span className="live-badge">
                  <span className="live-dot" />
                  LIVE
                </span>
              )}
            </div>
            <div className="auction-card-content">
              <h3 className="auction-card-title">{auc.title}</h3>
              <div className="auction-bid-meta-row">
                <div className="auction-bid-col">
                  <span className="auction-meta-label">CURRENT HIGHEST BID</span>
                  <span className="auction-meta-val">₹{auc.currentBid}</span>
                </div>
                <div className="auction-bid-col right">
                  <span className="auction-meta-label">CLOSES IN</span>
                  <span className="auction-meta-timer">{auc.endsIn}</span>
                </div>
              </div>
              <button
                type="button"
                className="auction-submit-bid-btn"
                onClick={() => handleOpenBid(auc)}
              >
                Bid Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedAuction && (
        <div className="bid-modal-backdrop" onClick={() => setSelectedAuction(null)}>
          <div className="bid-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="bid-modal-header">
              <h3 className="bid-modal-title">Place Your Bid</h3>
              <button
                type="button"
                className="bid-modal-close"
                onClick={() => setSelectedAuction(null)}
              >
                ×
              </button>
            </div>

            {bidSuccess ? (
              <div className="bid-success-box">
                <div className="bid-success-check">
                  <CheckIcon style={{ width: 24, height: 24, stroke: "#FFFFFF", strokeWidth: 3 }} />
                </div>
                <h4 className="bid-success-title">Bid Placed Successfully!</h4>
                <p className="bid-success-desc">
                  Your bid of ₹{Number(bidAmount).toLocaleString("en-IN")} is now the highest bid.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePlaceBid}>
                <div className="bid-product-summary">
                  <span className="bid-summary-name">{selectedAuction.title}</span>
                  <span className="bid-summary-curr">
                    Current Bid: ₹{selectedAuction.currentBid}
                  </span>
                </div>

                <div className="bid-input-group">
                  <label htmlFor="bidInput" className="bid-input-label">
                    Your Bid Amount (₹)
                  </label>
                  <input
                    id="bidInput"
                    type="number"
                    className="bid-number-input"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    required
                  />
                </div>

                <div className="bid-quick-increments">
                  {[1000, 2500, 5000].map((inc) => (
                    <button
                      key={inc}
                      type="button"
                      className="bid-increment-chip"
                      onClick={() => {
                        const cur = parseInt(bidAmount, 10) || 0;
                        setBidAmount(String(cur + inc));
                      }}
                    >
                      +₹{inc.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                <button type="submit" className="bid-confirm-btn">
                  Confirm &amp; Place Bid
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AuctionsHub;
