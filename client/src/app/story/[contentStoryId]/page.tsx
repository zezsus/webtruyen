/** @format */

"use client";

import ContentChapterComponent from "@/story/components/contentChapter.component";

const StoryContent = ({ params }: { params: { contentStoryId: string } }) => {
  return <ContentChapterComponent contentStoryId={params.contentStoryId} />;
};
export default StoryContent;
