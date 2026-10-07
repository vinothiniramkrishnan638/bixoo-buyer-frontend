import steelPipesImg from "../assets/Industrial Steel Pipes.jpg";
import wheatGrainsImg from "../assets/Premium Wheat Grains.jpg";
import capsicumImg from "../assets/Capsicum.png";
import carrotImg from "../assets/Fresh Carrot.png";
import onionsImg from "../assets/Fresh Onions.png";
import potatoesImg from "../assets/Potatoes.png";
import agricultureImg from "../assets/Agriculture.png";
import vechileImg from "../assets/vechile.png";
import needsVechileImg from "../assets/needs vechile.jpg";
import needsAgricultureImg from "../assets/needs agriculture.jpg";
import truckImg from "../assets/vechile commercial truck.jpg";
import agriGrainImg from "../assets/agriculture grain.jpg";
import machineryImg from "../assets/machinery and industrial.jpg";
import electronicsChipImg from "../assets/electronics chip.jpg";
import rawConstructionImg from "../assets/raw construction.jpg";
import packingWarehouseImg from "../assets/packing warehouse.jpg";
import industrialChemicalsImg from "../assets/industrial chemicals.jpg";
import textilesImg from "../assets/textiles.jpg";
import allFeetImg from "../assets/all feet.jpg";
import miniTruckImg from "../assets/mini truck.jpg";
import cargoVanImg from "../assets/cargo van.jpg";
import openLorryImg from "../assets/open lorry.jpg";
import containersImg from "../assets/containers.jpg";
import tataAceImg from "../assets/tata ace.jpg";

export const categories = [
  {
    id: "vehicles",
    name: "Vehicles",
    description: "Commercial trucks, vans, and fleet.",
    suppliers: 140,
    sector: "heavy-industry",
    iconType: "truck",
    image: needsVechileImg
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Crops, seeds, and farming produce.",
    suppliers: 320,
    sector: "agro-food",
    iconType: "tractor",
    image: needsAgricultureImg
  },
  {
    id: "machinery",
    name: "Machinery",
    description: "Industrial equipment and tools.",
    suppliers: 210,
    sector: "heavy-industry",
    iconType: "tool",
    image: machineryImg
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Components, devices, and parts.",
    suppliers: 480,
    sector: "heavy-industry",
    iconType: "chip",
    image: electronicsChipImg
  },
  {
    id: "raw-materials",
    name: "Raw Materials",
    description: "Construction and base materials.",
    suppliers: 195,
    sector: "heavy-industry",
    iconType: "layers",
    image: rawConstructionImg
  },
  {
    id: "packaging",
    name: "Packaging",
    description: "Boxes, pallets, containers, and wrap.",
    suppliers: 310,
    sector: "heavy-industry",
    iconType: "box",
    image: packingWarehouseImg
  }
];

export const verifiedSectors = [
  {
    id: "vehicles",
    name: "Vehicles",
    description: "Commercial trucks, vans, and fleet…",
    suppliers: "140+ Suppliers",
    sector: "heavy-industry",
    sectors: ["vehicles", "heavy-industry"],
    iconType: "truck",
    image: truckImg
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Crops, seeds, and farming produce…",
    suppliers: "320+ Suppliers",
    sector: "agro-food",
    sectors: ["agriculture", "agro-food"],
    iconType: "tractor",
    image: agriGrainImg
  },
  {
    id: "machinery",
    name: "Machinery",
    description: "Industrial equipment and heavy tooling lines.",
    suppliers: "210+ Suppliers",
    sector: "heavy-industry",
    sectors: ["machinery", "heavy-industry"],
    iconType: "tool",
    image: machineryImg
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Components, devices, circuits, and modules.",
    suppliers: "480+ Suppliers",
    sector: "heavy-industry",
    sectors: ["electronics", "heavy-industry"],
    iconType: "chip",
    image: electronicsChipImg
  },
  {
    id: "raw-materials",
    name: "Raw Materials",
    description: "Construction, minerals, steel, and bulk sand.",
    suppliers: "195+ Suppliers",
    sector: "heavy-industry",
    sectors: ["raw-materials", "heavy-industry"],
    iconType: "layers",
    image: rawConstructionImg
  },
  {
    id: "packaging",
    name: "Packaging",
    description: "Boxes, pallets, containers, and wrap.",
    suppliers: "310+ Suppliers",
    sector: "heavy-industry",
    sectors: ["packaging", "heavy-industry"],
    iconType: "box",
    image: packingWarehouseImg
  },
  {
    id: "chemicals",
    name: "Chemicals",
    description: "Industrial liquids, fertilizers, and fuels.",
    suppliers: "115+ Suppliers",
    sector: "heavy-industry",
    sectors: ["chemicals", "heavy-industry"],
    iconType: "flask",
    image: industrialChemicalsImg
  },
  {
    id: "textiles",
    name: "Textiles",
    description: "Bulk fabrics, yarn, and wholesale apparel.",
    suppliers: "280+ Suppliers",
    sector: "agro-food",
    sectors: ["textiles", "agro-food"],
    iconType: "spool",
    image: textilesImg
  }
];

export const sectorFilters = [
  { id: "all", label: "All Sectors" },
  { id: "vehicles", label: "Vehicles" },
  { id: "agriculture", label: "Agriculture" },
  { id: "heavy-industry", label: "Heavy Industry" },
  { id: "agro-food", label: "Agro & Food" }
];

