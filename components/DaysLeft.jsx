import { NagerContext } from "@/context/context";
import { changeDateFormat } from "@/helpers";
import { useContext } from "react";
import ButtonNextFeriados from "./ButtonNextFeriados";
import HeaderDays from "./HeaderDays";
import NextFeriados from "./NextFeriados";
import { AiOutlineArrowRight } from "react-icons/ai";
const DaysLeft = ({ setToggle, toggle }) => {
  const { daysLeft, dates } = useContext(NagerContext);
  return (
    <>
      <div className="flex flex-col md:w-screen items-center h-full justify-center md:justify-center">
        <HeaderDays daysLeft={daysLeft} />
        <div className="flex flex-col items-center">
          <small className="font-thin flex items-center">
            {dates[0].localName}{" "}
            <AiOutlineArrowRight className="text-md mx-2" />{" "}
            {changeDateFormat(dates[0].date)}
          </small>
          <ButtonNextFeriados setToggle={setToggle} toggle={toggle} />
        </div>
        <div className="mt-5 flex flex-col items-center">
          {toggle && <NextFeriados />}
        </div>
      </div>
    </>
  );
};

export default DaysLeft;
