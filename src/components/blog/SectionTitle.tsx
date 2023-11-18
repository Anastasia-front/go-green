interface Props {
  text: string;
}

export function SectionTitle({ text }: Props) {
  return <h5 className="blog-sectionTitle">{text}</h5>;
}
