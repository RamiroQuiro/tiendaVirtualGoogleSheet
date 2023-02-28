"use client";
import { useCarritoCompras } from "../../context/contextStore";
import { useFilterProduct } from "../../context/filter";
import Products from "./Products";


export default function TiendadelHome({ data }) {


  // const [consulta,setConsulta]=useState<string>("all")
  const { filterCategory, filterSubCategory,filterSearch } = useFilterProduct((state) => ({
    filterSearch:state.filterSearch,
    filterCategory: state.filterCategory,
    filterSubCategory: state.filterSubCategory,
  }));
const {items}=useCarritoCompras((state) => ({
  items: state.items,
}));

// console.log(Object.values(data?.data[0]).includes("cocina"))
  return (
    <div className="flex w-full flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-start">
      {data?.data
        ?.filter((prod) => {
          let busquedaCategory=prod.category.toUpperCase().includes(filterCategory.toUpperCase())
          let busquedaSubcategory=prod.subcategory.toUpperCase().includes(filterCategory.toUpperCase())
          if (filterCategory == "all") return prod;
          if (busquedaCategory || busquedaSubcategory)return prod
        })
        .filter((subCat) => {
          if (filterSubCategory == "all") return subCat;
            return  subCat.subcategory.toUpperCase() == filterSubCategory.toUpperCase();
        })
        ?.map((opcion) => (
          <Products showAs={"card"} item={opcion} key={opcion?.id}/>
        ))
        }
    </div>
  );
}
