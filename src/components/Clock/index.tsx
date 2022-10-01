import { useState } from "react";

export function ClockComponent() {
  const [time, setTime] = useState(new Date(
    new Date().toLocaleString()
  ));

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div>
      <span>{time.toLocaleTimeString(
        "pt-BR", {
          timeZone: "America/Sao_Paulo",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",     
        },
      )}</span>
    </div>
  );
}