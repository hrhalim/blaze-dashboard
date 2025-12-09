export default function GenderRepresented() {
  return (
    <div className="p-5 lg:px-7.5 lg:pt-7.5 lg:pb-10 bg-nt130 rounded-[20px] h-full">
      <h4 className="text-nt18 mb-4 md:mb-6">Gender represented</h4>
      <hr className="text-[#1F1F1F] h-0.5 mb-4 md:mb-6" />
      <div className="">
        <div className="relative min-h-[204px] w-[290px] sm:w-[330px] mx-auto px-1.5">
          <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 top-5 left-3 sm:left-5 size-[178px] rounded-full bg-[#14232F] flex flex-col items-center justify-center">
            <h2 className="text-secondary1 mb-1 display-3 font-semibold">
              65%
            </h2>
            <span className="text-secondary1">Man</span>
          </div>
          <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 z-10 top-10 right-3 sm:right-5 size-[140px] rounded-full bg-[#2F2913] flex flex-col items-center justify-center">
            <h1 className="text-nt170 mb-1 font-medium">35%</h1>
            <span className="text-nt170 text-xs">Woman</span>
          </div>
        </div>
      </div>
    </div>
  );
}
