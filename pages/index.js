import DaysLeft from "@/components/DaysLeft";
import Loading from "@/components/Loading";
import { NagerContext } from "@/context/context";
import { useContext, useState } from "react";

export default function Home() {
  const { dates } = useContext(NagerContext);
  const [toggle, setToggle] = useState(false);
  if (dates.length === 0) return <Loading />;

  return (
    <>
      <section className=" bg-black text-white flex flex-col items-center justify-around h-full">
        <DaysLeft setToggle={setToggle} toggle={toggle} />
      </section>
    </>
  );
}
