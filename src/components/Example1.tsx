import { useCallback, useRef, useState } from "react";
import usePosts from "../hooks/usePosts";
import Post from "./Post";

// ! when saving this file, I have the following error:
// ! Warning: Encountered two children with the same key, etc.
// ! it could be because saving the file does a refetch, so the array and its values can appear twice or more
// ! a solution could be to allow fetch only once

const Example1 = () => {
  const [pageNum, setPageNum] = useState<number>(1);

  const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum);

  // const intObserver = useRef();
  const intObserver = useRef<IntersectionObserver | null>(null);

  const lastPostRef = useCallback(
    // (post: PostType) => {
    (post: HTMLElement | null) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          setPageNum((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  const content = results.map((post, i) => {
    // * this is giving the last element we get from the results
    if (results.length === i + 1) {
      // ! why does this print 3 times??
      console.log("last element");
      console.log("results.length:", results.length);

      return <Post ref={lastPostRef} key={post.id} post={post} />;
    }
    return <Post key={post.id} post={post} />;
  });

  return (
    <>
      <h1 id="top">
        &infin; Infinite Query &amp; Scroll
        <br />
        &infin; Ex. 1 - React only
      </h1>
      {content}
      {isLoading && <p className="center">Loading More Posts...</p>}
      <p className="center">
        <a href="#top">Back to Top</a>
      </p>
    </>
  );
};

export default Example1;
