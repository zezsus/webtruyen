/** @format */
import { Box, Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { HeaderButton } from "../common/styles/storyDetailHeader";

const ButtonDetailHeader = () => {
  return (
    <HeaderButton>
      <Button variant='contained' color='warning'>
        <PlayArrowIcon sx={{ paddingRight: 1 }} />
        Đọc từ đầu
      </Button>
      <Button variant='contained' color='info'>
        <KeyboardDoubleArrowRightIcon sx={{ paddingRight: 1 }} />
        Đọc tiếp
      </Button>
      <Button variant='contained'>
        <AutoStoriesIcon sx={{ paddingRight: 1 }} />
        Chương mới nhất
      </Button>
    </HeaderButton>
  );
};

export default ButtonDetailHeader;
