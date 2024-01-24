import { FC } from "react";
import { ISkeletonElement } from "../models/Skeleton";
import "./Skeleton.css";

const SkeletonElement: FC<ISkeletonElement> = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
