interface Props {
  src: string;
  alt: string;
  title: string;
  date: string;
}

export function Recent({ src, alt, title, date }: Props) {
  return (
    <div className="recent-block">
      <img className="flick" src={src} alt={alt} />
      <div className="recent-text">
        <h6 className="recent-title">{title}</h6>
        <p className="recent-date">{date}</p>
      </div>
    </div>
  );
}
