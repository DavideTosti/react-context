import { useContext } from "react";
import ThermostatContext from "../contexts/ThermostatContext";

export default function Footer() {
  const { temperature } = useContext(ThermostatContext);
  return (
    <footer className="bg-[#055757] p-5 flex justify-evenly gap-3 text-cyan-300 text-2xl items-center font-semibold border-t-2 border-cyan-300">
      <p>Termostato impostato a</p>
      <p className="bg-[#008080] px-4 py-1 rounded-full border-2 border-cyan-300">
        {temperature} °C
      </p>
    </footer>
  );
}
