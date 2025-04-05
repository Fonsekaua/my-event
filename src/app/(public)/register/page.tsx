"use client"
import Input from "@/components/Input";
import { Props } from "@/types/Login";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function Register() {
    const [form, setForm] = useState<Props>({
        name: "",
        email: "",
        password: "",
    })
    const set = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <main className="h-screen flex">
            <div className="flex flex-col items-center bg-cover justify-center h-screen bg-[url('/img/fundo.png')] bg-no-repeat w-1/2">
                <img className="w-[400px] h-[400px]" src="/img/logo.png" alt="" />
                <p className="w-2/4 text-center font-bold">
                    O site de eventos que mais conecta comunidades !!
                </p>
            </div>
            <form className="w-1/2 flex flex-col items-center justify-center bg-neutral-200  text-neutral-500">
                <h1 className="text-center text-neutral-950 font-bold text-xl w-3/4">
                    Crie uma conta gratuita e veja os eventos que estão bombando na sua cidade
                </h1>
                <Input
                    icon={FaUser}
                    label="Seu nome"
                    name="name"
                    onChange={set}
                    placeholder="Digite o seu nome...   "
                    type="text"
                    value={form.name}
                />
                <Input
                    icon={FaEnvelope}
                    label="Email"
                    name="email"
                    onChange={set}
                    placeholder="Digite o seu email..."
                    type="text"
                    value={form.email}
                />
                <Input
                    icon={FaLock}
                    label="Senha"
                    name="password"
                    onChange={set}
                    placeholder="Digite sua senha..."
                    type="text"
                    value={form.password}
                />
                <div className="flex items-center mt-3 justify-between w-4/6">
                    <div className="flex items-center justify-self-start flex-1">
                    <input type="checkbox" className="outiline-none m-1 h-4 w-4 text-black rounded border-gray-300 focus:ring-blue-500"/>
                    <small>
                        Li e concordo com os termos
                    </small>
                    </div>
                    <button className="p-4  bg-[#7B76F1] text-gray-200 rounded-full cursor-pointer w-36">
                        Criar Conta
                    </button>
                </div>
                <small className="mt-10">
                    Já possui conta? Entre com
                </small>
                <div className="flex items-center justify-between mt-5 w-4/6 gap-10">
                    <div className="p-3 flex justify-center items-center w-1/2 rounded-full bg-neutral-100 cursor-pointer">
                    <img src="icons/google.png" className="w-5 h-5 mr-2" alt="" />
                        google
                    </div>
                    <div className="p-3 flex items-center justify-center rounded-full bg-neutral-100 cursor-pointer w-1/2">
                        <img src="icons/facebook.png" className="w-5 h-5 mr-2" alt="" />
                        facebook
                    </div>
                </div>


            </form>
        </main>
    );
}
