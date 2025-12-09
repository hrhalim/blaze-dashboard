"use client";
import Image from "next/image";
import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

export default function EditMedia() {
  // 3 preview images
  const [previewImages, setPreviewImages] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);

  // Upload for individual image slot
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imgUrl = URL.createObjectURL(file);

    const updated = [...previewImages];
    updated[index] = imgUrl;
    setPreviewImages(updated);
  };

  // Remove specific image
  const handleImageRemove = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ): void => {
    e.stopPropagation(); // prevent opening file dialog
    const updated = [...previewImages];
    updated[index] = null;
    setPreviewImages(updated);
  };

  return (
    <div className="">
      <form>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5">
          <h4 className="mb-7.5">General Information</h4>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Media Headline</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="Enter Text"
                required
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Media category</label>
                <select
                className="w-full bg-nt120 border-none rounded-lg px-4 py-3 text-sm focus:outline-none cursor-pointer">
                <option value="">
                  Selecte category
                </option>
                <option value="">
                  Expungement
                </option>
                <option value="">
                  Event
                </option>
                <option value="">
                  Product
                </option>
                <option value="">
                  News Media
                </option>
              </select>
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Media Credits</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="Enter Text"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Date & Time</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="Enter Date"
              />
            </div>
          </div> 
          <div className="w-full mb-4">
            <label className="mb-2 block">Description</label>
            <textarea
              rows={7}
              placeholder="Short details"
              className="py-3 px-4 rounded-lg bg-nt120"
              name="textarea"></textarea>
          </div> 
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-6">
          <h4 className="mb-6.5">More details</h4>
          <label className="mb-2 block">Upload media photo</label> 
          <div className="w-full mb-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-2">
              {previewImages.map((img, index) => (
                <label
                  key={index}
                  className={`w-full cursor-pointer ${
                    index === 2 ? "col-span-2" : ""
                  }`}>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, index)}
                  />

                  {/* For index 0 and 1 (first two boxes) */}
                  {index < 2 ? (
                    <div className="w-full">
                      {!img ? (
                        <div className="flex flex-col items-center justify-center bg-nt120 px-4 py-10 rounded-md">
                          <span className="mb-2 flex items-center justify-center">
                            <i className="ph ph-file-image text-3xl text-primary"></i>
                          </span>
                          <span className="text-[10px] mb-0.5 text-center">
                            Upload product photo
                          </span>
                          <span className="text-[8px] text-[#8A8A8A] text-center">
                            Maximum size 10 kb
                          </span>
                        </div>
                      ) : (
                        <div className="relative w-full h-[460px]">
                          <Image
                            src={img}
                            alt="Preview"
                            fill
                            unoptimized
                            className="object-cover rounded-md border"
                          />
                          <button
                            type="button"
                            onClick={(e) => handleImageRemove(e, index)}
                            className="absolute top-2 right-2 rounded-full p-1.5 bg-[#FF5930] text-nt10 size-6 d-center">
                            <i className="ph ph-x text-[16px]"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    // index === 2 -> full width card (label already has col-span-2)
                    <div className="w-full">
                      {!img ? (
                        <div className="flex flex-col items-center justify-center bg-nt120 px-4 py-10 rounded-md">
                          <span className="mb-2 flex items-center justify-center">
                            <i className="ph ph-file-image text-3xl text-primary"></i>
                          </span>
                          <span className="text-[10px] mb-0.5 text-center">
                            Upload product photo
                          </span>
                          <span className="text-[8px] text-[#8A8A8A] text-center">
                            Maximum size 10 kb
                          </span>
                        </div>
                      ) : (
                        <div className="relative w-full h-[460px]">
                          <Image
                            src={img}
                            alt="Preview"
                            fill
                            unoptimized
                            className="object-cover rounded-md border"
                          />
                          <button
                            type="button"
                            onClick={(e) => handleImageRemove(e, index)}
                            className="absolute top-2 right-2 rounded-full p-1.5 bg-[#FF5930] text-nt10 size-6 d-center">
                            <i className="ph ph-x text-[16px]"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </label>
              ))}
            </div>
            <span className="text-[12px] text-primary">Upload Maximum 10</span>
          </div>
          <div className="w-full mb-4">
            <label className="mb-2 block">Add Media link (Optional)</label>
            <input
              className="py-3 px-4 rounded-lg bg-nt120 text-[#7E49FF] placeholder:text-[#777E89]"
              type="text"
              name="title"
              placeholder="Enter Text"
            />
          </div>
          <div className="w-full">
            <span className="mb-2 block">Publishing</span>
            <div className="relative">
              <select
                className="w-full bg-nt120 border-none rounded-lg px-4 py-3 text-sm focus:outline-none cursor-pointer">
               <option value="">
                  Draft
                </option>
                <option value="">
                  Active
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
          <button type="submit" className="btngrdnt-2">
            <span className=" rounded-[8px] py-3 px-6 btngrdnt-child-2">
              Delete
            </span>
          </button>
          <button type="submit" className="btngrdnt">
            <span className="btngrdnt-child py-3 px-7">
              Save
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
