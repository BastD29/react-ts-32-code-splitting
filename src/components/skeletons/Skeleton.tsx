import { FC } from "react";
import "./Skeleton.css";

type SkeletonProps = {
  classes: string; // Explicit type annotation for the 'classes' prop
};

const Skeleton: FC<SkeletonProps> = ({ classes }) => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};
export default Skeleton;
