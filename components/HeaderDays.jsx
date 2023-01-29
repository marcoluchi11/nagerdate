const HeaderDays = ({ daysLeft }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <h3 className="text-3xl m-5">Faltan</h3>
      <h1 className="text-6xl font-bold m-5">{daysLeft} días</h1>
      <h3 className="text-3xl m-5">para el próximo feriado.</h3>
    </div>
  );
};

export default HeaderDays;
