import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryStep from "../components/postRequirement/CategoryStep.jsx";
import TypeStep from "../components/postRequirement/TypeStep.jsx";
import ProductStep from "../components/postRequirement/ProductStep.jsx";
import DetailsStep from "../components/postRequirement/DetailsStep.jsx";
import DeliveryStep from "../components/postRequirement/DeliveryStep.jsx";
import BudgetStep from "../components/postRequirement/BudgetStep.jsx";
import PostedConfirmation from "../components/postRequirement/PostedConfirmation.jsx";

const initialFormData = {
  category: "vehicles",
  type: "single",
  product: "car",
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
  const handleBack = onBackToDashboard || (() => navigate("/buyer/requirements"));
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isPosted, setIsPosted] = useState(false);
  const [requirementId, setRequirementId] = useState("");

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const goBack = () => {
    if (currentStep === 1) {
      handleBack();
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const generatedId = `#REQ-${Math.floor(10000 + Math.random() * 89999)}`;
    setRequirementId(generatedId);
    setIsPosted(true);
  };

  if (isPosted) {
    return (
      <PostedConfirmation
        formData={formData}
        requirementId={requirementId}
        onBackToDashboard={() => navigate("/buyer/dashboard")}
        onViewRequirement={() => navigate("/buyer/requirements")}
      />
    );
  }

  if (currentStep === 1) {
    return (
      <CategoryStep
        selectedCategory={formData.category}
        onSelect={(value) => updateField("category", value)}
        onNext={goNext}
        onBack={handleBack}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <TypeStep
        selectedType={formData.type}
        onSelect={(value) => updateField("type", value)}
        onNext={goNext}
        onBack={goBack}
      />
    );
  }

  if (currentStep === 3) {
    return (
      <ProductStep
        categoryId={formData.category}
        selectedProduct={formData.product}
        onSelect={(value) => updateField("product", value)}
        onNext={goNext}
        onBack={goBack}
      />
    );
  }

  if (currentStep === 4) {
    return (
      <DetailsStep
        quantity={formData.quantity}
        unit={formData.unit}
        note={formData.note}
        onChange={updateField}
        onNext={goNext}
        onBack={goBack}
      />
    );
  }

  if (currentStep === 5) {
    return (
      <DeliveryStep
        location={formData.location}
        date={formData.date}
        time={formData.time}
        onChange={updateField}
        onNext={goNext}
        onBack={goBack}
      />
    );
  }

  return (
    <BudgetStep
      budget={formData.budget}
      details={formData.details}
      attachmentName={formData.attachmentName}
      onChange={updateField}
      onNext={handleSubmit}
      onBack={goBack}
    />
  );
}

export default PostRequirement;