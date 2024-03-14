import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>{" "}
      </div>
    </>
  );
}

export default App;
