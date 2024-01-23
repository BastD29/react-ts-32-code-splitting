import useSWR from "swr";
import Item from "./Item";
import { getWikiSearchResults } from "../api/wikiApi";
import { FC } from "react";

type ListProps = {
  searchTerm: string;
};

type Thumbnail = {
  source: string;
  width: number;
  height: number;
};

export type Result = {
  pageid: number;
  title: string;
  extract: string;
  thumbnail: Thumbnail;
};

const List: FC<ListProps> = ({ searchTerm }) => {
  const { isLoading, error, data } = useSWR(
    searchTerm ? searchTerm : null,
    getWikiSearchResults
  );

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (error) content = <p>{error.message}</p>;
  else if (data?.query?.pages) {
    const results: Result[] = data?.query?.pages;
    content = (
      <ul>
        {Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })}
      </ul>
    );
  }

  return content;
};
export default List;
