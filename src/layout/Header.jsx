import ThermostatContext from "../contexts/ThermostatContext";
import { useContext } from "react";

function getTemperatureStatus(temp) {
  if (temp < 20) return "Freddo";
  if (temp > 24) return "Caldo";
  return "Comfort";
}

export default function Header() {
  const { temperature } = useContext(ThermostatContext);

  const temperatureStatus = getTemperatureStatus(temperature);

  return (
    <header className="bg-[#055757] p-5 flex justify-evenly gap-3 text-cyan-300 text-2xl items-center font-semibold border-b-2 border-cyan-300">
      <p>Temperatura attuale</p>
      <p className="bg-[#008080] px-4 py-1 rounded-full border-2 border-cyan-300">
        {temperatureStatus}
      </p>
    </header>
  );
}
