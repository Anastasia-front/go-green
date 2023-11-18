import { blog, rectangle } from "../../constants";
import { getAltNameFromPath } from "../../helpers";

import { Post } from "./Post";

import img2 from "../../assets/jpg/rectangles/foggy-forest.jpg";
import img1 from "../../assets/jpg/rectangles/solar-batteries.jpg";
import img3 from "../../assets/jpg/rectangles/sunny-mountains.jpg";

const images = [img1, img2, img3];

export function Posts() {
  return (
    <ul className="posts">
      {blog.posts.map((post, index) => (
        <Post
          key={index}
          title={post.title || "title"}
          description={post.description}
          user={post.person}
          amountOfComments={post.commentsNumber || 1}
          src={images[index]}
          alt={getAltNameFromPath(images[index]) || rectangle}
        />
      ))}
    </ul>
  );
}
