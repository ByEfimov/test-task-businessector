import "./App.css";
import SearchComp from "./components/searchComponent";
import TableComp from "./components/tableComponent";
import ButtonsComp from "./components/ButtonComponent";
import { useState } from "react";

function App() {
  const [PostsData, setPostsData] = useState({});
  const [load, setLoad] = useState(true);
  const [showPage, setShowPage] = useState(10);
  const [filter, setFilter] = useState("");

  async function dataload() {
    if (load === true) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPostsData(await response.json());
        setLoad(false);
      } catch (e) {
        console.error(e);
        setLoad(false);
      }
    }
  }
  dataload();

  return (
    <div className="screen">
      <SearchComp setFilter={setFilter}></SearchComp>
      <TableComp
        filter={filter}
        showPage={showPage}
        PostsData={PostsData}
      ></TableComp>
      <ButtonsComp
        filter={filter}
        setShowPage={setShowPage}
        showPage={showPage}
        PostsData={PostsData}
      ></ButtonsComp>
    </div>
  );
}

export default App;
