export default function (cookieName: string) {
    
    const ck = document.cookie.split(";")

    let val1: any = []
    for (var i = 0; i <= ck.length; i++) {
        if (ck[i]) {
            if (ck[i].split("=")[0].replace(" ", "") == cookieName) {
                val1 = ck[i].split("=")
            }
        }
    }

    return val1
}