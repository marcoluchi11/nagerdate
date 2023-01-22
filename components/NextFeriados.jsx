import { NagerContext } from "@/context/context";
import { useContext } from "react";

const NextFeriados = () => {
  const { dates } = useContext(NagerContext);
  return dates.map((date, index) => {
    if (index === 0) {
      return null;
    } else {
      return (
        <div key={index}>
          <small className="mr-3">{date.localName}</small>
          <small className="mr-3">{date.date}</small>
        </div>
      );
    }
  });
};

export default NextFeriados;
