import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [enableShirt, setEnableShirt] = useState(false);
  console.log(enableShirt);
  return (
    <main
      className="app transition-all ease-in"
      style={{ backgroundImage: `url("./t.png")` }}
    >
      <Home setEnableShirt={setEnableShirt} />
      <Canvas enableShirt={enableShirt} />
      <Customizer />
    </main>
  );
}

export default App;
