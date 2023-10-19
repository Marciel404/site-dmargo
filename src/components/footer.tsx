import Link from "next/link"

export default function FOOTER() {
    return (
        <footer className="bg-pink-400">
            <div>
                <div className="text-center p-5">
                    <img className="logomargo" src="/images/DMargoLogo.png" alt="DMARGOSVG" />
                </div>
                <div className="flex justify-center">
                    <div className="m-3">
                        <img width="30px" height="30px" src="/svgs/facebook.svg" alt="facebook" className="p-1 border-solid text-xl rounded-3xl hover:cursor-pointer" />
                    </div>
                    <div className="m-3">
                        <Link href="https://www.instagram.com/d_dmargo/" className="no-underline text-black">
                            <img width="30px" height="30px" src="/svgs/instagram.svg" alt="instagram" className="p-1 border-solid text-xl rounded-3xl hover:cursor-pointer" />
                        </Link>
                    </div>
                    <div className="m-3">
                        <img width="30px" height="30px" src="/svgs/tiktok.svg" alt="ticktok" className="p-1 border-solid text-xl rounded-3xl hover:cursor-pointer text-black" />
                    </div>
                </div>
                <div className="text-center">
                    <h4>www.margo.com</h4>
                    <h4>D"Margo - CNPJ: 29.933.368/0001-94</h4>
                    <h4>29.933.368/0001-94 © Copyright 2023 - presente</h4>
                    <h4>Todos os direitos reservados</h4>
                </div>
                <div className="footerplus hidden h-16" />
            </div>
        </footer>
    )
}