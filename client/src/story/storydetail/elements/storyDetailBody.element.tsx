/** @format */
"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { DetailBody } from "../common/styles/storyDetailBody";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListChapterElement from "@/story/elements/listChapter.element";

const StoryDetailBodyElement = ({ story }: any) => {
  return (
    <DetailBody>
      <Accordion defaultExpanded sx={{ boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0, m: 0 }}>
          <Typography
            variant='h5'
            sx={{ width: "100%", textTransform: "capitalize" }}>
            Tóm tắt nội dung truyện {story.title}
            <hr />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"div"}>{story.description}</Typography>
        </AccordionDetails>
      </Accordion>

      <Box>
        <Typography variant='h5' sx={{ textTransform: "capitalize" }}>
          Danh sách chương {story.title}
          <hr />
        </Typography>
        <ListChapterElement />
      </Box>
    </DetailBody>
  );
};
export default StoryDetailBodyElement;
