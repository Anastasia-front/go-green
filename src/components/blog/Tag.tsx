interface Props {
  tag: string;
  className?: string;
}

export function Tag({ tag, className = "" }: Props) {
  return (
    <li className={`tag ${className}`}>
      <p>{tag}</p>
    </li>
  );
}
