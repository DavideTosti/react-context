import { useContext } from "react";
import ThermostatContext from "../contexts/ThermostatContext";

export default function Sidebar() {
  const { resetTemperature } = useContext(ThermostatContext);

  return (
    <div className="bg-[#055757] w-1/8 p-5 items-center justify-center flex flex-col gap-5 border-2 border-cyan-300 rounded-full m-3 shadow-lg shadow-cyan-300/30 h-[50vh]">
      <p className="text-cyan-300 ">Reimposta la temperatura di default</p>
      <button
        type="button"
        onClick={resetTemperature}
        className="cursor-pointer px-10 py-5 rounded-full bg-[#008080] text-cyan-300 border-2 border-cyan-300 text-xl font-semibold shadow-lg shadow-cyan-300/30"
      >
        Reset
      </button>
    </div>
  );
}
