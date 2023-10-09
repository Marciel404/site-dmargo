import Link from "next/link";

export default function HEADER() {
    return (
        <header className="w-screen headerpc grid grid-cols-2 bg-pink-400 items-baseline">
            <div className="flex">
                <h2 className="text-lg hover:cursor-pointer m-3">
                    <Link href="/" className="no-underline text-current">MargoStore</Link>
                </h2>
            </div>
            <div className="flex text-center justify-end">
                <h2 className="text-lg hover:cursor-pointer m-3 mr-10">
                    <Link href="/contatos" className="no-underline text-current">Contatos</Link>
                </h2>
                <h2 className="text-lg hover:cursor-pointer m-3 mr-10">
                    <Link href="/loja" className="no-underline text-current">Produtos</Link>
                </h2>
                <h2 className="text-lg hover:cursor-pointer m-3 mr-10">
                    <Link href="/rotas" className="no-underline text-current">Onde estamos</Link>
                </h2>
            </div>
        </header>
    )
}