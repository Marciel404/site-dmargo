import clickMenu from "@/scripts/clickMenu";
import Link from "next/link";

export default function HEADER() {

    return (

        <div>

            <header className="headerpc grid grid-cols-2 bg-pink-400 items-center">

                <div>
                    <Link href="/"><img height="30px" src="/images/DMargoLogo.png" alt="DMARGOLOGO" className="hover:cursor-pointer m-3" /></Link>
                </div>

                <div className="flex text-center justify-end">

                    <div className="sobrenos">

                        <div className="w-60">

                            <div className="flex justify-center hover:cursor-pointer items-center">

                                <div>
                                    <img height="20px" src="/svgs/information.svg" alt="I" />
                                </div>

                                <h2 className="text-lg">
                                    <Link href="/sobre" className="no-underline text-current">Sobre nós</Link>
                                </h2>

                                <div>
                                    <i className="material-symbols-outlined">
                                        stat_minus_1
                                    </i>
                                </div>

                            </div>

                        </div>

                        <ul className="sobrenosul bg-white rounded-md fixed w-60 hidden">
                            <li className="list-none content-end justify-center flex p-3 border-solid">
                                <h4><Link className="no-underline text-black" href="/loja-fisica">Loja Fisica</Link></h4>
                            </li>
                            <li className="list-none p-3 border-solid">
                                <h4><Link className="no-underline text-black" href="/lojafisica">Quem Somos</Link></h4>
                            </li>
                        </ul>

                    </div>

                    <div className="flex justify-center items-center w-60">
                        <div>
                            <img height="20px" src="/svgs/contato.svg" alt="Telefone" />
                        </div>
                        <h2 className="text-lg hover:cursor-pointer mr-10">
                            <Link href="/contatos" className="no-underline text-current">Contatos</Link>
                        </h2>
                    </div>

                    <div className="flex items-center justify-center w-60">
                        <div>
                            <img height="20px" src="/svgs/bolsa.svg" alt="BolsaCompra" />
                        </div>
                        <h2 className="text-lg hover:cursor-pointer  mr-10">
                            <Link href="/loja" className="no-underline text-current">Produtos</Link>
                        </h2>
                    </div>

                </div>

            </header>

            <footer className="headertell bg-pink-400 bottom-0 left-0 fixed hidden w-full">

                <div className="flex justify-between items-center">
                    <div>
                        <i className="material-symbols-outlined hover:cursor-pointer p-3 text-4xl" onClick={clickMenu} >menu</i>
                    </div>

                    <img height="30px" src="/images/DMargoLogo.png" alt="DMARGOLOGO" className="flex text-lg hover:cursor-pointer m-3 justify-end" onClick={(e) => location.href = "/"} />

                </div>

            </footer>

        </div>

    )
}