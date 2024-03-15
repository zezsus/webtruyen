/** @format */

import StoryDetailElement from "@/story/storydetail/components/storyDetail.component";

const StoryDetailPage = ({ params }: { params: { storyid: string } }) => {
  return <StoryDetailElement storyId={params.storyid} />;
};
export default StoryDetailPage;
