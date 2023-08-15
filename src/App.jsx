import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <>
      <div className="min-[300px]:px-2 container mx-auto mt-20 ">
        <Header />
        <div className="sm:flex justify-center gap-2 mt-12">
          <Formulario />
          <ListadoPacientes /> 

        </div>
      </div>
    </>
  )
}

export default App
