type StateItem = {
  name: string;
  percent: string;
  textColor: string;
  bgColor: string;
};

const states: StateItem[] = [
  {
    name: "New Jersey",
    percent: "22%",
    textColor: "text-nt140",
    bgColor: "bg-[#1A9BFC1F]",
  },
  {
    name: "Delaware",
    percent: "22%",
    textColor: "text-nt180",
    bgColor: "bg-[#39CB7F1F]",
  },
  {
    name: "Washington",
    percent: "22%",
    textColor: "text-nt170",
    bgColor: "bg-[#FEC90F1F]",
  },
  {
    name: "Utah",
    percent: "22%",
    textColor: "text-nt150",
    bgColor: "bg-[#FC4B6C1F]",
  },
  {
    name: "Utah",
    percent: "22%",
    textColor: "text-nt150",
    bgColor: "bg-[#FC4B6C1F]",
  },
];

export default function StateRepresented() {
  return (
    <div className="p-5 lg:p-7.5 bg-nt130 rounded-[20px]">
      <h4 className="text-nt18 mb-4 md:mb-6">State represented</h4>
      <hr className="text-[#1F1F1F] h-0.5 mb-4 md:mb-6" />

      <div>
        {states.map((state, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-5 mb-3 md:mb-4.5">
            <span className="lg:text-base font-medium text-nt18">
              {state.name}
            </span>

            <span
              className={`font-semibold py-[5px] px-2 rounded-full ${state.textColor} ${state.bgColor} text-center`}>
              {state.percent}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
