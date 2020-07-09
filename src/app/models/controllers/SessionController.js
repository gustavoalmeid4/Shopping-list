import Usuario from '../models/Usuario';
import { json } from 'express';

class SessionController {
    async store(req, res){
        const {email, password} = req.body;

        let usuario = await Usuario.findOne({ where: { email } }).cath(((err) => {
            return res.status(401).json({mensagem: "Requisição inválida!"});

        }));
  console.log(usuario);
         if(!usuario){
             return res.status(401);json({mensagem: "Email inválida!"});
         }
         if(!await usuario.checkPassword(pasword)){
             return res.status(401).json({mensagem: "Senha inválida!"});
         }
        return res.json(usuario);
        }
}

export default new SessionController();