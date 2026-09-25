import {
  BackArrowIcon,
  SearchIcon,
  GpsTargetIcon,
  MapIcon,
  CalendarIcon,
  ClockIcon
} from "../Icons.jsx";

const formatDisplayDate = (d) => {
  if (!d) return "Select Date";
  try {
    const [y, m, day] = d.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = months[parseInt(m, 10) - 1] || m;
    return `${day} ${monthName} ${y}`;
  } catch {
    return d;
  }
};

const formatDisplayTime = (t) => {
  if (!t) return "Any Time";
  try {
    const [h, m] = t.split(":");
    const hour = parseInt(h, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${m} ${ampm}`;
  } catch {
    return t;
  }
};

function DeliveryStep({ location, date, time, onChange, onNext, onBack }) {
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          onChange("location", "Current Location (123 Market St)");
        },
        () => {
          onChange("location", "123 Market St, Unit 4B");
        }
      );
    } else {
      onChange("location", "123 Market St, Unit 4B");
    }
  };

  const handleSelectOnMap = () => {
    if (!location) {
      onChange("location", "123 Market St, Unit 4B");
    }
  };

  return (
    <div className="del-page-shell">
      <div className="del-topbar">
        <button
          type="button"
          className="del-back-btn"
          onClick={onBack}
          aria-label="Back"
        >
          <BackArrowIcon />
        </button>
        <span className="del-topbar-title">Post Requirement</span>
      </div>

      <div className="del-stepper-8">
        <div className="del-dots-row">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
            let dotState = "pending";
            if (num < 5) dotState = "done";
            if (num === 5) dotState = "active";
            return (
              <div key={num} className="del-dot-col">
                <div className={`del-dot-circle ${dotState}`}>{num}</div>
                {num < 8 && <div className={`del-dot-connector ${num < 5 ? "done" : ""}`} />}
              </div>
            );
          })}
        </div>
        <div className="del-stepper-meta">
          <span className="del-step-title-teal">Step 5: Delivery</span>
          <span className="del-step-percent">62% Complete</span>
        </div>
      </div>

      <div className="del-header-block">
        <h1 className="del-heading">
          Where and when should it<br />be delivered?
        </h1>
      </div>

      <div className="del-section-group">
        <h2 className="del-section-heading">Location</h2>

        <div className="del-search-pill">
          <SearchIcon style={{ color: "#94A3B8", flexShrink: 0, width: 18, height: 18 }} />
          <input
            type="text"
            className="del-search-input"
            placeholder="Search for location..."
            value={location}
            onChange={(event) => onChange("location", event.target.value)}
          />
        </div>

        <button
          type="button"
          className="del-gps-btn"
          onClick={handleCurrentLocation}
        >
          <div className="del-gps-icon-circle">
            <GpsTargetIcon style={{ width: 20, height: 20, color: "#199587" }} />
          </div>
          <div className="del-gps-text">
            <span className="del-gps-name">Use Current Location</span>
            <span className="del-gps-hint">Enable location services</span>
          </div>
        </button>

        <div className="del-map-preview-card">
          <svg
            className="del-map-svg"
            viewBox="0 0 350 160"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="350" height="160" fill="#f4f7f6" />
            <polygon points="40,20 110,15 130,55 70,75" fill="#e8f5e9" />
            <polygon points="180,30 260,25 280,85 200,90" fill="#e8f5e9" />
            <polygon points="60,95 150,90 170,150 80,155" fill="#e8f5e9" />
            <path d="M 0 50 Q 80 40 140 70 T 280 80 T 350 60" fill="none" stroke="#b2dfdb" strokeWidth="18" strokeLinecap="round" />
            <path d="M 0 50 Q 80 40 140 70 T 280 80 T 350 60" fill="none" stroke="#80cbc4" strokeWidth="10" strokeLinecap="round" />
            <line x1="30" y1="0" x2="30" y2="160" stroke="#ffffff" strokeWidth="5" />
            <line x1="120" y1="0" x2="120" y2="160" stroke="#ffffff" strokeWidth="7" />
            <line x1="220" y1="0" x2="220" y2="160" stroke="#ffffff" strokeWidth="6" />
            <line x1="310" y1="0" x2="310" y2="160" stroke="#ffffff" strokeWidth="4" />
            <line x1="0" y1="35" x2="350" y2="35" stroke="#ffffff" strokeWidth="6" />
            <line x1="0" y1="110" x2="350" y2="110" stroke="#ffffff" strokeWidth="7" />
            <g transform="translate(175, 75)">
              <circle cx="0" cy="0" r="14" fill="#006A66" opacity="0.2" />
              <circle cx="0" cy="0" r="8" fill="#006A66" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>
          </svg>
          <button
            type="button"
            className="del-map-action-btn"
            onClick={handleSelectOnMap}
          >
            <MapIcon style={{ width: 16, height: 16, color: "#1E293B" }} />
            <span>Select on Map</span>
          </button>
        </div>
      </div>

      <div className="del-section-group">
        <h2 className="del-section-heading">Required Date</h2>

        <div className="del-date-time-row">
          <label className="del-picker-card">
            <span className="del-picker-label">Date</span>
            <div className="del-picker-val-row">
              <span className="del-picker-val">{formatDisplayDate(date)}</span>
              <CalendarIcon style={{ width: 18, height: 18, color: "#199587" }} />
            </div>
            <input
              type="date"
              className="del-picker-input-hidden"
              value={date}
              onChange={(e) => onChange("date", e.target.value)}
            />
          </label>

          <label className="del-picker-card">
            <span className="del-picker-label">Time (Optional)</span>
            <div className="del-picker-val-row">
              <span className="del-picker-val">{formatDisplayTime(time)}</span>
              <ClockIcon style={{ width: 18, height: 18, color: "#199587" }} />
            </div>
            <input
              type="time"
              className="del-picker-input-hidden"
              value={time}
              onChange={(e) => onChange("time", e.target.value)}
            />
          </label>
        </div>
      </div>

      <button
        type="button"
        className="wiz-primary-btn"
        onClick={onNext}
      >
        <span>Next</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

export default DeliveryStep;