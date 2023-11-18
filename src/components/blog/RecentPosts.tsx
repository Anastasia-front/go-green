import { blog, squareRecent } from "../../constants";
import { getAltNameFromPath } from "../../helpers";

import img3 from "../../assets/jpg/squares/fog-and-forest.jpg";
import img2 from "../../assets/jpg/squares/greens.jpg";
import img1 from "../../assets/jpg/squares/sequoias.jpg";

import { Recent, SectionTitle } from ".";

const images = [img1, img2, img3];

export function RecentPosts() {
  return (
    <>
      <SectionTitle text={blog.recentPost.title} />
      <ul className="recent-posts">
        {blog.recentPost.posts.map((post, index) => (
          <Recent
            title={post.title}
            date={post.date}
            key={index}
            src={images[index]}
            alt={getAltNameFromPath(images[index]) || squareRecent}
          />
        ))}
      </ul>
    </>
  );
}
