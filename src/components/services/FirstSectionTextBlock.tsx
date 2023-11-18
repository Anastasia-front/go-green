interface Props {
  align: "left" | "right";
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function FirstSectionTextBlock({
  align,
  src,
  alt,
  title,
  description,
}: Props) {
  return (
    <li
      className={`firstSection-textBlock ${
        align === "left"
          ? "firstSection-textBlock__left"
          : "firstSection-textBlock__right"
      }`}
    >
      <div className="firstSection-textBlock__text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="firstSection-textBlock__img">
        <img src={src} alt={alt} />
      </div>
    </li>
  );
}
