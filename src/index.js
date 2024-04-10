import app from './app.js'; /** Esta no tiene llaves por que desde la 
exportamos le dijimos por default lo que no hicimos con el siguente import */
import { connectDB } from './db.js';


connectDB()
app.listen(3000);
console.log('server listening on port', 3000);


