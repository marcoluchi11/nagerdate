import DaysLeft from "@/components/DaysLeft";
import Error from "@/components/Error";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import { NagerContext } from "@/context/context";
import { useContext, useState } from "react";

export default function Home() {
  const { dates, error } = useContext(NagerContext);
  const [toggle, setToggle] = useState(false);
  if (error)
    return (
      <Layout>
        <Error message="Error! Tenés que darnos el permiso para saber tu ubicación" />
      </Layout>
    );
  if (dates.length === 0)
    return (
      <Layout>
        <section className="flex justify-center">
          <Loading />
        </section>
      </Layout>
    );

  return (
    <>
      <Layout>
        <section className=" bg-black text-white flex flex-col items-center justify-around h-full">
          <DaysLeft setToggle={setToggle} toggle={toggle} />
        </section>
      </Layout>
    </>
  );
}
