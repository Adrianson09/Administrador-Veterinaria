import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
        <h1>Administrar Pacientes de Veterinaria</h1>
        <Outlet/>
    </>
  )
}

export default AuthLayout