import "./styles.css";
import { request } from "graphql-request";
import useSWR from "swr";

export default function App() {
  const { data } = useSWR(
    [
      `query getMembers {
      members {
        id
        name
        password
      }
    }`
    ],
    (query) =>
      request(
        "https://api-ap-northeast-1.graphcms.com/v2/ckuzc9owr0kmd01z4g3kl3csf/master",
        query
      )
  );

  async function handleClick() {
    console.log(JSON.stringify(data));
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={handleClick}>test</button>
    </div>
  );
}
