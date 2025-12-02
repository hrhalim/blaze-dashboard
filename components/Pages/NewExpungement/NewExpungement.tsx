"use client";
import Image from "next/image";
import { useState } from "react";

export default function NewExpungement() {
  // preview image starts here
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (images.length >= 10) {
      alert("Maximum 10 images allowed");
      return;
    }

    const blobUrl = URL.createObjectURL(file);
    setImages((prev) => [...prev, blobUrl]);

    // clear input after select
    e.target.value = "";
  };

  const removeImage = (index: number): void => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  // Selector option Ends

  return (
    <div className="">
      <form>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">General Information</h4>
          <div className="w-full mb-4">
            <label className="mb-2 block">Expungements Name</label>
            <input
              className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
              type="text"
              name="title"
              placeholder="New Jersey Expungement"
            />
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Venue Name</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="Angeles house"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">City</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="Abbreviation"
              />
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">State</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="Los Angeles"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Address</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="3 / 621 Juvenal Ridge, Port Vestachester"
              />
            </div>
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">Date & Time</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1">
              <div className="w-full">
                <label className="mb-2 block">Start date</label>
                <input
                  className="py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  type="date"
                  name="title"
                  placeholder="Enter Text"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full">
                <label className="mb-2 block">End Date</label>
                <input
                  className="py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  type="date"
                  name="title"
                  placeholder="Enter Text"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full">
                <label className="mb-2 block">Start Time</label>
                <input
                  className="date-input py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  type="time"
                  name="title"
                  placeholder="$ Amount"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full">
                <label className="mb-2 block">End Time</label>
                <input
                  className="date-input py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  type="time"
                  name="title"
                  placeholder="Quantity number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">Event details location</h4>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Venue Name</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="Venue name"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">City</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="City name"
              />
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">State</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="State name"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Address</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="Location address"
                name="title"
                placeholder="Quantity number"
              />
            </div>
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-6">
          <h4 className="mb-7.5">More details</h4>
          <div className="w-full mb-4">
            <label className="mb-2 block">Event details</label>
            <textarea
              rows={7}
              placeholder="Type here..."
              className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3]"
              name="textarea"></textarea>
          </div>
          <div className="w-full space-y-2 mb-4">
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <span className="mb-2 block">Upload Photos</span>
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-44 rounded-md overflow-hidden">
                  {/* Next.js Image Preview */}
                  <Image
                    src={img}
                    alt={`preview-${index}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 rounded-full p-1.5 bg-[#FF5930] text-nt10 size-6 d-center">
                    <i className="ph ph-x text-[16px]"></i>
                  </button>
                </div>
              ))}
            </div>
            {/* Upload Box (show only if less than 10 images) */}
            {images.length < 10 && (
              <label className="w-full cursor-pointer block">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />

                <div className="flex flex-col items-center justify-center bg-nt120 p-14 rounded-lg">
                  <span className="mb-2 flex items-center justify-center">
                    <i className="ph ph-file-image text-3xl text-primary"></i>
                  </span>
                  <span className="text-[10px] mb-0.5 text-center">
                    Upload product photo
                  </span>
                  <span className="text-[8px] text-[#8A8A8A] text-center">
                    Maximum size 5 MB
                  </span>
                </div>
              </label>
            )}
            {/* Counter */}
            <p className="text-xs font-medium text-primary">
              {images.length}/10 images uploaded
            </p>
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
