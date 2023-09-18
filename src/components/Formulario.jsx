import { useState, useEffect } from 'react';

export default function Formulario () {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //? Valdición formulario
    if([ nombre, propietario, email, fecha, sintomas ].includes('')){
      return setError(true)
    }
    setError(false)
    console.log('Enviando form...');
  }
  
  return (
    <div className="sm:w-1/2 lg:w-1/3 sm:h-[680px]">
      <form
        action="" 
        noValidate 
        className="w-full bg-white dark:bg-slate-800 shadow-md rounded-md mb-10 px-4 py-5 min-h-[670px] h-full"
        onSubmit={handleSubmit}>
        <fieldset className="flex flex-col justify-center space-y-5">
          {error && 
          <p
            className='text-white text-sm text-center font-semibold mx-auto mt-3 bg-red-700 w-full py-3 rounded-md'>
              Todos los campos son obligatorios 🙅‍♂️
          </p>
          }
          <legend className="font-bold text-slate-700 dark:text-slate-200">Información de la
            <span className="text-[#FFFB26]"> Mascota🐶</span>
          </legend>
          <label htmlFor="mascota">
            <span className="block text-sm font-medium text-slate-700 dark:text-slate-200 after:content-['*'] after:ml-0.5 after:text-red-500">Nombre Mascota</span>
            <input 
              type="text" 
              name="mascota"
              id="mascota" 
              placeholder="Jake el perro"
              required
              className="peer mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-gray-700 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}/>
              
          </label>
          <label htmlFor="propietario">
            <span className=" text-sm font-medium text-slate-700 dark:text-slate-200 after:content-['*'] after:ml-0.5 after:text-red-500">Nombre Propietario</span>
            <input 
              type="text" 
              name="propietario" 
              id="propietario" 
              placeholder="Finn el humano"
              required
              className="peer mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-gray-700 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}/>
          </label>
          <label htmlFor="email" className="relative">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200 after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="email@example.com"
              className="peer mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-gray-700 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            <p className="absolute -bottom-5 mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Proporcione un dirección email válida.
            </p>
          </label>
          <label className="relative" htmlFor="date">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200 after:content-['*'] after:ml-0.5 after:text-red-500">Fecha de Alta</span>
            <input 
              type="date" 
              name="date" 
              id="date"
              className="peer mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-gray-600 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}/>
              <p className="absolute -bottom-5 mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Proporcione una fecha válida.
              </p>
          </label>
          <label htmlFor="sintomas">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200 after:content-['*'] after:ml-0.5 after:text-red-500">Síntomas</span>
            <textarea 
              name="sintomas"
              id="sintomas"
              placeholder="Describe los síntomas"
              cols="30" rows="7"
              required
              className="mt-1  w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-gray-700 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}/>
          </label>
          <button type="submit">
            <span className="before:block before:absolute mt-1 before:-inset-1 before:skew-y-1 decoration-white before:bg-indigo-600 hover:underline underline-offset-4 decoration-2 decoration-wavy relative inline-block">
              <span className="relative italic text-white font-semibold text-lg "> Agregar Paciente</span>
            </span> 
          </button>
        </fieldset>
      </form>
    </div>
  )
}