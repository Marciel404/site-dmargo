
export function GetProdCatego(categoria: string, className: any) {

    fetch("/api/getprodutos", { method: "POST", headers: { categoria: categoria, clsname: className } })
        .then(x => x.json())
        .then((response: any) => {

            if (response.status != 200) {
                return alert(`error: ${response.error}`)
            }
            if (categoria == "undefined") {

                const list = JSON.parse(response.content)

                for (const p of document.getElementsByClassName(className) as any) {
                    const itemNum = Math.floor(Math.random() * list.length)
                    if (list[itemNum]) {
                        console.log(list[itemNum])
                        p.childNodes[0].childNodes[0].src = `${list[itemNum]["urlIMAGE"]}`
                        p.childNodes[1].childNodes[0].innerHTML = `${list[itemNum]["nome"]}`
                        p.childNodes[2].childNodes[1].innerHTML += `${list[itemNum]["valor"]} à vista`
                        list.splice(itemNum, 1)
                    }
                }
            } else {

                const list = JSON.parse(response.content)

                if (list){
                    console.log(list)
                    for (const p of document.getElementsByClassName(className) as any) {
                        const itemNum = Math.floor(Math.random() * list.length)
                        if(list){
                            if (list[itemNum]) {
                                p.childNodes[0].childNodes[0].src = `${list[itemNum]["urlIMAGE"]}`
                                p.childNodes[1].childNodes[0].innerHTML = `${list[itemNum]["nome"]}`
                                p.childNodes[2].childNodes[1].innerHTML += `${list[itemNum]["valor"]} à vista`
                            }
                            list.splice(itemNum, 1)
                        }
                    }
                }

            }
        })
}