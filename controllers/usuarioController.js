const usuarioModel = require('../models/usuario');

class usuarioController {

    async listarUsuarios(req, res){
        const resultado = await usuarioModel.find({}, {_id:0, __v:0});
        res.json(resultado);
    }

    async createUsuario(req, res) {  
        try{
            const conteudo = req.body;
            const resultado = usuarioModel.create(conteudo);          
            res.json(resultado);
        } catch (err) {
            console.error(err);
            res.status(500).send('CPF já registrado no sistema!');
        }      
    }

    async excluirUsuario(req, res){
        const id = req.params.id;
        const filtro = {'id': id};
        await usuarioModel.findByIdAndDelete(filtro);
        res.send("Conteúdo excluído!");
    }
}

module.exports = new usuarioController();