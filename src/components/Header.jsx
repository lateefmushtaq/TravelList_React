import logo from "../assets/logo.png";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#597445",
        color: "#E7F0DC",
      }}
    >
      <img style={{ width: "55px" }} src={logo} alt="logoImage"></img>
      <h2>MyTravel List 🧳</h2>
    </div>
  );
}

export default Header;
