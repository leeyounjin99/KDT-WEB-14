// (임시) DB에서 전체 댓글 목록을 받았다고 가정
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요~~",
    },
    {
      id: 2,
      userid: "helld",
      date: "2022-10-21",
      comment: "좋아요!",
    },
    {
      id: 3,
      userid: "world",
      date: "2022-10-11",
      comment: "안녕~",
    },
    {
      id: 4,
      userid: "hello",
      date: "2022-10-04",
      comment: "댓글!",
    },
  ];
};
