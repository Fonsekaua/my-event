"use client"
import Element from "@/components/Element";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default function home() {
  const div = useRef<HTMLDivElement>(null);
    const hoje:Date = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
      });
  

const scrollRight = () => {
  if(div.current){
    div.current.scrollBy({ left: -200, behavior: 'smooth' });

  }
};
const scrollLeft = () => {
  if(div.current){
    div.current.scrollBy({ left: 200, behavior: 'smooth' });

  }
};

    return (
        <main className="h-full">
          <div className="flex items-center p-10 justify-between bg-[url('/img/download_15.png')] bg-blue-900/50"> 
          <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start mb-5">
                    <h1 className="text-2xl ">
                    Olá, Faça seu login!
                    </h1>
                    <p className="text-gray-300">
                        {dataFormatada}
                    </p>
                    </div>
                    <div className="bg-sky-900 rounded-lg flex items-center w-96">
                        <input type="text" placeholder="O que voce deseja?" className="ml-2 bg-none outline-none border-none flex-1"/>
                        <div className="h-12 w-12 flex items-center bg-sky-800 justify-center rounded-lg">
                        <FaSearch />
                        </div>
                    </div>
            </div>
              <div className="flex items-center" >
                <div onClick={scrollRight} className=" h-[250px] w-[20px]">

                </div>
                <div className="flex items-center w-[660px] hi overflow-y-auto scroll-hidden" ref={div} >
            <Element/>
            <Element/>
            <Element/>
            </div>
                <div onClick={scrollLeft} className="h-[250px] w-[20px]">

                </div>
              </div>
          </div>
        </main>
    )
}