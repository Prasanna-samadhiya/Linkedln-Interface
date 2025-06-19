import { Typography } from "@mui/material";
import { SectionContent } from "./Profilestyle";

interface CertificationProps {
  name: string;
  organisation: string;
}

function Certification({ name, organisation }: CertificationProps) {
  return (
    <SectionContent>
      <Typography fontWeight={500}><h4>{name}</h4></Typography>
      <Typography variant="body2">{organisation}</Typography>
    </SectionContent>
  );
}

export default Certification;
