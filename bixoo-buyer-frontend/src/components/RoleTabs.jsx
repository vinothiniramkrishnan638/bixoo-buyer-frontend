import needsIcon from "../assets/needs.jpg";
import moveIcon from "../assets/move.png";
import bidsIcon from "../assets/bids.png";

const tabs = [
  {
    id: "needs",
    label: "Needs",
    icon: needsIcon,
    circleBg: "rgba(42, 175, 169, 0.15)",
    iconWidth: "13.5px",
    iconHeight: "15px"
  },
  {
    id: "move",
    label: "Move",
    icon: moveIcon,
    circleBg: "rgba(204, 241, 96, 0.4)",
    iconWidth: "16.5px",
    iconHeight: "12px"
  },
  {
    id: "bids",
    label: "Bids",
    icon: bidsIcon,
    circleBg: "#EDDCFF",
    iconWidth: "13.5px",
    iconHeight: "14.25px"
  }
];

function RoleTabs({ activeRole, onRoleChange }) {
  return (
    <div className="role-tabs">
      {tabs.map((tab) => {
        const isActive = tab.id === activeRole;
        return (
          <button
            key={tab.id}
            type="button"
            className={isActive ? "role-tab role-tab-active" : "role-tab"}
            onClick={() => onRoleChange(tab.id)}
          >
            <div
              className="role-tab-icon-wrap"
              style={{ backgroundColor: tab.circleBg }}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className="role-tab-icon"
                style={{ width: tab.iconWidth, height: tab.iconHeight }}
              />
            </div>
            <span className="role-tab-label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default RoleTabs;