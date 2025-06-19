import styled from "styled-components";
import { Box, Typography, InputBase, Button } from "@mui/material";

 export const ChatContainer = styled(Box)`
  display: flex;
  height: 90vh;
  background: linear-gradient(120deg, #f3f1ee 70%, #e7eaf6 100%);
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
`;

// Sidebar
export const Sidebar = styled(Box)`
  width: 340px;
  background: #fff;
  border-right: 1.5px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 12px #ececec2a;
`;

// Search bar
export const SearchBar = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px 18px;
  border-bottom: 1.5px solid #eee;
  background: white;
`;

export const SearchInput = styled(InputBase)`
  width: 100%;
  padding: 8px 14px;
  border-radius: 8px;
  background: #f3f3f3;
  font-size: 16px;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #1976d2;
    background: #fff;
  }
`;

export const SearchArea  =styled(Box)({
  display: 'flex', 
  alignItems: 'center', 
  border: '1px solid #ccc', 
  borderRadius: '8px',
  backgroundColor:"#f3f3f3",
  padding:"0px 0px 0px 10px"
})

export const FilterTabs = styled(Box)`
  display: flex;
  gap: 6px;
  padding: 10px 5px;
  border-bottom: 1.5px solid #eee;
  background: white;
  font-size: 15px;
  font-weight: 500;
  color: #6b7682;

  & > div {
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 20pxpx;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: #e3f0ff;
      color: #1976d2;
    }
  }
`;

// Chat list
export const ChatList = styled(Box)`
  overflow-y: auto;
  flex: 1;
  background: #fff;
`;

// Chat item
export const ChatItem = styled(Box)`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid #f3f3f3;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f5faff;
  }
`;

export const ChatDetails = styled(Box)`
  margin-left: 14px;
  flex: 1;
`;

export const ChatName = styled(Typography)`
  font-weight: 600 !important;
  font-size: 16px !important;
  color: #2c3e50;
`;

export const ChatPreview = styled(Typography)`
  font-size: 13px !important;
  color: #8a8f98;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Main chat area
export const MainChatArea = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f9fafb;
  min-width:700px;
  min-height:68vh;
  max-height:60vh;
  overflow:hidden;
  height:100%;
`;

export const ChatHeader = styled(Box)`
  padding: 18px 24px;
  border-bottom: 1.5px solid #e3e3e3;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
`;

export const ChatMessages = styled(Box)`
  flex: 1;
  padding: 28px 0px;
  overflow-y: auto;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const MessageBubble = styled(Box)<{ alignRight?: boolean }>`
  max-width: 72%;
  padding: 13px 20px;
  border-radius: 22px;
  background: ${({ alignRight }) => (alignRight ? "white" : "white")};
  align-self: ${({ alignRight }) => (alignRight ? "flex-end" : "flex-start")};
  font-size: 15px;
  color: #283747;
  transition: background 0.2s;
`;

export const ChatInput = styled(InputBase)`
  width: 100%;
  border-radius: 22px;
  background: #f3f3f3;
  font-size: 16px;
  border: 1.5px solid #e0e0e0;
  transition: border 0.2s;
  padding: 10px 40px 10px 15px; /* Add right padding for icon space */
  border: 1px solid #ccc;
  &:focus {
    border: 1.5px solid #1976d2;
    background: #fff;
  }
`;

export const AdSection = styled(Box)`
  width: 290px;
  background: #f7f9fb;
  border-left: 1.5px solid #e3e3e3;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: absolute;
  right: 100px;
  top: 90px;

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const AdBox = styled(Box)`
  border: 1.5px solid #e0e0e0;
  padding: 22px 14px;
  border-radius: 14px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 2px 12px #ececec28;
`;

export const RetryButton = styled(Button)`
  margin-top: 14px !important;
  text-transform: none !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  border-width: 2px !important;
  border-color: #1976d2 !important;
  color: #1976d2 !important;
  background: #e3f0ff !important;
  &:hover {
    background: #1976d2 !important;
    color: #fff !important;
  }
`;

export const ChatInputWrapper = styled(Box)`
  background-color: #fff;
  position: relative;
  padding: 16px 28px;
  border-top: 1.5px solid #e3e3e3;
  
`;

export const SendIconWrapper = styled(Box)`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: #0073b1;
  cursor: pointer;
`;

export const UserInfo = styled(Box)`
  display:flex;
  flex-direction:column;
`


export const MessageSection = styled(Box)({
  display:"flex",
  position: "absolute",
  left:"10vh",
  top: "12vh",
  borderRadius: '20px',
  width: "130vh",
  flexDirection:"column",
  
})