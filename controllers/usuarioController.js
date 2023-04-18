const usuarioModel = require('../models/usuario');
const treinoModel = require('../models/treino');

class UsuarioController {

    async listarUsuarios(req, res){
        const resultado = await usuarioModel.find({}, {_id:0, __v:0})
        .populate('treinos',{_id:0, __v:0});
        res.json(resultado);
    }

    async createUsuario(req, res) { 
        const usuario = req.body;
        const codigosDosTreinos = usuario.treinos;

        const obj = await usuarioModel.findOne({}).sort({'codigo': -1});
        usuario.codigo = obj == null ? 1 : obj.codigo + 1;

        if (codigosDosTreinos != null && codigosDosTreinos != undefined 
            && codigosDosTreinos != '' && codigosDosTreinos.length > 0){
                usuario.treinos = await treinoModel.find({'codigo': {$in: codigosDosTreinos}});
            }

        const resultado = await usuarioModel.create(usuario);
        res.json(resultado); 
    }
   
    async atualizarUsuario(req, res){
        const codigo = req.params.codigo;
        const usuario = req.body;

        const resultado = await usuarioModel.findOneAndUpdate({'codigo': codigo}, usuario, {new: true});
        res.json(resultado);
    }
      
    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await usuarioModel.findOne({'codigo': codigo}, {_id:0});
        res.status(200).json(resultado);
    }
    
    async excluirUsuario(req, res){
        const codigo = req.params.codigo;
        const _id = String((await usuarioModel.findOne({'codigo': codigo}))._id);
        await usuarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();    
    }
}

module.exports = new UsuarioController();