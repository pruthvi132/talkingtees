// App.jsx
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [bgImage, setBgImage] = useState("./t.png");

  const changeBgImage = (newImage) => {
    setBgImage(newImage);
  };
  const handleClick = () => {
    state.intro = true;
    changeBgImage("./t.png");
  };
  return (
    <main
      className="app transition-all ease-in"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Home changeBgImage={changeBgImage} />
      <Canvas />
      <Customizer changeBgImage={changeBgImage} />
    </main>
  );
}

export default App;
