/** @format */
"use client";

import { CardMedia } from "@mui/material";
import { IPropsImageStory } from "../../common/imterface";
import { styleImageStory } from "../common/styles/imageStory.styles";

const ImageStoryElement = (props: IPropsImageStory) => {
  return (
    <CardMedia
      component='img'
      sx={styleImageStory}
      image={props.image}
      alt={props.title}
    />
  );
};
export default ImageStoryElement;
