type RevenueItem = {
  title: string;
  countLabel: string;
  count: number;
  amount: string;
  textColor: string;
  bgColor: string;
};

const revenueData: RevenueItem[] = [
  {
    title: "Product Sales",
    countLabel: "Product Sales",
    count: 45,
    amount: "$2,300",
    textColor: "text-nt140",
    bgColor: "bg-[#1A9BFC26]",
  },
  {
    title: "Invoices",
    countLabel: "Invoices",
    count: 45,
    amount: "$3,500",
    textColor: "text-[#3875FF]",
    bgColor: "bg-[#1E4DB71F]",
  },
  {
    title: "Ticket Purchases",
    countLabel: "Ticket Purchases",
    count: 45,
    amount: "$2,300",
    textColor: "text-nt170",
    bgColor: "bg-[#FEC90F1F]",
  },
];

export default function RevenueCard() {
  return (
    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
      <div className="bg-nt130 rounded-[20px] pt-6 pb-8 px-4">
        <div className="flex justify-between flex-wrap mb-6">
          <div>
            <h5 className="text-nt18 mb-0.5">Revenue</h5>
            <span className="fs-two font-normal">$58.6k</span>
          </div>
          <div className="">
            <button className="btngrdnt">
              <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
                March 2025 <i className="ph ph-caret-down text-[#67757C]"></i>
              </span>
            </button>
          </div>
        </div>

        <hr className="text-[#1F1F1F] h-0.5 mb-6" />

        {revenueData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-nt18 font-medium mb-0.5">
                  {item.title}
                </span>
                <span className="text-[12px] text-nt160">
                  {item.countLabel}: {item.count}
                </span>
              </div>

              <span
                className={`py-[5px] px-2.5 rounded-3xl text-[12px] font-semibold ${item.textColor} ${item.bgColor}`}>
                {item.amount}
              </span>
            </div>

            {index !== revenueData.length - 1 && (
              <hr className="text-[#1F1F1F] h-0.5 mb-4" />
            )}
          </div>
        ))}
        <hr className="text-[#1F1F1F] h-0.5 mb-12" />
        <div className="relative min-h-[204px] w-[290px] sm:w-[330px] mx-auto px-1.5">
          <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 top-0 left-0 size-30 sm:size-35 rounded-full bg-[#14232F] flex flex-col items-center justify-center">
            <h2 className="text-secondary1 mb-1">$2,300</h2>
            <span className="text-[12px] text-secondary1">Products</span>
          </div>
          <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 z-10 top-0 right-0 size-26 sm:size-[124px] rounded-full bg-[#2F2913] flex flex-col items-center justify-center">
            <h2 className="text-nt170 mb-1">$2,300</h2>
            <span className="text-[12px] text-nt170">Products</span>
          </div>
          <div className="absolute cursor-pointer hover:scale-[1.1] duration-300 hover:z-20 top-1/4 left-[52%] -translate-x-1/2 size-28 sm:size-32 rounded-full bg-[#141A27] flex flex-col items-center justify-center">
            <h2 className="text-nt210 mb-1">$2,300</h2>
            <span className="text-[12px] text-nt210">Products</span>
          </div>
        </div>
      </div>
    </div>
  );
}
