/** @format */

import { CardMedia, Chip, Stack, Typography } from "@mui/material";
import {
  DetailHeader,
  DetailHeaderContent,
  StoryCategory,
  styleImageHeader,
} from "../common/styles/storyDetailHeader";
import ButtonDetailHeader from "./buttonDetailHeader.element";

const StoryDetailHeaderElement = ({ story }: any) => {
  return (
    <DetailHeader>
      <CardMedia
        component={"img"}
        src={story.image}
        alt={story.title}
        sx={styleImageHeader}
      />
      <DetailHeaderContent>
        <Typography variant='h5' component={"div"}>
          {story.title}
        </Typography>
        <Typography component={"div"}>Tác giả: {story.author}</Typography>
        <Typography component={"div"}>Chương: {story.chapterNumber}</Typography>
        <Typography component={"div"}>Trạng thái: {story.status}</Typography>
        <StoryCategory>
          <Typography component={"div"}>Thể loại:</Typography>
          <Stack direction='row' spacing={1}>
            <Chip label={story.category} color='info' />
            <Chip label={story.category} color='info' />
          </Stack>
        </StoryCategory>
        <ButtonDetailHeader />
      </DetailHeaderContent>
    </DetailHeader>
  );
};
export default StoryDetailHeaderElement;
