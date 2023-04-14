const treinoModel = require('../models/treino');
const usuarioModel = require('../models/usuario');

class TreinoController {

    async listarTreino(req, res){
        const treinos = await treinoModel.find({}, {_id:0, __v:0})
              .populate('usuario',{_id:0, __v:0});
        res.json(treinos);
    }

    async criarTreino(req, res) {            
        const treinoNovo = req.body;
        const codigoDoUsuario = treinoNovo.usuario;

        //Gerador de novo código
        const obj = await treinoModel.findOne({}).sort({'codigo': -1});
        treinoNovo.codigo = obj == null ? 1 : obj.codigo + 1;

        //Vincula o usuario ao treino
        if (codigoDoUsuario != null && codigoDoUsuario != 'undefined' && codigoDoUsuario != ''){
            treinoNovo.usuario = await usuarioModel.findOne({'codigo': codigoDoUsuario});
        }

        //insert into treino values (...)
        const treinoSalvo = await treinoModel.create(treinoNovo);

        //Vincula treino ao usuario
        if (codigoDoUsuario != null && codigoDoUsuario != 'undefined' && codigoDoUsuario != ''){
          const usuario = await usuarioModel.findOne({'codigo': codigoDoUsuario});
          usuario.treinos.push(treinoSalvo);
          await usuarioModel.findOneAndUpdate({'codigo': usuario.codigo}, usuario);
        }
        
        //Necessário para evitar a referência circular.
        const resultado = await treinoModel.findOne({'codigo': treinoSalvo.codigo}, {_id:0, __v:0})
            .populate('usuario',{_id:0, __v:0});
        res.json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        //select * from treino where codigo = codigo;
        const treino = await treinoModel.findOne({'codigo': codigo}, {_id:0})
              .populate('usuario',{_id:0, __v:0});
        res.json(treino);
    }

    
    async atualizarTreino(req, res){
        const codigo = req.params.codigo;
        const treinoAtualizado = req.body;
        const codigoDoUsuario = treinoAtualizado.usuario;
        const filtro = {'codigo': codigo};      

        //Vincula o usuario ao treino
        if (codigoDoUsuario != null && codigoDoUsuario != 'undefined'){
            treinoAtualizado.usuario = await usuarioModel.findOne({'codigo': codigoDoUsuario});
       }

        //Atualiza o treino
        const treinoSalvo = await treinoModel.findOneAndUpdate(filtro, treinoAtualizado, {new: true});
        res.json(treinoSalvo);
    }

    async excluirTreino(req, res){
        const codigo = req.params.codigo;
        const _id = String((await treinoModel.findOne({'codigo': codigo}))._id);
        await treinoModel.findByIdAndRemove(String(_id));
        res.status(200).send();  
    }
    
}

module.exports = new TreinoController();