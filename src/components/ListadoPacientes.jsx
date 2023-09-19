import Paciente from "./Paciente";

export default function ListadoPacientes({pacientes}) {



  return (
    <div className="sm:w-1/2 lg:w-1/3 sm:h-[730px] overflow-y-auto border-2 border-dashed dark:border-slate-700 rounded-md">
      <section className=" text-slate-700  dark:text-slate-300 px-2 py-5">
        <h2 className="mx-auto text-center text-2xl font-bold">Listado de Pacientes</h2>
        <legend className="font-bold border-b-2 border-dashed border-spacing-5 py-4 px-2">Administra tus {""}
          <span className="underline text-[#426AFC] dark:text-[#FFFB26] decoration-[#426AFC] dark:decoration-[#FFFB26] underline-offset-4 decoration-wavy decoration-2"> 
        Pacientes y Citas
          </span>
        </legend>
        <article className="space-y-2 py-2">

          {pacientes.map(paciente => (
            <Paciente 
              paciente={paciente}
            />
          ))}

        </article>
      </section>
    </div>
  )
}
