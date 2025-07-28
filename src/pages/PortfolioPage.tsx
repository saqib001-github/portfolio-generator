import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import ModernTemplate from "../components/Portfolio/ModernTemplate";
import TimelineTemplate from "../components/Portfolio/TimelineTemplate";
import ClassicTemplate from "../components/Portfolio/ClassicTemplate";

export default function PortfolioPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const item = useSelector((st: RootState) =>
    st.portfolio.portfolios.find((p) => p.id === id)
  );
  if (!item) {
    nav("/professionals");
    return null;
  }
  const template =
    item.template ||
    useSelector((st: RootState) => st.portfolio.selectedTemplate);
  let TemplateComponent;
  switch (template) {
    case "modern":
      TemplateComponent = ModernTemplate;
      break;
    case "timeline":
      TemplateComponent = TimelineTemplate;
      break;
    case "classic":
      TemplateComponent = ClassicTemplate;
      break;
    default:
      TemplateComponent = ModernTemplate; // Fallback to modern if no template selected
  }

  return <TemplateComponent portfolio={item} />;
}
