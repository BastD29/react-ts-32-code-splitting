import { FC } from "react";

export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type UserType = {
  name: string;
  company: {
    name: string;
    catchPhrase: string;
  };
};

export type PostProps = {
  post: PostType;
  user: UserType;
};

const Post: FC<PostProps> = ({ post, user }) => {
  // Error Example
  //if (user.id === 2) throw new Error('Error #2')

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
      {/* the errorTest below is to test what happens in case of error in the UI */}
      {/* <p>{errorTest}</p> */}
      <p>
        Author: {user.name} from {user.company.name}
      </p>
      <p>Tagline: {user.company.catchPhrase}</p>
    </article>
  );
};
export default Post;
