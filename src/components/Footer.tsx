import { Leaves, Logo, Socials } from ".";

export function Footer() {
  return (
    <footer className="footer">
      <div className="white-block">
        <Socials />
        <Leaves />
      </div>

      <div className="black-block">
        <div className="black-overlay"></div>
        <Logo />
      </div>
    </footer>
  );
}
