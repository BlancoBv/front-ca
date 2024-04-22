import * as prismic from "@prismicio/client";

const API_ENDPOINT: string = import.meta.env.PUBLIC_PRISMIC_API_URL;

const client = prismic.createClient(API_ENDPOINT, {
  routes: [{ type: "post", path: "/:uid" }],
  accessToken:
    "MC5aaUd1RFJBQUFDVUFRcWpU.axp377-977-977-977-977-9V1fvv70d77-977-9UO-_ve-_vUrvv70FYm0v77-9el7vv73vv73vv70yVu-_vQ",
});

export const getPost = () => {
  return client.getAllByType("post");
};

export const getPostByID = (id: string) => {
  return client.getByUID("post", id);
};
