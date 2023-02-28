import ButtondePagarCarrito from "./ButtondePagarCarrito";
import Products from "./Products";



export default function Carts({ isOpen, getSubtotal, items }) {
  if (getSubtotal > 0)
    return (
      <div
        className={`absolute md:w-4/12 w-full h-[100vh]  rounded-lg block ${
          isOpen ? "animate-aparecerCostado"  : "animate-desaparecerCostado delay-150 overflow-hidden translate-x-[100%]"
        } top-5 right-0  duration-500  max-w-screen-xl px-2 mx-auto  sm:px-6 lg:px-8`}
      >
        <div className="w-full mx-auto md:mt-2 relative  rounded-lg shadow-lg md:max-h-[95vh] pt-10  h-[95vh] md:h-auto z-[70] flex flex-col bg-white items-center justify-between">
          <div className="absolute top-0 left-0 h-5  bg-white/50 backdrop-blur-sm  w-full"></div>
        <div className="md:px-6 px-2 py-8  w-full h-full overflow-y-auto  pb-36 flex flex-col items-center gap-2 ">
            {items?.map((product) => (
              <Products showAs={"listItem"} item={product} key={items.indexOf(product)} />
            ))}
          </div>
        <ButtondePagarCarrito
        getSubtotal={getSubtotal}
        />
        </div>
      </div>
    );
    return(
      <span>cargando...</span>

    )
}
