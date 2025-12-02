"use client";
import Image from "next/image";
import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

export default function AddNewProduct() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      const value = inputValue.trim().toUpperCase();
      if (value && !tags.includes(value)) {
        setTags([...tags, value]);
      }
      setInputValue("");
    }

    if (e.key === "Backspace" && inputValue === "") {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  // preview image starts here
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
  // preview image ends here

  // Selector option Starts
  const [selected, setSelected] = useState<string>("");

  const options: Option[] = [
    { label: "Small", value: "S" },
    { label: "Medium", value: "M" },
    { label: "Large", value: "L" },
    { label: "Extra Large", value: "XL" },
    { label: "Double XL", value: "XXL" },
  ];
  // Selector option Ends

  return (
    <div className="">
      <form>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5">
          <h4 className="mb-7.5">General Information</h4>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Product Name</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="Luxury Watch"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Product Price</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="$500"
              />
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Product Category</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="Watch"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Discount Type</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="No Discount"
              />
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Product Tags</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                name="title"
                placeholder="Trending"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Add Product Size</label>
              <div
                className="flex flex-wrap items-center gap-2 px-3 py-3 bg-nt120 rounded-lg cursor-text"
                onClick={() => {
                  const input = document.getElementById("size-input");
                  input?.focus();
                }}>
                {/* Render Tags */}
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#7E49FF] text-white rounded-full text-sm">
                    {tag}
                  </span>
                ))}

                {/* Input Field */}
                <input
                  id="size-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                  onKeyDown={handleKeyDown}
                  placeholder="Type size... (S, M, L)"
                  className="bg-transparent outline-none flex-1 min-w-20"
                />
              </div>
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="mb-2 block">Description</label>
            <textarea
              rows={7}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              className="py-3 px-4 rounded-lg bg-nt120"
              name="textarea"></textarea>
          </div>
          <div className="mb-4">
            <span className="text-[15px] mb-3">Add Product Color</span>
            <div className="flex items-center flex-wrap gap-4">
              <span className="size-[34px] rounded-full border border-nt10 bg-[#55271B] cursor-pointer"></span>
              <span className="size-[34px] rounded-full border border-nt10 bg-[#9C5722] cursor-pointer"></span>
              <span className="size-[34px] rounded-full border border-nt10 bg-[#8C1012] cursor-pointer"></span>
              <span className="size-[34px] rounded-full border border-nt10 bg-[#7E49FF] cursor-pointer"></span>
              <span className="size-[34px] rounded-full border border-nt10 bg-[#1A9BFC] cursor-pointer"></span>
              <span className="size-[34px] rounded-full border border-nt10 bg-[#5D45FE] cursor-pointer"></span>
              <span className="size-[34px] rounded-full border border-nt10 bg-[#F42E32] cursor-pointer"></span>
              <span className="size-[34px] rounded-full border border-nt10 bg-[#FFFFFF] cursor-pointer d-center">
                <i className="ph ph-plus text-primary"></i>
              </span>
              <div className="flex items-center gap-3 bg-[#1D1B26] border-2 border-[#1F1F1F] py-3 px-4.5 rounded-lg max-w-[140px] cursor-pointer">
                <span className="d-center">
                  <i className="ph ph-check-circle text-primary"></i>
                </span>
                <span className="text-[15px]">No color</span>
              </div>
            </div>
          </div>
          <div className="">
            <span className="text-[15px] mb-3">Add Product Quantities</span>
            <div className="flex items-center gap-1 mb-4">
              <input
                className="py-3 px-4 rounded-lg bg-nt120"
                type="text"
                placeholder="Enter Text"
              />
              <button className="btngrdnt">
                <span className="btngrdnt-child py-2 sm:py-2.5 px-3">
                  <i className="ph ph-plus text-primary"></i>
                </span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Yellow - Small:</span>
                  <span>10 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Yellow - Medium:</span>
                  <span>20 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Yellow - Large:</span>
                  <span>30 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Extra Large:</span>
                  <span>20 units</span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Red - Small:</span>
                  <span>20 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Red - Medium:</span>
                  <span>30 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Red - Large:</span>
                  <span>40 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Red - Extra Large:</span>
                  <span>30 units</span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Purple - Small:</span>
                  <span>30 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Purple - Medium:</span>
                  <span>30 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Purple - Large:</span>
                  <span>30 units</span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-nt120 w-full cursor-pointer">
                  <span className="text-nt15">Purple - Extra Large: </span>
                  <span>30 units</span>
                </div>
              </div>
            </div>
            <div className="w-full mb-4">
              <label className="mb-2 block">Description</label>
              <textarea
                rows={7}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                className="py-3 px-4 rounded-lg bg-nt120"
                name="textarea"></textarea>
            </div>
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-6">
          <h4 className="mb-7.5">More details</h4>
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
            <label className="mb-2 block">Add Product Tax</label>
            <input
              className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-nt10"
              type="text"
              name="title"
              placeholder="10%"
            />
          </div>
          <div className="w-full">
            <span className="mb-2 block">Publishing</span>
            <div className="relative">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full bg-nt120 border-none rounded-lg px-4 py-3 text-sm focus:outline-none cursor-pointer">
                <option value="" disabled>
                  Pre-Order
                </option>

                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="text-end">
          <button type="submit" className="btngrdnt">
            <span className="btngrdnt-child py-3 md:py-4.5 px-5 md:px-6">
              Published now
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
