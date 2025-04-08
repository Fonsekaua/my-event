import { Props } from "@/types/Texts";

export default function Small ({texts}:Props) {
    return(
<>
{texts.map((text, index) => (
        <span key={index} className="capitalize">
          {text}
        </span>
      ))}
</>
    )
}