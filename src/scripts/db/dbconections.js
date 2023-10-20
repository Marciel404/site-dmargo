import clientPromise from "./mongoClient";

export async function addProduto(nome, description, valor, urlIMAGE, categoria) {
    const db = (await clientPromise).db("DMargo")
    const cluster = db.collection("produtos")
    await cluster.updateOne(
        { _id: "quantidadeProdutos" },
        { $inc: { qnt: 1 } },
        { upsert: true }
    )
    const id = await cluster.findOne({ _id: "quantidadeProdutos" })
    await cluster.updateOne(
        { _id: `${categoria}` },
        {
            $addToSet: {
                "produtos": {
                    _id_: id["qnt"],
                    nome: nome,
                    description: description,
                    valor: valor,
                    urlIMAGE: urlIMAGE
                }
            }
        },
        { upsert: true }
    )
}

export async function editProduto(id, nome, description, valor, urlIMAGE) {
    const db = (await clientPromise).db("DMargo")
    const cluster = db.collection("produtos")
    await cluster.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                nome: nome,
                description: description,
                valor: valor,
                urlIMAGE: urlIMAGE
            }
        },
    )
}

export async function deleteProduto(id) {
    const db = (await clientPromise).db("DMargo")
    const cluster = db.collection("produtos")
    await cluster.findOneAndDelete({ _id: id })
}

export async function getPordutosLoja() {
    const db = (await clientPromise).db("DMargo")
    const cluster = db.collection("produtos")
    return await cluster.find({}).toArray()
}