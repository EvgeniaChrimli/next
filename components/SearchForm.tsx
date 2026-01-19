import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

interface SearchFormProps {
  query?: string;
}
const SearchForm = ({ query }: SearchFormProps) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        placeholder="Search startups..."
        className="search-input"
        defaultValue=""
      />
      <div className="flex gap-2">{query && <SearchFormReset />}</div>
      <button type="submit" className="search-btn">
        <Search className="size-5" />
      </button>
    </Form>
  );
};

export default SearchForm;
