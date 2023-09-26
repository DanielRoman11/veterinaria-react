import Paciente from "./Paciente";

export default function ListadoPacientes({pacientes, setPaciente}) {

  return (
    <div className="sm:w-1/2 lg:w-1/3 sm:h-[730px] overflow-y-auto border-2 border-dashed dark:border-slate-700 rounded-md">
      <section className=" text-slate-700  dark:text-slate-300 px-2 py-5">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="mx-auto text-center text-2xl font-bold">Listado de Pacientes</h2>
            <legend className="font-bold text-center py-4 px-2">
              <span className="underline text-[#426AFC] dark:text-[#FFFB26] decoration-[#426AFC] dark:decoration-[#FFFB26] underline-offset-4 decoration-wavy decoration-2"> Pacientes y Citas</span>
            </legend>
            <article className="space-y-2 py-2">
              {
                pacientes.map((paciente) => (
                  <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />)
              )}
            </article>
          </>
        ) : (
          <>
            <h2 className="mx-auto text-center text-2xl font-bold">No hay Pacientes</h2>
              <legend className="font-bold py-4 px-2 text-center"> Registra tus
                <span className="underline text-[#426AFC] dark:text-[#FFFB26] decoration-[#426AFC] dark:decoration-[#FFFB26] underline-offset-4 decoration-wavy decoration-2"> Pacientes y Citas</span>
              </legend>
          </>
        )}
      </section>
    </div>
  )
}
