import Image from "next/image";
import BannerImg from "../../../public/banner.jpg";
import InputSearch from "./InputSearch";

export default function Banner() {




  return (
    <div className="bg-orange-300/50 w-screen relative h-[90vh] flex items-center justify-center mx-auto">
      <div className="items-center text-white bg-gray-200/50 backdrop-blur-sm border px-5 py-7 rounded-xl text-center z-20 flex gap-8 -translate-y-7 flex-col ">
      <h1 className=" text-3xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r pb-4 to-orange-600 from-orange-800">Muebles DesignSoft</h1>
        <span className="md:text-lg  text-gray-700 font-medium  underline underline-offset-3 decoration-[3px] decoration-blue-600/70 ">
          Busca y Elegí tus productos y mandanos tu carrito por WhatsApp y pasa a retirar.
        </span>
    <InputSearch
    label={"banner"}
    key="banner"
    />        
      </div>
      <div className="w-full md:h-full h-1/2 top-0 left-0 z-10 absolute bg-gradient-to-b from-neutral-100/30 via-neutral-100/50 to-white backdrop-blur-[2px]"></div>
      <Image
      layout="fill"
      src={BannerImg}
      alt="banner"
      className="absolute w-full h-full object-cover top-0 left-0 aspect-square saturate-75"
      />
    </div>
  );
}
