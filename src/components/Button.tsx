interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function Button({ text, type = "button", className = "" }: Props) {
  return (
    <button type={type} className={`button ${className}`}>
      {text}
    </button>
  );
}
