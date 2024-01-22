import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
// import Admin from "./components/Admin";

import { Suspense, lazy } from "react";
import SkeletonAdmin from "./components/skeletons/SkeletonAdmin";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
const Admin = lazy(() => import("./components/Admin"));

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="admin" element={<Admin />} /> */}
        <Route
          path="admin"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate("/")}
            >
              <Suspense fallback={<SkeletonAdmin />}>
                <Admin />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
