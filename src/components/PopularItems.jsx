import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PopularItems({ items }) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, 2);

  const handleItemClick = (item) => {
    navigate("/buyer/sub-category", {
      state: { categoryId: item.category || "agriculture" }
    });
  };

  return (
    <section className="section popular-section">
      <div className="section-title">
        <h2>Popular Items</h2>
        {items.length > 2 && (
          <span
            className="view-all"
            role="button"
            tabIndex={0}
            onClick={() => setShowAll((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowAll((prev) => !prev);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            {showAll ? "Show Less" : "View All"}
          </span>
        )}
      </div>
      {displayedItems.length === 0 ? (
        <p className="empty-text">No items match your search.</p>
      ) : (
        <div className="popular-grid">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="product-card"
              role="button"
              tabIndex={0}
              onClick={() => handleItemClick(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleItemClick(item);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} />
              <div className="product-info">
                <span className="product-name">{item.name}</span>
                <span className="product-sub">{item.suppliers} verified suppliers</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PopularItems;