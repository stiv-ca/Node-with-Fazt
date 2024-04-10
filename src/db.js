//Importar el mongoose
import mongoose from "mongoose";

/** Esto se conecta a la base de datos de MondoDB ademas de que esto va a servir en otros 
 * ficheros así que debemos exportarla
 * Debemos ponerlo en un tryCarch por si el servidor no se llega a conectar entonces generar
 * buenas practicas de manejo de errores
 * Y la exportamos al fichero que arranca la aplicación que en este caso es el index.js y 
 * la importamos en dicho fichero
*/

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://AcademiaDelfines:VKIOl6vQD3Zxs3N8@academia.xmn1ykn.mongodb.net/"); //Conexión hacia la base de datos
        console.log('Connect');
    } catch (error) {
        console.log(error);
    }
}


