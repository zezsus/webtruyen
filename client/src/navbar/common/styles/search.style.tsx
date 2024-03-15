/** @format */
import { Box, IconButton, InputBase, styled } from "@mui/material";

export const Search = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
});

export const SearchInput = styled(InputBase)({
  border: "none",
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  paddingLeft: "10px",
  backgroundColor: "#DDDDDD",
  height: "40px",
});

export const SearchButton = styled(IconButton)({
  border: "none",
  borderRadius: 0,
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
  backgroundColor: "#DDDDDD",
  padding: "auto",

  "&:hover": {
    backgroundColor: "#DDDDDD",
  },
});
