import "./Loading.scss";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
      }}
    >
      <span>Pagina no encontrada, intentalo de otra manera ....</span>
    </div>
  );
};
export default NotFound;
