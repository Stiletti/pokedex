import { useEffect } from "react";
import "./App.css";

export default function App() {
  return (
    useEffect(() => {
      document.body.classList.add("bg-red-500");
    }),
    (
      <div class="wrapper flex flex-col items-center">
        <div class="user-input">
          <input
            class="px-5 py-2 border-solid border-black border-2 rounded-md"
            type="text"
            placeholder="Pokemon name ..."
          />
          <button class="search-button my-5 mx-2 border-solid border-black border-2 rounded-md bg-blue-400 hover:bg-blue-600 hover:scale-110 hover:rounded-lg active:scale-95 px-5 py-2">
            Search
          </button>
        </div>
      </div>
    )
  );
}
