import Veterinario from '../models/Veterinario.js'
import generarJWT from '../helpers/generarJWT.js';
import generarId from '../helpers/generarId.js';

 const registrar = async (req, res) => {
     const {email } = req.body

    // Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({email});

    if (existeUsuario) {
        const error = new Error('Usuario ya Registrado')
        return res.status(400).json({msg: error.message})
    }

    try {
        // Guardar un nuevo Veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();
        res.json(veterinarioGuardado);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
    }

const perfil = (req, res) => {
    const {veterinario} = req;

    res.json({ perfil: veterinario });
    }

    const confirmar = async (req, res) => {
        const {token} =  req.params

        const usuarioConfirmar = await Veterinario.findOne({token});

        if (!usuarioConfirmar) {
            const error = new Error("Token no valido");
            return res.status(404).json({ msg: error.message });
        }

        try {
            usuarioConfirmar.token = null;
            usuarioConfirmar.confirmado = true;
            await usuarioConfirmar.save()
            res.json({msg: 'Usuario confirmado correctamente'})
        } catch (error) {
            console.log(error)
        }

        
    };

    const autenticar = async (req, res) => {
        const { email, password } = req.body;
        // COmprobar usuario
        const usuario = await Veterinario.findOne({email});

        if (!usuario) {
            const error = new Error("El usuario no existe");
            return res.status(404).json({ msg: error.message });
    }
    // Comprobar usuario Confirmado
    if (!usuario.confirmado) {
        const error = new Error('Usuario no confirmado');
        return res.status(403).json({msg: error.message});
    }

    // Comprobar el password
    if (await usuario.comprobarPassword(password)) {
        // Autenticar
        res.json({ token: generarJWT(usuario.id) });
    } else {
        const error = new Error('Password Incorrecto');
        return res.status(403).json({msg: error.message});

    }
   

}

    const olvidePassword = async (req, res) => {
        const { email } = req.body;
        const existeVeterinario = await Veterinario.findOne({email});
        if (!existeVeterinario) {
            const error = new Error('El usuario no existe');
            return res.status(400).json({ msg: error.message });
        }

        try {
            existeVeterinario.token = generarId()
            await existeVeterinario.save();
            res.json({msd: 'Hemos enviado un email con las instrucciones para restablecer la contraseña'})
        } catch (error) {
            console.log(error)
        }
    } 

    const comprobarToken = (req, res) => {
        console.log('')
    } 
    const nuevoPassword = (req, res) => {
        console.log('')
    } 

    export {
        registrar,
        perfil,
        confirmar,
        autenticar,
        olvidePassword,
        comprobarToken,
        nuevoPassword
    }