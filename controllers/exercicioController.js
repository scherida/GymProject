const treinoModel = require('../models/treino');
const exercicioModel = require('../models/exercicio');
const aparelhoModel = require('../models/aparelho');

class ExercicioController {

    async listarExercicios(req, res){ 
        //select * from exercicios;
        const exercicios = await exercicioModel.find({}, {_id:0, __v:0})
              .populate('aparelho',{_id:0, __v:0})
              .populate('treino',{_id:0, __v:0});
        res.json(exercicios);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        //select * from exercicio where codigo = codigo;
        const exercicio = await exercicioModel.findOne({'codigo': codigo}, {_id:0})
              .populate('aparelho',{_id:0, __v:0});
        res.json(exercicio);
    }

    async criarExercicios(req, res) {            
        const exercicioNovo = req.body;
        const codigoDoAparelho = exercicioNovo.aparelho;
        const codigoDoTreino = exercicioNovo.treino;

        const obj = await exercicioModel.findOne({}).sort({'codigo': -1});
        exercicioNovo.codigo = obj == null ? 1 : obj.codigo + 1;

        if (codigoDoAparelho != null && codigoDoAparelho != 'undefined' && codigoDoAparelho != ''){
            exercicioNovo.aparelho = await aparelhoModel.findOne({'codigo': codigoDoAparelho});
        }

        if (codigoDoTreino != null && codigoDoTreino != 'undefined' && codigoDoTreino != ''){
            exercicioNovo.treino = await treinoModel.findOne({'codigo': codigoDoTreino});
        }

        const exercicioSalvo = await exercicioModel.create(exercicioNovo);
    
        if (codigoDoTreino != null && codigoDoTreino != 'undefined' && codigoDoTreino != ''){
            const treino = await treinoModel.findOne({'codigo': codigoDoTreino});
            treino.exercicios.push(exercicioSalvo);
            await treinoModel.findOneAndUpdate({'codigo': treino.codigo}, treino);
          }
        
        const resultado = await exercicioModel.findOne({'codigo': exercicioSalvo.codigo}, {_id:0, __v:0})
            .populate('aparelho',{_id:0, __v:0});
        res.json(resultado);
    }

    async atualizarExercicios(req, res){
        const codigo = req.params.codigo;
        const exercicioAtualizado = req.body;
        const codigoDoAparelho = exercicioAtualizado.aparelho;
        const codigoDoTreino = exercicioAtualizado.treino;
        const filtro = {'codigo': codigo};      

        if (codigoDoAparelho != null && codigoDoAparelho != 'undefined'){
            exercicioAtualizado.aparelho = await aparelhoModel.findOne({'codigo': codigoDoAparelho});
        }

        if (codigoDoTreino != null && codigoDoTreino != 'undefined'){
            exercicioAtualizado.treino = await treinoModel.findOne({'codigo': codigoDoTreino});
        }

        const exercicioSalvo = await exercicioModel.findOneAndUpdate(filtro, exercicioAtualizado, {new: true});
        res.json(exercicioSalvo);
    }

    async excluirExercicios(req, res){
       const codigo = req.params.codigo;
       const _id = String((await exercicioModel.findOne({'codigo': codigo}))._id);
       await exercicioModel.findByIdAndRemove(String(_id));
       res.status(200).send(); 
    }

}

module.exports = new ExercicioController();