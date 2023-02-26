import ItemsCategorias from "./ItemsCategorias";
export default function UlCategoriasSidebar({ data }) {
  const extraerCategorias = (data) => {
    const array = [];
    data?.filter((item) => {
      const find = array.find((prod) => prod == item.category);
      if (find) return;
      else {
        array.push(item.category);
      }
    });
    return array;
  };

  const categorias = extraerCategorias(data);

  return (
    <>
      {categorias?.map((cat, i) => (
        <ul 
        key={i}
        className="flex flex-col w-10/12  text-gray-500">
          <ItemsCategorias name={cat}  imgSrc={""} data={data} />
        </ul>
      ))}
    </>
  );
}
