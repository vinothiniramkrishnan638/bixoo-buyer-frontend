import browseIcon from "../assets/Icon.png";
import dealsIcon from "../assets/tag.png";
import sellerIcon from "../assets/arrow.png";

function BottomNav({ activeNav, onNavChange, sellerMode, onSellerToggle }) {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-container">
        <nav className="bottom-nav-pill">
          <button
            type="button"
            className={activeNav === "browse" ? "nav-pill-btn nav-pill-btn-active" : "nav-pill-btn"}
            onClick={() => onNavChange("browse")}
          >
            <img src={browseIcon} alt="" className="nav-icon nav-icon-browse" />
            <span className="nav-text">Browse</span>
          </button>
          <button
            type="button"
            className={activeNav === "deals" ? "nav-pill-btn nav-pill-btn-active" : "nav-pill-btn"}
            onClick={() => onNavChange("deals")}
          >
            <img src={dealsIcon} alt="" className="nav-icon nav-icon-deals" />
            <span className="nav-text">Deals</span>
          </button>
        </nav>
        <div className="seller-btn-wrap">
          <button
            type="button"
            className={sellerMode ? "seller-circle-btn seller-circle-btn-active" : "seller-circle-btn"}
            onClick={onSellerToggle}
            aria-label="Toggle Seller Mode"
          >
            <img src={sellerIcon} alt="" className="seller-circle-icon" />
            <span className="seller-circle-text">{sellerMode ? "BUYER" : "SELLER"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;