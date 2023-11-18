import { Button } from ".";
import { banner, buttons } from "../constants";

interface Props {
  type?: "main" | "person";
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
}

export function Banner({
  type = "main",
  src = "",
  alt = "",
  title = "",
  description = "",
}: Props) {
  return type === "main" ? (
    <div className="banner banner-main">
      <div className="banner-column__main">
        <h2 className="banner-title">{banner.main.title}</h2>
        <p className="banner-description">{banner.main.description}</p>
        <Button text={buttons.main} />
      </div>
    </div>
  ) : (
    <div className="banner banner-person">
      <div className="banner-row">
        <img className="banner-photo" src={src} alt={alt} />
        <div className="banner-column__person">
          <h2 className="banner-title banner-title__person">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
