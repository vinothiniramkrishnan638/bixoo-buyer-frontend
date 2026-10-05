import { useNavigate } from "react-router-dom";

function AuctionsPreview({ auctions }) {
  const navigate = useNavigate();

  return (
    <section className="section auctions-section">
      <div className="section-title">
        <h2>Today's Auctions</h2>
        <span
          className="view-all"
          role="button"
          tabIndex={0}
          onClick={() => navigate("/buyer/auctions")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/buyer/auctions");
          }}
          style={{ cursor: "pointer" }}
        >
          View All
        </span>
      </div>
      <div className="auction-strip">
        {auctions.map((auction) => (
          <div
            key={auction.id}
            className="auction-card"
            onClick={() => navigate("/buyer/auctions", { state: { selectedAuctionId: auction.id } })}
            style={{ cursor: "pointer" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate("/buyer/auctions", { state: { selectedAuctionId: auction.id } });
              }
            }}
          >
            <div className="auction-image-wrap">
              <img src={auction.image} alt={auction.title} />
              {auction.live && (
                <span className="live-badge">
                  <span className="live-dot" />
                  LIVE
                </span>
              )}
            </div>
            <div className="auction-info">
              <h3 className="auction-title">{auction.title}</h3>
              <div className="auction-bid-row">
                <div className="bid-col-left">
                  <span className="bid-label">CURRENT BID</span>
                  <span className="bid-value">₹{auction.currentBid}</span>
                </div>
                <div className="bid-col-right">
                  <span className="bid-label bid-label-right">ENDS IN</span>
                  <span className="bid-timer-val">{auction.endsIn}</span>
                </div>
              </div>
              <button
                type="button"
                className="bid-now-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/buyer/auctions", { state: { selectedAuctionId: auction.id, autoBid: true } });
                }}
              >
                Bid Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AuctionsPreview;