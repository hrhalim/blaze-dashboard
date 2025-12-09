export default function BusinessesRepresented() {
  return (
    <div className="p-5 lg:px-7.5 lg:pt-7.5 lg:pb-10 bg-nt130 rounded-[20px] h-full">
      <h4 className="text-nt18 mb-4 md:mb-6">Gender represented</h4>
      <hr className="text-[#1F1F1F] h-0.5 mb-4 md:mb-6" />
      <div className="relative min-h-[204px] w-[290px] sm:w-[330px] mx-auto px-1.5">
        <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 top-0 left-0 size-30 sm:size-35 rounded-full bg-[#14232F] flex flex-col items-center justify-center">
          <h1 className="text-secondary1 mb-1 font-semibold">$34.00</h1>
          <span className="text-[12px] text-secondary1">Revenue</span>
        </div>
        <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 z-10 top-0 right-0 size-26 sm:size-[124px] rounded-full bg-[#2F2913] flex flex-col items-center justify-center">
          <h1 className="text-nt170 mb-1">35%</h1>
          <span className="text-[12px] text-nt170">New Joined</span>
        </div>
        <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 top-1/4 left-[52%] -translate-x-1/2 size-28 sm:size-32 rounded-full bg-[#332A52] flex flex-col items-center justify-center">
          <h2 className="text-nt10 mb-1 lg:text-[38px]">65%</h2>
          <span className="text-[12px] text-nt10">Growth</span>
        </div>
      </div>
    </div>
  );
}
