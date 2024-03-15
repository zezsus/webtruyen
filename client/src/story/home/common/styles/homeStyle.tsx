/** @format */

import { Box, Card, Typography, styled } from "@mui/material";

export const HomePage = styled(Box)({
  marginTop: "0.5rem",
  maxHeight: "86vh",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});

export const HomeContent = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "1rem",
});

export const StoryItem = styled(Card)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "180px",
  height: "100%",
  boxShadow: "none",
});

export const TitleStory = styled(Typography)({
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "capitalize",
});
