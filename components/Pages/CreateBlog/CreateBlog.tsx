"use client";
import { useState } from "react";
import Image from "next/image";
import BlogEditor from "./BlogEditor";
// import defaultblogimg from "@/public/images/defaultblogimg.png";

export default function CreateBlog() {
  const defaultImage = "/images/defaultblogimg.png"; // your fallback image
  const [preview, setPreview] = useState<string>(defaultImage);

  // Upload new image
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className="">
      <form>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">General Information</h4>
          <div className="w-full mb-4">
            <label className="mb-2 block">Blog Headline (Main-heading)</label>
            <input
              className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-nt10 placeholder:font-light"
              type="text"
              name="title"
              placeholder="Conversations with London Makr & Co"
            />
          </div>
          <div className="w-full relative! overflow-hidden">
            <BlogEditor />
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5">
          <h4 className="mb-7.5">General Information</h4>
          <div className="grid grid-cols-12 gap-3 md:gap-6">
            <div className="col-span-12 xl:col-span-4">
              <div className="flex items-center max-sm:flex-wrap gap-4 mb-4 lg:mb-7">
                <div className="w-full">
                  <label className="mb-2 block">Writer Name</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="text"
                    name="title"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block opacity-0 max-sm:hidden">
                    Speaker 1
                  </label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="text"
                    name="title"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="mb-2 block">Company Name (Optional)</label>
                <input
                  className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  type="Enter Role"
                  name="title"
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="w-full">
                <label className="mb-2 block">Short Details</label>
                <textarea
                  rows={6}
                  placeholder="Enter Text"
                  className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  name="textarea"></textarea>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <span className="mb-2 text-sm">Writer Photo</span>
              <div className="flex items-start gap-4 sm:gap-6 w-full rounded-xl">
                {/* LEFT — IMAGE WITH REMOVE BUTTON */}
                <div className="relative size-16 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={preview}
                    alt="Uploaded Image"
                    width={64}
                    height={64}
                    className="w-full rounded-full"
                  />
                </div>

                {/* RIGHT — UPLOAD INPUT ALWAYS VISIBLE */}
                <div className="flex flex-col w-full">
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUpload}
                      className="hidden rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center bg-nt120 py-11 px-4 rounded-lg">
                      <span className="mb-2 flex items-center justify-center">
                        <i className="ph ph-file-image text-3xl text-primary"></i>
                      </span>
                      <span className="text-[10px] sm:mb-0.5">
                        Click to upload
                      </span>
                      <span className="text-[8px] text-[#8A8A8A]">
                        Max size 10kb
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <button type="submit" className="btngrdnt">
            <span className="btngrdnt-child py-2.5 sm:py-3 md:py-4.5 px-4 sm:px-5 md:px-6">
              Done
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
