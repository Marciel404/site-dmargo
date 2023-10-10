import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    status: number,
    content: string,
    return: boolean
}

type ResponseError = {
    status: number,
    error: string
}

export default function handler(req:NextApiRequest, res: NextApiResponse<ResponseData|ResponseError>) {
    if( req.method === "POST" ){
        if (!req.headers.user || req.headers.user !== process.env.userAdmin){
            return res.json({error: "Usuario errado", status:400, return: false})
        } else if ( !req.headers.password || req.headers.password !== process.env.passwordAdmin ){
            return res.json({error:"Senha errada", status:400, return: false})
        }
        res.status(200).json({content:"Acesso liberado", status: 200, return: true})
    } else {
        res.status(405).send({error: "Method Errado", return: false, status: 405})
    }
}