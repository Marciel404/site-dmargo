import { addProduto } from "@/scripts/db/dbconections";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    status: number,
    content: string,
}

type ResponseError = {
    status: number,
    error: string
}

export default function handler(req:NextApiRequest, res: NextApiResponse<ResponseData|ResponseError>) {
    if( req.method === "PUT" ){
        try {
            const nome = req.headers.nome
            const description = req.headers.description
            const valor = req.headers.valor
            const urlIMAGE = req.headers.urlimage
            addProduto(nome,description,valor,urlIMAGE)
            res.status(200).send({content: "Produto Adicionado", status: 200})
        } catch (e){
            res.status(400).send({error: `${e}`, status: 400})
        }

    } else {
        res.status(405).send({error: "Method Errado", status: 405})
    }
}