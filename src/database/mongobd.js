const mongoose = require("mongoose");


async function conectar(){
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.info("MongoDB conectado com sucesso!")
    }catch(err){
        console.log("Erro ao logar no MongoDB\n"+err.message)
    }
}

module.exports = { conectar }