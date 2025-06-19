import styled from "styled-components";
import { Box, Button } from "@mui/material";

interface TopImageProps {
  backgroundimage: string;
}

export const CardContainer = styled(Box)`
  width: 190px;
  height: 300px;
  position: relative;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 16px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopImage = styled(Box)<TopImageProps>`
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0 0;
  background-image: ${({ backgroundimage }) => `url(${backgroundimage})`}; /* Placeholder */
  background-size: cover;
  background-position: center;
`;

export const StyledButton = styled(Button)`
  font-weight: 600;
  text-transform: none;
  border-radius: 20px;
  font-size: 0.875rem;
`;
