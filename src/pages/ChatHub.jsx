import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackArrowIcon } from "../components/Icons.jsx";

const initialSellerMessages = [
  {
    id: 1,
    sender: "supplier",
    senderName: "Tata Motors Commercial",
    text: "Hello! We reviewed your requirement for commercial fleet stock.",
    time: "10:30 AM"
  },
  {
    id: 2,
    sender: "supplier",
    senderName: "Tata Motors Commercial",
    text: "We can fulfill the entire order at verified inspection standard rates with full warranty.",
    time: "10:32 AM"
  },
  {
    id: 3,
    sender: "buyer",
    senderName: "You",
    text: "Thanks! Can you arrange delivery to our Coimbatore warehouse by Oct 24?",
    time: "10:35 AM"
  },
  {
    id: 4,
    sender: "supplier",
    senderName: "Tata Motors Commercial",
    text: "Yes, our certified logistics fleet can reach before Oct 23. E-Way bill will be shared once confirmed.",
    time: "10:38 AM"
  }
];

const initialTransporterMessages = [
  {
    id: 101,
    sender: "transporter",
    senderName: "Ramesh Kumar (Transporter)",
    text: "Namaste! Assigned for trip #TRIP-8012. Vehicle TN-38-BZ-4412 (20ft Truck) loaded and departed supplier warehouse.",
    time: "08:15 AM"
  },
  {
    id: 102,
    sender: "transporter",
    senderName: "Ramesh Kumar (Transporter)",
    text: "Gate pass stamped at mill exit. GPS live location active on corridor NH-544.",
    time: "09:30 AM"
  },
  {
    id: 103,
    sender: "buyer",
    senderName: "You",
    text: "Received! Please contact our gate manager Mr. Senthil once you reach Coimbatore bypass.",
    time: "09:42 AM"
  },
  {
    id: 104,
    sender: "transporter",
    senderName: "Ramesh Kumar (Transporter)",
    text: "Sure sir, currently 28 km away. Expected unloading bay arrival by 11:30 AM.",
    time: "10:05 AM"
  }
];

function ChatHub() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeChannel, setActiveChannel] = useState("seller");
  const partnerName = location.state?.supplier || "Tata Motors Commercial";
  const dealTitle = location.state?.product || "Deal #REQ-92841";

  const [sellerMessages, setSellerMessages] = useState(() => {
    if (location.state?.supplier) {
      return [
        {
          id: 1,
          sender: "supplier",
          senderName: location.state.supplier,
          text: `Hello! We saw your interest in ${location.state.product || "our verified supply"}. How many units do you need?`,
          time: "Just now"
        }
      ];
    }
    return initialSellerMessages;
  });

  const [transporterMessages, setTransporterMessages] = useState(initialTransporterMessages);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const newMsg = {
      id: Date.now(),
      sender: "buyer",
      senderName: "You",
      text: trimmed,
      time: "Just now"
    };

    if (activeChannel === "seller") {
      setSellerMessages((prev) => [...prev, newMsg]);
    } else {
      setTransporterMessages((prev) => [...prev, newMsg]);
    }
    setInputText("");
  };

  const activeMessages = activeChannel === "seller" ? sellerMessages : transporterMessages;

  return (
    <div className="chat-page-shell">
      <div className="chat-topbar">
        <button
          type="button"
          className="chat-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <BackArrowIcon style={{ width: 18, height: 18, stroke: "#1E293B" }} />
        </button>
        <div className="chat-partner-info">
          <h1 className="chat-partner-name">
            {activeChannel === "seller" ? partnerName : "Ramesh Kumar (Transporter)"}
          </h1>
          <span className="chat-partner-status">
            <span className="chat-status-dot" />{" "}
            {activeChannel === "seller" ? "Online • Deal Verified" : "Live GPS Active • Trip #TRIP-8012"}
          </span>
        </div>
      </div>

      <div className="chat-channel-switcher">
        <button
          type="button"
          className={activeChannel === "seller" ? "chat-channel-tab chat-channel-tab-active" : "chat-channel-tab"}
          onClick={() => setActiveChannel("seller")}
        >
          Seller Channel
        </button>
        <button
          type="button"
          className={activeChannel === "transporter" ? "chat-channel-tab chat-channel-tab-active" : "chat-channel-tab"}
          onClick={() => setActiveChannel("transporter")}
        >
          Transporter Channel (Logistics)
        </button>
      </div>

      <div className="chat-deal-banner">
        <div className="chat-deal-text">
          <span className="chat-deal-title">{dealTitle}</span>
          <span className="chat-deal-sub">
            {activeChannel === "seller" ? "Verified B2B Direct Deal" : "Vehicle: TN-38-BZ-4412 • 20ft Truck"}
          </span>
        </div>
        <button
          type="button"
          className="chat-view-deal-btn"
          onClick={() => navigate("/buyer/requirements")}
        >
          View Requirement
        </button>
      </div>

      {activeChannel === "transporter" && (
        <div className="chat-logistics-status-strip">
          <div className="chat-gps-pulse-dot" />
          <div className="chat-logistics-status-info">
            <span className="chat-logistics-status-title">Live GPS En Route</span>
            <span className="chat-logistics-status-eta">Corridor NH-544 • 28 km to destination • ETA 11:30 AM</span>
          </div>
        </div>
      )}

      <div className="chat-messages-container">
        {activeMessages.map((msg) => {
          const isMe = msg.sender === "buyer";
          return (
            <div
              key={msg.id}
              className={`chat-bubble-row${isMe ? " chat-row-me" : " chat-row-them"}`}
            >
              <div className={`chat-bubble${isMe ? " chat-bubble-me" : " chat-bubble-them"}`}>
                <p className="chat-bubble-text">{msg.text}</p>
                <span className="chat-bubble-time">{msg.time}</span>
              </div>
            </div>
          );
        })}
      </div>

      <form className="chat-input-bar" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="chat-input"
          placeholder={activeChannel === "seller" ? "Message supplier about prices, terms..." : "Message transporter about gate pass, bay..."}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="chat-send-btn"
          aria-label="Send message"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatHub;
