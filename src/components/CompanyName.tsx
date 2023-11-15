import { companyName } from "../constants";

export function CompanyName() {
  return (
    <p className="company-name">
      <span>{companyName.firstPart}</span>
      <span className="company-name__second-word">
        {companyName.secondPart}
      </span>
    </p>
  );
}
