import { editProduto } from "@/scripts/db/dbSql";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    status: number,
    content: string,
}

type ResponseError = {
    status: number,
    error: string
}

export default async function handler(req:NextApiRequest, res: NextApiResponse<ResponseData|ResponseError>) {
    if( req.method === "PATCH" ){
        try {
            const id = req.headers.id as string
            const nome = req.headers.nome as string
            const description = req.headers.description as string
            const valor = req.headers.valor as string
            const urlIMAGE = JSON.parse(req.body).urlimage
            await editProduto(id, nome, description, parseInt(valor), urlIMAGE)
            res.status(200).send({content: "Produto Adicionado", status: 200})
        } catch (e){
            res.status(400).send({error: `${e}`, status: 400})
        }

    } else {
        res.status(405).send({error: "Method Errado", status: 405})
    }
}