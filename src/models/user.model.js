import mongoose from "mongoose";

/** Esto es el esquema de lo que el usuario me va a diligenciar (En este caso es User Name, 
 * Password y email) 
 * También vamos a utilizar algo que se llama trim: Que basicamente limpia el dato que no se usa
 * por ejemplo los espacios en blanco
 * También vamos añadir algo que se llama unique: Que lo que hace es que el dato es unico
 * y que ningún otro usuario no puedo copiarlo
*/

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true, // Esto sirve para que el usuario me pase siempre el usuario
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        trim: true
    }
},  {
    timestamps: true 
})

const Users = mongoose.model('users', userSchema); /**Esto lo que hace es que convierta el
objeto que hemos creado y podamos interactuar con él desde MongoDB */

export default Users; /**Esto es posible que de error entonces lo envolvemos en un try
Catch  */

