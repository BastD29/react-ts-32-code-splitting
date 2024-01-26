// import axios from "axios";

// export const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

// export const getPostsPage = async (pageParam = 1, options = {}) => {
//   const response = await api.get(`/posts?_page=${pageParam}`, options);
//   return response.data;
// };

import axios, { AxiosResponse } from "axios";
import { OptionType } from "../models/Option";
import { PostType } from "../models/Post";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPostsPage = async (
  pageParam: number = 1,
  options: OptionType = {}
): Promise<PostType[]> => {
  const response: AxiosResponse<PostType[]> = await api.get(
    `/posts?_page=${pageParam}`,
    options
  );
  return response.data;
};
