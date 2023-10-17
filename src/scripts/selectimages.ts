import React from "react"

export let indexSelectImage = 1

export function selectimagebutton(qnt: number) {
    indexSelectImage += qnt
    if (indexSelectImage == 5) {
        indexSelectImage = 1
    } else if (indexSelectImage <= 0) {
        indexSelectImage = 4
    }
    const v = [1, 2, 3, 4]
    delete v[indexSelectImage - 1]
    try {
        for (const i of v) {
            if (i) {
                const im = document.getElementById(`slide${i}`)!
                const divslider = document.getElementById(`${i}`)!
                im.style.display = "none"
                divslider.style.backgroundColor = "transparent"
                divslider.style.width = "4px"
            }
        }
        const img = document.getElementById(`slide${indexSelectImage}`)!
        img.style.display = "block"
        const div = document.getElementById(`${indexSelectImage}`)!
        div.style.backgroundColor = "black"
        div.style.width = "40px"
    } catch {
        React.useEffect(() => {
            for (const i of v) {
                if (i) {
                    const im = document.getElementById(`slide${i}`)!
                    const divslider = document.getElementById(`${i}`)!
                    im.style.display = "none"
                    divslider.style.backgroundColor = "transparent"
                    divslider.style.width = "4px"
                }
            }
            const img = document.getElementById(`slide${indexSelectImage}`)!
            img.style.display = "block"
            const div = document.getElementById(`${indexSelectImage}`)!
            div.style.backgroundColor = "black"
            div.style.width = "40px"
        })
    }


}

export function selectimagedivs(d: any) {
    const v = [1, 2, 3, 4]
    delete v[d.target.id - 1]
    for (const i of v) {
        if (i) {
            const im = document.getElementById(`slide${i}`)!
            const divslider = document.getElementById(`${i}`)!
            im.style.display = "none"
            divslider.style.backgroundColor = "transparent"
            divslider.style.width = "4px"
        }
    }
    const img = document.getElementById(`slide${d.target.id}`)!
    img.style.display = "block"
    d.target.style.backgroundColor = "black"
    d.target.style.width = "40px"
}