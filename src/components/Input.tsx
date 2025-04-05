import { Props } from "@/types/Input";

export default function Input ({label,name,type,placeholder,icon:Icon,value,onChange}:Props) {
    return (
        <label className="flex flex-col items-start w-7/12 m-2">
           {label}
        <div className="flex items-center w-full justify-between border-b-2 border-b-gray-400 ">
        <Icon size={25} color="gray"/>
        <input
           className="flex-1 bg-none outline-none border-none m-2"   
           name={name}
           type={type}
           placeholder={placeholder}
           value={value}
           onChange={onChange}
           /> 
        </div>
        </label>
    )
}