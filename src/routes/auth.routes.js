import { Router } from 'express'; // Esto crea un enrotador
import { register,login } from '../controllers/auth.controller.js'; /**Trae las funciones que
vamos a ejecutar aquí en las solicitudes 
*/

const router = Router() /**Con esto podemos crear las solicitudes que son (GET, POST, PUT
DELETE) 
*/

router.post('/register', register) //Esto ira relacionado con el archivo auth.controller.js
router.post('/login', login)
/**Cuando llamemos a login o register ejecutaran la función que esta en el controller y no 
 * hacer directamente en las rutas las funciones para mayor optimización del código
*/

/**Esto debemos de exportarlo por que debemos añadirlo a la app y exportamos router por que 
 * es la variable que encapsula (en este caso) a ambas solicitudes
*/

export default router;