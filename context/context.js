import { createDateObject, dateDiff } from "@/helpers";

const { createContext, useState, useEffect } = require("react");

export const NagerContext = createContext();

const NagerProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [now, setNow] = useState(new Date());
  const [error, setError] = useState(false);
  useEffect(() => {
    async function success(position) {
      try {
        setError(false);
        setLoading(true);
        const lat = position.coords.latitude.toFixed(2);
        const long = position.coords.longitude.toFixed(2);
        const countryUrl = `https://secure.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=marcoluchi11`;
        const res = await fetch(countryUrl);
        const result = await res.json();
        const url = `https://date.nager.at/api/v3/publicholidays/2023/${result.countryCode}`;
        const res2 = await fetch(url);
        const result2 = await res2.json();
        const futureDates = result2.filter((res) => {
          const { date } = res;
          const dateFinal = createDateObject(date);
          if (now < dateFinal) return res;
        });
        setDates(futureDates);
        const feriado = createDateObject(futureDates[0].date);
        setDaysLeft(dateDiff(now, feriado));
        setLoading(false);
      } catch (err) {
        console.log("There was an error!", err);
        throw new Error(err);
      }
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      setError(true);
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [now]);
  return (
    <NagerContext.Provider
      value={{ dates, now, error, loading, setDaysLeft, daysLeft }}
    >
      {children}
    </NagerContext.Provider>
  );
};

export default NagerProvider;
