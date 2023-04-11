const usuarioModel = require('../models/usuario');

class usuarioController {

    async listarUsuarios(req, res){
        const resultado = await usuarioModel.find({}, {_id:0, __v:0});
        res.json(resultado);
    }

    async createUsuario(req, res) { 
        const usuario = req.body;
        const max = await usuarioModel.findOne({}).sort({codigo: -1});
        usuario.codigo = max == null ? 1 : max.codigo + 1;
        console.log(usuario);
        const resultado = await usuarioModel.create(usuario);
        res.status(201).json(resultado);    
    }

}

module.exports = new usuarioController();