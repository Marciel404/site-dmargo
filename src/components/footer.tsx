export default function FOOTER(){
    return (
        <footer className="bg-pink-400">
            <div>
                <h1 className=" flex text-black justify-center hover:cursor-default">
                    MargoStore
                </h1>
                <div className="flex justify-center">
                    <div className="m-3">
                    <img width="30px" height="30px" src="/svgs/facebook.svg" alt="facebook" className="p-1 border-solid text-xl rounded-3xl hover:cursor-pointer" />
                    </div>
                    <div className="m-3">
                        <img width="30px" height="30px" src="/svgs/instagram.svg" alt="instagram" className="p-1 border-solid text-xl rounded-3xl hover:cursor-pointer" />
                    </div>
                    <div className="m-3">
                    <img width="30px" height="30px" src="/svgs/tiktok.svg" alt="ticktok" className="p-1 border-solid text-xl rounded-3xl hover:cursor-pointer text-black" />
                    </div>
                </div>
                <div className="footerplus hidden h-16">

                </div>
            </div>
        </footer>
    )
}