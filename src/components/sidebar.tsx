import clickMenu from "@/scripts/clickMenu";
import Link from "next/link";

export default function SIDEBAR() {
    return (
        <div className="sidebarmobile hidden animate-fadeinleft">

            <div className="flex">

                <div className="border-solid overflow-y-auto top-0 left-0 fixed h-screen bg-pink-400 w-3/4 z-10">

                    <div>

                        <div className="overflow-yuto grid grid-cols-2 items-center">

                            <h1>
                                DMargo
                            </h1>
                            <div className="flex justify-end">
                                <i className="material-symbols-outlined text-5xl h-auto hover:cursor-pointer" onClick={clickMenu}>
                                    Close
                                </i>
                            </div>

                        </div>

                        <div className="text-center justify-center border-double flex items-center m-3 p-3">

                            <div>
                                <img width="25px" height="25px" src="/svgs/bolsa.svg" alt="BolsaCompra" />
                            </div>

                            <div>
                                <Link className="list-none text-black text-lg no-underline" href="/loja"> Produtos</Link>
                            </div>

                        </div>

                        <div className="text-center justify-center border-double flex items-center m-3 p-3">

                            <div>
                                <img width="25px" height="25px" src="/svgs/contato.svg" alt="BolsaCompra" />
                            </div>

                            <div>
                                <Link className="list-none text-black text-lg no-underline" href="/contatos">Contatos</Link>
                            </div>

                        </div>

                        <div className="text-center justify-center border-double flex items-center m-3 p-3">

                            <div>
                                <img width="25px" height="25px" src="/svgs/information.svg" alt="BolsaCompra" />
                            </div>

                            <div>
                                <Link className="list-none text-black text-lg no-underline" href="/sobre">Sobre Nós</Link>
                            </div>

                        </div>

                        <div className="text-center justify-center border-double flex items-center m-3 p-3">

                            <div>
                                <img width="25px" height="25px" src="/svgs/loja.svg" alt="BolsaCompra" />
                            </div>

                            <div>
                                <Link className="list-none text-black text-lg no-underline" href="/">Nossa Loja</Link>
                            </div>

                        </div>

                        <div className="text-center justify-center border-double flex items-center m-3 p-3">

                            <div>
                                <img width="25px" height="25px" src="/svgs/instagram.svg" alt="BolsaCompra" />
                            </div>

                            <div>
                                <Link className="list-none text-black text-lg no-underline" href="https://www.instagram.com/d_dmargo/">Instagram</Link>
                            </div>

                        </div>

                        <div className="text-center justify-center border-double flex items-center m-3 p-3">

                            <div>
                                <img width="25px" height="25px" src="/svgs/whatsapp.svg" alt="BolsaCompra" />
                            </div>

                            <div>
                                <Link className="list-none text-black text-lg no-underline" href="https://api.whatsapp.com/send?phone=5521986559058">Whatsapp</Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="sidebarmobile top-0 h-screen fixed w-full" onClick={clickMenu}></div>

            </div>

        </div>

    )
}