import { useParams } from "react-router-dom";

export default function Single() {
  const { country_name } = useParams();
  return <div>{country_name}</div>;
}
