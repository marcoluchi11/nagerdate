import { createDateObject, dateDiff } from "@/helpers";

const { createContext, useState, useEffect } = require("react");

export const NagerContext = createContext();

const NagerProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      setLoading(true);
      const lat = position.coords.latitude.toFixed(2);
      const long = position.coords.longitude.toFixed(2);
      const countryUrl = `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=marcoluchi11`;
      const res = await fetch(countryUrl);
      const result = await res.json();
      const url = `https://date.nager.at/api/v3/publicholidays/2023/${result.countryCode}`;
      const res2 = await fetch(url);
      const result2 = await res2.json();
      const now = new Date();

      const futureDates = result2.filter((res) => {
        const { date } = res;
        const dateFinal = createDateObject(date);
        if (now < dateFinal) return res;
      });
      setDates(futureDates);
      const feriado = createDateObject(futureDates[0].date);
      setDaysLeft(dateDiff(now, feriado));
      setLoading(false);
      //COMO HACERLO MAS PERFORMANTE
    });
  }, []);
  return (
    <NagerContext.Provider value={{ dates, loading, setDaysLeft, daysLeft }}>
      {children}
    </NagerContext.Provider>
  );
};

export default NagerProvider;
