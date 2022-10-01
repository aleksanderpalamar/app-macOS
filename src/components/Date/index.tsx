import { useState } from "react";

export function DateTime() {
  const [date, setDate] = useState(new Date(
    new Date().toLocaleString()
  ));

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div>
      <span>{date.toLocaleDateString(
        "pt-BR", {
          timeZone: "America/Sao_Paulo",
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      )}</span>
    </div>
  );
}