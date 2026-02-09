const express = require ("express");
const app = express();

// Habilita arquivos do tipo Json
app.use(express.json());

// Endpoint inicial
app.get("/", function (req, res){
    res.send("Hello World");
});

// Endpoint do oi
app.get("/oi", function (req, res){
    res.send("Aló Mundo");
});

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"]

// Endpoint dos heróis
app.get("/herois", function (req, res){
    res.send(herois.filter(Boolean));

});

app.post("/herois", function(req,res){
    console.log(req.body);
    const item = req.body.nome;
    // Coloca o nome no final da lista de heróis
    herois.push(item);
    // Mensagem final
    res.send("Item adicionado!")


});

// Função get de heróis com id
app.get("/herois/:id", function(req,res){
    // Pega o id da rota
    const id = req.params.id -1;
    //Busca a informação na lista
    const item = herois[id];
    // Exibe item da resposta
    res.send(item);
});

// Funçãode de atualizar a lista de heróis

app.put("/herois/:id", function(req,res){
    const id = req.params.id - 1;
    const item = req.body.nome;
    herois[id] = item;
    res.send("Item Atualizado")
});

app.delete("/herois/:id", function(req,res){
    const id = req.params.id - 1;
    delete herois[id];
    res.send("Item Removido")
});


app.listen(3000);