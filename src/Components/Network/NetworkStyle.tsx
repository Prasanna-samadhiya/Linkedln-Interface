import styled from "styled-components";
import { Box } from "@mui/material";

export const PageContainer = styled(Box)`
  display: flex;
  padding: 24px;
  gap: 24px;
  background-color: #f3f2ef;
  min-height: 130vh;
  width: 100%;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 16px;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const Sidebar = styled(Box)`
  width: 250px;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  height: fit-content;
  position: absolute;
  left: 200px;

  @media (max-width: 1024px) {
    position: relative;
    left: 0;
    width: 100%;
  }
`;

export const SidebarItem = styled(Box)`
  margin: 8px 0;
  font-size: 1.25rem;
  color: #444;
  cursor: pointer;
  padding: 4px;
  border-radius: 5px;

  &:hover {
    background-color: #f3f2ef;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MainContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 200px;
  width: 800px;

  @media (max-width: 1024px) {
    position: relative;
    right: 0;
    width: 100%;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const SuggestionList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 100%;

  @media (max-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }
`;

export const SuggestionCard = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PeopleContainer = styled(Box)`
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
