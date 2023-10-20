import valLogin from "@/scripts/valLogin"
import React from "react"

async function editProduto() {
  try {
    const e = document.getElementById("FormEDIT")! as any
    const id = e[1].value
    const nome = e[2].value
    const description = e[3].value
    const valor = e[4].value
    const urlIMAGE: any = document.getElementById("photoProduto")

    if (id == "") {
      alert("Selecione um produto")
      return
    }

    fetch("/api/editProd", {
      method: "PATCH",
      headers: {
        id: id,
        nome: nome,
        description: description,
        valor: valor,
      },
      body: JSON.stringify({urlimage: urlIMAGE.src})
    })
      .then(request => request.json())
      .then(response => {
        if (response.status === 400 || response.status === 405) {
          alert(response.error)
        } else {
          alert("Produto editado com sucesso")
          location.reload()
        }
      })
      .catch(x => { console.log(x) })

  } catch (e) {
    alert(`Erro ao salvar produto ${e}`)
  }
}

async function deleteProduto() {

  const e = document.getElementById("FormEDIT")! as any
  const id = e[1].value

  if (id == "") {
    alert("Selecione um produto")
    return
  }

  try {

    fetch("/api/deleteprod", {
      method: "DELETE",
      headers: {
        id: id
      }
    })
      .then(request => request.json())
      .then(response => {
        if (response.status === 400 || response.status === 405) {
          alert(response.error)
        } else {
          alert("Produto deletado com sucesso")
          location.reload()
        }
      })
      .catch(x => { console.log(x) })

  } catch (e) {
    alert(`Erro ao salvar produto ${e}`)
  }
}

function findItem() {
  const selected: any = document.getElementById("adcIS")
  if (selected.value == 0) {
    alert("Selecione um Produto")
  } else {
    fetch("/api/getprodutos", { method: "GET" })
      .then(r => r.json())
      .then((r: any) => {
        if (r.error) {
          alert(r.error)
        } else {
          for (const p of JSON.parse(r.content)) {
            if (p._id == selected.value) {
              const img = document.getElementById("photoProduto")! as any
              const s1 = document.getElementById("adcII")! as any
              const s2 = document.getElementById("adcIN")! as any
              const s3 = document.getElementById("adcID")! as any
              const s4 = document.getElementById("adcIV")! as any
              const s5 = document.getElementById("adcIIMG")! as any

              img.src = p.urlIMAGE
              s1.value = `${p._id}`
              s2.value = `${p.nome}`; s2.disabled = false
              s3.value = `${p.description}`; s3.disabled = false
              s4.value = `${p.valor}`; s4.disabled = false
              s5.disabled = false
            }
          }
        }
      })
  }
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

function addProdutoSelection() {
  fetch("/api/getprodutos", { method: "GET" })
    .then(r => r.json())
    .then((r: any) => {
      if (r.error) {
        alert(r.error)
      } else {
        const select = document.getElementById("adcIS")
        for (const p of JSON.parse(r.content)) {

          if (p._id != "quantidadeProdutos") {

            const option = document.createElement("option")

            option.value = p._id
            option.textContent = p.nome

            select?.appendChild(option)

          }
        }
      }

    })
    .catch(e => { console.log(e) })
}

addProdutoSelection()

export default function () {

  return (
    <main className="flex justify-center items-center h-screen bg-pink-200">
      <div className="border-solid flex p-3 rounded-lg" onLoad={valLogin()!}>
        <img src="" alt="Foto Produto" className="border-solid p-3 rounded-lg h-32 w-32" id="photoProduto" />
        <div className="p-3" >
          <h2>
            Informações de Produto
          </h2>
          <br />
          <form className="items-end" id="FormEDIT">
            <select className="h-8 rounded-lg" defaultValue={0} name="produtos" id="adcIS">
              <option value="0" disabled >Selecione o produto</option>
            </select>
            <h2>Id do produto:</h2>
            <input required disabled type="text" className="h-5 rounded-lg" id="adcII" />
            <h2>Nome do produto:</h2>
            <input required disabled type="text" className="h-5 rounded-lg" id="adcIN" />
            <h2>Descrição do produto:</h2>
            <input required disabled type="text" className="h-5 rounded-lg" id="adcID" />
            <h2>Valor do produto:</h2>
            <input required disabled type="number" className="h-5 rounded-lg" id="adcIV" />
            <h2>Imagem do Peroduto:</h2>
            <input required disabled type="file" className="h-5 rounded-lg" id="adcIIMG" onChange={photoProduto} />
            <div className="flex justify-end">
              <input type="button" value="Salvar" className="broder-solid rounded-lg p-3" onClick={editProduto} />
              <input type="button" value="Deletar" className="broder-solid rounded-lg p-3" onClick={deleteProduto} />
              <input type="button" value="Procurar" className="broder-solid rounded-lg p-3" onClick={findItem} />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
