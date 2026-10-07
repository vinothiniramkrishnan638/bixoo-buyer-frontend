import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryStep from "../components/postRequirement/CategoryStep.jsx";
import ProductStep from "../components/postRequirement/ProductStep.jsx";
import TypeStep from "../components/postRequirement/TypeStep.jsx";
import DeliveryStep from "../components/postRequirement/DeliveryStep.jsx";
import BudgetStep from "../components/postRequirement/BudgetStep.jsx";
import PostedConfirmation from "../components/postRequirement/PostedConfirmation.jsx";
import { productsByCategory, categories } from "../data/requirementData.js";
import steelPipesImg from "../assets/Industrial Steel Pipes.jpg";

const initialFormData = {
  category: "vehicles",
  type: "single",
  product: "car",
  productImage: "",
  quantity: "",
  unit: "Quintals",
  note: "",
  location: "",
  date: "",
  time: "",
  budget: "",
  details: "",
  attachmentName: ""
};

function PostRequirement({ onBackToDashboard }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem("bixoo_post_req_form");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      ...initialFormData,
      category: location.state?.category || "vehicles",
      product: location.state?.product || "car",
      productImage: location.state?.productImage || ""
    };
  });

  const [requirementId, setRequirementId] = useState(() => {
    return sessionStorage.getItem("bixoo_post_req_id") || "";
  });

  useEffect(() => {
    if (location.state?.category || location.state?.product || location.state?.productImage) {
      setFormData((prev) => {
        const next = {
          ...prev,
          category: location.state?.category || prev.category,
          product: location.state?.product || prev.product,
          productImage: location.state?.productImage || prev.productImage
        };
        sessionStorage.setItem("bixoo_post_req_form", JSON.stringify(next));
        return next;
      });
    }
  }, [location.state]);

  const updateField = (field, value) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      sessionStorage.setItem("bixoo_post_req_form", JSON.stringify(next));
      return next;
    });
  };

  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === "/buyer/post-requirement") {
      const step = location.state?.step;
      if (step === 3 || step === 5) {
        navigate("/buyer/delivery", { replace: true, state: location.state });
      } else if (step === 4) {
        navigate("/buyer/budget", { replace: true, state: location.state });
      } else {
        navigate("/buyer/category", { replace: true, state: location.state });
      }
    }
  }, [currentPath, location.state, navigate]);

  const handleCategoryBack = () => {
    navigate("/buyer/requirements");
  };

  const handleCategoryNext = () => {
    navigate("/buyer/product");
  };

  const handleProductBack = () => {
    navigate("/buyer/category");
  };

  const handleProductNext = () => {
    navigate("/buyer/type");
  };

  const handleTypeBack = () => {
    navigate("/buyer/product");
  };

  const handleTypeNext = () => {
    navigate("/buyer/refine-reach", { state: location.state });
  };

  const handleDeliveryBack = () => {
    if (location.state?.from === "browse" || (!location.state?.selectedSupplier && location.state?.categoryId)) {
      if (onBackToDashboard) {
        onBackToDashboard();
      } else {
        navigate("/buyer/sub-category", {
          state: { categoryId: location.state?.category || formData.category || "vehicles" }
        });
      }
    } else {
      navigate("/buyer/verified-suppliers");
    }
  };

  const handleDeliveryNext = () => {
    navigate("/buyer/budget");
  };

  const handleBudgetBack = () => {
    navigate("/buyer/delivery");
  };

  const handleBudgetSubmit = () => {
    const generatedId = `REQ-${Math.floor(10000 + Math.random() * 89999)}`;
    const fullId = `#${generatedId}`;
    setRequirementId(fullId);
    sessionStorage.setItem("bixoo_post_req_id", fullId);

    const allProducts = Object.values(productsByCategory).flat();
    const foundProduct = allProducts.find((p) => p.id === formData.product || p.name === formData.product);
    const categoryObj = categories.find((c) => c.id === formData.category);
    const productName = foundProduct ? foundProduct.name : (formData.product || "Requirement");
    const productImage = formData.productImage || foundProduct?.image || categoryObj?.image || steelPipesImg;

    const newReq = {
      id: generatedId,
      title: productName,
      quantity: formData.quantity ? `${formData.quantity} ${formData.unit || "Quintals"}` : "500 Quintals",
      posted: "Today, Just now",
      status: "matching",
      statusLabel: "Matching...",
      quotesCount: 0,
      acceptedCount: 0,
      partialCount: 0,
      image: productImage,
      category: formData.category || "vehicles",
      location: formData.location || "Salem, Tamil Nadu",
      date: formData.date || "Today",
      budget: formData.budget || ""
    };

    let existingReqs = [];
    try {
      const stored = localStorage.getItem("bixoo_user_requirements");
      if (stored) existingReqs = JSON.parse(stored);
    } catch (e) {}

    localStorage.setItem("bixoo_user_requirements", JSON.stringify([newReq, ...existingReqs]));

    navigate("/buyer/confirmation");
  };

  const handleExitToDashboard = () => {
    sessionStorage.removeItem("bixoo_post_req_form");
    sessionStorage.removeItem("bixoo_post_req_id");
    navigate("/buyer/dashboard");
  };

  const handleExitToRequirements = () => {
    sessionStorage.removeItem("bixoo_post_req_form");
    sessionStorage.removeItem("bixoo_post_req_id");
    navigate("/buyer/requirements");
  };

  if (currentPath === "/buyer/confirmation") {
    return (
      <PostedConfirmation
        formData={formData}
        requirementId={requirementId || "#REQ-92841"}
        onBackToDashboard={handleExitToDashboard}
        onViewRequirement={handleExitToRequirements}
      />
    );
  }

  if (currentPath === "/buyer/category") {
    return (
      <CategoryStep
        selectedCategory={formData.category}
        onSelect={(value) => updateField("category", value)}
        onNext={handleCategoryNext}
        onBack={handleCategoryBack}
      />
    );
  }

  if (currentPath === "/buyer/product") {
    return (
      <ProductStep
        categoryId={formData.category}
        selectedProduct={formData.product}
        onSelect={(value) => updateField("product", value)}
        onNext={handleProductNext}
        onBack={handleProductBack}
      />
    );
  }

  if (currentPath === "/buyer/type") {
    return (
      <TypeStep
        selectedType={formData.type}
        onSelect={(value) => updateField("type", value)}
        onNext={handleTypeNext}
        onBack={handleTypeBack}
      />
    );
  }

  if (currentPath === "/buyer/budget" || currentPath === "/buyer/buget") {
    return (
      <BudgetStep
        budget={formData.budget}
        details={formData.details}
        attachmentName={formData.attachmentName}
        onChange={updateField}
        onNext={handleBudgetSubmit}
        onBack={handleBudgetBack}
      />
    );
  }

  return (
    <DeliveryStep
      location={formData.location}
      date={formData.date}
      time={formData.time}
      onChange={updateField}
      onNext={handleDeliveryNext}
      onBack={handleDeliveryBack}
    />
  );
}

export default PostRequirement;