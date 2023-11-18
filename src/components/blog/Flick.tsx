interface Props {
  src: string;
  alt: string;
}

export function Flick({ src, alt }: Props) {
  return <img className="flick" src={src} alt={alt} />;
}
