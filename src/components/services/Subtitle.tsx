interface Props {
  text?: string;
}

export function Subtitle({ text = "" }: Props) {
  return (
    <h6
      className={`services-subtitle ${
        text === ""
          ? "services-subtitle__empty"
          : "services-subtitle__with-text"
      }`}
    >
      {text}
    </h6>
  );
}
