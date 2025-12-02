"use client";

import Image, { StaticImageData } from "next/image";

import blog_1 from "@/public/images/blog/blog-1.avif";
import blog_2 from "@/public/images/blog/blog-2.avif";
import blog_3 from "@/public/images/blog/blog-3.avif";
import blog_4 from "@/public/images/blog/blog-4.avif";

type BlogDataType = {
  image: StaticImageData;
  title: string;
  views: string;
};

const blogsPerformance: BlogDataType[] = [
  {
    image: blog_1,
    title: "How to Prepare Your Documents ",
    views: "23k views",
  },
 {
    image: blog_2,
    title: "Real Stories from Victeam Expungement",
    views: "33k views",
  },
  {
    image: blog_3,
    title: "Step-by-Step Guide: Expungement Workshop",
    views: "43k views",
  },
  {
     image: blog_4,
    title: "You Need to know Expungement Clinic",
    views: "23k views",
  }
  
];

export default function BlogPerformance() {
  return (
    <div className="col-span-12 md:col-span-4 bg-nt130 rounded-[20px] p-7.5">  
        <h4 className="mb-1 text-[#FFFFFFCC] border-b border-[#1F1F1F] pb-5 mb-4">Blog Performance</h4>  
        { 
        blogsPerformance.map( (item, i) => (
            <div key={i} className="flex items-center justify-between py-3">
                <div className="grid grid-cols-[47px_auto] items-center gap-3"> 
                    <Image className="rounded-[8px]" src={item.image} alt={item.title} /> 
                    
                    <h2 className="text-base mb-0.5 font-medium max-w-[180px] text-[#FFFFFFCC]">
                       {item.title}
                    </h2>
                </div>
                <span className="text-[14px]! tbneeds">{item.views}</span>
            </div>
        ))} 
    </div>
  );
}
