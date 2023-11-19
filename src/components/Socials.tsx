import facebook from "../assets/svg/socials/facebook.svg";
import instagram from "../assets/svg/socials/instagram.svg";
import telegram from "../assets/svg/socials/telegram.svg";
import whatsApp from "../assets/svg/socials/whatsApp.svg";

import { contact } from "../constants";
import { getAltNameFromPath } from "../helpers";

const socials = [facebook, telegram, whatsApp, instagram];

export function Socials() {
  return (
    <div className="contacts">
      <p>{contact}:</p>
      <ul className="socials">
        {socials.map((social, index) => (
          <a key={index} className="social" href="#">
            <img src={social} alt={getAltNameFromPath(social)} />
          </a>
        ))}
      </ul>
    </div>
  );
}
