import { createConnection } from "mysql2/promise";

const host: string =  process.env.KEYDBSQL!
const user: string =  process.env.USERDBSQL!
const password: string =  process.env.PASSDBSQL!
const port: string =  process.env.PORTDBSQL!
const database: string =  process.env.DATABASESQL!

const clientConn = createConnection({
    host: host,
    user: user,
    password: password,
    port: parseInt(port),
    database: database
})

async function createTable(name: string, colls: string) {
    await (await clientConn).query(
        `CREATE TABLE IF NOT EXISTS ${name} ( id int primary key auto_increment unique,${colls});`
        )
}

export async function addProduto(
    nome: string,
    description: string,
    valor: Number,
    urlIMAGE: string,
    categoria: string
) {

    const urlIMAGEE = "123"

    await createTable(
        "produtos",
        `
nome text,
descricao text,
valor integer,
urlImage text,
categoria varchar(30)
    `
    );
    (await clientConn).query(`INSERT INTO produtos VALUES (default, '${nome}', '${description}', '${valor}', '${urlIMAGEE}', '${categoria}')`)
}

export async function getProdutos(categoria: string, className: string) {

    let query = `SELECT * FROM produtos WHERE categoria = '${categoria}'`
    if ( categoria == "undefined"){
        query = `SELECT * FROM produtos`
    }
    await createTable(
        "produtos",
        `
nome text,
descricao text,
valor integer,
urlImage text,
categoria varchar(30)
    `
    )

    const [row, fields] = await (await clientConn).query(query)

    return row

}

export async function deleteProduto(id: Number){

}

export async function editProduto(id: string, nome: string, description: string, valor: Number, urlIMAGE: string){

}