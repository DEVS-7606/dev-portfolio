import { EducationSection } from "@/components/templates/EducationSection";
import { EDUCATION_DATA } from "@/config/education.config";

export default function Education() {
  return <EducationSection title="Education" data={EDUCATION_DATA} />;
}
