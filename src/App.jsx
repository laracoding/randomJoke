import { getRandomJoke } from "./utils/api";
import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["getRandomJoke"],
    queryFn: getRandomJoke,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>
        <p>{data.setup}</p>
        <p>{data.punchline}</p>
      </div>
      <button style={{ marginTop: "100px" }} onClick={refetch}>
        Next Joke?
      </button>
    </div>
  );
}

export default App;
