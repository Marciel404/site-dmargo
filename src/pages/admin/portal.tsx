import valLogin from "@/scripts/valLogin"

export default function () {
    return (
        <main className="bg-pink-200" onLoad={valLogin()!}>
            <div className="grid h-screen content-center">
                <div className="flex justify-center items-center">
                    <div className="p-3">
                        <button className="p-3 text-lg rounded-lg hover:cursor-pointer" onClick={() => location.href = "/admin/adp"}>Adicionar Produtos</button>
                    </div>
                    <div className="p-3">
                        <button className="p-3 text-lg rounded-lg hover:cursor-pointer" onClick={() => location.href = "/admin/edp"}>Editar Produto</button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="p-3">
                        <button className="p-3 text-lg rounded-lg hover:cursor-pointer" onClick={() => location.href = "/admin/mensagens"}>Visualizar Mensagens</button>
                    </div>
                    <div className="p-3">
                        <button className="p-3 text-lg rounded-lg hover:cursor-pointer" onClick={() => location.href = "/admin/clientes"}>Ver clientes</button>
                    </div>
                    <div className="p-3">
                        <button className="p-3 text-lg rounded-lg hover:cursor-pointer" onClick={() => location.href = "/admin/adclientes"}>Cadastrar novo cliente</button>
                    </div>
                </div>
            </div>
        </main>
    )
}