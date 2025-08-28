import * as  SQLite from 'expo-sqlite';

 type usuarios = {
    ID_US:number, 
    NOME_US:string, 
    EMAIL_US :string
}




async function Conexao() {
    try {
        const db:SQLite.SQLiteDatabase = await SQLite.openDatabaseAsync('PAM2');
        console.log('Banco Criado');
        return db;
    } catch (error) {
        console.log('erro ao criar o banco ' + error);
    }
}

// ------------------------------------------------

 async function dropTable(db: SQLite.SQLiteDatabase, tableName: string) {
    try { 
        await db.execAsync(`DROP TABLE IF EXISTS ${tableName};`);
        console.log(`Tabela ${tableName} excluída com sucesso.`);
    }    catch (error) {
    
     console.log(`Erro ao excluir a tabela ${tableName}: ` + error);
    }
 }

    //-------------------------------------------
async function createTable(db: SQLite.SQLiteDatabase) {
    try {
        await db.execAsync(
            `PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS USUARIO ( 
                    ID_US INTEGER PRIMARY KEY AUTOINCREMENT, 
                    NOME_US VARCHAR(100),
                    EMAIL_US VARCHAR(100)
                );`
        );
        console.log('Tabela Criada !!!');

    } catch (erro) {
           console.log('Erro Tabela !!!' + erro);           
    }
}
// -------------------------------------------
// inserir dados na tabela

async function inserirUsuario(db: SQLite.SQLiteDatabase, name:string, email:string) {
  
    try {
          await  db.runAsync(
            " INSERT INTO USUARIO ( NOME_US, EMAIL_US  ) VALUES(? , ?) ", name, email
          );
          console.log("Inserido com sucesso");

    } catch (error) {
         console.log('Erro ao inserir usuario ' + error);
    }

}






// -------------------------------------------

// exebir todos os usuario

async function selectUsuario(db:SQLite.SQLiteDatabase): Promise<usuarios[]> {
    try {
         const result = await db.getAllAsync<usuarios>('SELECT * FROM USUARIO');
         console.log('Usuarios encontrados', result);
         return result;
    } catch (error) {
        console.log('Erros ao bucar usuarios'); 
        return [];
    }
}
// -------------------------------------------

// Filtrar usuario ID

async function selectUsuarioId(db: SQLite.SQLiteDatabase, id: number): Promise<usuarios | undefined> {
    try {
        const result = await db.getFirstAsync<usuarios>('SELECT * FROM USUARIO WHERE ID_US = ?', id);

        if (result == null) {
            console.log("Usuário não encontrado.");
            return undefined;
        } else {
            console.log('Filtro de Usuario por ID ' + id);
            return result;
        }

    } catch (error) {
        console.log('Erro ao buscar usuário: ' + error);
        return undefined;
    }
}


  //------------------------------------    

  async function deleteUsuario(db:SQLite.SQLiteDatabase, id:number) {
    try {
        await db.runAsync('DELETE FROM USUARIO WHERE ID_US = ?', id);
        console.log(`Usuário com ID ${id} excluído com sucesso.`);
    } catch (error) {
        console.log(`Erro ao excluir usuário com ID ${id}: ` + error);
    }
  }
  //--------------------------------------

  async function updateUsuario(db:SQLite.SQLiteDatabase, id:number, name:string, email:string) {
    try {
        await db.runAsync('UPDATE USUARIO SET NOME_US = ?, EMAIL_US = ? WHERE ID_US = ?', name, email, id);
        console.log(`Usuário com ID ${id} atualizado com sucesso.`);
    } catch (error) {
        console.log(`Erro ao atualizar usuário com ID ${id}: ` + error);
    }
  }



// -------------------------------------------

export { Conexao, createTable, inserirUsuario, selectUsuario, selectUsuarioId, dropTable, deleteUsuario, updateUsuario };
