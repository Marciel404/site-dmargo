import FOOTER from "@/components/footer"
import HEADER from "@/components/header"
import SIDEBAR from "@/components/sidebar"
import produtosLoad from "@/scripts/perodutosLoad"

export default function loja() {
    return (
        <main onLoad={produtosLoad()!}>
            <HEADER />
            <SIDEBAR />
            <div>
                <img src="" alt="" />
            </div>
            <div className="">
            </div>
            <div className="flex flex-wrap justify-center" id="produtosbar">
            </div>
            <FOOTER/>
        </main>
    )
}