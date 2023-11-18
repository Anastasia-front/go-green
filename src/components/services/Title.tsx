interface Props {
  green: string;
  black: string;
}

export function Title({ green, black }: Props) {
  return (
    <h2 className="services-title">
      <span>{green}</span>
      {black}
    </h2>
  );
}
