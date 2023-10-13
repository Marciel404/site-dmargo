import moment from "moment-timezone";
import React from "react"

export default function (){
    React.useEffect(() => {
        const obj = JSON.parse(localStorage.getItem(`valAdminPortal`)!);

        try {
            if (obj.val){
                const m1 = moment(obj.expire*1000).tz("America/Sao_Paulo")
                const m2 = moment(new Date()).tz("America/Sao_Paulo")
                if (m1 < m2){
                    location.href = "/"
                    alert("Tempo de Login inspirado")
                }
            } else {
                location.href = "/"
                alert("Sem acesso")
            }
        } catch {
            location.href = "/"
            alert("Sem acesso")
        }
        
    })
}