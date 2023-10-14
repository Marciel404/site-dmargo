import valLogin from "@/scripts/valLogin"

async function saveProduto(e: any) {
    e.preventDefault()
    try {
        const nome = e.target[0].value
        const description = e.target[1].value
        const valor = e.target[2].value
        const urlIMAGE: any = document.getElementById("photoProduto")

        fetch("/api/saveprod", {
            method: "PUT",
            headers: {
                nome: nome,
                description: description,
                valor: valor
            },
            body: JSON.stringify({urlimage: urlIMAGE.src})
        })
            .then(request => request.json())
            .then(response => {
                if (response.status === 400 || response.status === 405) {
                    alert(response.error)
                } else {
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

    if (img.files.length > 0){

        const carregando = img.files[0];
        const lerarquivo = new FileReader()
        
        lerarquivo.onload = function(arquivoCarregando){
           const img64 = arquivoCarregando.target?.result
           const i =document.getElementById("photoProduto")! as any
           i.src = `${img64}`
        }

        lerarquivo.readAsDataURL(carregando)
    };

}

export default function () {
    return (
        <main className="flex justify-center items-center h-screen" onLoad={valLogin()!}>
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
                        <h2>Imagem do Peroduto:</h2>
                        <input required type="file" onChange={(e) => { photoProduto(e) }} className="h-5 rounded-lg" id="adcIIMG" />
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
