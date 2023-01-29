import DaysLeft from "@/components/DaysLeft";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import { NagerContext } from "@/context/context";
import Head from "next/head";
import { useContext, useState } from "react";

export default function Home() {
  const { dates } = useContext(NagerContext);
  const [toggle, setToggle] = useState(false);
  if (dates.length === 0)
    return (
      <section className="h-screen flex flex-col">
        <Loading />
      </section>
    );

  return (
    <>
      <Head>
        <link rel="icon" href="logo.png" />
        <title>Feriado</title>
      </Head>
      <Layout>
        <section className=" bg-black text-white flex flex-col items-center justify-around h-full">
          <DaysLeft setToggle={setToggle} toggle={toggle} />
        </section>
      </Layout>
    </>
  );
}
