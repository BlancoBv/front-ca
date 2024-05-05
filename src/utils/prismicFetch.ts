import * as prismic from "@prismicio/client";

const API_ENDPOINT: string = import.meta.env.PUBLIC_PRISMIC_API_URL;
const TOKEN = import.meta.env.PRIVATE_TOKEN;

const client = prismic.createClient(API_ENDPOINT, {
  routes: [{ type: "post", path: "/:uid" }],
  accessToken: TOKEN,
});

export const getAllPost = () => {
  return client.getAllByType("post");
};

export const getPaginatedPost = (page: number) => {
  return client.getByType("post", { pageSize: 10, page });
};

export const getPostByID = (id: string) => {
  return client.getByUID("post", id);
};
