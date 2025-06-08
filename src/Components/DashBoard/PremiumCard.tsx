import { Typography } from "@mui/material";
import { CustomButton, PremiumCard } from "./DashBoardStyle";


const PremiumCard1 = ({ text, buttonLabel }: { text: string; buttonLabel: string }) => {
  return (
    <PremiumCard>
      <Typography variant="body1">{text}</Typography>
      <CustomButton variant="contained">{buttonLabel}</CustomButton>
    </PremiumCard>
  );
};

export default PremiumCard1
