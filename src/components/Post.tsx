import { forwardRef } from "react";
import { PostType } from "../models/Post";

interface PostProps {
  post: PostType;
  //   children?: ReactNode;
}

const Post = forwardRef<HTMLDivElement, PostProps>(({ post }, ref) => {
  const postBody = (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
    </>
  );

  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
});

export default Post;
