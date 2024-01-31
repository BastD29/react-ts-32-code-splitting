import { lazy } from "react";

function lazyLoad(path: string, namedExport: string) {
  return lazy(() => {
    const promise = import(path);

    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}

export { lazyLoad };
