import comment from "../../assets/svg/blog/comment.svg";
import person from "../../assets/svg/blog/person.svg";

import { buttons } from "../../constants";
import { getAltNameFromPath } from "../../helpers";

import { Button } from "..";

interface Props {
  src?: string;
  alt?: string;
  title: string;
  description: string;
  user?: string;
  amountOfComments?: number;
}

export function Post({
  src,
  alt,
  title,
  description,
  user,
  amountOfComments = 0,
}: Props) {
  const commentText = amountOfComments > 1 ? "comments" : "comment";

  return (
    <li className="post">
      <img className="post-img" src={src} alt={alt} />
      <div className="post-content">
        <div className="post-info">
          <div className="post-info__user">
            <img src={person} alt={getAltNameFromPath(person)} /> <p>{user}</p>
          </div>
          {amountOfComments !== 0 && (
            <div className="post-info__comment">
              <img src={comment} alt={getAltNameFromPath(comment)} />{" "}
              <p>
                {amountOfComments} {commentText}
              </p>
            </div>
          )}
        </div>
        <h2 className="post-title">{title}</h2>
        <p className="post-description">{description}</p>
      </div>

      <Button text={buttons.more} className="post-button" />
    </li>
  );
}
