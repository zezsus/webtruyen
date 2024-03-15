/** @format */

import { Box, Typography } from "@mui/material";
import { IChapter } from "../common/imterface/chapter.interface";
import { listChapter } from "../common/mockData/chapter.data";
import { useRouter } from "next/navigation";

const ListChapterElement = () => {
  const router = useRouter();
  const handleClickChapter = (id: string) => {
    router.push(`/story/${id}`);
  };
  return (
    <Box>
      {listChapter?.map((chapter: IChapter) => {
        return (
          <Typography
            key={chapter.id}
            sx={style}
            onClick={() => handleClickChapter(chapter.id)}>
            Chap {chapter.chapter}: {chapter.title}
          </Typography>
        );
      })}
    </Box>
  );
};
export default ListChapterElement;

const style = {
  cursor: "pointer",
  textTransform: "capitalize",
  "&:hover": {
    borderBottom: "1px solid black",
    width: "max-content",
    p: 0,
    m: 0,
  },
};
