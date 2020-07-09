import Usuario from '../models/Usuario';

class UsuarioController {
    async index(req,res){
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    }

    async show(req,res){
        const { id } = req.params;
        let usuario = await Usuario.findByPk(id);
        return res.json(usuario);
        }
    
        async store(req,res){
        const {nome, email, password} = req.body;
        usuario.create({ nome, email, password_hash });        let usuario = Us
        return res.json(usuario);
    }

    async update(req, res){}
    async destroy(req, res){}
}