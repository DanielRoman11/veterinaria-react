import Paciente from "./Paciente";

export default function ListadoPacientes() {
  return (
    <div className="sm:w-1/2 lg:w-1/3 max-h-[670px] overflow-y-scroll border-2 border-dashed rounded-md scroll-py-4 snap-y snap-normal scroll-ps-10">
      <section className="bg-white dark:bg-slate-800 text-slate-700  dark:text-slate-200 px-2 py-5">
        <h2 className="mx-auto text-center text-2xl font-bold">Listado de Pacientes</h2>
        <legend className="font-bold border-b-2 border-dashed border-spacing-5 py-4 px-2">Administra tus {""}
          <span className="underline text-[#426AFC] dark:text-[#FFFB26] decoration-[#426AFC] dark:decoration-[#FFFB26] underline-offset-4 decoration-wavy decoration-2"> 
        Pacientes y Citas
          </span>
        </legend>
        <article className="space-y-2 py-2">
          <Paciente/>
          <Paciente/>
          <Paciente/>
        </article>
      </section>
    </div>
  )
}
