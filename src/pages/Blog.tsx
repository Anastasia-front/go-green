import { Flicks, Posts, RecentPosts, Tags } from "../components";

export function Blog() {
  return (
    <div className="blog-content">
      <section>
        <Posts />
      </section>
      <div className="blog-sections">
        <section className="blog-section">
          <RecentPosts />
        </section>
        <section className="blog-section">
          <Flicks />
        </section>
        <section className="blog-section">
          <Tags />
        </section>
      </div>
    </div>
  );
}
