import FOOTER from "@/components/footer"
import HEADER from "@/components/header"
import SIDEBAR from "@/components/sidebar"
import produtosLoad from "@/scripts/perodutosLoad"

export default function () {
    return (
        <main onLoad={produtosLoad()!}>
            <HEADER />
            <SIDEBAR />
            <div >
                <img src="" alt="" />
            </div>
            <div className="">
                
            </div>
            <div className="grid">
                <div className="flex h-screen" id="produtosbar">
                </div>
            </div>
            <FOOTER></FOOTER>
        </main>
    )
}