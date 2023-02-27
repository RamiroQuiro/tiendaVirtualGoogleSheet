import ButtonAbrirFiltros from "./ButtonAbrirFiltros";
import UlCategoriasSidebar from "./UlCategoriasSidebar";
export default function SidebarCategoriasStre({ data }) {
  return (
    <div className="md:w-[250px] md:min-w-[250px] w-full  md:py-10 pl-3 md:pl-10 bg-white sticky top-[68px] md:h-[90vh] h-14 overflow-hidden duration-700 hover:h-max md:hover:h-[90vh] border flex-col flex ">
      <ButtonAbrirFiltros />
     
        <UlCategoriasSidebar
        data={data}
        />
    
    </div>
  );
}
