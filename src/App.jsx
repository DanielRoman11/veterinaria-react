import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <>
      <main className="container mx-auto">
        <Header />
        <div className="sm:flex justify-center gap-2 mt-12">
          <Formulario />
          <ListadoPacientes /> 
        </div>
      </main>
    </>
  )
}

export default App
