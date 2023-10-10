import FOOTER from "@/components/footer"
import HEADER from "@/components/header"

function submit(e: any) {
    e.preventDefault()
}

export default function () {
    return (
        <main className="h-full w-screen bg-pink-200">

            <HEADER></HEADER>

            <div>
                <div className="grid grid-cols-2 text-center text-lg items-center mr-28 hover:cursor-default">
                    <div>
                        <h1 className="font-sans text-7xl hover:cursor-default">Contato</h1>
                        <h1 className="text-7xl font-sans hover:cursor-default">°°°°°°°°°°</h1>
                    </div>
                </div>
                <div className="content-contato flex justify-center text-lg m-3 hover:cursor-default">
                    <div className="p-3 border-collapse border-double rounded-lg mr-3">
                        <div className="text-left">
                            <h1 className="text-pink-400 hover:cursor-default">Entre em contato</h1>
                            <h4 className="hover:cursor-default">Nos deixe uma mensagem</h4>
                        </div>
                        <form onSubmit={(e) => { submit(e) }}>
                            <div className="grid grid-cols-2 ">
                                <input className="border-b-black border-t-transparent border-l-transparent border-r-transparent font-sans text-2xl mt-5 bg-transparent hover:cursor-pointer" type="text" required placeholder="Nome" />
                                <input className="border-b-black border-t-transparent border-l-transparent border-r-transparent font-sans text-2xl hover:cursor-pointer bg-transparent" type="email" placeholder="Email" />
                                <input className="border-b-black border-t-transparent border-l-transparent border-r-transparent font-sans text-2xl mt-5 hover:cursor-pointer bg-transparent" type="text" required placeholder="Telefone" />
                                <select className="bg-transparent border-none" defaultValue={0}>
                                    <option value="Selecione seu estado">Selecione seu estado</option>
                                    <option value="Acre (AC)">Acre (AC)</option>
                                    <option value="Alagoas (AL)">Alagoas (AL)</option>
                                    <option value="Amapá (AP)">Amapá (AP)</option>
                                    <option value="Amazonas (AM)">Amazonas (AM)</option>
                                    <option value="Bahia (BA)">Bahia (BA)</option>
                                    <option value="Ceará (CE)">Ceará (CE)</option>
                                    <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
                                    <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
                                    <option value="Goiás (GO)">Goiás (GO)</option>
                                    <option value="Maranhão (MA)">Maranhão (MA)</option>
                                    <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
                                    <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
                                    <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
                                    <option value="Pará (PA)">Pará (PA)</option>
                                    <option value="Paraíba (PB)">Paraíba (PB)</option>
                                    <option value="Paraná (PR)">Paraná (PR)</option>
                                    <option value="Pernambuco (PE)">Pernambuco (PE)</option>
                                    <option value="Piauí (PI)">Piauí (PI)</option>
                                    <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                                    <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
                                    <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
                                    <option value="Rondônia (RO)">Rondônia (RO)</option>
                                    <option value="Roraima (RR)">Roraima (RR)</option>
                                    <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
                                    <option value="São Paulo (SP)">São Paulo (SP)</option>
                                    <option value="Sergipe (SE)">Sergipe (SE)</option>
                                    <option value="Tocantins (TO)">Tocantins (TO)</option>
                                </select>
                            </div>
                            <textarea className="mt-5 border-b-black border-t-transparent border-l-transparent border-r-transparent font-sans text-2xl resize-y hover:cursor-pointer bg-transparent" required placeholder="Seu Mensagem"></textarea>
                            <div className="flex justify-end">
                                <button className=" border-solid border-pink-400 text-base font-medium text-pink-400 pt-3 pb-3 pr-5 pl-5 hover:cursor-pointer">Enviar</button>
                            </div>
                        </form>
                    </div>

                    <div className="border-solid rounded-lg p-3 mr-3">
                        <h2 className="mb-5">Informações de contato</h2>
                        <div className="flex">
                            <img src="/instagram.svg" alt="instagram_icon" />
                            <h4>@MargoStore</h4>
                        </div>
                        <div className="flex">
                            <img src="/whatsapp.svg" alt="wpp_icon" />
                            <h4>(21) 98655-9058</h4>
                        </div>
                        <div className="flex">
                            <img src="/mail.svg" alt="email_icon" />
                            <h4>contatoexempleemail@exemple.com</h4>
                        </div>
                        <div className="mt-5">
                            <h2>
                                Horário da nossa loja física:
                            </h2>
                            <div className="mt-3">
                                <h4>Segunda a Sexta:</h4>
                                <p> 08:00h às 19:00h</p>
                            </div>
                            <div>
                                <h4>Sábados: </h4>
                                <p>08:00h às 17:00h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="flex mr-5">
                    <img src="/empresa.svg" alt="empresa_icon" />
                </div>
                <div>
                    <p className="hover:cursor-default">R. José Bento Viêira Ferreira, 55a - Maceio, Niterói - RJ, 24310-050</p>
                </div>
            </div>

            <div className="flex justify-center m-6">
                <iframe className="border-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.4180423346438!2d-43.07274547157691!3d-22.912358863403895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99843b444dfae1%3A0xebed0a50e4a048b!2sR.%20Jos%C3%A9%20Bento%20Vi%C3%AAira%20Ferreira%2C%2055a%20-%20Maceio%2C%20Niter%C3%B3i%20-%20RJ%2C%2024310-050!5e0!3m2!1spt-BR!2sbr!4v1696795326732!5m2!1spt-BR!2sbr" width="80%" height="250" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <FOOTER></FOOTER>

        </main>
    )
}