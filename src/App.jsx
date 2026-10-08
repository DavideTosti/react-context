import { useState } from "react";
import ThermostatContext from "./contexts/ThermostatContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";

function App() {
  const [temperature, setTemperature] = useState(20);

  function increaseTemperature() {
    setTemperature((actualTemperature) =>
      actualTemperature < 28 ? actualTemperature + 1 : actualTemperature,
    );
  }
  function decreaseTemperature() {
    setTemperature((actualTemperature) =>
      actualTemperature > 16 ? actualTemperature - 1 : actualTemperature,
    );
  }
  function resetTemperature() {
    setTemperature(20);
  }

  const contextValues = {
    temperature,
    increaseTemperature,
    decreaseTemperature,
    resetTemperature,
  };
  return (
    <div className="flex flex-col bg-[#008080] min-h-[100vh]">
      <ThermostatContext value={contextValues}>
        <Header />
        <div className="flex gap-5 grow items-center justify-evenly">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </ThermostatContext>
    </div>
  );
}

export default App;
