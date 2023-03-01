"use client";
import Image from "next/image";

export default function ImagenComponent({ item }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://drive.google.com/uc?id=${src}`;
  };
  return (
    <Image
      loader={myLoader}
      quality={100}
      width={100}
      height={100}
      alt={item.title}
      src={item.src}
      className="w-10/12 object-center rounded"
    />
  );
}
