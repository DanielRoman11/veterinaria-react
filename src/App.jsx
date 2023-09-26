import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})


  return (
    <>
      <main className="container mx-auto">
        <Header/>
        <div className="sm:flex justify-center gap-2 mt-12 px-2">
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
          />
          <ListadoPacientes 
            pacientes={pacientes}
            setPaciente={setPaciente}
          /> 
        </div>
      </main>
    </>
  )
}

export default App
