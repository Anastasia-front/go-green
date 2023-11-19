import React from "react";

import { AboutTextBlock, Banner } from "../components";
import { about } from "../constants";
import { getAltNameFromPath } from "../helpers";

import img3 from "../assets/png/about/bonsai-tree.png";
import img1 from "../assets/png/about/dollar-tree.png";
import img2 from "../assets/png/about/tropical-leaves.png";

const aboutBlocks = [
  {
    imgSrc: img1,
    title: about.abstracts.first.title,
    description: about.abstracts.first.description,
    align: "left" as const,
    className: "about-img__1",
  },
  {
    imgSrc: img2,
    title: about.abstracts.second.title,
    description: about.abstracts.second.description,
    align: "right" as const,
    className: "about-img__2",
  },
  {
    imgSrc: img3,
    title: about.abstracts.third.title,
    description: about.abstracts.third.description,
    align: "left" as const,
    className: "about-img__3",
    isReverse: true,
  },
];

export function About() {
  return (
    <ul className="about">
      {aboutBlocks.map((block, index) => (
        <React.Fragment key={index}>
          <li
            className={`about-block ${block.align} ${
              block.isReverse ? "reverse" : ""
            }`}
          >
            <img
              src={block.imgSrc}
              alt={getAltNameFromPath(block.imgSrc)}
              className={`about-img ${block.className}`}
            />
            <AboutTextBlock
              title={block.title}
              description={block.description}
              align={block.align}
            />
          </li>
          {index === 1 && <Banner />}
        </React.Fragment>
      ))}
    </ul>
  );
}
