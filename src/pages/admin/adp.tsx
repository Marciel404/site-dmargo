import valLogin from "@/scripts/valLogin"

async function saveProduto(e: any) {
    e.preventDefault()
    try {
        const nome = e.target[0].value
        const description = e.target[1].value
        const valor = e.target[2].value
        const categoria = e.target[3].value
        const urlIMAGE: any = document.getElementById("photoProduto")

        fetch("/api/saveprod", {
            method: "PUT",
            headers: {
                nome: nome,
                description: description,
                valor: valor,
            },
            body: JSON.stringify({ urlimage: urlIMAGE.src, categoria: categoria })
        })
            .then(request => request.json())
            .then(response => {
                if (response.status === 400 || response.status === 405) {
                    alert(response.error)
                } else {
                    location.reload()
                    alert("Item adicionado com sucesso")
                }
            })
            .catch(x => { console.log(x) })

    } catch (e) {
        alert(`Erro ao salvar produto ${e}`)
    }
}

function cancel() {
    location.reload()
}


function photoProduto(e: any) {

    const img = document.getElementById("adcIIMG")! as any;

    if (img.files.length > 0) {

        const carregando = img.files[0];
        const lerarquivo = new FileReader()

        lerarquivo.onload = function (arquivoCarregando) {
            const img64 = arquivoCarregando.target?.result
            const i = document.getElementById("photoProduto")! as any
            i.src = `${img64}`
        }

        lerarquivo.readAsDataURL(carregando)
    };

}

export default function () {
    return (
        <main className="flex justify-center items-center h-screen bg-pink-200" onLoad={valLogin()!}>
            <div className="border-solid flex p-3 rounded-lg">
                <img src="" alt="Foto Produto" className="border-solid p-3 rounded-lg h-32 w-32" id="photoProduto" />
                <div className="p-3">
                    <h2>
                        Informações de Produto
                    </h2>
                    <br />
                    <form onSubmit={(e) => { saveProduto(e) }} className="items-end">
                        <h2>Nome do produto:</h2>
                        <input required type="text" className="h-5 rounded-lg" id="adcI" />
                        <h2>Descrição do produto:</h2>
                        <input required type="text" className="h-5 rounded-lg" id="adcI" />
                        <h2>Valor do produto:</h2>
                        <input required type="number" className="h-5 rounded-lg" id="adcI" />
                        <h2>Categoria do produto:</h2>
                        <select className="rounded-lg h-7" required defaultValue={0} id="adcI">
                            <option value="Selecione a categoria">Selecione a categoria do produto</option>
                            <option value="vestidos">Vestidos</option>
                            <option value="short">Short</option>
                            <option value="bermudas">Bermudas</option>
                            <option value="blusas">Blusas</option>
                            <option value="sapatos">Sapatos</option>
                            <option value="bikinis">Bikinis</option>
                            <option value="roupaintima">Roupas Intimas</option>
                        </select>
                        <h2>Imagem do Peroduto:</h2>
                        <input required type="file" onChange={(e) => { photoProduto(e) }} id="adcIIMG" />
                        <div className="flex justify-end">
                            <input type="submit" value="Salvar" className="broder-solid rounded-lg p-3" />
                            <input type="button" value="Cancelar" className="broder-solid rounded-lg p-3" onClick={cancel} />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
