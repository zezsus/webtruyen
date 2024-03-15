/** @format */

import { InferType } from "yup";
import { storySchemas } from "../schemas";

export interface IPropsImageStory {
  image: string;
  title: string;
}

export type IStory = InferType<typeof storySchemas>;
