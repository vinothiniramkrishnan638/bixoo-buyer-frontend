function AuctionsPreview({ auctions }) {
  return (
    <section className="section auctions-section">
      <div className="section-title">
        <h2>Today's Auctions</h2>
        <span className="view-all">View All</span>
      </div>
      <div className="auction-strip">
        {auctions.map((auction) => (
          <div key={auction.id} className="auction-card">
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
              <button type="button" className="bid-now-btn">
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