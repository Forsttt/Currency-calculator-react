import { useEffect, useState } from "react"
import "./style.css";

const formatedDate = (date) => 
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  })


 export const UpToDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(dateInterval)
    };
  }, []);

  return (
    <div className="form__Date">
      Dzisaj jest 
      {" "}
      {formatedDate(date)}

    </div>
  )
}

