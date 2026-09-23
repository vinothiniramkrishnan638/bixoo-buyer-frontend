function CategoryStrip({ categories }) {
  return (
    <section className="section categories-section">
      <div className="section-title">
        <h2>Categories</h2>
        <span className="view-all">View All</span>
      </div>
      {categories.length === 0 ? (
        <p className="empty-text">No categories match your search.</p>
      ) : (
        <div className="category-strip">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <div className="category-card">
                <img src={category.image} alt={category.name} className="category-img" />
                <div className="category-overlay" />
              </div>
              <span className="category-label">{category.name}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CategoryStrip;