import { useMediaQuery } from "react-responsive";

import leaf from "../assets/svg/plant.svg";

import facebook from "../assets/svg/socials/facebook.svg";
import instagram from "../assets/svg/socials/instagram.svg";
import telegram from "../assets/svg/socials/telegram.svg";
import whatsApp from "../assets/svg/socials/whatsApp.svg";

import { contact } from "../constants";

import { Logo } from ".";

const socials = [facebook, telegram, whatsApp, instagram];

export function Footer() {
  const mobile = useMediaQuery({ query: "(max-width:399px)" });
  const tablet = useMediaQuery({
    query: "(max-width:1199px)",
  });
  const desktop = useMediaQuery({ query: "(min-width:1200px)" });

  return (
    <footer className="footer">
      <div className="white-block">
        <div className="contacts">
          <p>{contact}:</p>
          <ul className="socials">
            {socials.map((social, index) => (
              <a key={index} className="social" href="#">
                <img src={social} alt={social} />
              </a>
            ))}
          </ul>
        </div>
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
                  src={leaf}
                  alt="leaf"
                  className="leaf"
                  data-rotation={counter}
                />
              );
              counter++;
            }

            return images;
          })()}
        </div>
      </div>
      <div className="black-block">
        <div className="black-overlay"></div>
        <Logo />
      </div>
    </footer>
  );
}