export const productsByCategory = {
  vehicles: [
    { id: "bike", name: "Bike", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=300&q=80" },
    { id: "car", name: "Car", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80" },
    { id: "van", name: "Van", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=300&q=80" },
    { id: "truck", name: "Truck", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=300&q=80" },
    { id: "lorry", name: "Lorry", image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=300&q=80" }
  ],
  agriculture: [
    { id: "wheat", name: "Wheat", image: "https://picsum.photos/seed/bixoo-prod-wheat/200/160" },
    { id: "rice", name: "Basmati Rice", image: "https://picsum.photos/seed/bixoo-prod-rice/200/160" },
    { id: "cotton", name: "Fresh Vegetables", image: "https://picsum.photos/seed/bixoo-prod-veg/200/160" }
  ],
  machinery: [
    { id: "cnc", name: "CNC Machine", image: "https://picsum.photos/seed/bixoo-prod-cnc/200/160" },
    { id: "generator", name: "Industrial Sensor", image: "https://picsum.photos/seed/bixoo-prod-sensors/200/160" },
    { id: "Compressor", name: "Compressor", image: "https://picsum.photos/seed/bixoo-prod-compressor/200/160" }
  ],
  electronics: [
    { id: "circuit-board", name: "Circuit Boards", image: "https://picsum.photos/seed/bixoo-prod-circuit/200/160" },
    { id: "sensors", name: "Industrial Sensors", image: "https://picsum.photos/seed/bixoo-prod-sensors/200/160" },
    { id: "modules", name: "Power Modules", image: "https://picsum.photos/seed/bixoo-prod-modules/200/160" }
  ],
  "raw-materials": [
    { id: "steel-pipes", name: "Steel Pipes", image: "https://picsum.photos/seed/bixoo-prod-steel/200/160" },
    { id: "sand", name: "Construction Sand", image: "https://picsum.photos/seed/bixoo-prod-sand/200/160" },
    { id: "cement", name: "Cement Bags", image: "https://picsum.photos/seed/bixoo-prod-cement/200/160" }
  ],
  packaging: [
    { id: "cartons", name: "Corrugated Cartons", image: "https://picsum.photos/seed/bixoo-prod-cartons/200/160" },
    { id: "pallets", name: "Wooden Pallets", image: "https://picsum.photos/seed/bixoo-prod-pallets/200/160" },
    { id: "wrap", name: "Stretch Wrap Rolls", image: "https://picsum.photos/seed/bixoo-prod-wrap/200/160" }
  ],
  chemicals: [
    { id: "fertilizer", name: "Fertilizer", image: "https://picsum.photos/seed/bixoo-prod-fertilizer/200/160" },
    { id: "industrial-oil", name: "Industrial Oil", image: "https://picsum.photos/seed/bixoo-prod-oil/200/160" }
  ],
  textiles: [
    { id: "cotton-fabric", name: "Cotton Fabric", image: "https://picsum.photos/seed/bixoo-prod-fabric/200/160" },
    { id: "yarn", name: "Bulk Yarn", image: "https://picsum.photos/seed/bixoo-prod-yarn/200/160" }
  ]
};

productsByCategory["vechiles"] = productsByCategory.vehicles;
productsByCategory["electonics"] = productsByCategory.electronics;
productsByCategory["texiles"] = productsByCategory.textiles;

export const requirementTypes = [
  { id: "single", label: "SINGLE", description: "Specific item or limited quantity.", icon: "single" },
  { id: "bulk", label: "BULK", description: "Large quantity, wholesale, or lot.", icon: "bulk" },
  { id: "recurring", label: "RECURRING", description: "Scheduled regular supply on contract terms.", icon: "recurring" },
  { id: "custom", label: "CUSTOM / RFQ", description: "Request customized manufacturing or packaging.", icon: "custom" }
];

export const unitOptions = ["Units", "KG", "Tons", "Quintals", "Litres", "Boxes"];

export const postedRequirements = [
  {
    id: "RQ-8924",
    title: "Industrial Steel Pipes",
    quantity: "500 Tons",
    posted: "Today, 09:30 AM",
    status: "matching",
    statusLabel: "Matching...",
    filterType: "matching",
    quotesCount: 0,
    acceptedCount: 0,
    partialCount: 0,
    image: steelPipesImg
  },
  {
    id: "RQ-8910",
    title: "Premium Wheat Grains",
    quantity: "2000 KG",
    posted: "Yesterday",
    status: "quotes",
    statusLabel: "3 Quotes",
    filterType: "accepted",
    quotesCount: 3,
    acceptedCount: 1,
    partialCount: 0,
    image: wheatGrainsImg
  },
  {
    id: "RQ-8895",
    title: "Fresh Farm Onions",
    quantity: "15 Tons",
    posted: "2 Days Ago",
    status: "quotes",
    statusLabel: "2 Quotes",
    filterType: "partial",
    quotesCount: 2,
    acceptedCount: 0,
    partialCount: 2,
    image: onionsImg
  },
  {
    id: "RQ-8850",
    title: "Raw Construction Materials",
    quantity: "100 Tons",
    posted: "28 Sep 2026",
    status: "completed",
    statusLabel: "Completed",
    filterType: "completed",
    quotesCount: 4,
    acceptedCount: 1,
    partialCount: 0,
    image: rawConstructionImg
  }
];

export const subCategoryShowcaseData = {
  vehicles: {
    sectorId: "vehicles",
    title: "Vehicles",
    badge: "Active Fleet",
    subtitle: "140+ Verified Fleet & Commercial Lorries",
    chips: [
      { id: "all", label: "All Vehicles", count: 12, image: truckImg },
      { id: "mini-trucks", label: "Mini Trucks", count: 3, image: miniTruckImg },
      { id: "cargo-vans", label: "Cargo Vans", count: 3, image: cargoVanImg },
      { id: "open-lorries", label: "Open Lorries", count: 2, image: openLorryImg },
      { id: "containers", label: "Containers", count: 2, image: containersImg },
      { id: "three-wheelers", label: "3-Wheelers", count: 2, image: vechileImg }
    ],
    shorts: [
      {
        id: "short-v1",
        chipId: "mini-trucks",
        title: "Tata Ace Gold Plus (Mini Truck)",
        categoryTag: "MINI COMMERCIAL TRUCK",
        rating: "4.9",
        contractPrice: "₹3.4k/day",
        outrightPrice: "₹4.20 - 4.65 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Chennai, TN",
        readyUnits: "32 Units Ready",
        image: tataAceImg
      },
      {
        id: "short-v2",
        chipId: "mini-trucks",
        title: "Mahindra Bolero Maxi Truck Plus",
        categoryTag: "HEAVY COMMERCIAL TRUCK",
        rating: "4.9",
        contractPrice: "₹4.1k/day",
        outrightPrice: "₹5.80 - 6.40 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Coimbatore, TN",
        readyUnits: "18 Units Ready",
        image: allFeetImg
      },
      {
        id: "short-v3",
        chipId: "mini-trucks",
        title: "Maruti Suzuki Super Carry Mini Truck",
        categoryTag: "COMPACT COMMERCIAL TRUCK",
        rating: "4.8",
        contractPrice: "₹3.1k/day",
        outrightPrice: "₹4.15 - 4.85 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Madurai, TN",
        readyUnits: "14 Units Ready",
        image: miniTruckImg
      },
      {
        id: "short-v4",
        chipId: "cargo-vans",
        title: "Ashok Leyland Bada Dost i4 Cargo Van",
        categoryTag: "CARGO FLEET VAN",
        rating: "4.7",
        contractPrice: "₹4.8k/day",
        outrightPrice: "₹7.10 - 7.90 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bengaluru, KA",
        readyUnits: "24 Units Ready",
        image: cargoVanImg
      },
      {
        id: "short-v5",
        chipId: "cargo-vans",
        title: "Force Urbania High Roof Cargo Van",
        categoryTag: "EXPRESS LOGISTICS VAN",
        rating: "4.8",
        contractPrice: "₹5.2k/day",
        outrightPrice: "₹12.40 - 13.80 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hyderabad, TS",
        readyUnits: "10 Units Ready",
        image: cargoVanImg
      },
      {
        id: "short-v6",
        chipId: "cargo-vans",
        title: "Tata Winger Cargo Express Carrier",
        categoryTag: "MULTI-SEATER CARGO VAN",
        rating: "4.7",
        contractPrice: "₹4.5k/day",
        outrightPrice: "₹8.20 - 9.10 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Kochi, KL",
        readyUnits: "16 Units Ready",
        image: cargoVanImg
      },
      {
        id: "short-v7",
        chipId: "open-lorries",
        title: "Eicher Pro 2049 Heavy Duty Open Truck",
        categoryTag: "OPEN LORRY TRUCK",
        rating: "4.8",
        contractPrice: "₹5.6k/day",
        outrightPrice: "₹10.20 - 11.50 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Salem, TN",
        readyUnits: "14 Units Ready",
        image: openLorryImg
      },
      {
        id: "short-v8",
        chipId: "open-lorries",
        title: "Tata 407 Gold SFC High Deck Open Lorry",
        categoryTag: "ALL-WEATHER OPEN TRUCK",
        rating: "4.9",
        contractPrice: "₹5.1k/day",
        outrightPrice: "₹9.80 - 10.90 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Tirupur, TN",
        readyUnits: "20 Units Ready",
        image: openLorryImg
      },
      {
        id: "short-v9",
        chipId: "containers",
        title: "BharatBenz 2823C Multi-Axle Container Truck",
        categoryTag: "CONTAINER CARRIER TRUCK",
        rating: "4.9",
        contractPrice: "₹7.2k/day",
        outrightPrice: "₹28.50 - 32.00 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Kochi Port, KL",
        readyUnits: "15 Units Ready",
        image: containersImg
      },
      {
        id: "short-v10",
        chipId: "containers",
        title: "Tata Signa 4825.TK Heavy Container Truck",
        categoryTag: "PORT LOGISTICS CONTAINER",
        rating: "4.9",
        contractPrice: "₹8.0k/day",
        outrightPrice: "₹34.00 - 38.50 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Chennai Port, TN",
        readyUnits: "12 Units Ready",
        image: containersImg
      },
      {
        id: "short-v11",
        chipId: "three-wheelers",
        title: "Piaggio Ape Auto DX High Load Carrier",
        categoryTag: "3-WHEELER CARGO",
        rating: "4.8",
        contractPrice: "₹1.8k/day",
        outrightPrice: "₹2.90 - 3.35 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Madurai, TN",
        readyUnits: "25 Units Ready",
        image: vechileImg
      },
      {
        id: "short-v12",
        chipId: "three-wheelers",
        title: "Bajaj Maxima C Heavy Duty Cargo 3-Wheeler",
        categoryTag: "LAST MILE 3-WHEELER",
        rating: "4.8",
        contractPrice: "₹1.9k/day",
        outrightPrice: "₹2.85 - 3.20 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Trichy, TN",
        readyUnits: "30 Units Ready",
        image: vechileImg
      }
    ]
  },
  agriculture: {
    sectorId: "agriculture",
    title: "Agriculture",
    badge: "Fresh Harvest",
    subtitle: "320+ Verified Farm Suppliers & Crops",
    chips: [
      { id: "all", label: "All Produce", count: 12, image: agriGrainImg },
      { id: "vegetables", label: "Fresh Vegetables", count: 3, image: capsicumImg },
      { id: "onions", label: "Farm Onions", count: 3, image: onionsImg },
      { id: "roots", label: "Potatoes & Roots", count: 2, image: potatoesImg },
      { id: "grains", label: "Grains & Wheat", count: 4, image: wheatGrainsImg }
    ],
    shorts: [
      {
        id: "short-a1",
        chipId: "vegetables",
        title: "Fresh Green Capsicum (A-Grade)",
        categoryTag: "FRESH VEGETABLES HARVEST",
        rating: "4.9",
        contractPrice: "₹45/kg",
        outrightPrice: "₹40 - 52 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ooty, TN",
        readyUnits: "12 Tons Ready",
        image: capsicumImg
      },
      {
        id: "short-a2",
        chipId: "onions",
        title: "Premium Farm Fresh Red Onions",
        categoryTag: "BULK FARM ONIONS LOT",
        rating: "4.8",
        contractPrice: "₹28/kg",
        outrightPrice: "₹25 - 32 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Nashik, MH",
        readyUnits: "45 Tons Ready",
        image: onionsImg
      },
      {
        id: "short-a3",
        chipId: "roots",
        title: "Organic Harvest Potatoes (Table Grade)",
        categoryTag: "A-GRADE FARM POTATOES",
        rating: "4.7",
        contractPrice: "₹22/kg",
        outrightPrice: "₹20 - 26 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hassan, KA",
        readyUnits: "28 Tons Ready",
        image: potatoesImg
      },
      {
        id: "short-a4",
        chipId: "vegetables",
        title: "Grade-A Crunchy Fresh Orange Carrots",
        categoryTag: "HYDROPONIC FARM CARROTS",
        rating: "4.9",
        contractPrice: "₹38/kg",
        outrightPrice: "₹35 - 42 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hosur, TN",
        readyUnits: "15 Tons Ready",
        image: carrotImg
      },
      {
        id: "short-a5",
        chipId: "grains",
        title: "Premium Sharbati Golden Wheat Grains",
        categoryTag: "A-GRADE WHEAT GRAIN",
        rating: "4.9",
        contractPrice: "₹32/kg",
        outrightPrice: "₹30 - 35 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Indore, MP",
        readyUnits: "80 Tons Ready",
        image: wheatGrainsImg
      },
      {
        id: "short-a6",
        chipId: "grains",
        title: "Organic Traditional Basmati Rice Paddy Grains",
        categoryTag: "PREMIUM RICE GRAIN",
        rating: "4.9",
        contractPrice: "₹55/kg",
        outrightPrice: "₹50 - 62 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Karnal, HR",
        readyUnits: "60 Tons Ready",
        image: agriGrainImg
      },
      {
        id: "short-a7",
        chipId: "vegetables",
        title: "Hydroponic Crisp Bell Peppers & Capsicum",
        categoryTag: "GREENHOUSE CAPSICUM",
        rating: "4.8",
        contractPrice: "₹48/kg",
        outrightPrice: "₹44 - 55 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Pune, MH",
        readyUnits: "8 Tons Ready",
        image: capsicumImg
      },
      {
        id: "short-a8",
        chipId: "onions",
        title: "Nashik Export Grade White Onions",
        categoryTag: "EXPORT WHITE ONIONS",
        rating: "4.8",
        contractPrice: "₹30/kg",
        outrightPrice: "₹28 - 34 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Lasalgaon, MH",
        readyUnits: "35 Tons Ready",
        image: onionsImg
      },
      {
        id: "short-a9",
        chipId: "roots",
        title: "Baby Red Table Potatoes (Bulk Sack)",
        categoryTag: "ROOT POTATOES CROP",
        rating: "4.7",
        contractPrice: "₹24/kg",
        outrightPrice: "₹22 - 28 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Kolar, KA",
        readyUnits: "22 Tons Ready",
        image: potatoesImg
      },
      {
        id: "short-a10",
        chipId: "onions",
        title: "Small Farm Shallots & Sambhar Red Onions",
        categoryTag: "INDIGENOUS SHALLOT ONIONS",
        rating: "4.9",
        contractPrice: "₹52/kg",
        outrightPrice: "₹48 - 58 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Dindigul, TN",
        readyUnits: "18 Tons Ready",
        image: onionsImg
      },
      {
        id: "short-a11",
        chipId: "grains",
        title: "High-Yield Golden Maize Corn Grain Feed",
        categoryTag: "POULTRY CORN GRAIN",
        rating: "4.8",
        contractPrice: "₹26/kg",
        outrightPrice: "₹24 - 29 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Davangere, KA",
        readyUnits: "90 Tons Ready",
        image: agricultureImg
      },
      {
        id: "short-a12",
        chipId: "grains",
        title: "Sun-Dried Whole Soyabean Agriculture Grains",
        categoryTag: "HIGH-PROTEIN SOYA GRAIN",
        rating: "4.9",
        contractPrice: "₹42/kg",
        outrightPrice: "₹39 - 46 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Nagpur, MH",
        readyUnits: "50 Tons Ready",
        image: agriGrainImg
      }
    ]
  },
  machinery: {
    sectorId: "machinery",
    title: "Machinery",
    badge: "Heavy Tooling",
    subtitle: "210+ Verified Industrial Lines & CNC",
    chips: [
      { id: "all", label: "All Machinery", count: 12, image: machineryImg },
      { id: "cnc", label: "CNC Milling", count: 3, image: machineryImg },
      { id: "compressor", label: "Compressors", count: 3, image: machineryImg },
      { id: "sensors", label: "Sensors & Tech", count: 3, image: machineryImg },
      { id: "generators", label: "Generators", count: 3, image: machineryImg }
    ],
    shorts: [
      {
        id: "short-m1",
        chipId: "cnc",
        title: "5-Axis High Precision CNC Milling Center",
        categoryTag: "CNC MACHINERY",
        rating: "4.9",
        contractPrice: "₹45k/mo",
        outrightPrice: "₹18.5 - 22.0 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Pune, MH",
        readyUnits: "4 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m2",
        chipId: "cnc",
        title: "Heavy Duty Horizontal CNC Lathe Machine",
        categoryTag: "INDUSTRIAL LATHE MACHINERY",
        rating: "4.8",
        contractPrice: "₹38k/mo",
        outrightPrice: "₹14.2 - 16.5 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Rajkot, GJ",
        readyUnits: "6 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m3",
        chipId: "cnc",
        title: "Vertical Machining Center VMC 850 High Speed",
        categoryTag: "PRECISION VMC MACHINERY",
        rating: "4.9",
        contractPrice: "₹52k/mo",
        outrightPrice: "₹22.0 - 26.5 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bengaluru, KA",
        readyUnits: "3 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m4",
        chipId: "compressor",
        title: "Industrial Rotary Screw Air Compressor (50HP)",
        categoryTag: "AIR COMPRESSOR MACHINERY",
        rating: "4.8",
        contractPrice: "₹18k/mo",
        outrightPrice: "₹6.80 - 7.50 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ahmedabad, GJ",
        readyUnits: "8 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m5",
        chipId: "compressor",
        title: "Two-Stage High Pressure Reciprocating Compressor",
        categoryTag: "HIGH PRESSURE COMPRESSOR",
        rating: "4.7",
        contractPrice: "₹14k/mo",
        outrightPrice: "₹4.50 - 5.20 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Coimbatore, TN",
        readyUnits: "12 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m6",
        chipId: "compressor",
        title: "Silent Oil-Free Scroll Dental Compressor System",
        categoryTag: "OIL-FREE COMPRESSOR",
        rating: "4.9",
        contractPrice: "₹22k/mo",
        outrightPrice: "₹5.90 - 6.80 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Faridabad, HR",
        readyUnits: "9 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m7",
        chipId: "sensors",
        title: "Industrial Laser Alignment & Proximity Sensors",
        categoryTag: "AUTOMATION SENSORS MACHINERY",
        rating: "4.9",
        contractPrice: "₹2.4k/mo",
        outrightPrice: "₹8,500 - 11,200 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bengaluru, KA",
        readyUnits: "120 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m8",
        chipId: "sensors",
        title: "Digital Optical Color Mark Sensors for Packaging Lines",
        categoryTag: "OPTICAL SENSORS MACHINERY",
        rating: "4.8",
        contractPrice: "₹1.8k/mo",
        outrightPrice: "₹6,200 - 8,400 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Chennai, TN",
        readyUnits: "85 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m9",
        chipId: "sensors",
        title: "Electromagnetic Ultrasonic Flow Sensor Transmitter",
        categoryTag: "FLOW SENSORS MACHINERY",
        rating: "4.8",
        contractPrice: "₹3.2k/mo",
        outrightPrice: "₹12,500 - 15,000 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hyderabad, TS",
        readyUnits: "40 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m10",
        chipId: "generators",
        title: "Heavy-Duty Diesel Industrial Generator (125 kVA)",
        categoryTag: "POWER GENERATOR MACHINERY",
        rating: "4.8",
        contractPrice: "₹35k/mo",
        outrightPrice: "₹12.50 - 14.80 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Coimbatore, TN",
        readyUnits: "6 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m11",
        chipId: "generators",
        title: "Silent Acoustic Canopy Diesel Genset (250 kVA)",
        categoryTag: "ACOUSTIC GENERATOR MACHINERY",
        rating: "4.9",
        contractPrice: "₹55k/mo",
        outrightPrice: "₹18.00 - 21.50 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Kolkata, WB",
        readyUnits: "4 Units Ready",
        image: machineryImg
      },
      {
        id: "short-m12",
        chipId: "generators",
        title: "Portable Industrial Backup Generator (25 kVA)",
        categoryTag: "BACKUP GENERATOR MACHINERY",
        rating: "4.7",
        contractPrice: "₹12k/mo",
        outrightPrice: "₹3.80 - 4.50 Lakh",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Pune, MH",
        readyUnits: "15 Units Ready",
        image: machineryImg
      }
    ]
  },
  electronics: {
    sectorId: "electronics",
    title: "Electronics",
    badge: "Verified Parts",
    subtitle: "480+ Verified Components & Circuits",
    chips: [
      { id: "all", label: "All Electronics", count: 12, image: electronicsChipImg },
      { id: "pcb", label: "Circuit Boards", count: 3, image: electronicsChipImg },
      { id: "sensors", label: "IoT Sensors", count: 3, image: electronicsChipImg },
      { id: "modules", label: "Power Modules", count: 3, image: electronicsChipImg },
      { id: "relays", label: "Micro Relays", count: 3, image: electronicsChipImg }
    ],
    shorts: [
      {
        id: "short-e1",
        chipId: "pcb",
        title: "Industrial 6-Layer SMT Printed Circuit Board Assembly",
        categoryTag: "PCB ASSEMBLY ELECTRONICS",
        rating: "4.9",
        contractPrice: "₹380/unit",
        outrightPrice: "₹350 - 420 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Noida, UP",
        readyUnits: "1,500 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e2",
        chipId: "pcb",
        title: "Multi-Layer Rigid-Flex Circuit Board Assembly",
        categoryTag: "FLEX PCB ELECTRONICS",
        rating: "4.8",
        contractPrice: "₹520/unit",
        outrightPrice: "₹480 - 580 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bengaluru, KA",
        readyUnits: "800 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e3",
        chipId: "pcb",
        title: "High-Frequency Ro4350B Microwave PCB Circuit",
        categoryTag: "RF PCB ELECTRONICS",
        rating: "4.9",
        contractPrice: "₹650/unit",
        outrightPrice: "₹600 - 720 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Chennai, TN",
        readyUnits: "600 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e4",
        chipId: "sensors",
        title: "Smart Optical Laser Distance Sensors (IP67)",
        categoryTag: "AUTOMATION SENSORS ELECTRONICS",
        rating: "4.8",
        contractPrice: "₹1.2k/unit",
        outrightPrice: "₹1,100 - 1,450 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hyderabad, TS",
        readyUnits: "600 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e5",
        chipId: "sensors",
        title: "Digital Temperature & Humidity IoT Probe Sensor",
        categoryTag: "IOT SENSORS ELECTRONICS",
        rating: "4.9",
        contractPrice: "₹450/unit",
        outrightPrice: "₹400 - 520 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Pune, MH",
        readyUnits: "2,000 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e6",
        chipId: "sensors",
        title: "Piezoelectric Industrial Vibration Accelerometer Sensor",
        categoryTag: "VIBRATION SENSORS ELECTRONICS",
        rating: "4.8",
        contractPrice: "₹1.6k/unit",
        outrightPrice: "₹1,450 - 1,800 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Coimbatore, TN",
        readyUnits: "450 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e7",
        chipId: "modules",
        title: "High Efficiency IGBT Switching Power Modules",
        categoryTag: "POWER MODULES ELECTRONICS",
        rating: "4.9",
        contractPrice: "₹850/unit",
        outrightPrice: "₹820 - 950 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Pune, MH",
        readyUnits: "900 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e8",
        chipId: "modules",
        title: "Isolated DC-DC Buck Converter 48V to 12V Module",
        categoryTag: "DC CONVERTER ELECTRONICS",
        rating: "4.8",
        contractPrice: "₹340/unit",
        outrightPrice: "₹310 - 380 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bengaluru, KA",
        readyUnits: "1,200 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e9",
        chipId: "modules",
        title: "Dual-Bridge Motor Driver Power Module H-Bridge",
        categoryTag: "DRIVER MODULE ELECTRONICS",
        rating: "4.7",
        contractPrice: "₹420/unit",
        outrightPrice: "₹390 - 460 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ahmedabad, GJ",
        readyUnits: "1,800 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e10",
        chipId: "relays",
        title: "Solid State Industrial Micro Control Relays (24V)",
        categoryTag: "CONTROL RELAYS ELECTRONICS",
        rating: "4.8",
        contractPrice: "₹160/unit",
        outrightPrice: "₹145 - 190 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Chennai, TN",
        readyUnits: "3,200 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e11",
        chipId: "relays",
        title: "4-Channel DIN Rail Mount Optocoupler Relay Board",
        categoryTag: "DIN RAIL RELAYS ELECTRONICS",
        rating: "4.9",
        contractPrice: "₹280/unit",
        outrightPrice: "₹250 - 320 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Gurugram, HR",
        readyUnits: "1,100 Units Ready",
        image: electronicsChipImg
      },
      {
        id: "short-e12",
        chipId: "relays",
        title: "High Current Automotive Power Relay 12V 40A",
        categoryTag: "AUTOMOTIVE RELAY ELECTRONICS",
        rating: "4.8",
        contractPrice: "₹95/unit",
        outrightPrice: "₹85 - 110 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Noida, UP",
        readyUnits: "5,000 Units Ready",
        image: electronicsChipImg
      }
    ]
  },
  "raw-materials": {
    sectorId: "raw-materials",
    title: "Raw Materials",
    badge: "Certified Stock",
    subtitle: "195+ Verified Yards & Steel Stock",
    chips: [
      { id: "all", label: "All Materials", count: 12, image: rawConstructionImg },
      { id: "steel", label: "Steel & TMT", count: 3, image: steelPipesImg },
      { id: "cement", label: "Cement Bags", count: 3, image: rawConstructionImg },
      { id: "sand", label: "Aggregates", count: 3, image: rawConstructionImg },
      { id: "gravel", label: "Gravel & Stone", count: 3, image: rawConstructionImg }
    ],
    shorts: [
      {
        id: "short-r1",
        chipId: "steel",
        title: "TMT Fe-550D High Ductility Steel Rebars",
        categoryTag: "STRUCTURAL STEEL RAW MATERIAL",
        rating: "4.9",
        contractPrice: "₹56k/MT",
        outrightPrice: "₹54,000 - 58,500 / MT",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Jamshedpur, JH",
        readyUnits: "250 Metric Tons Ready",
        image: steelPipesImg
      },
      {
        id: "short-r2",
        chipId: "steel",
        title: "Industrial Seamless Mild Steel Round Pipes",
        categoryTag: "STEEL PIPES RAW MATERIAL",
        rating: "4.8",
        contractPrice: "₹62k/MT",
        outrightPrice: "₹59,000 - 64,000 / MT",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Rourkela, OR",
        readyUnits: "180 Metric Tons Ready",
        image: steelPipesImg
      },
      {
        id: "short-r3",
        chipId: "steel",
        title: "Heavy Structural MS Hollow Section Tubes",
        categoryTag: "HOLLOW SECTION STEEL",
        rating: "4.9",
        contractPrice: "₹58k/MT",
        outrightPrice: "₹56,000 - 61,000 / MT",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bhilai, CG",
        readyUnits: "150 Metric Tons Ready",
        image: steelPipesImg
      },
      {
        id: "short-r4",
        chipId: "cement",
        title: "OPC 53 Grade High Performance Cement Bags",
        categoryTag: "BULK CEMENT RAW MATERIAL",
        rating: "4.8",
        contractPrice: "₹340/bag",
        outrightPrice: "₹320 - 365 / Bag",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Nagpur, MH",
        readyUnits: "4,000 Bags Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r5",
        chipId: "cement",
        title: "PPC Portland Pozzolana Weather-Shield Cement",
        categoryTag: "PPC CEMENT RAW MATERIAL",
        rating: "4.9",
        contractPrice: "₹325/bag",
        outrightPrice: "₹305 - 345 / Bag",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ariyalur, TN",
        readyUnits: "6,000 Bags Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r6",
        chipId: "cement",
        title: "Rapid Hardening Precast Grade Bulk Cement",
        categoryTag: "PRECAST CEMENT RAW MATERIAL",
        rating: "4.8",
        contractPrice: "₹360/bag",
        outrightPrice: "₹340 - 380 / Bag",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Satna, MP",
        readyUnits: "2,500 Bags Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r7",
        chipId: "sand",
        title: "Manufactured M-Sand & Plastering Sand",
        categoryTag: "CONSTRUCTION AGGREGATE SAND",
        rating: "4.8",
        contractPrice: "₹1.4k/ton",
        outrightPrice: "₹1,200 - 1,500 / Ton",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Kanchipuram, TN",
        readyUnits: "800 Tons Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r8",
        chipId: "sand",
        title: "Double Washed Concrete Grade Fine M-Sand",
        categoryTag: "WASHED CONCRETE SAND",
        rating: "4.9",
        contractPrice: "₹1.6k/ton",
        outrightPrice: "₹1,400 - 1,750 / Ton",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hosur, TN",
        readyUnits: "600 Tons Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r9",
        chipId: "sand",
        title: "Graded River Coarse Sand for Masonry Work",
        categoryTag: "RIVER SAND RAW MATERIAL",
        rating: "4.7",
        contractPrice: "₹1.8k/ton",
        outrightPrice: "₹1,600 - 2,000 / Ton",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Tiruchirappalli, TN",
        readyUnits: "400 Tons Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r10",
        chipId: "gravel",
        title: "Crushed Blue Metal Gravel & 20mm Aggregate",
        categoryTag: "CRUSHED STONE GRAVEL",
        rating: "4.7",
        contractPrice: "₹1.1k/ton",
        outrightPrice: "₹950 - 1,250 / Ton",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Salem, TN",
        readyUnits: "1,200 Tons Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r11",
        chipId: "gravel",
        title: "10mm Graded Blue Metal Chips for Road Mix",
        categoryTag: "ROAD CHIPS GRAVEL",
        rating: "4.8",
        contractPrice: "₹1.2k/ton",
        outrightPrice: "₹1,050 - 1,350 / Ton",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Namakkal, TN",
        readyUnits: "900 Tons Ready",
        image: rawConstructionImg
      },
      {
        id: "short-r12",
        chipId: "gravel",
        title: "40mm Railway Ballast & Foundation Hard Core",
        categoryTag: "BALLAST STONE GRAVEL",
        rating: "4.8",
        contractPrice: "₹900/ton",
        outrightPrice: "₹800 - 1,050 / Ton",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Madurai, TN",
        readyUnits: "1,500 Tons Ready",
        image: rawConstructionImg
      }
    ]
  },
  packaging: {
    sectorId: "packaging",
    title: "Packaging",
    badge: "Warehouse Stock",
    subtitle: "310+ Verified Packaging & Storage",
    chips: [
      { id: "all", label: "All Packaging", count: 12, image: packingWarehouseImg },
      { id: "cartons", label: "Carton Boxes", count: 3, image: packingWarehouseImg },
      { id: "pallets", label: "Wooden Pallets", count: 3, image: packingWarehouseImg },
      { id: "stretch", label: "Stretch Film", count: 3, image: packingWarehouseImg },
      { id: "drums", label: "Barrels & Drums", count: 3, image: packingWarehouseImg }
    ],
    shorts: [
      {
        id: "short-p1",
        chipId: "cartons",
        title: "5-Ply Heavy Duty Kraft Corrugated Shipping Cartons",
        categoryTag: "CORRUGATED BOXES PACKAGING",
        rating: "4.9",
        contractPrice: "₹34/unit",
        outrightPrice: "₹30 - 38 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bhiwandi, MH",
        readyUnits: "12,000 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p2",
        chipId: "cartons",
        title: "3-Ply Custom Printed E-Commerce Mailing Boxes",
        categoryTag: "MAILING BOXES PACKAGING",
        rating: "4.8",
        contractPrice: "₹18/unit",
        outrightPrice: "₹15 - 22 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bengaluru, KA",
        readyUnits: "25,000 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p3",
        chipId: "cartons",
        title: "Heavy Duty Die-Cut Master Storage Cartons",
        categoryTag: "STORAGE CARTONS PACKAGING",
        rating: "4.9",
        contractPrice: "₹45/unit",
        outrightPrice: "₹40 - 52 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Chennai, TN",
        readyUnits: "8,500 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p4",
        chipId: "pallets",
        title: "Export Standard Heat-Treated Pine Wood Pallets",
        categoryTag: "WOOD PALLETS PACKAGING",
        rating: "4.8",
        contractPrice: "₹620/unit",
        outrightPrice: "₹580 - 680 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Chennai, TN",
        readyUnits: "850 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p5",
        chipId: "pallets",
        title: "Euro Standard 4-Way Heavy Duty Wooden Pallets",
        categoryTag: "EURO PALLETS PACKAGING",
        rating: "4.9",
        contractPrice: "₹750/unit",
        outrightPrice: "₹700 - 820 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Mumbai, MH",
        readyUnits: "1,200 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p6",
        chipId: "pallets",
        title: "Recycled Plastic Heavy Duty Warehouse Pallets",
        categoryTag: "PLASTIC PALLETS PACKAGING",
        rating: "4.8",
        contractPrice: "₹1.4k/unit",
        outrightPrice: "₹1,250 - 1,550 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ahmedabad, GJ",
        readyUnits: "600 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p7",
        chipId: "stretch",
        title: "Cast Stretch Wrap Rolls (23 Micron High Hold)",
        categoryTag: "STRETCH FILM PACKAGING",
        rating: "4.9",
        contractPrice: "₹180/roll",
        outrightPrice: "₹165 - 210 / Roll",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Vapi, GJ",
        readyUnits: "5,000 Rolls Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p8",
        chipId: "stretch",
        title: "High Performance Machine Grade Stretch Film Roll",
        categoryTag: "MACHINE FILM PACKAGING",
        rating: "4.8",
        contractPrice: "₹450/roll",
        outrightPrice: "₹410 - 490 / Roll",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Daman, UT",
        readyUnits: "2,500 Rolls Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p9",
        chipId: "stretch",
        title: "Manual Hand Stretch Cling Wrap with Dispenser",
        categoryTag: "CLING WRAP PACKAGING",
        rating: "4.7",
        contractPrice: "₹130/roll",
        outrightPrice: "₹115 - 150 / Roll",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hyderabad, TS",
        readyUnits: "7,000 Rolls Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p10",
        chipId: "drums",
        title: "210-Litre Heavy Duty HDPE Chemical Barrels & Drums",
        categoryTag: "INDUSTRIAL DRUMS PACKAGING",
        rating: "4.8",
        contractPrice: "₹1.1k/unit",
        outrightPrice: "₹1,050 - 1,280 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Thane, MH",
        readyUnits: "650 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p11",
        chipId: "drums",
        title: "Open Top Galvanized Steel Storage Barrels (200L)",
        categoryTag: "STEEL DRUMS PACKAGING",
        rating: "4.9",
        contractPrice: "₹1.6k/unit",
        outrightPrice: "₹1,450 - 1,800 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Vadodara, GJ",
        readyUnits: "400 Units Ready",
        image: packingWarehouseImg
      },
      {
        id: "short-p12",
        chipId: "drums",
        title: "Tight-Head Food Grade Plastic Liquid Drums (100L)",
        categoryTag: "FOOD GRADE DRUMS PACKAGING",
        rating: "4.8",
        contractPrice: "₹820/unit",
        outrightPrice: "₹760 - 900 / Unit",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Surat, GJ",
        readyUnits: "800 Units Ready",
        image: packingWarehouseImg
      }
    ]
  },
  chemicals: {
    sectorId: "chemicals",
    title: "Chemicals",
    badge: "Lab Verified",
    subtitle: "115+ Verified Chemical & Fuel Plants",
    chips: [
      { id: "all", label: "All Chemicals", count: 12, image: industrialChemicalsImg },
      { id: "solvents", label: "Solvents", count: 3, image: industrialChemicalsImg },
      { id: "fertilizers", label: "Bulk Fertilizer", count: 3, image: industrialChemicalsImg },
      { id: "polymers", label: "Polymer Resins", count: 3, image: industrialChemicalsImg },
      { id: "acids", label: "Industrial Acids", count: 3, image: industrialChemicalsImg }
    ],
    shorts: [
      {
        id: "short-c1",
        chipId: "solvents",
        title: "High Purity Industrial Grade Methanol (99.85%)",
        categoryTag: "BULK SOLVENTS CHEMICALS",
        rating: "4.9",
        contractPrice: "₹48/liter",
        outrightPrice: "₹45 - 54 / Liter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Dahej, GJ",
        readyUnits: "24,000 Liters Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c2",
        chipId: "solvents",
        title: "Technical Grade Pure Ethyl Acetate Solvent",
        categoryTag: "ETHYL ACETATE CHEMICALS",
        rating: "4.8",
        contractPrice: "₹78/liter",
        outrightPrice: "₹72 - 85 / Liter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ankleshwar, GJ",
        readyUnits: "16,000 Liters Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c3",
        chipId: "solvents",
        title: "Isopropyl Alcohol (IPA 99.9% Electronic Grade)",
        categoryTag: "IPA SOLVENT CHEMICALS",
        rating: "4.9",
        contractPrice: "₹92/liter",
        outrightPrice: "₹86 - 105 / Liter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Panvel, MH",
        readyUnits: "12,000 Liters Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c4",
        chipId: "fertilizers",
        title: "Water Soluble NPK 19-19-19 Fertilizer Grade",
        categoryTag: "AGRI FERTILIZER CHEMICALS",
        rating: "4.8",
        contractPrice: "₹65/kg",
        outrightPrice: "₹60 - 72 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Vadodara, GJ",
        readyUnits: "18 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c5",
        chipId: "fertilizers",
        title: "Technical Grade Urea Prills 46% Nitrogen",
        categoryTag: "UREA CHEMICALS",
        rating: "4.8",
        contractPrice: "₹28/kg",
        outrightPrice: "₹26 - 32 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Kota, RJ",
        readyUnits: "40 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c6",
        chipId: "fertilizers",
        title: "Granular Di-Ammonium Phosphate (DAP 18-46-0)",
        categoryTag: "DAP FERTILIZER CHEMICALS",
        rating: "4.9",
        contractPrice: "₹55/kg",
        outrightPrice: "₹50 - 62 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Kandla, GJ",
        readyUnits: "30 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c7",
        chipId: "polymers",
        title: "Virgin HDPE Polymer Resin Pellets (Film Grade)",
        categoryTag: "HDPE POLYMERS CHEMICALS",
        rating: "4.9",
        contractPrice: "₹115/kg",
        outrightPrice: "₹110 - 125 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Hazira, GJ",
        readyUnits: "35 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c8",
        chipId: "polymers",
        title: "Low Density Polyethylene (LDPE) Extrusion Granules",
        categoryTag: "LDPE RESINS CHEMICALS",
        rating: "4.8",
        contractPrice: "₹108/kg",
        outrightPrice: "₹102 - 118 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Nagothane, MH",
        readyUnits: "28 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c9",
        chipId: "polymers",
        title: "Polypropylene Injection Molding Copolymer Resin",
        categoryTag: "PP POLYMER CHEMICALS",
        rating: "4.9",
        contractPrice: "₹122/kg",
        outrightPrice: "₹116 - 130 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Dahej, GJ",
        readyUnits: "22 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c10",
        chipId: "acids",
        title: "Technical Grade Hydrochloric Acid HCl 33%",
        categoryTag: "HCL ACID CHEMICALS",
        rating: "4.8",
        contractPrice: "₹14/kg",
        outrightPrice: "₹12 - 18 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "GIDC Dahej, GJ",
        readyUnits: "50 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c11",
        chipId: "acids",
        title: "Concentrated Sulfuric Acid H2SO4 98% Industrial",
        categoryTag: "SULFURIC ACID CHEMICALS",
        rating: "4.9",
        contractPrice: "₹16/kg",
        outrightPrice: "₹14 - 20 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Vapi, GJ",
        readyUnits: "45 Tons Ready",
        image: industrialChemicalsImg
      },
      {
        id: "short-c12",
        chipId: "acids",
        title: "Glacial Acetic Acid 99.85% High Purity Grade",
        categoryTag: "ACETIC ACID CHEMICALS",
        rating: "4.8",
        contractPrice: "₹58/kg",
        outrightPrice: "₹52 - 65 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bharuch, GJ",
        readyUnits: "20 Tons Ready",
        image: industrialChemicalsImg
      }
    ]
  },
  textiles: {
    sectorId: "textiles",
    title: "Textiles",
    badge: "Mill Certified",
    subtitle: "280+ Verified Spinning & Weaving Mills",
    chips: [
      { id: "all", label: "All Textiles", count: 12, image: textilesImg },
      { id: "cotton-fabrics", label: "Cotton Fabrics", count: 3, image: textilesImg },
      { id: "yarn", label: "Bulk Yarn", count: 3, image: textilesImg },
      { id: "synthetic", label: "Synthetic Rolls", count: 3, image: textilesImg },
      { id: "denim", label: "Denim & Trims", count: 3, image: textilesImg }
    ],
    shorts: [
      {
        id: "short-t1",
        chipId: "cotton-fabrics",
        title: "100% Combed Cotton Woven Fabric Greige Rolls",
        categoryTag: "COMBED COTTON TEXTILES",
        rating: "4.9",
        contractPrice: "₹92/meter",
        outrightPrice: "₹85 - 105 / Meter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Surat, GJ",
        readyUnits: "18,000 Meters Ready",
        image: textilesImg
      },
      {
        id: "short-t2",
        chipId: "cotton-fabrics",
        title: "Organic Cotton Single Jersey Knit Fabric Rolls",
        categoryTag: "KNIT FABRIC TEXTILES",
        rating: "4.8",
        contractPrice: "₹240/kg",
        outrightPrice: "₹220 - 270 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Tiruppur, TN",
        readyUnits: "6,500 KG Ready",
        image: textilesImg
      },
      {
        id: "short-t3",
        chipId: "cotton-fabrics",
        title: "Plain Weave Poplin Shirting Cotton Fabric",
        categoryTag: "POPLIN SHIRTING TEXTILES",
        rating: "4.9",
        contractPrice: "₹115/meter",
        outrightPrice: "₹105 - 128 / Meter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ahmedabad, GJ",
        readyUnits: "12,000 Meters Ready",
        image: textilesImg
      },
      {
        id: "short-t4",
        chipId: "yarn",
        title: "Ring-Spun Carded Cotton Weaving Yarn 30s Count",
        categoryTag: "COTTON YARN TEXTILES",
        rating: "4.9",
        contractPrice: "₹285/kg",
        outrightPrice: "₹270 - 310 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Coimbatore, TN",
        readyUnits: "12 Tons Ready",
        image: textilesImg
      },
      {
        id: "short-t5",
        chipId: "yarn",
        title: "100% Combed Cotton Hosiery Knitting Yarn 40s",
        categoryTag: "HOSIERY YARN TEXTILES",
        rating: "4.8",
        contractPrice: "₹320/kg",
        outrightPrice: "₹300 - 345 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Erode, TN",
        readyUnits: "15 Tons Ready",
        image: textilesImg
      },
      {
        id: "short-t6",
        chipId: "yarn",
        title: "Polyester-Cotton Blended Melange Yarn 32s",
        categoryTag: "MELANGE YARN TEXTILES",
        rating: "4.8",
        contractPrice: "₹240/kg",
        outrightPrice: "₹225 - 265 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ludhiana, PB",
        readyUnits: "9 Tons Ready",
        image: textilesImg
      },
      {
        id: "short-t7",
        chipId: "synthetic",
        title: "Polyester-Viscose Formal Suiting Fabric Rolls",
        categoryTag: "SUITING ROLLS TEXTILES",
        rating: "4.8",
        contractPrice: "₹175/meter",
        outrightPrice: "₹160 - 195 / Meter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bhilwara, RJ",
        readyUnits: "8,000 Meters Ready",
        image: textilesImg
      },
      {
        id: "short-t8",
        chipId: "synthetic",
        title: "High Tenacity Spun Polyester Twill Weave Textile",
        categoryTag: "TWILL TEXTILES",
        rating: "4.9",
        contractPrice: "₹140/meter",
        outrightPrice: "₹130 - 155 / Meter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Surat, GJ",
        readyUnits: "14,000 Meters Ready",
        image: textilesImg
      },
      {
        id: "short-t9",
        chipId: "synthetic",
        title: "Microfiber Brushed Polar Fleece Fabric Rolls",
        categoryTag: "FLEECE TEXTILES",
        rating: "4.7",
        contractPrice: "₹190/kg",
        outrightPrice: "₹175 - 215 / KG",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Panipat, HR",
        readyUnits: "5,000 KG Ready",
        image: textilesImg
      },
      {
        id: "short-t10",
        chipId: "denim",
        title: "Heavy 14oz Indigo Raw Rigid Denim Fabric Rolls",
        categoryTag: "INDIGO DENIM TEXTILES",
        rating: "4.9",
        contractPrice: "₹165/meter",
        outrightPrice: "₹150 - 185 / Meter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Ahmedabad, GJ",
        readyUnits: "15,000 Meters Ready",
        image: textilesImg
      },
      {
        id: "short-t11",
        chipId: "denim",
        title: "Cotton-Spandex Stretch Denim Weave Fabric",
        categoryTag: "STRETCH DENIM TEXTILES",
        rating: "4.8",
        contractPrice: "₹185/meter",
        outrightPrice: "₹170 - 205 / Meter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Surat, GJ",
        readyUnits: "10,000 Meters Ready",
        image: textilesImg
      },
      {
        id: "short-t12",
        chipId: "denim",
        title: "Cross-Hatch Slub Washed Denim Fabric Material",
        categoryTag: "SLUB DENIM TEXTILES",
        rating: "4.8",
        contractPrice: "₹170/meter",
        outrightPrice: "₹155 - 190 / Meter",
        supplierBadge: "Verified BIXOO Supplier",
        location: "Bengaluru, KA",
        readyUnits: "7,500 Meters Ready",
        image: textilesImg
      }
    ]
  }
};

subCategoryShowcaseData["vechiles"] = subCategoryShowcaseData.vehicles;
subCategoryShowcaseData["electonics"] = subCategoryShowcaseData.electronics;
subCategoryShowcaseData["texiles"] = subCategoryShowcaseData.textiles;

export const buyerSupplierOffers = {
  "RQ-8910": [
    {
      id: "OFFER-101",
      supplierName: "Sri Murugan Agro Mills",
      rating: "4.9",
      verified: true,
      supplyType: "Full Supply",
      quantity: "2000 KG",
      pricePerUnit: "₹32/KG",
      totalPrice: "₹64,000",
      deliveryTimeline: "Delivery in 2 Days",
      location: "Madurai, TN",
      reachZone: "Tamil Nadu Wide"
    },
    {
      id: "OFFER-102",
      supplierName: "Kongu Farm Produces",
      rating: "4.8",
      verified: true,
      supplyType: "Partial Supply",
      quantity: "1200 KG",
      pricePerUnit: "₹30/KG",
      totalPrice: "₹36,000",
      deliveryTimeline: "Delivery in 3 Days",
      location: "Coimbatore, TN",
      reachZone: "Local Zone"
    },
    {
      id: "OFFER-103",
      supplierName: "Kaveri Grain Logistics",
      rating: "4.7",
      verified: true,
      supplyType: "Full Supply",
      quantity: "2000 KG",
      pricePerUnit: "₹33.5/KG",
      totalPrice: "₹67,000",
      deliveryTimeline: "Express Next Day Delivery",
      location: "Salem, TN",
      reachZone: "Tamil Nadu Wide"
    }
  ],
  "RQ-8924": [
    {
      id: "OFFER-201",
      supplierName: "Salem Steel Corporation",
      rating: "4.9",
      verified: true,
      supplyType: "Full Supply",
      quantity: "500 Tons",
      pricePerUnit: "₹48,000/Ton",
      totalPrice: "₹2,40,00,000",
      deliveryTimeline: "Delivery in 4 Days",
      location: "Salem, TN",
      reachZone: "Tamil Nadu Wide"
    }
  ],
  "RQ-8895": [
    {
      id: "OFFER-301",
      supplierName: "Kongu Agro Farm Gate",
      rating: "4.8",
      verified: true,
      supplyType: "Partial Supply",
      quantity: "8 Tons",
      pricePerUnit: "₹26,000/Ton",
      totalPrice: "₹2,08,000",
      deliveryTimeline: "Delivery in 2 Days",
      location: "Erode, TN",
      reachZone: "Local Zone"
    },
    {
      id: "OFFER-302",
      supplierName: "Coimbatore Farm Fresh Hub",
      rating: "4.7",
      verified: true,
      supplyType: "Partial Supply",
      quantity: "7 Tons",
      pricePerUnit: "₹26,500/Ton",
      totalPrice: "₹1,85,500",
      deliveryTimeline: "Delivery in 3 Days",
      location: "Coimbatore, TN",
      reachZone: "Tamil Nadu Wide"
    }
  ],
  "RQ-8850": [
    {
      id: "OFFER-401",
      supplierName: "Apex Aggregates & Cement",
      rating: "4.9",
      verified: true,
      supplyType: "Full Supply",
      quantity: "100 Tons",
      pricePerUnit: "₹18,000/Ton",
      totalPrice: "₹18,00,000",
      deliveryTimeline: "Delivered",
      location: "Trichy, TN",
      reachZone: "Tamil Nadu Wide"
    }
  ]
};

export const buyerOrders = [
  {
    id: "ORD-9021",
    reqId: "RQ-8712",
    title: "Industrial Steel Pipes",
    supplier: "Premier Steel Mills Ltd",
    quantity: "500 Tons",
    totalAmount: "₹12,50,000",
    orderDate: "28 Sep 2026",
    status: "In Transit",
    statusColor: "#2563EB",
    vehicleType: "20ft Commercial Truck",
    vehicleNumber: "TN-38-BZ-4412",
    driverName: "Ramesh Kumar",
    invoiceId: "INV-2026-9021"
  },
  {
    id: "ORD-8814",
    reqId: "RQ-8650",
    title: "Fresh Farm Onions Lot",
    supplier: "Kongu Agro Farm Gate",
    quantity: "15 Tons",
    totalAmount: "₹3,90,000",
    orderDate: "24 Sep 2026",
    status: "Delivered",
    statusColor: "#16A34A",
    vehicleType: "Mini Truck (Tata Ace)",
    vehicleNumber: "TN-37-CK-9901",
    driverName: "Senthil Nathan",
    invoiceId: "INV-2026-8814"
  },
  {
    id: "ORD-8703",
    reqId: "RQ-8599",
    title: "Tata Ace Gold Mini Trucks",
    supplier: "Tata Motors Commercial",
    quantity: "4 Units",
    totalAmount: "₹18,40,000",
    orderDate: "18 Sep 2026",
    status: "Confirmed",
    statusColor: "#0D9488",
    vehicleType: "Multi-Carrier Lorry",
    vehicleNumber: "TN-45-AT-7823",
    driverName: "Karthik Raja",
    invoiceId: "INV-2026-8703"
  }
];

export const figmaSupplierResponses = [
  {
    id: "RESP-001",
    supplierName: "AgroKing Traders",
    initials: "AK",
    verified: true,
    rating: "4.9",
    supplyType: "FULL SUPPLY",
    supplyBadgeColor: "#0D9488",
    offeredQty: "500 Quintals",
    offeredPrice: "₹24,500/Qtl",
    totalPrice: "₹1,22,50,000",
    deliveryTimeline: "2 Days (Immediate Dispatch)",
    location: "Salem, Tamil Nadu",
    actionType: "review"
  },
  {
    id: "RESP-002",
    supplierName: "Sunrise Supplies",
    initials: "SS",
    verified: true,
    rating: "4.8",
    supplyType: "PARTIAL SUPPLY",
    supplyBadgeColor: "#D97706",
    offeredQty: "300 Quintals",
    offeredPrice: "₹24,200/Qtl",
    totalPrice: "₹72,60,000",
    deliveryTimeline: "4 Days",
    location: "Madurai, Tamil Nadu",
    actionType: "review"
  },
  {
    id: "RESP-003",
    supplierName: "Global Basmati Co.",
    initials: "GB",
    verified: false,
    rating: "4.6",
    supplyType: "FULL SUPPLY",
    supplyBadgeColor: "#0D9488",
    offeredQty: "500 Quintals",
    offeredPrice: "₹23,800/Qtl",
    totalPrice: "₹1,19,00,000",
    deliveryTimeline: "3 Days",
    location: "Coimbatore, Tamil Nadu",
    actionType: "negotiate"
  }
];
