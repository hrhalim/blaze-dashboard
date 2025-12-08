"use client";

import Image, { StaticImageData } from "next/image";
import blog_1 from "@/public/images/blog/blog-1.avif";
import blog_2 from "@/public/images/blog/blog-2.avif";
import blog_3 from "@/public/images/blog/blog-3.avif";
import blog_4 from "@/public/images/blog/blog-4.avif"; 
import Link from "next/link";

type BlogDataType = {
  image: StaticImageData; 
  title: string;
  types: string[];
  link: string;  
};

const blogsData: BlogDataType[] = [
  {
    image: blog_1,
    title: "July Expungement dayfor Freedom",
    types: ['5 Videos'],
    link: "",
    
  },
  {
    image: blog_2,
    title: "July Expungement dayfor Freedom",
    types: ['5 Videos', '10 Image'],
    link: "",
  },
  {
    image: blog_3,
    title: "Everything You Need to Know Before",
    types: ["5 Videos", "10 Image"],
    link: "",
  },
  {
    image: blog_4,
    title: "Meet the Volunteers Behind Our",
    types: ["5 Videos"],
    link: "",
  },
];

export default function MediaLinks() {

  return (
    <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
        <div>
          <h4 className="text-nt18 mb-1">Media Links</h4>
          <span className="text-[13px] text-nt160">Unfilled Orders: {blogsData.length}</span>
        </div>
        <button className="btngrdnt">
          <span className="py-2 sm:py-3 px-6 btngrdnt-child d-center gap-2">
            See All 
          </span>
        </button>
      </div> 
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#0A0A0A]">
            <tr className="my-4 mx-7.5">
              <th className="text-primary font-medium py-4 px-5">Memory Name</th>  
              <th className="text-primary font-medium text-nowrap">Type</th> 
              <th className="text-primary font-medium text-nowrap">Link</th>
            </tr>
          </thead>
          <tbody>
            {blogsData.map((item, i) => (
              <tr key={i}>
                <td className="font-medium border-b border-[#1F1F1F] tbneeds py-5 pl-0 px-3">
                  <div className="grid grid-cols-[51px_auto] items-center gap-3"> 
                    <Image className="rounded-[8px]" src={item.image} alt={item.title} /> 
                    <h2 className="text-base mb-0.5 font-medium max-w-[140px] text-[#FFFFFFCC] leading-[140%] text-[14px]">
                      {item.title}
                    </h2>
                  </div>
                </td>
                <td className="border-b border-[#1F1F1F] tbneeds"> 
                  <ul className="media-typeitem flex items-center gap-1">
                    {item.types.map((typeItem, index) => (
                      <li key={index} className="px-3 py-2 rounded-full text-[14px]">
                        {typeItem}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds">
                  <Link className="text-[14px] text-[#7E49FF] font-medium underline" href={"/"}>
                    View Link
                  </Link> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
