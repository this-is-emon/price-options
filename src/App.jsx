import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h1 className=" text-7xl bg-rose-600">Vite + React</h1>
      <PriceOptions />
    </>
  );
}

export default App;
