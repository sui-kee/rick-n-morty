import { gql, useQuery } from "@apollo/client";
import BodyWarper from "../bodyWarper";
import { Col, Image, Row } from "antd";
import MyLink from "../link";

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

const colStyle: React.CSSProperties = {
  borderRadius: 10,
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

type DataType = { id: number; name: string; image: string };

function CharacterBody() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
  if (loading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>ERRor......</p>;
  }
  return (
    <BodyWarper heading="Charaters">
      <Row>
        {data.characters.results.map((character: DataType, i: number) => (
          <Col
            key={i}
            className=" gutter-row flex flex-col justify-center items-center gap-1"
            style={colStyle}
            span={6}
          >
            <Image
              src={character.image}
              width={200}
              height={200}
              className=" rounded-md object-cover bg-center"
            />
            <MyLink
              href={`/characters/${character.id}`}
              className=" rounded-md text-lg w-[200px] py-2 p-1 text-center text-white bg-black"
            >
              {character.name}
            </MyLink>
          </Col>
        ))}
      </Row>
    </BodyWarper>
  );
}
export default CharacterBody;
