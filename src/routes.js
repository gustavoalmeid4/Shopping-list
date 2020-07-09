import {Router} from 'express';
import Usuario from './app/models/Usuario';

const routes = new Router();

routes.get('/',(req,res)=>{
    return res.send("Funcionando...")
})


routes.get('/usuarios',UsuarioController.index);
routes.get('/usuarios/:id',UsuarioController.show);
routes.post('/usuarios',UsuarioController.store);
routes.put('/usuarios',UsuarioController.update);
routes.delete('/usuarios',UsuarioController.destroy);

routes.get('/sessions',SessionController.store);

export default routes;