/** @format */

import * as Yup from "yup";

export const chapterSchemas = Yup.object().shape({
  id: Yup.string().required(),
  title: Yup.string().required(),
  releaseDate: Yup.date().required(),
  chapter: Yup.number().required(),
  contentStory: Yup.string().required(),
});

export const listChapterSchemas = Yup.array().of(chapterSchemas);
