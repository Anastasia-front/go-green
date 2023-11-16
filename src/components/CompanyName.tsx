import { companyName } from "../constants";

interface Props {
  className?: string;
}

export function CompanyName({ className = "" }: Props) {
  return (
    <p className={`company-name ${className}`}>
      <span>{companyName.firstPart}</span>
      <span className="company-name__second-word">
        {companyName.secondPart}
      </span>
    </p>
  );
}
