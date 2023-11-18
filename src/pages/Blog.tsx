import { Flicks, Posts, RecentPosts, Tags } from "../components";

export function Blog() {
  return (
    <div className="blog-content">
      <section>
        <Posts />
      </section>
      <div className="blog-sections">
        <section>
          <RecentPosts />
        </section>
        <section>
          <Flicks />
        </section>
        <section>
          <Tags />
        </section>
      </div>
    </div>
  );
}
