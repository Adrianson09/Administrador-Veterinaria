

const Paciente = ({paciente}) => {
    const {nombre, propietario, email, sintomas, fecha, _id} = paciente
    console.log(paciente)
  return (
    <>
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-600">Nombre: {''}
                <span className="font-normal normal-case text-black">
                    {nombre}
                </span> 
            </p>
            <p className="font-bold uppercase text-indigo-600">Propietario: {''}
                <span className="font-normal normal-case text-black">
                    {propietario}
                </span> 
            </p>
            <p className="font-bold uppercase text-indigo-600">Email: {''}
                <span className="font-normal normal-case text-black">
                    {email}
                </span> 
            </p>
            <p className="font-bold uppercase text-indigo-600">Fecha: {''}
                <span className="font-normal normal-case text-black">
                    {fecha}
                </span> 
            </p>
            <p className="font-bold uppercase text-indigo-600">Síntomas: {''}
                <span className="font-normal normal-case text-black">
                    {sintomas}
                </span> 
            </p>
        </div>
    </>
  )
}

export default Paciente