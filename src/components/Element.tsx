export default function Element () {
    return (
<>
<fieldset className="relative w-[220px] h-[250px] bg-sky-800 m-5 flex flex-col items-center rounded-2xl">
    <div className="bg-[url('/img/download_19.png')] bg-no-repeat w-[215px] h-[150px] mt-1 flex items-start justify-end">
        <small className="bg-sky-950 flex items-center gap-1 w-12 rounded-lg p-1 m-2" >
            <img src="/icons/purple_star.png" alt="" />
            5,0
        </small>
    </div>
    <div className="flex flex-col items-center m-4 text-xl">
        Casa noturna
        <small className="text-xs text-gray-300">
            7km de distancia
        </small>
    </div>
  <legend className="rounded-lg absolute w-[120px] h-10 flex items-center justify-center bg-sky-950 bottom-[-15px] left-1/2 -translate-x-1/2">
    Ver evento
  </legend>
</fieldset>

</>
    )
}