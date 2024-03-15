/** @format */

import * as Yup from "yup";

export const storySchemas = Yup.object().shape({
  id: Yup.string().required(),
  title: Yup.string().required(),
  category: Yup.string().required(),
  description: Yup.string().required(),
  image: Yup.string().required(),
  author: Yup.string().required(),
  releaseDate: Yup.date().required(),
  chapterNumber: Yup.number().required(),
  status: Yup.string().required(),
});

export const listStorySchemas = Yup.array().of(storySchemas);
