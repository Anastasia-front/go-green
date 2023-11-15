import leaf from "../assets/svg/plant.svg";

import facebook from "../assets/svg/socials/facebook.svg";
import instagram from "../assets/svg/socials/instagram.svg";
import telegram from "../assets/svg/socials/telegram.svg";
import whatsApp from "../assets/svg/socials/whatsApp.svg";

import { contact } from "../constants";

import { Logo } from ".";

const socials = [facebook, telegram, whatsApp, instagram];

export function Footer() {
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
          </ul>{" "}
        </div>

        {(() => {
          const images = [];
          let counter = 0;

          while (counter < 10) {
            images.push(
              <img
                key={counter}
                src={leaf}
                alt="leaf"
                className="leaf"
                data-rotation="#{rotation}"
              />
            );
            counter++;
          }

          return images;
        })()}
      </div>
      <div className="black-block">
        <div className="black-overlay"></div>
        <Logo />
      </div>
    </footer>
  );
}
