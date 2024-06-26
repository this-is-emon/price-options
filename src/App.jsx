import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/NavBar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h1 className=" text-7xl bg-rose-600">Vite + React</h1>
      <PriceOptions />
      <LineChart />
      <Phones />
    </>
  );
}

export default App;
