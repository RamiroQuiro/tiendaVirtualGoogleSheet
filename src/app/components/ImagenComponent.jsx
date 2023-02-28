import React from 'react'
import Image from "next/image";

export default function ImagenComponent({item}) {
    const myLoader = ({ src,}) => {
        return `https://drive.google.com/uc?id=${src}`;
      };
  return (
    <Image
            loader={myLoader}
            fill
            quality={100}
            alt={item.title}
            src={item.src}
            className=" object-cover  object-center rounded"
          />
  )
}
