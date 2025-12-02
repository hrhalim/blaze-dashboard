"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};
// Select color area option Starts
// Select color area option Ends
export default function UploadProduct() {
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
  // preview image ends here

  // Selector option Starts
  const [selected, setSelected] = useState<string>("");

  const options: Option[] = [
    { label: "Pre-Order", value: "Pre-Order" },
    { label: "Live and Publish", value: "Live and Publish" },
    { label: "Drafts", value: "Drafts" },
  ];
  const category: Option[] = [
    { label: "T Shirts", value: "T Shirts" },
    { label: "Sweatshirts ", value: "Sweatshirts" },
    { label: "Hats", value: "Hats" },
    { label: "Pants", value: "Pants" },
    { label: "Bags", value: "Bags" },
    { label: "Accessories", value: "Accessories" },
  ];
  // Discount Type area option Starts
  const discount: Option[] = [
    { label: "No Discount", value: "No Discount" },
    { label: "Percentage % ", value: "Percentage %" },
    { label: "Fixed Price", value: "Fixed Price" },
  ];
  // Discount Type area option Ends
  // Product Tags area option Starts
  const producttag: Option[] = [
    { label: "New", value: "New" },
    { label: "Trending", value: "Trending" },
    { label: "Footwear", value: "Footwear" },
    { label: "Outdoor", value: "Outdoor" },
    { label: "Latest", value: "Latest" },
    { label: "Indoor", value: "Indoor" },
  ];
  // Product Tags area option Ends
  // Selector option Ends
  // Select color area option Starts
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const plateRef = useRef<HTMLDivElement>(null);

  const DEFAULT_COLORS = [
    "#55271B",
    "#9C5722",
    "#8C1012",
    "#7E49FF",
    "#1A9BFC",
    "#5D45FE",
    "#F42E32",
  ];

  const EXTRA_COLORS = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFF3",
  ];

  // Close plate when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (plateRef.current && !plateRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setIsOpen(false);
  };
  // Select color area option Ends

  return (
    <div className="">
      <form>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-7.5 relative">
          <h4 className="mb-7.5">General Information</h4>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <label className="mb-2 block">Product Name</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-nt10"
                type="text"
                name="title"
                placeholder="Luxury Watch"
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block">Product Price</label>
              <input
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-nt10"
                type="text"
                name="title"
                placeholder="$500"
              />
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <span className="mb-2 block">Product Category</span>
              <div className="relative">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="w-full bg-nt120 border-none rounded-lg px-4 py-3 text-sm focus:outline-none cursor-pointer">
                  <option value="" disabled>
                    Select Category
                  </option>

                  {category.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full">
              <span className="mb-2 block">Product Tags</span>
              <div className="relative">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="w-full bg-nt120 border-none rounded-lg px-4 py-3 text-sm focus:outline-none cursor-pointer">
                  <option value="" disabled>
                    Select Tags
                  </option>

                  {producttag.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center max-sm:flex-wrap gap-4 mb-4">
            <div className="w-full">
              <span className="mb-2 block">Discount Type</span>
              <div className="relative">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="w-full bg-nt120 border-none rounded-lg px-4 py-3 text-sm focus:outline-none cursor-pointer">
                  <option value="" disabled>
                    Select Discount
                  </option>

                  {discount.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
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
                  className="bg-transparent outline-none flex-1 min-w-20 placeholder:text-nt10"
                />
              </div>
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="mb-2 block">Description</label>
            <textarea
              rows={7}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-nt10"
              name="textarea"></textarea>
          </div>
          <div className="mb-4">
            <span className="text-[15px] mb-3 block">Add Product Color</span>

            <div className="flex items-center flex-wrap gap-4">
              {/* Default Colors (UI unchanged, only active border logic added) */}
              {DEFAULT_COLORS.map((color) => (
                <span
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`size-[34px] rounded-full cursor-pointer ${
                    selectedColor === color ? "border-nt10 border" : ""
                  }`}
                  style={{ backgroundColor: color }}></span>
              ))}

              {/* PLUS BUTTON */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="size-[34px] rounded-full border border-nt10 bg-[#FFFFFF] cursor-pointer d-center">
                <i className="ph ph-plus text-primary"></i>
              </button>

              {/* NO COLOR BUTTON */}
              <div
                onClick={() => setSelectedColor(null)}
                className="flex items-center gap-3 bg-[#1D1B26] border-2 border-[#1F1F1F] py-3 px-4.5 rounded-lg max-w-[140px] cursor-pointer">
                <span className="d-center">
                  <i
                    className={`ph ph-check-circle ${
                      selectedColor === null ? "text-primary" : "text-nt160"
                    }`}></i>
                </span>
                <span className="text-[15px]">No color</span>
              </div>
            </div>

            {/* EXTRA COLOR PLATE */}
            {isOpen && (
              <div
                ref={plateRef}
                className="absolute bottom-[60%] rotate-90 left-62 bg-[#1D1B26] border border-nt10 rounded-lg p-4 flex gap-3 flex-wrap z-50">
                {EXTRA_COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => handleColorSelect(color)}
                    className={`size-[34px] rounded-full cursor-pointer border ${
                      selectedColor === color
                        ? "border-nt10 border-[3px]"
                        : "border-nt10"
                    }`}
                    style={{ backgroundColor: color }}></button>
                ))}
              </div>
            )}
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
                className="py-3 px-4 rounded-lg bg-nt120 placeholder:text-nt10"
                name="textarea"></textarea>
            </div>
          </div>
        </div>
        <div className="bg-nt130 rounded-[20px] p-5 md:p-7.5 mb-6">
          <h4 className="mb-7.5">More details</h4>

          <div className="w-full space-y-2 mb-4">
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
