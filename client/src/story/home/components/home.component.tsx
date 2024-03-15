/** @format */
"use client";

import { CardActionArea, CardContent, Container } from "@mui/material";
import { listStory } from "../common/mocdata";
import {
  HomeContent,
  HomePage,
  StoryItem,
  TitleStory,
} from "../common/styles/homeStyle";
import { IStory } from "@/story/common/imterface";
import { useRouter } from "next/navigation";
import ImageStoryElement from "../elements/imageStory.element";

const HomeComponent = () => {
  const router = useRouter();
  const listStorys = listStory;
  const handleDetailStory = (id: string) => {
    router.push(`/story/${id}`);
  };
  return (
    <HomePage>
      <Container>
        <HomeContent>
          {listStorys?.map((story: IStory) => {
            return (
              <StoryItem
                key={story.id}
                onClick={() => handleDetailStory(story.id)}>
                <CardActionArea>
                  <ImageStoryElement image={story.image} title={story.title} />
                  <CardContent>
                    <TitleStory gutterBottom variant='h6'>
                      {story.title}
                    </TitleStory>
                  </CardContent>
                </CardActionArea>
              </StoryItem>
            );
          })}
        </HomeContent>
      </Container>
    </HomePage>
  );
};
export default HomeComponent;
