/** @format */

import { faker } from "@faker-js/faker";
import { IChapter } from "../imterface/chapter.interface";

export const createChapterMockData = (): IChapter => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    releaseDate: faker.date.past(),
    chapter: faker.number.int(50),
    contentStory: faker.lorem.words(1000),
  };
};

export const listChapter: IChapter[] = faker.helpers.multiple(
  createChapterMockData,
  {
    count: 50,
  }
);
