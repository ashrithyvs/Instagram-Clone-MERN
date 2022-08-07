import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../components";
function Feed() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("http://localhost:4001/posts").then((res) => {
      setPosts(res.data.data);
      console.log(res.data.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="bg-[#fefefe] py-6">
      <div className="w-1/3 mx-auto">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
}

export default Feed;