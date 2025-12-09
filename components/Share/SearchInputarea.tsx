"use client";
import { useRef, useEffect } from "react";
import { useToggle } from "@/hooks/useToggle";

export default function SearchInputarea() {
  // Click to open search input Starts here
  const { open, toggle, close } = useToggle(false);

  const inputRef = useRef<HTMLDivElement>(null);

  // Detect click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        close();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, close]);

  // Click to open search input Ends here
  return (
    <div>
      <button onClick={toggle}>
        <i className="ph ph-magnifying-glass text-nt90"></i>
      </button>
      {open && (
        <div ref={inputRef} className="absolute mt-2 z-50">
          <form action="">
            <div className="flex items-center gap-2 py-3.5 px-4 rounded-lg bg-nt120">
              <input
                className="bg-transparent placeholder:text-nt160 text-nt160 sm:min-w-[315px]"
                type="text"
                placeholder="Search..."
              />
              <span className="d-center cursor-pointer">
                <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
