import CardPost from "@/components/CardPost";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams)?.query;
  const post: any = [];
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch your startup <br />
          connect with entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit ideas, Vote on Pitches and get notice in virtual competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {post && post.length > 0 && post.map((el: any) => <CardPost />)}
        </ul>
      </section>
    </>
  );
}
