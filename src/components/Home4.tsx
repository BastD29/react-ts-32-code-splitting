import { Suspense, /* lazy, */ useState } from "react";
// import { wait } from "../utils/wait";
import { lazyLoad } from "../utils/lazyLoad";
// import { AdminData } from "./AdminData";
// import { sum } from "../utils/sum";

// const AdminData = lazy(() =>
//   wait(1000).then(() =>
//     import("./AdminData").then((module) => {
//       return { default: module.AdminData };
//     })
//   )
// );

const AdminData = lazyLoad("../components/AdminData", "AdminData"); // the path is relative of where lazyLoad function is defined

// * with code splitting AdminData using lazyLoad function

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      <h1>Home</h1>
      {/* <button onClick={() => alert(sum(2, 2))}>Add 2 + 2</button> */}
      <button
        onClick={() => {
          import("../utils/sum").then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle admin</button>
      <Suspense fallback={<h2>Loading...</h2>}>
        {isAdmin ? <AdminData /> : <h2>Not admin</h2>}
      </Suspense>
    </>
  );
}
