import { MongoClient } from "mongodb";

const cluster = new MongoClient(process.env.MONGOKET!)
const db = cluster.db("MargoStore")
const dbProdutos = db.collection("produtos")

export function addProduto(name: string, imgURL: string, price: number, description: string){
    
}