import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { NagerContext } from "@/context/context";
import { useContext } from "react";

export default function Home({ data }) {
  const { dates } = useContext(NagerContext);
  const handleClick = (date) => {
    const now = new Date();
    const dateSplit = date.date.split("-");
    const feriado = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    // var diff = Math.abs(feriado - now);
    console.log(feriado.getDay());
    // const fechafinal = new Date(diff);
  };
  if (dates.length === 0) return <Loading />;

  return (
    <>
      <Header />
      <section>
        {dates.map((date, index) => (
          <div key={index}>
            <h1>{date.localName}</h1>
            <p>{date.name}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick(date)}
            >
              Button
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
