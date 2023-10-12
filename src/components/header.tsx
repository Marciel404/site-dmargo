import clickMenu from "@/scripts/clickMenu";
import Link from "next/link";

export default function HEADER() {
    return (
        <div>
            <header className="headerpc grid grid-cols-2 bg-pink-400 items-baseline">
                <div className="flex">
                    <h2 className="text-lg hover:cursor-pointer m-3">
                        <Link href="/" className="no-underline text-current">MargoStore</Link>
                    </h2>
                </div>
                <div className="flex text-center justify-end">
                    <div className="flex items-center">
                        <div>
                            <img height="20px" src="/svgs/contato.svg" alt="Telefone" />
                        </div>
                        <h2 className="text-lg hover:cursor-pointer  mr-10">
                            <Link href="/contatos" className="no-underline text-current">Contatos</Link>
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <img height="20px" src="/svgs/bolsa.svg" alt="BolsaCompra" />
                        </div>
                        <h2 className="text-lg hover:cursor-pointer  mr-10">
                            <Link href="/loja" className="no-underline text-current">Produtos</Link>
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <div>
                            <img height="20px" src="/svgs/information.svg" alt="I" />
                        </div>
                        <h2 className="text-lg hover:cursor-pointer mr-10">
                            <Link href="/sobre" className="no-underline text-current">Sobre nós</Link>
                        </h2>
                    </div>

                </div>
            </header>

            <footer className="headertell bg-pink-400 bottom-0 left-0 fixed hidden w-full">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <i className="material-symbols-outlined hover:cursor-pointer p-3 text-4xl" onClick={clickMenu} >menu</i>
                    </div>
                    <h2 className="text-lg m-3 flex justify-end">
                        <Link href="/" className="no-underline text-current hover:cursor-pointer">MargoStore</Link>
                    </h2>
                </div>
            </footer>
        </div>

    )
}