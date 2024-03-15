/** @format */

import { Box, styled } from "@mui/material";

export const DetailHeader = styled(Box)({
  display: "flex",
  gap: "2rem",
  padding: 10,
  backgroundColor: "#f9f2eb",
  borderRadius: 5,
});

export const styleImageHeader = {
  maxHeight: 450,
  maxWidth: 300,
  borderRadius: 2,
};

export const DetailHeaderContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const StoryCategory = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const HeaderButton = styled(Box)({
  display: "flex",
  gap: "2rem",
  justifyContent: "space-evenly",
});
