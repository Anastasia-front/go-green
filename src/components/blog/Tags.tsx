import { blog } from "../../constants";

import { SectionTitle, Tag } from ".";

export function Tags() {
  return (
    <>
      <SectionTitle text={blog.tags.title} />
      <ul className="tags">
        {blog.tags.tags.map((tag, index) => (
          <Tag
            key={index}
            tag={tag}
            className={`${index % 2 === 0 ? "" : "margin-top"}`}
          />
        ))}
      </ul>
    </>
  );
}
