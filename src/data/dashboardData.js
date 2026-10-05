import agriImg from "../assets/Agriculture.png";
import machImg from "../assets/machiery.png";
import rawImg from "../assets/raw material.png";
import vehImg from "../assets/vechile.png";
import carrotImg from "../assets/Fresh Carrot.png";
import capsicumImg from "../assets/Capsicum.png";
import onionsImg from "../assets/Fresh Onions.png";
import potatoesImg from "../assets/Potatoes.png";

export const categories = [
  {
    id: "cat-agriculture",
    name: "Agricultural",
    image: agriImg
  },
  {
    id: "cat-machinery",
    name: "Machinery",
    image: machImg
  },
  {
    id: "cat-raw-materials",
    name: "Raw Materials",
    image: rawImg
  },
  {
    id: "cat-vehicles",
    name: "Vehicles",
    image: vehImg
  }
];

export const popularItems = [
  {
    id: "item-carrot",
    name: "Fresh Carrot",
    suppliers: 25,
    category: "agriculture",
    image: carrotImg
  },
  {
    id: "item-capsicum",
    name: "Capsicum",
    suppliers: 18,
    category: "agriculture",
    image: capsicumImg
  },
  {
    id: "item-onions",
    name: "Fresh Onions",
    suppliers: 34,
    category: "agriculture",
    image: onionsImg
  },
  {
    id: "item-potatoes",
    name: "Organic Potatoes",
    suppliers: 29,
    category: "agriculture",
    image: potatoesImg
  },
  {
    id: "item-vehicles",
    name: "Commercial Trucks",
    suppliers: 42,
    category: "vehicles",
    image: vehImg
  },
  {
    id: "item-machinery",
    name: "Industrial Machinery",
    suppliers: 27,
    category: "machinery",
    image: machImg
  }
];

export const auctions = [
  {
    id: "auc-onions",
    title: "Fresh Onions - 500kg",
    image: onionsImg,
    currentBid: "12,500",
    endsIn: "02:45:12",
    live: true
  },
  {
    id: "auc-potatoes",
    title: "Organic Potatoes - 500kg",
    image: potatoesImg,
    currentBid: "8,200",
    endsIn: "01:12:40",
    live: true
  }
];