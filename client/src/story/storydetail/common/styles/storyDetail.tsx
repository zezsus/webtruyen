/** @format */

import { Container, styled } from "@mui/material";
export const styleStoryDetail = {
  maxHeight: "89vh",
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
};

export const StoryDetail = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
