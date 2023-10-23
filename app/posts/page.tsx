import React from "react";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: Iposts[] = await response.json();

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="bg-blue-400">ini page</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            {/* //biar ga error pake key post.id */}
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
