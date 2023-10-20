import FOOTER from "@/components/footer";
import HEADER from "@/components/header";
import SIDEBAR from "@/components/sidebar";
import Script from "next/script";
import React from "react";
import { selectimagebutton, selectimagedivs } from "@/scripts/selectimages";
import { GetProdCatego } from "@/scripts/getprodcatego";

export default function index() {
  return (
    <main className="overflow-x-hidden">
      <HEADER />
      <SIDEBAR />
      <Script>{
        React.useEffect(() => {
          setInterval(() => {
            selectimagebutton(+1)
          }, 20000)

          GetProdCatego("undefined", "prodindex")
          GetProdCatego("short", "prodindex1")
          GetProdCatego("vestidos", "prodindex2")
          GetProdCatego("blusas", "prodindex3")
          GetProdCatego("sapatos", "prodindex4")

        })!
      }</Script>
      <div>

        <div className="divslider flex items-center">

          <button className="z-10 buttonslider hover:cursor-pointer h-10 w-10 p-3 rounded-full absolute border-none hidden" onClick={() => selectimagebutton(-1)}>{"<"}</button>

          <ul>

            <li className="list-none" id="slide1">
              <img className="animate-fadeinright w-full" src="/images/MargoNovidades.jpg" alt="sliede_image" />
            </li>

            <li className="list-none hidden" id="slide2">
              <img className="animate-fadeinright w-full" src="/images/SuperDescontos.jpg" alt="sliede_image" />
            </li>

            <li className="list-none hidden" id="slide3">
              <img className="animate-fadeinright w-full" src="/svgs/bolsa.svg" alt="sliede_image" />
            </li>

            <li className="list-none hidden" id="slide4">
              <img className="animate-fadeinright w-full" src="/svgs/loja.svg" alt="sliede_image" />
            </li>

          </ul>

          <button className="z-10 buttonslider hover:cursor-pointer h-10 w-10 p-3 rounded-full absolute right-0 border-none hidden" onClick={() => selectimagebutton(+1)}>{">"}</button>

        </div>

        <div className="flex justify-center">
          <div className="w-10 h-1 border-solid rounded-lg m-1 hover:cursor-pointer bg-black" id="1" onClick={selectimagedivs} />
          <div className="w-1 h-1 border-solid rounded-lg m-1 hover:cursor-pointer" id="2" onClick={selectimagedivs} />
          <div className="w-1 h-1 border-solid rounded-lg m-1 hover:cursor-pointer" id="3" onClick={selectimagedivs} />
          <div className="w-1 h-1 border-solid rounded-lg m-1 hover:cursor-pointer" id="4" onClick={selectimagedivs} />
        </div>

      </div>

      <h1 className="m-3">Produtos Derivados</h1>

      <div className="m-3">

        <div className="divprodutosindex1 flex justify-center">

          <div className="prodindex border-double rounded-lg h-full w-full">

            <div className="flex justify-center">
              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />
            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

          <div className="prodindex border-double rounded-lg h-full w-full">

            <div className="flex justify-center">

              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />

            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

          <div className="prodindex border-double rounded-lg h-full w-full">

            <div className="flex justify-center">

              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />

            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

          <div className="prodindex border-double rounded-lg h-full w-full">

            <div className="flex justify-center">

              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />

            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

        </div>

      </div>

      <h1 className="m-3">Shorts</h1>

      <div className="m-3">

        <div className="divprodutosindex1 flex justify-center">

          <div className="prodindex1 border-double rounded-lg h-full w-full">

            <div className="flex justify-center">
              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />
            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

          <div className="prodindex1 border-double rounded-lg h-full w-full">

            <div className="flex justify-center">

              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />

            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

          <div className="prodindex1 border-double rounded-lg h-full w-full">

            <div className="flex justify-center">

              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />

            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

          <div className="prodindex1 border-double rounded-lg h-full w-full">

            <div className="flex justify-center">

              <img className="imageprodindex w-20" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcarregando&psig=AOvVaw0J8YwwP57Tnl8dn5GlMdba&ust=1697849447514000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC8hZ20g4IDFQAAAAAdAAAAABAE" alt="produto" />

            </div>

            <div className="flex justify-center">
              <h4 className="nomeprodutoindex m-3 w-full"></h4>
            </div>

            <div className="flex">

              <h4 className="valorprodutoindex m-3">Por:</h4>
              <h4 className="text-green-400 mt-3 mb-3"></h4>

            </div>

            <div className="flex justify-center">

              <button className="p-3 rounded-lg bg-pink-200 justify-center m-3">Comprar</button>

            </div>

          </div>

        </div>

      </div>
      <FOOTER />
    </main>

  )

}