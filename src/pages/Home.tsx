import { buttons, home } from "../constants";

import { Button, CompanyName } from "../components";

export function Home() {
  return (
    <div className="home-content">
      <h1 className="home-title">
        {home.title.firstWord}{" "}
        {<CompanyName className="home-title__font-size" />}{" "}
        {home.title.lastWord}
      </h1>
      <p className="home-description">{home.description}</p>
      <Button text={buttons.main} />
    </div>
  );
}
