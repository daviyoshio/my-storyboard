import { useEffect, useState } from "react";

/** Live local clock (HH:MM) for a given timezone. Digits use the Doto font. */
export function Clock({
  city,
  timeZone,
  className = "",
}: {
  city: string;
  timeZone: string;
  className?: string;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      }).format(new Date());
      setTime(formatted);
    };
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span
      className={`items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted ${className}`}
    >
      <span>{city}</span>
      <span className="font-doto text-[0.8rem] tracking-normal text-ink">
        {time}
      </span>
    </span>
  );
}
