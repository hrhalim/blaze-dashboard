"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
  title: string;
  AuthorName:string;
  date: string;
  status: "Live" | "Draft"; 
  views: string;
  action: string;
};

const blogsData: BlogDataType[] = [
  {
    image: blog_1,
    title: "How Expungement Events Are Changing Lives in Our Community",
    AuthorName: "Darrell Steward",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "",
  },
 {
    image: blog_2,
    title: "Top 5 Benefits of Participating in a Victeam Expungement Event",
    AuthorName: "Darrell Steward",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "",
  },
  {
    image: blog_3,
    title: "Everything You Need to Know Before Attending an Expungement Clinic",
    AuthorName: "Darrell Steward",    
    date: "06/01/2025",
    status: "Live",
    views: "1,254",
    action: "",
  },
  {
    image: blog_4,
    title: "Meet the Volunteers Behind Our Successful Expungement Events",
    AuthorName: "Darrell Steward",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "",
  },
  {
    image: blog_5,
    title: "Real Stories from Victeam Expungement Events",
    AuthorName: "Darrell Steward",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "",
  },
  {
    image: blog_6,
    title: "How Expungement Events Are Changing Lives in Our Community",
    AuthorName: "Jerome Bell",    
    date: "06/01/2025",
    status: "Live",
    views: "1,254",
    action: "",
  },
  {
    image: blog_7,
    title: "Upcoming Expungement Events You Don’t Want to Miss",
    AuthorName: "Darrell Steward",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "",
  },
  {
    image: blog_8,
    title: "How Expungement Events Are Changing Lives in Our Community",
    AuthorName: "Jenny Wilson",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "",
  },
  {
    image: blog_9,
    title: "Why Expungement Events Are Essential for a Fresh Start",
    AuthorName: "Darrell Steward",    
    date: "06/01/2025",
    status: "Draft",
    views: "1,254",
    action: "",
  }
  
];

export default function BlogDraftTable() {
  return (
    <div className="w-full overflow-x-auto newexreq">
      <table className={`w-full text-left min-w-[1050px]`}>
        <thead className="bg-[#0A0A0A]">
          <tr className="my-4 mx-7.5">
            <th className="text-primary font-medium">Blog Title</th>
            <th className="text-primary font-medium">Authors</th>
            <th className="text-primary font-medium text-nowrap">
             Date Published 
            </th>
            <th className="text-primary font-medium text-nowrap">
              Status
            </th> 
            <th className="text-primary font-medium text-nowrap">
              Views
            </th>
            <th className="text-primary font-medium">Action</th> 
          </tr>
        </thead>
        <tbody>
          {blogsData.map((item, i) => (
            <tr key={i} className="">
              <td className="font-medium border-b border-[#1F1F1F] tbneeds">
                <div className="grid grid-cols-[51px_auto] items-center gap-3"> 
                    <Image className="rounded-[8px]" src={item.image} alt={item.title} /> 
                    <h2 className="text-base mb-0.5 font-medium max-w-[330px] text-[#FFFFFFCC]">
                        {item.title}
                    </h2>
                </div>
              </td>
              <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds">
                {item.AuthorName}
              </td>
              <td className="border-b border-[#1F1F1F] tbneeds">{item.date}</td>
              <td className="border-b border-[#1F1F1F] tbneeds">
                <span
                  className={`px-3 py-1 rounded-full text-sm text-center ${
                    item.status === "Draft"
                      ? "text-nt170 bg-[#4B452F3D]"
                      : item.status === "Live"
                      ? "text-nt180 bg-[#34453C40]"
                      : "bg-blue-700"
                  }`}>
                  {item.status}
                </span>
              </td>
              <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds">
                {item.views}
              </td>
              <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds">
                <Link href="/"> 
                    <i className="ph ph-trash-simple text-[#777E89]"></i> 
                </Link>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
