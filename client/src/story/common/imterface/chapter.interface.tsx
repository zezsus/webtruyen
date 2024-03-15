/** @format */

import { InferType } from "yup";
import { chapterSchemas } from "../schemas/chapter.schemas";

export type IChapter = InferType<typeof chapterSchemas>;
