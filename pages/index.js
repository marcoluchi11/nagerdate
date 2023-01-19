import Header from "@/components/Header";
import { NagerContext } from "@/context/context";
import { useContext } from "react";

export default function Home({ data }) {
  const { dates } = useContext(NagerContext);
  if (dates.length === 0) return <h1>Loading...</h1>;
  return (
    <>
      <Header />
      <section>
        {dates.map((date, index) => (
          <div key={index}>
            <h1>{date.localName}</h1>
            <p>{date.name}</p>
          </div>
        ))}
      </section>
    </>
  );
}
