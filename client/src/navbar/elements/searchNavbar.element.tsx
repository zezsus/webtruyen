/** @format */
"use client";

import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchButton,
  SearchInput,
} from "../common/styles/search.style";

const SearchNavbarElement = () => {
  return (
    <Search>
      <SearchInput placeholder='Tìm kiếm...' fullWidth />
      <SearchButton>
        <SearchIcon fontSize='medium' />
      </SearchButton>
    </Search>
  );
};
export default SearchNavbarElement;
