/** @format */

import { IStory } from "@/story/common/imterface";
import { faker } from "@faker-js/faker";

export const generateMockData = (): IStory => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    category: faker.random.word(),
    description: faker.lorem.paragraph(),
    image: faker.image.urlPicsumPhotos(),
    author: faker.internet.userName(),
    releaseDate: faker.date.past(),
    chapterNumber: faker.number.int(100),
    status: faker.random.words(),
  };
};

export const listStory: IStory[] = faker.helpers.multiple(generateMockData, {
  count: 24,
});
