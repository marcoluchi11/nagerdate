import { NagerContext } from "@/context/context";
import { changeDateFormat } from "@/helpers";
import { useContext } from "react";

const NextFeriados = () => {
  const { dates } = useContext(NagerContext);
  return (
    <ul className="flex flex-col items-center">
      {dates.map((date, index) => {
        if (index === 0) {
          return null;
        }
        if (index >= 6) {
          return null;
        } else {
          return (
            <li
              key={crypto.randomUUID()}
              className="p-2 bg-gray-800 my-3 rounded-md font-light "
            >
              {date.localName} {"=>"} {changeDateFormat(date.date)}{" "}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NextFeriados;
