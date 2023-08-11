import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  
  const edad = 18;

  return (
    <>
      <Header></Header>
      <Formulario></Formulario>
      <ListadoPacientes></ListadoPacientes>
    </>
  )
}

export default App
