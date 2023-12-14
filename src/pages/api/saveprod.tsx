import { NextApiRequest, NextApiResponse } from "next";
import { addProduto } from "@/scripts/db/dbSql";

type ResponseData = {
    status: number,
    content: string,
}

type ResponseError = {
    status: number,
    error: string
}

export default async function handler(req:NextApiRequest, res: NextApiResponse<ResponseData|ResponseError>) {
    if( req.method === "PUT" ){
        try {

            const nome = req.headers.nome as string
            const description = req.headers.description as string
            const valor = req.headers.valor as string
            const urlIMAGE = JSON.parse(req.body).urlimage as string
            const categoria = JSON.parse(req.body).categoria as string
            await addProduto(nome, description, parseInt(valor), urlIMAGE, categoria)
            res.status(200).send({content: "Produto Adicionado", status: 200})
        } catch (e){
            res.status(400).send({error: `${e}`, status: 400})
        }

    } else {
        res.status(405).send({error: "Method Errado", status: 405})
    }
}