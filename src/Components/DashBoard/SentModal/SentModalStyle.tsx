import styled from "styled-components";
import { Box, InputBase, Button } from "@mui/material";

export const ModalContainer = styled(Box)`
  width: 600px;
  max-height: 80vh;
  background: #fff;
  border-radius: 8px;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  padding: 16px;
`;

export const ModalInput = styled(InputBase)`
  margin: 0 16px;
  padding: 10px;
  font-size: 16px;
  background: #f2f2f2;
  border: 2px solid black;
  border-radius: 6px;
`;

export const UserList = styled(Box)`
  flex: 1;
  overflow-y: auto;
  margin-top: 10px;
`;

export const UserItem = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Avatar = styled(Box)`
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 12px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  span {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid white;
  }
`;

export const UserInfo = styled(Box)`
  flex: 1;
  padding: 10px;
`;

export const UserName = styled.div`
  font-weight: 600;
`;

export const UserDesc = styled.div`
  font-size: 14px;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface CheckboxProps {
  selected?: boolean;
}

export const Checkbox = styled(Box)<CheckboxProps>`
  width: 24px;
  height: 24px;
  border: 2px solid #1976d2;
  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? "#1976d2" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const SendButtonWrapper = styled(Box)`
  padding: 12px 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
`;

export const SendButton = styled(Button)`
  text-transform: none;
  font-weight: 600;
  border-radius: 20px;
  background-color: #ccc;
`;
