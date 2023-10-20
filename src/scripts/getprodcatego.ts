
export function GetProdCatego(categoria: string, className: string) {

    fetch("/api/getprodutos")
        .then(x => x.json())
        .then((response: any) => {

            if (response.status != 200) {
                return alert(`error: ${response.error}`)
            }
            if (categoria == "undefined") {
                const list = JSON.parse(response.content)
                list.splice(0, 1)
                for (const p of document.getElementsByClassName(className) as any) {
                    const itemNum = Math.floor(Math.random() * list.length)
                    if(list[itemNum]){
                        const itemNum2 = Math.floor(Math.random() * list[itemNum]["produtos"].length)
                        if (list[itemNum]["produtos"][itemNum2]) {
                            p.childNodes[0].childNodes[0].src = `${list[itemNum]["produtos"][itemNum2]["urlIMAGE"]}`
                            p.childNodes[1].childNodes[0].innerHTML = `${list[itemNum]["produtos"][itemNum2]["nome"]}`
                            p.childNodes[2].childNodes[1].innerHTML += `${list[itemNum]["produtos"][itemNum2]["valor"]} à vista`
                        }
                        list.splice(itemNum, 1)
                    }
                }
            } else {
                const list = JSON.parse(response.content).find((x: any) => x._id === categoria)
                
                if (list){
                    console.log(list["produtos"])
                    for (const p of document.getElementsByClassName(className) as any) {
                        const itemNum = Math.floor(Math.random() * list["produtos"].length)
                        if(list){
                            if (list["produtos"][itemNum]) {
                                p.childNodes[0].childNodes[0].src = `${list["produtos"][itemNum]["urlIMAGE"]}`
                                p.childNodes[1].childNodes[0].innerHTML = `${list["produtos"][itemNum]["nome"]}`
                                p.childNodes[2].childNodes[1].innerHTML += `${list["produtos"][itemNum]["valor"]} à vista`
                            }
                            list["produtos"].splice(itemNum, 1)
                        }
                    }
                }
                
            }
        })
}