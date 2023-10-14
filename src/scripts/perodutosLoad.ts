import React from "react"

export default function () {
    React.useEffect(() => {
        const divprodutos = document.getElementById("produtosbar")
        fetch("/api/getprodutos", { method: "GET" })
            .then(r => r.json())
            .then((r: any) => {
                if (r.status === 400 || r.status === 405) {
                    alert(r.error)
                } else {
                    for (const i of JSON.parse(r.content)) {
                        if (i._id != "quantidadeProdutos") {
                            const div = document.createElement("div")
                            const div2 = document.createElement("div")
                            const button = document.createElement("button")
                            const imgElement = document.createElement("img")
                            const h4Element = document.createElement("h2")
                            const paragraphElement = document.createElement("p")
                            const h42Element = document.createElement("h4")

                            imgElement.src = i.urlIMAGE
                            imgElement.id = "imageProd"

                            h4Element.textContent = i.nome
                            paragraphElement.textContent = i.description
                            h42Element.textContent = `R$ ${i.valor}`

                            button.textContent = "Comprar"

                            div.id = `produto-${i._id}`
                            div.className = "divProduto"
                            div2.className = "divProdutoText"
                            button.id = "buttonBuy"

                            div.append(imgElement)
                            div2.append(h4Element)
                            div2.append(paragraphElement)
                            div2.append(h42Element)
                            div2.append(button)
                            div.append(div2)

                            divprodutos?.appendChild(div)
                        }
                    }
                }
            })
            .catch(e => { console.log(e) })
    })
}
