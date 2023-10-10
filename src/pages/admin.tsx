import Header from "@/components/header"
import React from "react"

function valLogin(e: any) {
    e.preventDefault()
    const user = e.target[0]
    const password = e.target[1]
    fetch("/api/getpassval", {
        method: "POST",
        headers: { "user": `${user.value}`, "password": `${password.value}` }
    })
        .then(request => request.json())
        .then(response => {
            if(response.status === 400){
                alert(response.error)
            }
        })
        .catch(x=>{console.log(x)})
}

export default function () {

    return (
        <main className="bg-pink-200 h-screen w-screen">
            <div>
                <div className="adminlogin grid place-content-center h-screen">
                    <div className="p-3 border-collapse border-double rounded-lg mr-3 w-96">
                        <div className=" bg-pink-400">
                            <h2 className="flex">Login</h2>
                        </div>
                        <div>
                            °°°°°
                        </div>
                        <div>
                            <form onSubmit={(e) => { valLogin(e) }}>
                                <div>
                                    <h4 className="flex">
                                        Usuario
                                    </h4>
                                </div>
                                <div>
                                    <input className="w-full" required type="text" />
                                </div>
                                <div>
                                    <h4 className="flex">
                                        Senha
                                    </h4>
                                </div>
                                <div>
                                    <input className="w-full" required type="password" />
                                </div>
                                <div>
                                    <button className="border-solid p-1 border-pink-400 mt-1 text-base font-medium text-pink-400 hover:cursor-pointer">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}