interface Props {
  name: string;
  position: string;
  src: string;
  alt: string;
}

export function Person({ name, position, src, alt }: Props) {
  return (
    <li className="person">
      <img src={src} alt={alt} />
      <div className="person-info">
        <h4 className="person-info__name"> {name}</h4>
        <p className="person-info__position">{position}</p>
      </div>
    </li>
  );
}
