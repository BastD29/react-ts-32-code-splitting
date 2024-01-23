import { Dispatch, SetStateAction, Suspense, useState } from "react";

import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/Header";
import PostsList from "./components/PostsList";
import ErrorFallback from "./components/ErrorFallback";
import SkeletonPost from "./components/skeletons/SkeletonPost";

export type IdProps = {
  currentUserId: number;
  setCurrentUserId: Dispatch<SetStateAction<number>>;
  //   setCurrentUserId: (userId: number) => void;
};

// ! something I do not understand with this app: the content is refetched without doing nothing (abnormality)
// ! found in the swr documentation: React still does not recommend using suspense in data frameworks like SWR

function App() {
  const [currentUserId, setCurrentUserId] = useState(0);

  const content =
    currentUserId === 0 ? (
      <h2 className="message">Select an Employee to view posts</h2>
    ) : (
      // * why do we need error boundary? In order, in case of error, to let the user know that there is an error (he would not understand in case of a blank page, for example)
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCurrentUserId(0)}
        resetKeys={[currentUserId]}
      >
        <Suspense
          fallback={[...Array(10).keys()].map((i) => (
            <SkeletonPost key={i} />
          ))}
        >
          <PostsList currentUserId={currentUserId} />
        </Suspense>
      </ErrorBoundary>
    );

  return (
    <>
      <Header
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      {/* <PostsList currentUserId={currentUserId} /> */}
      {content}
    </>
  );
}

export default App;
