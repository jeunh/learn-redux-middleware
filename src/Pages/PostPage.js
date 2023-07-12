import React from "react";
import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router-dom";

function PostPage() {
  const params = useParams();

  // URL 파라미터 값은 문자열이기 때문에 parseInt를 사용하여 숫자로 변환
  return <PostContainer postId={parseInt(params.id, 10)} />;
}

export default PostPage;