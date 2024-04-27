import * as prismic from "@prismicio/client";

const API_ENDPOINT: string = import.meta.env.PUBLIC_PRISMIC_API_URL;
const TOKEN = import.meta.env.PRIVATE_TOKEN;

const client = prismic.createClient(API_ENDPOINT, {
  routes: [{ type: "post", path: "/:uid" }],
  accessToken: TOKEN,
});

export const getPost = () => {
  return client.getAllByType("post");
};

export const getPostByID = (id: string) => {
  return client.getByUID("post", id);
};
