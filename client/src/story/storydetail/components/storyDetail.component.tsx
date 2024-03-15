/** @format */
"use client";

import { IStory } from "@/story/common/imterface";
import { listStory } from "@/story/home/common/mocdata";
import { useEffect, useState } from "react";
import StoryDetailHeaderElement from "../elements/storyDetailHeader.element";
import StoryDetailBodyElement from "../elements/storyDetailBody.element";
import { StoryDetail, styleStoryDetail } from "../common/styles/storyDetail";
import { Box } from "@mui/material";

const StoryDetailComponent = ({ storyId }: any) => {
  const [story, setStory] = useState<any>({});
  useEffect(() => {
    listStory.map((story: IStory) => {
      if (story.id === storyId) {
        setStory(story);
        return;
      }
    });
  }, [story, storyId]);

  return (
    <Box sx={styleStoryDetail}>
      <StoryDetail sx={{ py: 2 }}>
        <StoryDetailHeaderElement story={story} />
        <StoryDetailBodyElement story={story} />
      </StoryDetail>
    </Box>
  );
};
export default StoryDetailComponent;
