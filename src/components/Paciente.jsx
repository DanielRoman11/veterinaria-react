export default function Paciente({paciente, setPaciente}) {

  const { nombre, propietario, email, fecha, sintomas } = paciente;

 return (
  <article className="py-4 px-2 rounded-xl bg-neutral-200 dark:bg-[#0e0f0f48] border-2 dark:border-slate-700 border-dashed">
    <p className="font-semibold text-[#426AFC] dark:text-yellow-200">Nombre: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{nombre}</span>
    </p>

    <p className="font-semibold text-[#426AFC] dark:text-yellow-200">Propietario: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{propietario}</span>
    </p>

    <p className="font-semibold text-[#426AFC] dark:text-yellow-200">Email: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{email}</span>
    </p>

    <p className="font-semibold text-[#426AFC] dark:text-yellow-200">Fecha de alta: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{fecha}</span>
    </p>

    <p className="font-semibold text-[#426AFC] dark:text-yellow-200">Síntomas: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{sintomas}
      </span>
    </p>
    
    <div className="flex flex-col sm:flex-row sm:justify-evenly  w-full sm:space-x-4 space-y-2 sm:space-y-0 mt-10 ">
      <button 
        type="button"
        className="font-bold border-2 border-dashed border-[#426AFC] dark:border-[#FFFB26] text-[#426AFC] dark:text-[#FFFB26] py-1 px-3 rounded-sm w-full sm:w-36"
        onClick={() => setPaciente(paciente)}>
          EDITAR ✍️
      </button>
      <button 
        type="button"
        className="font-bold border-2 border-dashed border-red-700 text-red-700 py-1 px-3 rounded-sm w-full sm:w-36" >
          ELIMINAR 🗑️
      </button>
    </div>
  </article>
 )
}
