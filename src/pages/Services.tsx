import { Banner, FirstSectionTextBlock, Subtitle, Title } from "../components";
import { banner, services, svg } from "../constants";
import { getAltNameFromPath } from "../helpers";

import img from "../assets/jpg/team/olivia-slive.jpg";

import img2 from "../assets/svg/services/eco-system.svg";
import img3 from "../assets/svg/services/protecting.svg";
import img5 from "../assets/svg/services/recycling.svg";
import img6 from "../assets/svg/services/save-animal.svg";
import img1 from "../assets/svg/services/use-of-wind.svg";
import img4 from "../assets/svg/services/water-refinning.svg";

import plant from "../assets/png/services/plant.png";

const firstBlocks = [
  {
    imgSrc: img1,
    title: services.firstSection.content.first.title,
    description: services.firstSection.content.first.description,
    align: "left" as const,
  },
  {
    imgSrc: img2,
    title: services.firstSection.content.second.title,
    description: services.firstSection.content.second.description,
    align: "left" as const,
  },
  {
    imgSrc: img3,
    title: services.firstSection.content.third.title,
    description: services.firstSection.content.third.description,
    align: "left" as const,
  },
];

const secondBlocks = [
  {
    imgSrc: img4,
    title: services.firstSection.content.fourth.title,
    description: services.firstSection.content.fourth.description,
    align: "right" as const,
  },
  {
    imgSrc: img5,
    title: services.firstSection.content.fifth.title,
    description: services.firstSection.content.fifth.description,
    align: "right" as const,
  },
  {
    imgSrc: img6,
    title: services.firstSection.content.sixth.title,
    description: services.firstSection.content.sixth.description,
    align: "right" as const,
  },
];

export function Services() {
  return (
    <div className="services">
      <section className="services-section">
        <Title
          green={services.firstSection.title.green}
          black={services.firstSection.title.black}
        />
        <Subtitle text={services.firstSection.subtitle} />

        <div className="services-textContent">
          <ul className="services-textContent__list">
            {firstBlocks.map((block, index) => (
              <FirstSectionTextBlock
                key={index}
                title={block.title}
                description={block.description}
                src={block.imgSrc}
                alt={getAltNameFromPath(block.imgSrc) || svg}
                align={block.align}
              />
            ))}
          </ul>
          <img
            className="services-textContent__img"
            src={plant}
            alt={getAltNameFromPath(plant)}
          />
          <ul className="services-textContent__list">
            {secondBlocks.map((block, index) => (
              <FirstSectionTextBlock
                key={index}
                title={block.title}
                description={block.description}
                src={block.imgSrc}
                alt={getAltNameFromPath(block.imgSrc) || svg}
                align={block.align}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className="services-section">
        <Title
          green={services.secondSection.title.green}
          black={services.secondSection.title.black}
        />
        <Subtitle />
        <Banner
          type="person"
          src={img}
          alt={getAltNameFromPath(img)}
          title={banner.person.Olivia.name}
          description={banner.person.Olivia.about}
        />
        <Banner type="main" />
      </section>
    </div>
  );
}
