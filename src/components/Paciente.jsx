export default function Paciente() {
 return (
  <article className="py-4 px-2 rounded-xl bg-neutral-200 dark:bg-gray-900">
    <p className="font-semibold text-indigo-600">Nombre: {""} 
      <span className="font-normal text-stone-700 dark:text-white">Jake</span>
    </p>

    <p className="font-semibold text-indigo-600">Propietario: {""} 
      <span className="font-normal text-stone-700 dark:text-white">Finn el humano</span>
    </p>

    <p className="font-semibold text-indigo-600">Email: {""} 
      <span className="font-normal text-stone-700 dark:text-white">finn@correo.com</span>
    </p>

    <p className="font-semibold text-indigo-600">Fecha  {""}de alta: 
      <span className="font-normal text-stone-700 dark:text-white">10 Diciembre de 2022</span>
    </p>

    <p className="font-semibold text-indigo-600">Síntomas: {""} 
      <span className="font-normal text-stone-700 dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A maxime deserunt adipisci nisi commodi quaerat maiores quasi rerum harum nulla praesentium voluptate tempora, quibusdam, tenetur temporibus aliquid quam? Esse, ut?
      </span>
    </p>
  </article>
 )
}
