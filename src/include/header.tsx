import { BiArrowBack, BiArrowToBottom, BiDownArrow, BiDownArrowAlt, BiUser } from "react-icons/bi";
import { CgArrowBottomLeft } from "react-icons/cg";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export default function Header () {
    return (
        <header className="bg-[#05182B] p-2 flex items-center justify-between">
           <img className="ml-10 w-14 h-14" src="/img/logo.png" alt="" />
           <nav className="flex items-center justify-center  w-[400px] gap-10">
            <small className="flex items-center gap-1">
                <SlLocationPin className="self-start"/>
                Qualquer lugar
                <img className="cursor-pointer rounded-full p-0.5 hover:bg-[#001f3d]" src="/icons/arrow.png" alt="" />
            </small>
            <small className="underline cursor-pointer">
                Anuncie aqui
            </small>
            <small className="flex items-baseline gap-1 rounded-lg bg-[#001F3D] p-1 cursor-pointer">
                <BiUser/>
                Perfil
            </small>
            </nav> 
        </header>
    )
}