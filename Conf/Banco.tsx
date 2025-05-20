import * as  SQLite from 'expo-sqlite';

async function Conexao() {
    try {
        const db = await SQLite.openDatabaseAsync('PAM2');
        console.log('Banco Criado');
        return db;
    } catch (error) {
        console.log('erro ao criar o banco ' + error);
    }
}

//-------------------------------------------
async function createTable(db: SQLite.SQLiteDatabase) {
    try {
        await db.execAsync(
            ` PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS USUARIO(
           ID_US INTERGER PRIMARY KEY AUTOINCREMENT,
           NOME_US VARCHAR(100),
           EMAIL_US VARCHAR(100)
        )`
        );
        console.log('Tabela Criada !!!');

    } catch (erro) {
           console.log('Erro Tabela !!!');           
    }
}


async function inserirUsuario(db: SQLite.SQLiteDatabase) {

}



// -------------------------------------------

export { Conexao, createTable };