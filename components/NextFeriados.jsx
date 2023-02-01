import { NagerContext } from "@/context/context";
import { changeDateFormat, createDateObject, dateDiff } from "@/helpers";
import { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
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
          const feriado = createDateObject(date.date);
          let now = new Date();
          now.setHours(0, 0, 0, 0);
          const howLong = dateDiff(now, feriado);
          return (
            <li
              key={crypto.randomUUID()}
              className="p-2 w-full justify-evenly flex md:flex-row items-center bg-gray-800 my-3 rounded-md font-light text-xs md:text-md "
            >
              <p className="text-sm md:text-lg w-2/4 text-center">
                {date.localName}
              </p>
              <AiOutlineArrowRight className="text-lg" />

              <h3>{changeDateFormat(date.date)}</h3>
              <small className="font-thin md:text-lg text-md">
                Faltan {howLong} dias
              </small>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NextFeriados;
