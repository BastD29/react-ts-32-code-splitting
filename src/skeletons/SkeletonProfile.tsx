import { FC } from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";
import { ISkeleton } from "../models/Skeleton";

const SkeletonProfile: FC<ISkeleton> = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProfile;
