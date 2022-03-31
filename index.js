const clientes = require('./modulos/clientes');
const aniversariantes = require('./modulos/aniversariantes');
const buscaPor = require('./modulos/setor');
const ramal = require('./modulos/ramal');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const configCors = {
    origin:false
}
app.use(cors());

app.get('/' , cors(configCors) , (req , res) => {
    res.json(clientes);
});

app.get('/mes' , cors(configCors) , (req , res) => {
    const mes = req.query.mes;    
    res.json(aniversariantes(mes));
});

app.get('/setor' , cors(configCors) , (req , res) => {
    const setor = req.query.setor;    
    res.json(buscaPor(setor));
});

app.get('/ramal' , cors(configCors) , (req , res) => {    
    res.json(ramal());
});

app.listen(port, () => console.log("Servidor Aberto!"))