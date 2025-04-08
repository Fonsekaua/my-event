import Small from "@/components/Small";
import Span from "@/components/Span";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-[#045174]">
            <div className="flex items-center justify-between w-9/12 p-10">
                <img className="w-12 h-12" src="/img/logo.png" alt="" />
                <nav className="flex items-center gap-5">
                    <h2 className="text-xl">
                        Compre pelo nosso app
                    </h2>
                    <span className="bg-black border-2 border-white rounded-lg flex items-center w-32 h-10">
                        <img className="w-12 h-12" src="/icons/apple.png" alt="" />
                        <div className="flex flex-col items-start">
                            <small className="text-[5px]">
                                Baixar na
                            </small>
                            App store
                        </div>
                    </span>
                    <span className="bg-black border-2 border-white rounded-lg flex items-center w-32 h-10">
                        <img className="w-10 h-10" src="/icons/google_play.png" alt="" />
                        <div className="flex flex-col items-start">
                            <small className="text-[5px]">
                                Baixar na
                            </small>
                            App store
                        </div>
                    </span>
                </nav>
            </div>
            <div className="flex items-center w-9/12 justify-between border-t-2 border-b-2 border-gray-400 pt-6 pb-6">
                <Span texts={['Encontrar eventos','Cidades','Para produtores','Anuncie seu evento','Ajuda']}/>
                <small className="flex items-center text-[10px]">
                    Ver caterogias
                    <img src="/icons/arrow.png" alt="" />
                </small>
            </div>
            <div className="flex items-start w-9/12 gap-2 m-5">
               <Small texts={['Home','Sobre nós','Blog','Carreiras','produtores','ética e conduta','politica de privacidade','direitos de uso']}/> 
            </div>
        </footer>
    )
}