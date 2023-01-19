const { createContext, useState, useEffect } = require("react");

export const NagerContext = createContext();

const NagerProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(false);
      setDates(result2);
      //COMO HACERLO MAS PERFORMANTE
    });
  }, []);
  return (
    <NagerContext.Provider value={{ dates, loading }}>
      {children}
    </NagerContext.Provider>
  );
};

export default NagerProvider;
