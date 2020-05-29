const sql = require('mssql');

//Verifica o ambiente!
var ambiente = process.env.NODE_ENV;
var perfil = ambiente=="production" ? 'producao' : 'desenvolvimento';

var configuracoes = {
    producao: {
        server: "stetsts.database.windows.net",
        user: "set",
        password: "#te",
        database: "teste",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000
        }
    },
    desenvolvimento: {
        server: "BASETESTE.database.windows.net",
        user: "usuariotestes",
        password: "senhatestes",
        database: "BASETESTE",
        options: {
            encrypt: true
        }
    }
}

sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

function conectar() {
    console.log('Bem-vindo ao banco SQL!')
    return sql.connect(configuracoes[perfil]);
}

function desconectar(){
    console.log('Você foi desconectado do banco SQL');
    return sql.close();
}

module.exports = {
    conectar, desconectar, sql
}
