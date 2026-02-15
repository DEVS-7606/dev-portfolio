import { ExperienceSection } from "@/components/templates/ExperienceSection";
import { EXPERIENCE_DATA } from "@/config/experience.config";

export default function Experience() {
  return <ExperienceSection title="Experience" data={EXPERIENCE_DATA} />;
}
