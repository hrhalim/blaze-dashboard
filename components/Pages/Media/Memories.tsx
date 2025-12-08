"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

import blog_1 from "@/public/images/blog/blog-1.avif";
import blog_2 from "@/public/images/blog/blog-2.avif";
import blog_3 from "@/public/images/blog/blog-3.avif";
import blog_4 from "@/public/images/blog/blog-4.avif";
import blog_5 from "@/public/images/blog/blog-5.avif";
import blog_6 from "@/public/images/blog/blog-6.avif";
import blog_7 from "@/public/images/blog/blog-7.avif";
import blog_8 from "@/public/images/blog/blog-8.avif";
import blog_9 from "@/public/images/blog/blog-9.avif";

type BlogDataType = {
  image: StaticImageData;
  date: string;
  title: string;
  types: string[];
  category: string;
  status: "Active" | "Draft";
  views: string;
  action: string; // changed type to string
};

const blogsData: BlogDataType[] = [
  {
    image: blog_1,
    title: "July Expungement dayfor Freedom",
    types: ['5 Videos'],
    category: "Expungements",    
    date: "06/01/2025",
    status: "Draft",
    views: "6,254",
    action: "delete", 
  },
  {
    image: blog_2,
    title: "July Expungement dayfor Freedom",
    types: ['5 Videos', '10 Images'],
    category: "Events",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "delete",
  },
  {
    image: blog_3,
    title: "Everything You Need to Know Before",
    types: ["5 Videos", "10 Images"],
    category: "Education",    
    date: "06/01/2025",
    status: "Active",
    views: "7,254",
    action: "delete",
  },
  {
    image: blog_4,
    title: "Meet the Volunteers Behind Our",
    types: ["5 Videos", "10 Images"],
    category: "News",    
    date: "06/01/2025",
    status: "Active",
    views: "1,254",
    action: "delete",
  },
  {
    image: blog_5,
    title: "Real Stories from Victeam Expungement",
    types: ["5 Videos"],
    category: "News",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "delete",
  },
  {
    image: blog_6,
    title: "How Expungement Events Are Changing",
    types: ["5 Videos", "10 Images"],
    category: "Events",    
    date: "06/01/2025",
    status: "Active",
    views: "1,254",
    action: "delete",
  },
  {
    image: blog_7,
    title: "Upcoming Expungement Events",
    types: ["5 Videos", "10 Images"],
    category: "News",    
    date: "06/01/2025",
    status: "Active",
    views: "1,254",
    action: "delete",
  },
  {
    image: blog_8,
    title: "How Expungement Events Are Changing ",
    types: ["5 Videos"],
    category: "Expungements",    
    date: "06/01/2025",
    status: "Active",
    views: "8,254",
    action: "delete",
  },
  {
    image: blog_9,
    title: "Why Expungement Events Are Essential",
    types: ["5 Videos"],
    category: "News",    
    date: "06/01/2025",
    status: "Active",
    views: "1,254",
    action: "delete",
  }
];

export default function Memories() {
  const [blogs, setBlogs] = useState(blogsData);

  const deleteBlog = (index: number) => {
    setBlogs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
        <div>
          <h4 className="text-nt18 mb-1">Memories</h4>
          <span className="text-[13px] text-nt160">Recent uploaded Medias: 16</span>
        </div>
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
        {/* SEARCH */}
          <form className="max-w-[190px]">
            <div className="flex items-center gap-2 py-3.5 px-4 rounded-lg bg-[#0A0A0A]">
              <span className="d-center cursor-pointer">
                <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
              </span>
              <input
                className="bg-transparent placeholder:text-nt160 text-nt160 sm:min-w-[315px]"
                type="text"
                placeholder="Search..."
              />
            </div>
          </form>
          <Link href="/media/draft" className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2 text-nt160">Draft</Link>
          <Link href="/media" className="btngrdnt">
           <span className="py-2 sm:py-3 px-6 btngrdnt-child d-center gap-2">
              Active 
            </span>
          </Link>
        </div>
      </div> 
      <div className="w-full overflow-x-auto newexreq">
        <table className="w-full text-left min-w-[1050px]">
          <thead className="bg-[#0A0A0A]">
            <tr className="my-4 mx-7.5">
              <th className="text-primary font-medium">Memory Name</th> 
              <th className="text-primary font-medium text-nowrap">Date</th>
              <th className="text-primary font-medium text-nowrap">Type</th> 
              <th className="text-primary font-medium text-nowrap">Views</th>
              <th className="text-primary font-medium text-nowrap">Category</th>
              <th className="text-primary font-medium">Status</th> 
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, i) => (
              <tr key={i}>
                <td className="font-medium border-b border-[#1F1F1F] tbneeds">
                  <div className="grid grid-cols-[51px_auto] items-center gap-3"> 
                    <Image className="rounded-[8px]" src={item.image} alt={item.title} /> 
                    <h2 className="text-base mb-0.5 font-medium max-w-[180px] text-[#FFFFFFCC] leading-[140%]">
                      {item.title}
                    </h2>
                  </div>
                </td>
                <td className="border-b border-[#1F1F1F] tbneeds">{item.date}</td>
                <td className="border-b border-[#1F1F1F] tbneeds"> 
                  <ul className="media-typeitem flex items-center gap-1">
                    {item.types.map((typeItem, index) => (
                      <li key={index} className="px-3 py-2 rounded-full text-[14px]">
                        {typeItem}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds">{item.views}</td>
                <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds">{item.category}</td>
                <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds"> 
                  <div className="flex items-center gap-3 justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-center ${
                        item.status === "Draft"
                        ? "text-nt170 bg-[#4B452F3D]"
                        : item.status === "Active"
                        ? "text-nt180 bg-[#34453C40]"
                        : "bg-blue-700"
                      }`}
                    >
                      {item.status}
                    </span>
                    <Link href="/"> 
                      <i className="ph ph-pencil-simple text-[#ffffff]"></i> 
                    </Link>
                    {item.action !== "" && (
                      <button onClick={() => deleteBlog(i)}>
                        <i className="ph ph-trash-simple text-white"></i>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
