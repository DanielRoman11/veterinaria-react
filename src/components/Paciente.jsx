export default function Paciente({paciente}) {

  const { nombre, propietario, email, fecha, sintomas } = paciente;

 return (
  <article className="py-4 px-2 rounded-xl bg-neutral-200 dark:bg-[#0e0f0f48] border-2 border-dashed">
    <p className="font-semibold text-indigo-600">Nombre: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{nombre}</span>
    </p>

    <p className="font-semibold text-indigo-600">Propietario: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{propietario}</span>
    </p>

    <p className="font-semibold text-indigo-600">Email: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{email}</span>
    </p>

    <p className="font-semibold text-indigo-600">Fecha  {""}de alta: 
      <span className="font-normal text-stone-700 dark:text-white">{fecha}</span>
    </p>

    <p className="font-semibold text-indigo-600">Síntomas: {""} 
      <span className="font-normal text-stone-700 dark:text-white">{sintomas}
      </span>
    </p>
  </article>
 )
}
