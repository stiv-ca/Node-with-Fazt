import Users from '../models/user.model.js';
import bcrypt from 'bcryptjs' /**Importamos la biblioteca de
encriptaciones para (Valga la redundancia) encriptar la contraseña
del usuario que se esta guardando */

export const register = async (req, res) => {
    const {email,password, username} = req.body /** El body va a ser los datos que el cliente
    envie */
    /**Debemos guardar los datos y por eso creamos el esquema (schema)
     * para guardarlos ahí
    */

    try {

        const passwordHash = await bcrypt.hash(password, 10) /**Accedemos a un metodo que 
        encripta strings y este lo guardamos en una variable */

        const newUser = new User({
            username,
            email,
            password: passwordHash /** Y como valor de la contraseña le pasamos la variable
            la encrptación */
        })
    
        const userSaved = await newUser.save();// Esto hace que los datos se guarden ademas de que
        // crea un nuevo objeto con su Id
        res.json({/**Para que no me devuelva todo, solo lo necesario, hacemos lo siguiente: */
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        });
    } catch (error) {
        console.log(error);
    }/**Esto es posible que de error entonces lo envolvemos en un try
    Catch*/

};

export const login = (req, res) => {
    res.send('login')
};

