export function MyAwesomeApp() {
  const firstName = "Roxana";
  const lastName = "Mendoza";

  const favoriteGames = ["GTA", "FIFA", "MARIO BROS"];
  const isActive = true;

  const address = {
    zipCode: "12345",
    city: "Buenos Aires",
  };

  const myStyle = {
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
  };

  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(", ")} </p>
      <p>{2 + 2}</p>
      <h1>{isActive ? "Activo" : "No Activo"}</h1>

      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  );
}
