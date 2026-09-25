import steelPipesImg from "../assets/Industrial Steel Pipes.jpg";
import wheatGrainsImg from "../assets/Premium Wheat Grains.jpg";

export const categories = [
  {
    id: "vehicles",
    name: "Vehicles",
    description: "Commercial trucks, vans, and fleet.",
    suppliers: 140,
    sector: "heavy-industry",
    iconType: "truck",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Crops, seeds, and farming produce.",
    suppliers: 320,
    sector: "agro-food",
    iconType: "tractor",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "machinery",
    name: "Machinery",
    description: "Industrial equipment and tools.",
    suppliers: 210,
    sector: "heavy-industry",
    iconType: "tool",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Components, devices, and parts.",
    suppliers: 480,
    sector: "heavy-industry",
    iconType: "chip",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "raw-materials",
    name: "Raw Materials",
    description: "Construction and base materials.",
    suppliers: 195,
    sector: "heavy-industry",
    iconType: "layers",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "packaging",
    name: "Packaging",
    description: "Boxes, materials, and logistics prep.",
    suppliers: 310,
    sector: "heavy-industry",
    iconType: "box",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
  }
];

export const sectorFilters = [
  { id: "all", label: "All Sectors" },
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
    quotesCount: 3,
    acceptedCount: 1,
    partialCount: 2,
    image: wheatGrainsImg
  }
];
