import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const MeMenuContainer = styled(Box)({
  position: 'absolute',
  top: 60,
  right: 30,
  width: 300,
  backgroundColor: '#fff',
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  borderRadius: '8px',
  padding: '16px',
  zIndex: 1200,
});

export const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  marginBottom: 12,
});

export const UserText = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const ActionButtons = styled(Box)({
  display: 'flex',
  gap: 8,
  marginBottom: 12,
});

export const Section = styled(Box)({
  marginTop: 12,
});

export const LinkText = styled(Typography)({
  cursor: 'pointer',
  padding: '4px 0',
  fontSize: '14px',
  '&:hover': {
    textDecoration: 'underline',
  },
});