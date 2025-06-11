import styled from "styled-components";
import { Box } from "@mui/material";

export const PageContainer = styled(Box)`
  display: flex;
  padding: 24px;
  gap: 24px;
  background-color: #f3f2ef;
  min-height: 83vh
`;

export const Sidebar = styled(Box)`
  width: 250px;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  height: fit-content;
`;

export const SidebarItem = styled(Box)`
  margin: 8px 0;
  font-size: 0.95rem;
  color: #444;
`;

export const MainContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InvitationCard = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin-top: 10px;
`;

export const SuggestionList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 100%;
`;

export const SuggestionCard = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;
