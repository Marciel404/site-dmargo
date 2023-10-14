import { getPordutosLoja } from "@/scripts/db/dbconections";
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
    if( req.method === "GET" ){
        try {
            const prods = await getPordutosLoja()
            res.json({content: `${JSON.stringify(prods)}`, status: 200})
        } catch (e){
            res.json({error: `${e}`, status: 400})
        }

    } else {
        res.json({error: "Method Errado", status: 405})
    }
}