import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryStep from "../components/postRequirement/CategoryStep.jsx";
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
  const location = useLocation();
  const handleBack =
    onBackToDashboard ||
    (() => {
      navigate("/buyer/sub-category", {
        state: { categoryId: location.state?.category || formData.category || "vehicles" }
      });
    });

  const [currentStep, setCurrentStep] = useState(() => {
    const requested = location.state?.step;
    if (requested === 5 || requested === 3) return 3;
    return requested || 1;
  });
  const [formData, setFormData] = useState(() => ({
    ...initialFormData,
    category: location.state?.category || "vehicles",
    product: location.state?.product || "car"
  }));
  const [isPosted, setIsPosted] = useState(false);
  const [requirementId, setRequirementId] = useState("");

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => {
    if (currentStep === 1) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    }
  };

  const goBack = () => {
    if (currentStep === 4) {
      setCurrentStep(3);
    } else {
      handleBack();
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
        onNext={() => setCurrentStep(3)}
        onBack={handleBack}
      />
    );
  }

  if (currentStep === 3) {
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