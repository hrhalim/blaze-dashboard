import Image from "next/image";
import language from "@/public/images/language.png";
import userimg from "@/public/images/user-img.png";

export default function HeaderTopBar() {
  return (
    <div className="flex items-center justify-between gap-3 mb-[30px]">
      <div className="flex items-center gap-6">
        <div className="lg:hidden">
          <button>
            <i className="ph ph-text-indent text-nt90"></i>
          </button>
        </div>
        <div className="">
          <button>
            <i className="ph ph-magnifying-glass text-nt90"></i>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="">
          <Image draggable="false" src={language} alt="Language" />
        </div>
        <button className="d-center">
          <i className="ph ph-moon text-3xl"></i>
        </button>
        <button className="relative d-center">
          <i className="ph ph-chat-text text-[28px]"></i>
          <span className="absolute top-0 right-0 size-4 border-2 border-nt30 bg-primary rounded-full"></span>
        </button>
        <button className="relative d-center">
          <i className="ph ph-bell text-[28px]"></i>
          <span className="absolute top-0 right-0 size-4 border-2 border-nt30 bg-primary rounded-full"></span>
        </button>
        <div className="">
          <Image src={userimg} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}
