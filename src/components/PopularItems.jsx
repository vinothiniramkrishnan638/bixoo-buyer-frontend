function PopularItems({ items }) {
  return (
    <section className="section popular-section">
      <div className="section-title">
        <h2>Popular Items</h2>
        <span className="view-all">View All</span>
      </div>
      {items.length === 0 ? (
        <p className="empty-text">No items match your search.</p>
      ) : (
        <div className="popular-grid">
          {items.map((item) => (
            <div key={item.id} className="product-card">
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