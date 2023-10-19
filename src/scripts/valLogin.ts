import moment from "moment-timezone";
import React from "react"

export default function () {
    React.useEffect(() => {
        const obj = JSON.parse(localStorage.getItem(`valAdminPortal`)!);

        try {
            if (obj.val) {
                if (location.href.split("/")[location.href.split("/").length - 1] == "admin") {
                    location.href = "/admin/portal"
                } else {
                    const m1 = moment(obj.expire * 1000).tz("America/Sao_Paulo")
                    const m2 = moment(new Date()).tz("America/Sao_Paulo")
                    const som2 = m1.date() - m2.date()
                    if (m1 < m2 || som2 > 1) {
                        location.href = "/admin"
                        localStorage.setItem("valAdminPortal", JSON.stringify({ val: false, expire: null }))
                        alert("Tempo de Login inspirado")
                    }
                }
            } else {
                if (location.href.split("/")[location.href.split("/").length - 1] != "admin") {
                    location.href = "/"
                    alert("Sem acesso")
                }
                
            }
        } catch {
            location.href = "/"
            alert("Sem acesso")
        }

    })
}