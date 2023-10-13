import FOOTER from "@/components/footer"
import HEADER from "@/components/header"
import SIDEBAR from "@/components/sidebar"
import produtosLoad from "@/scripts/perodutosLoad"

export default function () {
    return (
        <main onLoad={produtosLoad()!}>
            <HEADER />
            <SIDEBAR />
            <div className="produtosbar h-screen">
            </div>
            <FOOTER></FOOTER>
        </main>
    )
}