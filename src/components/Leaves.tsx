import { useMediaQuery } from "react-responsive";

import leafSvg from "../assets/svg/leaf.svg";

import { leaf } from "../constants";

export function Leaves() {
  const mobile = useMediaQuery({ query: "(max-width:399px)" });
  const tablet = useMediaQuery({
    query: "(max-width:1199px)",
  });
  const desktop = useMediaQuery({ query: "(min-width:1200px)" });

  return (
    <div className="leaves">
      {(() => {
        const images = [];
        let counter = 0;

        const amountOfLeavesFunction = () => {
          if (mobile) {
            return 6;
          } else if (tablet) {
            return 8;
          } else if (desktop) {
            return 10;
          } else {
            return 11;
          }
        };
        const amountOfLeaves = amountOfLeavesFunction();

        while (counter < amountOfLeaves) {
          images.push(
            <img
              key={counter}
              src={leafSvg}
              alt={leaf}
              className="leaf"
              data-rotation={counter}
            />
          );
          counter++;
        }

        return images;
      })()}
    </div>
  );
}
