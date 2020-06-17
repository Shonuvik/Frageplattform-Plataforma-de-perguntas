const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//connection Database
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão realizada com o banco de dados');
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });
//Aqui estou informando para o Express utilizar o EJS como view engine
app.set('view engine', 'ejs');

//estou chamando um arquivo estatico, para utilização de files Front End no backend como o CSS e imgs
app.use(express.static('public'));//eu estou informando para o express que eu quero utilizar um arquivo static chamado public


//o bodyparser.urlencoded vai decodificar os dados enviados do nosso formulário
app.use(bodyParser.urlencoded({extended: false}));

// esse comando vai permitir que o nosso server compreenda os dados enviados em formato json
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    //esse metodo irá retornar todas as informações enviadas 
    //equivalente a um (SELECT * FROM Pergunta)
    Pergunta.findAll({raw: true}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        })
    });
    
});

app.get('/perguntar' ,(req, res)=>{
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) =>{
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
   
    //salvando informações no banco de dados com o metodo create(equivalente a um insert no banco)
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        //se der tudo certo, o meu server vai ser redirecionado para a pasta '/'
        res.redirect('/');
    });
});

app.listen(8080, ()=>{
    console.log('Server is running');
});