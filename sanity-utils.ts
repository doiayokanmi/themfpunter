import { createClient, groq } from "next-sanity";

export async function getData() {
  const client = createClient({
    projectId: "ud31hd31",
    dataset: "production",
    apiVersion: "2023-10-23",
  });

  return client.fetch(
    groq`*[_type=='project'] {
        _id,
        _createdAt,
        homeTeam,
        awayTeam,
        prediction,
        time,
        league,
        correctScore,
        outcome,
        date, 
        odd,
    }`
  )
}
