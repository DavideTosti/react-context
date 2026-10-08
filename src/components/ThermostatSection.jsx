import { useContext } from "react";
import ThermostatContext from "../contexts/ThermostatContext";

export default function ThermostatSection() {
  const {
    temperature,
    increaseTemperature,
    decreaseTemperature,
    resetTemperature,
  } = useContext(ThermostatContext);
  return (
    <div className="flex flex-col gap-5 items-center">
      <p className="py-5 px-10 text-cyan-300 text-9xl bg-[#055757] rounded-full border-2 border-cyan-300 shadow-lg shadow-cyan-300/30 w-full flex justify-center">
        {temperature} °C
      </p>
      <div className="flex gap-5 w-full justify-center">
        <button
          type="button"
          onClick={decreaseTemperature}
          className={`text-xl rounded-full border-2 py-3 px-8 shadow-lg ${temperature > 16 ? "cursor-pointer  text-cyan-300 bg-[#055757] border-cyan-300 shadow-cyan-300/30" : "text-black bg-[grey] border-black shadow-black/30"}`}
        >
          Decrease
        </button>
        <button
          type="button"
          onClick={resetTemperature}
          className="cursor-pointer py-3 px-8 text-cyan-300 text-xl bg-[#055757] rounded-full border-2 border-cyan-300 shadow-lg shadow-cyan-300/30"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={increaseTemperature}
          className={`text-xl rounded-full border-2 py-3 px-8 shadow-lg ${temperature < 28 ? "cursor-pointer  text-cyan-300 bg-[#055757] border-cyan-300 shadow-cyan-300/30" : "text-black bg-[grey] border-black shadow-black/30"}`}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
