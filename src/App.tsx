import { FlyAble } from "react-flyable-component";
import ExampleComp from "./components/ExampleComp.tsx";
import { useState } from "react";

function App() {
  const [flyAble, setFlyAble] = useState(true);
  const [fixed, setFixed] = useState(false);
  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => setFlyAble(!flyAble)}>
          toggle flyAble : {flyAble ? "on" : "off"}
        </button>
        <button onClick={() => setFixed(!fixed)}>
          toggle fixed : {fixed ? "on" : "off"}
        </button>
      </div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          gap: "10px",
          width: "80%",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <FlyAble flyAble={flyAble} fixed={fixed}>
          <ExampleComp />
        </FlyAble>
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
        <ExampleComp />
      </div>
    </div>
  );
}

export default App;
