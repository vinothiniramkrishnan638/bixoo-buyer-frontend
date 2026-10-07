import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrowIcon, BellIcon } from "../components/Icons.jsx";

const initialNotifications = [
  {
    id: 1,
    title: "New Supplier Offer Received",
    desc: "Tata Motors Commercial sent an offer of ₹42,500/unit for your Vehicle requirement #REQ-92841.",
    time: "10 mins ago",
    category: "deals",
    read: false
  },
  {
    id: 2,
    title: "Supplier Match Found",
    desc: "3 verified suppliers found matching your Basmati Rice requirement in Tamil Nadu region.",
    time: "45 mins ago",
    category: "deals",
    read: false
  },
  {
    id: 3,
    title: "Auction Ending Soon",
    desc: "Bidding for Premium Grade Sonalika Tractors ends in 15 minutes. Current bid: ₹48,000.",
    time: "2 hours ago",
    category: "deals",
    read: true
  },
  {
    id: 4,
    title: "Consignment Dispatched",
    desc: "Transporter SpeedLogistics has started delivery for Order #ORD-44910. Live GPS is active.",
    time: "5 hours ago",
    category: "deliveries",
    read: true
  },
  {
    id: 5,
    title: "Delivery Completed",
    desc: "Industrial Steel Pipes delivery was accepted and confirmed at Coimbatore Central Hub.",
    time: "1 day ago",
    category: "deliveries",
    read: true
  }
];

function NotificationsHub() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState("all");

  const filteredList = notifications.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !item.read;
    return item.category === activeTab;
  });

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: !item.read } : item))
    );
  };

  return (
    <div className="notif-page-shell">
      <div className="notif-topbar">
        <button
          type="button"
          className="notif-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <BackArrowIcon style={{ width: 18, height: 18, stroke: "#1E293B" }} />
        </button>
        <h1 className="notif-title">Notifications</h1>
        <button
          type="button"
          className="notif-mark-read-btn"
          onClick={markAllAsRead}
        >
          Mark all read
        </button>
      </div>

      <div className="notif-tabs-row">
        {[
          { id: "all", label: "All" },
          { id: "unread", label: "Unread" },
          { id: "deals", label: "Deals" },
          { id: "deliveries", label: "Deliveries" }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`notif-tab-pill${activeTab === tab.id ? " active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="notif-list">
        {filteredList.length === 0 ? (
          <div className="notif-empty-state">
            <BellIcon style={{ width: 32, height: 32, stroke: "#94A3B8" }} />
            <p className="notif-empty-text">No notifications found in this tab.</p>
          </div>
        ) : (
          filteredList.map((item) => (
            <div
              key={item.id}
              className={`notif-card${!item.read ? " notif-unread" : ""}`}
              onClick={() => toggleRead(item.id)}
            >
              <div className="notif-card-header">
                <div className="notif-title-row">
                  {!item.read && <span className="notif-dot" />}
                  <h3 className="notif-card-title">{item.title}</h3>
                </div>
                <span className="notif-card-time">{item.time}</span>
              </div>
              <p className="notif-card-desc">{item.desc}</p>
              <div className="notif-card-footer">
                <span className="notif-category-tag">{item.category}</span>
                <span className="notif-action-hint">
                  {item.read ? "Mark as unread" : "Tap to mark read"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationsHub;
