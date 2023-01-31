const Error = ({ message }) => {
  return (
    <div
      className="bg-red-100 mx-2  text-red-700 px-4 py-3 rounded text-center"
      role="alert"
    >
      <h1 className="font-bold text-2xl">{message}</h1>
      <small>Permití la ubicación y luego refrescá la página</small>
    </div>
  );
};

export default Error;
