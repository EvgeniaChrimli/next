import { defineQuery } from "next-sanity";

export const START_UPS_QUERY =
  defineQuery(`*[_type == "startUp" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  title, slug, _createdAt, 
  image, category, description, pitch, 
  author -> { _id, name, bio } }`);
