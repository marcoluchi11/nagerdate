import { NagerContext } from "@/context/context";
import { changeDateFormat } from "@/helpers";
import { useContext } from "react";
import NextFeriados from "./NextFeriados";

const DaysLeft = ({ setToggle, toggle }) => {
  const { daysLeft, dates } = useContext(NagerContext);
  return (
    <>
      <div className="flex flex-col md:w-screen items-center h-screen justify-center md:justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <h3 className="text-3xl m-5">Faltan</h3>
          <h1 className="text-6xl font-bold m-5">{daysLeft} días</h1>
          <h3 className="text-3xl m-5">para el próximo feriado.</h3>
        </div>
        <div className="flex flex-col items-center">
          <small className="">
            {dates[0].localName} {"=>"} {changeDateFormat(dates[0].date)}
          </small>
          <button
            className="inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mt-8"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "X Cerrar" : "Ver Proximos Feriados"}
          </button>
        </div>
        <div className="mt-5 flex flex-col items-">
          {toggle && <NextFeriados />}
        </div>
      </div>
    </>
  );
};

export default DaysLeft;
