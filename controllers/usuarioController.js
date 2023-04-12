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

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await usuarioModel.findOne({'codigo': codigo});
        res.status(200).json(resultado);
      }
    
    async excluirUsuario(req, res){
        const codigo = req.params.codigo;
        const _id = String((await usuarioModel.findOne({'codigo': codigo}))._id);
        await usuarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();    
    }
}

module.exports = new usuarioController();