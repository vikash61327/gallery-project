import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const URL = `https://picsum.photos/v2/list?page=${index}&limit=8`;
  const getData = async () => {
    console.log("get data");
    const response = await axios.get(URL);

    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 text-lg text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((user, idx) => {
      return (
        <div key={idx}>
          <Card user={user} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto text-white p-4 h-screen ">
      <div className="flex flex-wrap gap-5 justify-center bg-gray-900">
        {printUserData}
      </div>

      <div>
        <div className="flex justify-center items-center p-4 gap-4 Hover-pointer px-4 py-2">
          <button
          style={{opacity:index==1 ? 0.5 : 1}}
            className="bg-amber-400 cursor-pointer active:scale-90 text-sm text-white rounded px-4 py-2 font-bold"
            onClick={() => {
              if (index > 1) setIndex(index - 1);
              setUserData([]);
            }}
          >
            Pre...
          </button>
          <h3>Page {index} </h3>
          <button
            className="bg-amber-400 cursor-pointer active:scale-90 text-sm text-white rounded px-4 py-2 font-bold"
            onClick={() => {
              setUserData([]);
              setIndex(index + 1);
            }}
          >
            Nexr...
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
