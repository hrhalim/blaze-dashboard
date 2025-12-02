"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import tshart1 from "@/public/images/tshirt1.png";

type ProductItem = {
  id: number;
  title: string;
  code: string;
  price: number;
  img: StaticImageData;
};

export default function InventoryPopUpContent() {
  const [products, setProducts] = useState<ProductItem[]>([
    { id: 1, title: "Blaze Stash Bag", code: "B-77", price: 500, img: tshart1 },
    { id: 2, title: "Blaze Stash Bag", code: "B-88", price: 500, img: tshart1 },
    { id: 3, title: "Blaze Stash Bag", code: "B-22", price: 500, img: tshart1 },
    { id: 4, title: "Blaze Stash Bag", code: "B-42", price: 500, img: tshart1 },
    { id: 5, title: "Blaze Stash Bag", code: "B-62", price: 500, img: tshart1 },
  ]);

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <span className="text-nt30 text-base mb-4">Total summary</span>

      {/* Summary */}
      <div className="px-6 py-4 rounded-2xl bg-[#F7F7F7] flex items-center justify-between mb-4">
        <div className="text-center">
          <h4 className="text-nt30 mb-2">15,763</h4>
          <span className="text-[12px] text-[#878787]">Total upload</span>
        </div>

        <hr className="bg-[#D7D7D7] h-[38px] w-[1.5px]" />

        <div className="text-center">
          <h4 className="text-nt30 mb-2">10,432</h4>
          <span className="text-[12px] text-[#878787]">Total Sold</span>
        </div>

        <hr className="bg-[#D7D7D7] h-[38px] w-[1.5px]" />

        <div className="text-center">
          <h4 className="text-nt30 mb-2">5,243</h4>
          <span className="text-[12px] text-[#878787]">In Stock</span>
        </div>
      </div>

      <hr className="bg-[#D7D7D7] h-[1.5px] mb-4" />

      <span className="mb-5 text-base text-nt30 font-medium">
        All Products List
      </span>

      <div>
        {products.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between gap-3 mb-2">
              {/* Left Side */}
              <div className="flex items-center gap-4">
                <div className="border border-[#F7F7F7] rounded-lg">
                  <Image className="w-full" src={item.img} alt="Item Image" />
                </div>

                <div>
                  <span className="font-medium mb-1 text-nt38">
                    {item.title}
                  </span>

                  <div className="flex items-center gap-1">
                    <span className="text-nt30 font-medium">{item.code}</span>
                    <hr className="bg-[#777E89] h-3 w-[1.5px]" />

                    <div className="flex items-center gap-1">
                      <span className="text-[12px] text-[#777E89]">Price:</span>
                      <span className="text-[12px] text-primary font-semibold">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2">
                {/* <Link href={`/inventory/edit/${item.code}`}> */}
                <Link href={`/addproduct`}>
                  <i className="ph ph-pencil-line text-xl p-2.5 rounded-full border border-[#EAEAEA] text-[#1D1B26] cursor-pointer"></i>
                </Link>

                {/* DELETE */}
                <button onClick={() => handleDelete(item.id)}>
                  <i className="ph ph-trash text-xl p-2.5 rounded-full border border-[#EAEAEA] text-[#1D1B26]"></i>
                </button>
              </div>
            </div>

            <hr className="bg-[#F2F2F2] h-[1.5px] mb-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
