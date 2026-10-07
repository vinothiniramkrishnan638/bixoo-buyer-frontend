import { useState } from "react";
import mapImage from "../../assets/map.jpg";
import {
  BackArrowIcon,
  SearchIcon,
  GpsTargetIcon,
  MapIcon,
  CalendarIcon,
  ClockIcon
} from "../Icons.jsx";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

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
  const [detectingLocation, setDetectingLocation] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  const initialYear = date ? parseInt(date.split("-")[0], 10) : new Date().getFullYear();
  const initialMonth = date ? parseInt(date.split("-")[1], 10) - 1 : new Date().getMonth();
  const [calYear, setCalYear] = useState(initialYear);
  const [calMonth, setCalMonth] = useState(initialMonth);
  const [tempDate, setTempDate] = useState(date || "");

  const getInitialTimeParts = () => {
    if (!time) return { hour: 5, minute: "00", ampm: "PM" };
    try {
      const [h, m] = time.split(":");
      const hr = parseInt(h, 10);
      return {
        hour: hr % 12 || 12,
        minute: m || "00",
        ampm: hr >= 12 ? "PM" : "AM"
      };
    } catch {
      return { hour: 5, minute: "00", ampm: "PM" };
    }
  };

  const initParts = getInitialTimeParts();
  const [timeHour, setTimeHour] = useState(initParts.hour);
  const [timeMinute, setTimeMinute] = useState(initParts.minute);
  const [timeAmpm, setTimeAmpm] = useState(initParts.ampm);

  const handleOpenDateModal = () => {
    if (date) {
      const [y, m] = date.split("-");
      setCalYear(parseInt(y, 10));
      setCalMonth(parseInt(m, 10) - 1);
      setTempDate(date);
    } else {
      const now = new Date();
      setCalYear(now.getFullYear());
      setCalMonth(now.getMonth());
      setTempDate("");
    }
    setShowDateModal(true);
  };

  const handlePrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear((prev) => prev - 1);
    } else {
      setCalMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear((prev) => prev + 1);
    } else {
      setCalMonth((prev) => prev + 1);
    }
  };

  const handleSelectDay = (day) => {
    const formatted = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setTempDate(formatted);
  };

  const handleSetToday = () => {
    const now = new Date();
    const formatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    setCalYear(now.getFullYear());
    setCalMonth(now.getMonth());
    setTempDate(formatted);
  };

  const handleApplyDate = () => {
    onChange("date", tempDate);
    setShowDateModal(false);
  };

  const handleClearDate = () => {
    setTempDate("");
    onChange("date", "");
    setShowDateModal(false);
  };

  const handleOpenTimeModal = () => {
    if (time) {
      try {
        const [h, m] = time.split(":");
        const hr = parseInt(h, 10);
        setTimeHour(hr % 12 || 12);
        setTimeMinute(m || "00");
        setTimeAmpm(hr >= 12 ? "PM" : "AM");
      } catch {
        setTimeHour(5);
        setTimeMinute("00");
        setTimeAmpm("PM");
      }
    } else {
      setTimeHour(5);
      setTimeMinute("00");
      setTimeAmpm("PM");
    }
    setShowTimeModal(true);
  };

  const handleApplyTime = () => {
    const hr24 = timeAmpm === "PM" ? (timeHour % 12) + 12 : timeHour % 12;
    const formatted = `${String(hr24).padStart(2, "0")}:${timeMinute}`;
    onChange("time", formatted);
    setShowTimeModal(false);
  };

  const handleClearTime = () => {
    onChange("time", "");
    setShowTimeModal(false);
  };

  const handleQuickSlot = (h, m, ap) => {
    setTimeHour(h);
    setTimeMinute(m);
    setTimeAmpm(ap);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      setDetectingLocation(true);
      navigator.geolocation.getCurrentPosition(
        () => {
          setDetectingLocation(false);
          onChange("location", "Current Location (123 Market St, Unit 4B)");
        },
        () => {
          setDetectingLocation(false);
          onChange("location", "Current Location (123 Market St, Unit 4B)");
        },
        { timeout: 5000 }
      );
    } else {
      onChange("location", "Current Location (123 Market St, Unit 4B)");
    }
  };

  const handleSelectOnMap = () => {
    onChange("location", "Tech Hub HQ, 123 Market St, Unit 4B");
  };

  const firstDayIndex = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const now = new Date();
  const todayFormatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  return (
    <div className="del-page-shell">
      <div className="del-topbar">
        <button
          type="button"
          className="del-back-btn"
          onClick={onBack}
          aria-label="Back"
        >
          <BackArrowIcon style={{ width: 16, height: 16, stroke: "#3D4948", strokeWidth: 2.2 }} />
        </button>
        <div className="del-topbar-title-wrap">
          <h1 className="del-topbar-title">Post Requirement</h1>
        </div>
      </div>

      <div className="del-stepper-8">
        <div className="del-track-container">
          <div className="del-track-bg-line" />
          <div className="del-track-fill-line del-track-fill-step4" />
          <div className="del-step-dot del-dot-done"><span>1</span></div>
          <div className="del-step-dot del-dot-done"><span>2</span></div>
          <div className="del-step-dot del-dot-done"><span>3</span></div>
          <div className="del-step-dot del-dot-active">
            <div className="del-dot-active-inner">
              <span>4</span>
            </div>
          </div>
          <div className="del-step-dot del-dot-inactive"><span>5</span></div>
        </div>
        <div className="del-stepper-meta">
          <div className="del-meta-left">
            <span className="del-step-title-teal">Step 4: Delivery</span>
          </div>
          <div className="del-meta-right">
            <span className="del-step-percent">80% Complete</span>
          </div>
        </div>
      </div>

      <div className="del-header-block">
        <h1 className="del-heading">
          Where and when should it be delivered?
        </h1>
      </div>

      <div className="del-location-section">
        <div className="del-heading2-wrap">
          <h2 className="del-section-heading">Location</h2>
        </div>

        <div className="del-location-card">
          <div className="del-search-pill">
            <div className="del-search-icon-wrap">
              <SearchIcon style={{ width: 18, height: 18, color: "#6B7280" }} />
            </div>
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
              <GpsTargetIcon style={{ width: 22, height: 22, color: "#2AAFA9" }} />
            </div>
            <div className="del-gps-text">
              <span className="del-gps-name">Use Current Location</span>
              <span className="del-gps-hint">
                {detectingLocation ? "Detecting location..." : "Enable location services"}
              </span>
            </div>
          </button>
        </div>

        <div className="del-map-preview-card" onClick={handleSelectOnMap}>
          <img src={mapImage} alt="Delivery Location Map" className="del-map-img" />
          <div className="del-map-overlay">
            <button
              type="button"
              className="del-map-select-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleSelectOnMap();
              }}
            >
              <div className="del-map-btn-icon">
                <MapIcon style={{ width: 18, height: 18, color: "#2AAFA9" }} />
              </div>
              <span className="del-map-btn-text">Select on Map</span>
            </button>
          </div>
        </div>
      </div>

      <div className="del-date-section">
        <div className="del-heading2-wrap">
          <h2 className="del-section-heading">Required Date</h2>
        </div>

        <div className="del-date-time-row">
          <div
            className="del-picker-card"
            onClick={handleOpenDateModal}
            role="button"
            tabIndex={0}
          >
            <span className="del-picker-label">Date</span>
            <div className="del-picker-val-row">
              <span className="del-picker-val">{formatDisplayDate(date)}</span>
              <CalendarIcon style={{ width: 18, height: 20, color: "#2AAFA9", flexShrink: 0 }} />
            </div>
          </div>

          <div
            className="del-picker-card"
            onClick={handleOpenTimeModal}
            role="button"
            tabIndex={0}
          >
            <span className="del-picker-label">Time (Optional)</span>
            <div className="del-picker-val-row">
              <span className="del-picker-val">{formatDisplayTime(time)}</span>
              <ClockIcon style={{ width: 20, height: 20, color: "#2AAFA9", flexShrink: 0 }} />
            </div>
          </div>
        </div>
      </div>

      <div className="del-actions-footer">
        <button
          type="button"
          className="del-next-btn"
          onClick={onNext}
        >
          <span className="del-next-text">Next</span>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="del-next-icon"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      {showDateModal && (
        <div className="bixoo-picker-overlay" onClick={() => setShowDateModal(false)}>
          <div className="bixoo-picker-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="bixoo-picker-top">
              <h3 className="bixoo-picker-title">Select Date</h3>
              <button
                type="button"
                className="bixoo-picker-close-btn"
                onClick={() => setShowDateModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="bixoo-cal-nav">
              <button
                type="button"
                className="bixoo-cal-arrow-btn"
                onClick={handlePrevMonth}
                aria-label="Previous Month"
              >
                ‹
              </button>
              <span className="bixoo-cal-month-title">
                {MONTH_NAMES[calMonth]} {calYear}
              </span>
              <button
                type="button"
                className="bixoo-cal-arrow-btn"
                onClick={handleNextMonth}
                aria-label="Next Month"
              >
                ›
              </button>
            </div>

            <div className="bixoo-weekdays-row">
              {WEEKDAY_NAMES.map((name) => (
                <div key={name} className="bixoo-weekday-col">
                  {name}
                </div>
              ))}
            </div>

            <div className="bixoo-days-grid">
              {Array.from({ length: firstDayIndex }).map((_, index) => (
                <div key={`empty-${index}`} className="bixoo-day-empty" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const formatted = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const isSelected = tempDate === formatted;
                const isToday = todayFormatted === formatted;
                return (
                  <button
                    key={day}
                    type="button"
                    className={`bixoo-day-cell ${isSelected ? "bixoo-day-cell-selected" : ""} ${isToday && !isSelected ? "bixoo-day-cell-today" : ""}`}
                    onClick={() => handleSelectDay(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="bixoo-picker-actions">
              <button
                type="button"
                className="bixoo-picker-btn-shortcut"
                onClick={handleSetToday}
              >
                Today
              </button>
              <button
                type="button"
                className="bixoo-picker-btn-secondary"
                onClick={handleClearDate}
              >
                Clear
              </button>
              <button
                type="button"
                className="bixoo-picker-btn-primary"
                onClick={handleApplyDate}
              >
                Apply Date
              </button>
            </div>
          </div>
        </div>
      )}

      {showTimeModal && (
        <div className="bixoo-picker-overlay" onClick={() => setShowTimeModal(false)}>
          <div className="bixoo-picker-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="bixoo-picker-top">
              <div>
                <h3 className="bixoo-picker-title">Select Delivery Time</h3>
                <span className="bixoo-picker-sub">Choose your preferred arrival window</span>
              </div>
              <button
                type="button"
                className="bixoo-picker-close-btn"
                onClick={() => setShowTimeModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="bixoo-time-preview-card">
              <span className="bixoo-time-digital">
                {String(timeHour).padStart(2, "0")}:{timeMinute}
              </span>
              <div className="bixoo-ampm-switch">
                <button
                  type="button"
                  className={`bixoo-ampm-btn ${timeAmpm === "AM" ? "bixoo-ampm-btn-active" : ""}`}
                  onClick={() => setTimeAmpm("AM")}
                >
                  AM
                </button>
                <button
                  type="button"
                  className={`bixoo-ampm-btn ${timeAmpm === "PM" ? "bixoo-ampm-btn-active" : ""}`}
                  onClick={() => setTimeAmpm("PM")}
                >
                  PM
                </button>
              </div>
            </div>

            <div className="bixoo-time-section">
              <span className="bixoo-time-section-label">Hour</span>
              <div className="bixoo-hour-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((hr) => (
                  <button
                    key={hr}
                    type="button"
                    className={`bixoo-time-chip ${timeHour === hr ? "bixoo-time-chip-active" : ""}`}
                    onClick={() => setTimeHour(hr)}
                  >
                    {hr}
                  </button>
                ))}
              </div>
            </div>

            <div className="bixoo-time-section">
              <span className="bixoo-time-section-label">Minute</span>
              <div className="bixoo-min-grid">
                {["00", "15", "30", "45"].map((mn) => (
                  <button
                    key={mn}
                    type="button"
                    className={`bixoo-time-chip ${timeMinute === mn ? "bixoo-time-chip-active" : ""}`}
                    onClick={() => setTimeMinute(mn)}
                  >
                    :{mn}
                  </button>
                ))}
              </div>
            </div>

            <div className="bixoo-time-section">
              <span className="bixoo-time-section-label">Quick Slots</span>
              <div className="bixoo-quick-slots-row">
                <button
                  type="button"
                  className="bixoo-slot-chip"
                  onClick={() => handleQuickSlot(9, "00", "AM")}
                >
                  Morning (9 AM)
                </button>
                <button
                  type="button"
                  className="bixoo-slot-chip"
                  onClick={() => handleQuickSlot(2, "00", "PM")}
                >
                  Afternoon (2 PM)
                </button>
                <button
                  type="button"
                  className="bixoo-slot-chip"
                  onClick={() => handleQuickSlot(5, "00", "PM")}
                >
                  Evening (5 PM)
                </button>
              </div>
            </div>

            <div className="bixoo-picker-actions">
              <button
                type="button"
                className="bixoo-picker-btn-secondary"
                onClick={handleClearTime}
              >
                Any Time
              </button>
              <button
                type="button"
                className="bixoo-picker-btn-primary"
                onClick={handleApplyTime}
              >
                Apply Time
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeliveryStep;