import { blog, squareFlick } from "../../constants";
import { getAltNameFromPath } from "../../helpers";

import img1 from "../../assets/jpg/squares/bay.jpg";
import img2 from "../../assets/jpg/squares/coast.jpg";
import img3 from "../../assets/jpg/squares/far-mountains.jpg";
import img4 from "../../assets/jpg/squares/forest.jpg";
import img5 from "../../assets/jpg/squares/see-and-rock.jpg";
import img6 from "../../assets/jpg/squares/see.jpg";

import { Flick, SectionTitle } from ".";

const images = [img1, img2, img3, img4, img5, img6];

export function Flicks() {
  return (
    <>
      <SectionTitle text={blog.flickPhotos.title} />
      <ul className="flicks">
        {images.map((image, index) => (
          <Flick
            key={index}
            src={image}
            alt={getAltNameFromPath(image) || squareFlick}
          />
        ))}
      </ul>
    </>
  );
}
