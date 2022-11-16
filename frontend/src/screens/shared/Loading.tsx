import "./Loading.scss";

const Loading = () => {
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
      <span>Cargando ....</span>
    </div>
  );
};
export default Loading;
