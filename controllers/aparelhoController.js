const aparelhoModel = require('../models/aparelho');

class AparelhoController {

    async listarAparelhos(req, res){ 
        //select * from aparelho;
        const resultado = await aparelhoModel.find({}, {_id:0, __v:0});
        res.json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        //select * from aparelho where codigo = codigo;
        const aparelho = await aparelhoModel.findOne({'codigo': codigo}, {_id:0});
        res.json(aparelho);
    }

    async criarAparelhos(req, res) {            
        const aparelho = req.body;

        //Gerador de novo código
        const obj = await aparelhoModel.findOne({}).sort({'codigo': -1});
        aparelho.codigo = obj == null ? 1 : obj.codigo + 1;

        //insert into aparelho values (...)
        const resultado = await aparelhoModel.create(aparelho);
        res.json(resultado);
    }

    async atualizarAparelhos(req, res){
        const codigo = req.params.codigo;
        const aparelho = req.body;
        const filtro = {'codigo': codigo};        
        const resultado = await aparelhoModel.findOneAndUpdate(filtro, aparelho, {new: true});
        res.json(resultado);
    }

    async excluirAparelhos(req, res){
       const codigo = req.params.codigo;
       const _id = String((await aparelhoModel.findOne({'codigo': codigo}))._id);
       await aparelhoModel.findByIdAndRemove(String(_id));
       res.status(200).send();   
    }

}

module.exports = new AparelhoController();