import { Chip } from "@mui/material";
import { SectionContent } from "./Profilestyle";

interface SkillProps {
  name: string;
}

function Skill({ name }: SkillProps) {
  return (
    <SectionContent>
      <Chip label={name} color="primary" variant="outlined" />
    </SectionContent>
  );
}

export default Skill;
