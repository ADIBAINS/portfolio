"use client";

import { useEffect, useState } from "react";

const delhiTime = new Intl.DateTimeFormat("en-IN", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

export function DelhiTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(delhiTime.format(Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <span>Delhi, India{time && <span className="local-time"> · {time} local time</span>}</span>;
}
