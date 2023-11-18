import { Person } from "../components";
import { person, team } from "../constants";
import { getAltNameFromPath } from "../helpers";

import img6 from "../assets/jpg/team/darlene.jpg";
import img5 from "../assets/jpg/team/gregory.jpg";
import img4 from "../assets/jpg/team/kristin.jpg";
import img2 from "../assets/jpg/team/soham.jpg";
import img3 from "../assets/jpg/team/tanya.jpg";
import img1 from "../assets/jpg/team/wade-warren.jpg";

const images = [img1, img2, img3, img4, img5, img6];
const members = team.members;

export function Contact() {
  return (
    <section className="contact-section">
      <h1>{team.title}:</h1>
      <ul className="team">
        {members.map((member, index) => (
          <Person
            key={index}
            src={images[index]}
            alt={getAltNameFromPath(images[index]) || person}
            name={member.name}
            position={member.position}
          />
        ))}
      </ul>
    </section>
  );
}
