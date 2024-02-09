import { gql, useQuery } from "@apollo/client";
import BodyWarper from "../bodyWarper";

export const GET_ALL_CHARACTERS: any = gql`
  query {
    characters {
      results {
        name
        image
        id
      }
    }
  }
`;

function EpisodeBody() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
  if (loading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>ERRor......</p>;
  }
  return <BodyWarper heading="Episodes" datas={data.characters.results} />;
}

export default EpisodeBody;
