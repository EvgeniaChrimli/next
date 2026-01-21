import CardPost from "@/components/CardPost";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { START_UPS_QUERY } from "@/sanity/lib/queries";
import { StartUp } from "@/sanity.types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams)?.query;
  const posts = await client.fetch<StartUp[]>(START_UPS_QUERY);
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
        <p className="uppercase sm:text-[24px] sm:leading-16 text-[26px]">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts &&
            posts.length > 0 &&
            posts.map((el) => <CardPost key={el._id} el={el} />)}
        </ul>
      </section>
    </>
  );
}
