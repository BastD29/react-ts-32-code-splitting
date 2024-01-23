import useSWR from "swr";

import {
  getPostsByUserId,
  postsUrlEndpoint as postsCacheKey,
} from "../api/postsApi";

import {
  getUserById,
  usersUrlEndpoint as usersCacheKey,
} from "../api/usersApi";

import Post, { PostType } from "./Post";
// import SkeletonPost from "./skeletons/SkeletonPost";
import { FC } from "react";

type PostsListProps = {
  currentUserId: number;
};

const PostsList: FC<PostsListProps> = ({ currentUserId }) => {
  const {
    // isLoading,
    // error,
    data: posts,
  } = useSWR(
    [postsCacheKey, currentUserId],
    ([url, userId]) => getPostsByUserId(url, userId),
    { suspense: true }
  );

  // * this second useSWR depends on the first one. It checking for posts to load before to get user
  const {
    // isLoading: isLoadingUser,
    // error: userError,
    data: user,
  } = useSWR(
    posts?.length ? [usersCacheKey, currentUserId] : null,
    ([url, userId]) => getUserById(url, userId),
    { suspense: true }
  );

  // * applying suspense, we can get rid of all the conditional logic below
  // let content;
  // if (currentUserId === 0) {
  //   content = <p className="message">Select an Employee to view posts</p>;
  // } else if (isLoading || isLoadingUser) {
  //   content = [...Array(10).keys()].map((i) => {
  //     return <SkeletonPost key={i} />;
  //   });
  // } else if (error || userError) {
  //   content = <p>{error.message || userError.message}</p>;
  // } else {
  //   content = (
  //     <main>
  //       {posts.map((post: PostType) => {
  //         return <Post key={post.id} post={post} user={user} />;
  //       })}
  //     </main>
  //   );
  // }

  const content = (
    <main>
      {posts.map((post: PostType) => {
        return <Post key={post.id} post={post} user={user} />;
      })}
    </main>
  );

  return content;
};
export default PostsList;
