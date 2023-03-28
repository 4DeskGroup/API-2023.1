const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "24g11r84",
    host: "127.0.0.1",
    port: 5432,
    database: "UsuarioBD"
})

//getUsuario()
//setUsuario("CarlinTeste", "CarlosKaua", "22222", "carlçin@gmail", "ativo", "adm", "2022-01-01 10:00:10")

//const user = new Usuario("Teste", "teste", "teste",
 //"teste@gmail", "ativo", "adm", "2022-01-01 10:00:00")

/*async function getUsuario(){
    try{
        console.log("Iniciando a conexão 🤔")
        await cliente.connect()
        console.log("Conexão ocorreu com sucesso ❤")
        const resultado = await cliente.query("select * from usuarios")
        console.log(resultado.rows)
    }
    catch(error){
        console.log("Ocorreu um erro no getUsuario, ERRO:  "+error)
    }
    finally{
        await cliente.end()
        console.log("Cliente desconectado 😁")
    }
}*/

    export async function setUsuario(login, nome, senha, email, status, usuariotipo, datacadastro){
        try{
            console.log("Iniciando a conexão 🤔")
            await cliente.connect()
            console.log("Conexão ocorreu com sucesso ❤")
            await cliente.query('insert into usuarios ("login", "nome", "senha", "email", "status", "usuariotipo", "datacadastro") values ('+"'"+login+"', '"+nome+"', '"+ senha+ "', '"+email+"', '"+status+"', '"+usuariotipo+"', '" +datacadastro+"');")
        }
        catch(error){
            console.log("Ocorreu um erro no getUsuario, ERRO:  "+error)
        }
        finally{
            await cliente.end()
            console.log("Cliente desconectado 😁")
        }
    }