import { getProdutos } from "@/scripts/db/dbSql";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    status: number,
    content: string,
}

type ResponseError = {
    status: number,
    error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData | ResponseError>) {
    if (req.method === "POST") {
        try {
            const ctg = req.headers.categoria as string;
            const clsName = req.headers.clsname as string;
            const prods = await getProdutos(ctg, clsName)
            res.json({ content: `${JSON.stringify(prods)}`, status: 200 })
        } catch (e) {
            res.json({ error: `${e}`, status: 400 })
        }

    } else {
        res.json({ error: "Method Errado", status: 405 })
    }
}