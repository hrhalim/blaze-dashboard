"use client";
import Image from "next/image";
import { useState } from "react";

export default function CreateEvent() {
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

  // Speaker Photo Starts here
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const blob = URL.createObjectURL(file);
    setImagePreview(blob);
  };

  const clearImage = (): void => {
    setImagePreview(null);
  };

  const [imagePreview2, setImagePreview2] = useState<string | null>(null);
  const handleImageSelect2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const blob = URL.createObjectURL(file);
    setImagePreview2(blob);
  };
  const clearImage2 = (): void => {
    setImagePreview(null);
  };

  const [imagePreview3, setImagePreview3] = useState<string | null>(null);
  const handleImageSelect3 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const blob = URL.createObjectURL(file);
    setImagePreview3(blob);
  };

  const clearImage3 = (): void => {
    setImagePreview(null);
  };
  // Speaker Photo Ends here

  return (
    <div className="">
      <form>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">General Information</h4>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Event Name</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="Enter Text"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Event Type</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="Enter Text"
              />
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Ticket Price</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="$ Amount"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Ticket Quantity</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="text"
                name="title"
                placeholder="Quantity number"
              />
            </div>
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">Date & Time details</h4>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Start date</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="date"
                name="title"
                placeholder="Enter Text"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Event Type</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="date"
                name="title"
                placeholder="Enter Text"
              />
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Ticket Price</label>
              <input
                className="date-input py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="time"
                name="title"
                placeholder="$ Amount"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Ticket Quantity</label>
              <input
                className="date-input py-3 px-4 rounded-lg bg-nt120 text-[#FFFFFFA3] placeholder:text-[#FFFFFFA3] placeholder:font-light"
                type="time"
                name="title"
                placeholder="Quantity number"
              />
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
            <span className="mb-2 block">Upload Photos</span>
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
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
          <div className="w-full mb-4">
            <label className="mb-2 block">Add Product Tax</label>
            <input
              className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-nt10"
              type="text"
              name="title"
              placeholder="10%"
            />
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">General Information</h4>
          <div className="grid grid-cols-12 gap-3 md:gap-6 mb-4">
            <div className="col-span-12 xl:col-span-4">
              <div className="flex items-center max-sm:flex-wrap gap-4 mb-4 lg:mb-7">
                <div className="w-full">
                  <label className="mb-2 block">Speaker 1</label>
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
              <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
                <div className="w-full">
                  <label className="mb-2 block">Role</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="Enter Role"
                    name="title"
                    placeholder="$ Amount"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">Company</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="Enter Name"
                    name="title"
                    placeholder="Quantity number"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="w-full md:mb-4">
                <label className="mb-2 block">Short Bio:</label>
                <textarea
                  rows={6}
                  placeholder="Enter Text"
                  className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  name="textarea"></textarea>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="w-full">
                {/* Upload Input */}
                <span className="mb-2">Speaker Photo</span>
                <label className="w-full cursor-pointer block">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect}
                    disabled={!!imagePreview}
                  />
                  {/* Default UI */}
                  {!imagePreview ? (
                    <div className="flex flex-col items-center justify-center bg-nt120 p-10.5 rounded-lg">
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
                    <div className="relative w-full h-38 rounded-lg overflow-hidden">
                      <Image
                        src={imagePreview}
                        alt="Uploaded image"
                        fill
                        unoptimized
                        className="object-cover"
                      />

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={clearImage}
                        className="absolute top-2 right-2 rounded-full p-1.5 bg-[#FF5930] text-nt10 size-6 d-center">
                        <i className="ph ph-x text-[16px]"></i>
                      </button>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 md:gap-6 mb-4">
            <div className="col-span-12 xl:col-span-4">
              <div className="flex items-center max-sm:flex-wrap gap-4 mb-4 lg:mb-7">
                <div className="w-full">
                  <label className="mb-2 block">Speaker 2</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="text"
                    name="title"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block opacity-0 max-sm:hidden">
                    Speaker 2
                  </label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="text"
                    name="title"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
                <div className="w-full">
                  <label className="mb-2 block">Role</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="Enter Role"
                    name="title"
                    placeholder="$ Amount"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">Company</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="Enter Name"
                    name="title"
                    placeholder="Quantity number"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="w-full md:mb-4">
                <label className="mb-2 block">Short Bio:</label>
                <textarea
                  rows={6}
                  placeholder="Enter Text"
                  className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  name="textarea"></textarea>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="w-full">
                {/* Upload Input */}
                <span className="mb-2">Speaker Photo</span>
                <label className="w-full cursor-pointer block">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect2}
                    disabled={!!imagePreview2}
                  />
                  {/* Default UI */}
                  {!imagePreview2 ? (
                    <div className="flex flex-col items-center justify-center bg-nt120 p-10.5 rounded-lg">
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
                    <div className="relative w-full h-38 rounded-lg overflow-hidden">
                      <Image
                        src={imagePreview2}
                        alt="Uploaded image"
                        fill
                        unoptimized
                        className="object-cover"
                      />

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={clearImage2}
                        className="absolute top-2 right-2 rounded-full p-1.5 bg-[#FF5930] text-nt10 size-6 d-center">
                        <i className="ph ph-x text-[16px]"></i>
                      </button>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 md:gap-6">
            <div className="col-span-12 xl:col-span-4">
              <div className="flex items-center max-sm:flex-wrap gap-4 mb-4 lg:mb-7">
                <div className="w-full">
                  <label className="mb-2 block">Speaker 3</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="text"
                    name="title"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block opacity-0 max-sm:hidden">
                    Speaker 2
                  </label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="text"
                    name="title"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
                <div className="w-full">
                  <label className="mb-2 block">Role</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="Enter Role"
                    name="title"
                    placeholder="$ Amount"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">Company</label>
                  <input
                    className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                    type="Enter Name"
                    name="title"
                    placeholder="Quantity number"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="w-full md:mb-4">
                <label className="mb-2 block">Short Bio:</label>
                <textarea
                  rows={6}
                  placeholder="Enter Text"
                  className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-[#FFFFFFA3] placeholder:font-light"
                  name="textarea"></textarea>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="w-full">
                {/* Upload Input */}
                <span className="mb-2">Speaker Photo</span>
                <label className="w-full cursor-pointer block">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect3}
                    disabled={!!imagePreview3}
                  />
                  {/* Default UI */}
                  {!imagePreview3 ? (
                    <div className="flex flex-col items-center justify-center bg-nt120 p-10.5 rounded-lg">
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
                    <div className="relative w-full h-38 rounded-lg overflow-hidden">
                      <Image
                        src={imagePreview3}
                        alt="Uploaded image"
                        fill
                        unoptimized
                        className="object-cover"
                      />

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={clearImage3}
                        className="absolute top-2 right-2 rounded-full p-1.5 bg-[#FF5930] text-nt10 size-6 d-center">
                        <i className="ph ph-x text-[16px]"></i>
                      </button>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <button type="submit" className="btngrdnt">
            <span className="btngrdnt-child py-2.5 sm:py-3 md:py-4.5 px-4 sm:px-5 md:px-6">
              Published now
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
