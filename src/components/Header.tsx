import { FC } from "react";
import Nav from "./Nav";
import { IdProps } from "../App";

const Header: FC<IdProps> = ({ currentUserId, setCurrentUserId }) => {
  return (
    <header>
      <h1>Acme Blogs</h1>
      <Nav currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} />
    </header>
  );
};

export default Header;
