/** @format */
"use client";

import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import SearchNavbarElement from "../elements/searchNavbar.element";
import { NavBar } from "../common/styles/navbar.style";
import { useRouter } from "next/navigation";

const NavbarComponent = () => {
  const router = useRouter();
  return (
    <AppBar position='static'>
      <Toolbar>
        <NavBar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/")}>
            MêĐọcTruyện
          </Typography>
          <SearchNavbarElement />
          <Box>username</Box>
        </NavBar>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
