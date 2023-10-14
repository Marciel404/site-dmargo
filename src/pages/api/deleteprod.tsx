import { deleteProduto } from "@/scripts/db/dbconections";
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
    if( req.method === "DELETE" ){
        try {
            const id = req.headers.id
            await deleteProduto(id)
            res.status(200).send({content: "Produto Deletado", status: 200})
        } catch (e){
            res.status(400).send({error: `${e}`, status: 400})
        }

    } else {
        res.status(405).send({error: "Method Errado", status: 405})
    }
}