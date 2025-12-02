import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import totalblog1 from "@/public/images/totalblog1.png";
import totalblog2 from "@/public/images/totalblog2.png";
import totalblog3 from "@/public/images/totalblog3.png";

type BlogItem = {
  image: StaticImageData;
  title: string;
  date: string;
  visitors: string;
};

const blogsData: BlogItem[] = [
  {
    image: totalblog1,
    title: "Canabin 12 Law",
    date: "August 2, 2025",
    visitors: "Total 24k Visitors",
  },
  {
    image: totalblog2,
    title: "Canabin 12 Law",
    date: "August 2, 2025",
    visitors: "Total 24k Visitors",
  },
  {
    image: totalblog3,
    title: "Canabin 12 Law",
    date: "August 2, 2025",
    visitors: "Total 24k Visitors",
  },
];

export default function TotalBlogsCard() {
  return (
    <div className="col-span-12 2xl:col-span-4">
      <div className="bg-nt130 rounded-[20px] py-6 px-4 h-full">
        <div className="flex justify-between flex-wrap mb-6">
          <div>
            <h4 className="text-nt18 mb-0.5 font-medium">Blogs</h4>
            <span className="text-nt160 font-normal text-[13px]">
              Total Blogs: {blogsData.length}
            </span>
          </div>

          <button className="size-12 rounded-full bg-[#1D1B26] d-center">
            <i className="ph ph-plus-circle text-primary"></i>
          </button>
        </div>

        <hr className="text-[#1F1F1F] h-0.5 mb-5" />
        {blogsData.map((blog, index) => (
          <div key={index}>
            <div className="mb-6 flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <Image src={blog.image} alt={blog.title} />

                <div>
                  <span className="text-base mb-0.5 font-medium">
                    {blog.title}
                  </span>

                  <span className="text-[12px] text-nt160 mb-3 block">
                    {blog.date}
                  </span>

                  <span className="py-1 px-2 rounded-full text-nt150 bg-[#FC4B6C14] text-[10px] inline-block cursor-pointer">
                    {blog.visitors}
                  </span>
                </div>
              </div>
              <Link href="/">
                <i className="ph ph-caret-right text-primary"></i>
              </Link>
            </div>
            {index !== blogsData.length - 1 && (
              <hr className="text-[#1F1F1F] h-0.5 mb-6" />
            )}
          </div>
        ))}
        <Link
          href="/"
          className="w-full d-center py-3.5 px-4 rounded-lg bg-nt120 text-primary text-[15px] font-medium">
          View more
        </Link>
      </div>
    </div>
  );
}
