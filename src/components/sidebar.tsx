import clickMenu from "@/scripts/clickMenu";
import Link from "next/link";

export default function SIDEBAR() {
    return (
        <div className="sidebarmobile hidden animate-fadeinleft">
            <div className="flex">
                <div className="top-0 left-0 fixed h-screen bg-pink-400 w-1/2 z-10">
                    <div className="flex">
                        <div>
                            <div className="text-center border-dotted flex items-center p-3">
                                <div>
                                   <img height="20px" src="/bolsa.svg" alt="BolsaCompra"/>
                                </div>
                                <div>
                                    <Link className="" href="/"> Produtos</Link>
                                </div>
                            </div>
                            <div className="text-center border-dotted flex items-center p-3">
                                <div>
                                    <i className="material-symbols-outlined">close</i>
                                </div>
                                <div>
                                    <Link className="" href="/">Contatos</Link>
                                </div>
                            </div>
                            <div className="text-center border-dotted flex items-center p-3">
                                <div>
                                    <i className="material-symbols-outlined">close</i>
                                </div>
                                <div>
                                    <Link className="" href="/">Sobre nós</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebarmobile top-0 h-screen fixed w-full" onClick={clickMenu}></div>
            </div>
        </div>
    )
}