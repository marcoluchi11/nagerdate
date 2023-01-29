const ButtonNextFeriados = ({ setToggle, toggle }) => {
  return (
    <button
      className="inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mt-8"
      onClick={() => setToggle(!toggle)}
    >
      {toggle ? "X Cerrar" : "Ver Proximos 5 Feriados"}
    </button>
  );
};

export default ButtonNextFeriados;
