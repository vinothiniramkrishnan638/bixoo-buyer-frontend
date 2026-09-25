
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import CategoryStrip from "../components/CategoryStrip.jsx";
import PopularItems from "../components/PopularItems.jsx";
import AuctionsPreview from "../components/AuctionsPreview.jsx";
import BottomNav from "../components/BottomNav.jsx";
import { categories, popularItems, auctions } from "../data/dashboardData.js";

function Dashboard({ onCreateRequirement }) {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState("needs");
  const [activeNav, setActiveNav] = useState("browse");
  const [sellerMode, setSellerMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRoleChange = (roleId) => {
    setActiveRole(roleId);

    if (roleId === "needs") {
      if (typeof onCreateRequirement === "function") {
        onCreateRequirement();
      } else {
        navigate("/buyer/requirements");
      }
    }
  };

  const filteredCategories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return categories;

    return categories.filter((category) =>
      category.name.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const filteredPopularItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return popularItems;

    return popularItems.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="dashboard">
      <Header
        activeRole={activeRole}
        onRoleChange={handleRoleChange}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="dashboard-content">
        <CategoryStrip categories={filteredCategories} />

        <PopularItems items={filteredPopularItems} />

        <AuctionsPreview auctions={auctions} />
      </main>

      <BottomNav
        activeNav={activeNav}
        onNavChange={setActiveNav}
        sellerMode={sellerMode}
        onSellerToggle={() => setSellerMode((prev) => !prev)}
      />
    </div>
  );
}

export default Dashboard;

