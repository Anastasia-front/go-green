interface Props {
  align?: "left" | "right";
  title: string;
  description: string;
}

export function AboutTextBlock({ align = "left", title, description }: Props) {
  return (
    <div
      className={`text-block ${
        align === "left" ? "text-block__left" : "text-block__right"
      }`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
