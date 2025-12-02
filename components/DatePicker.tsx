"use client";

import React, { useEffect, useRef, useState } from "react";

type DayObj = { date: Date; inCurrentMonth: boolean };

const DatePicker: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Date | null>(new Date());
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setVisible(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
  const endOfMonth = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth() + 1, 0);

  function buildMonthGrid(d: Date): DayObj[] {
    const start = startOfMonth(d);
    const end = endOfMonth(d);

    const grid: DayObj[] = [];
    const startDay = start.getDay();

    for (let i = startDay - 1; i >= 0; i--) {
      const prev = new Date(start);
      prev.setDate(start.getDate() - (i + 1));
      grid.push({ date: prev, inCurrentMonth: false });
    }

    for (let day = 1; day <= end.getDate(); day++) {
      const cur = new Date(d.getFullYear(), d.getMonth(), day);
      grid.push({ date: cur, inCurrentMonth: true });
    }

    while (grid.length % 7 !== 0) {
      const next = new Date(end);
      next.setDate(
        next.getDate() + (grid.length - (startDay + end.getDate()) + 1)
      );
      grid.push({ date: next, inCurrentMonth: false });
    }

    return grid;
  }

  const days = buildMonthGrid(viewDate);
  const today = new Date();

  function isSameDay(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function formatButtonDate(d: Date | null) {
    if (!d) return "Select date";
    return d.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className=""
        aria-haspopup="dialog"
        aria-expanded={visible}>
        {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-white font-semibold">
          {today.getDate()}
        </div> */}
        <div className="bg-nt120 flex items-center gap-1 rounded-xl px-4 py-2.5 border border-nt30 hover:border-nt80">
          <div className="text-left flex items-center gap-1">
            <div className="text-sm font-medium text-nt160">Today</div>
            <div className="text-sm font-medium text-nt160">
              {formatButtonDate(selected)}
            </div>
          </div>
          <svg
            className="ml-2 h-5 w-5 text-slate-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden>
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.064a.75.75 0 011.12 1l-4.25 4.657a.75.75 0 01-1.12 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {visible && (
        <div className="absolute z-50 mt-2 w-72 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">
              {viewDate.toLocaleString(undefined, {
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-1 rounded hover:bg-slate-100"
                onClick={() =>
                  setViewDate(
                    (d) => new Date(d.getFullYear(), d.getMonth() - 1, 1)
                  )
                }
                aria-label="Previous month">
                ‹
              </button>
              <button
                className="p-1 rounded hover:bg-slate-100"
                onClick={() => setViewDate(new Date())}
                aria-label="Jump to today">
                Today
              </button>
              <button
                className="p-1 rounded hover:bg-slate-100"
                onClick={() =>
                  setViewDate(
                    (d) => new Date(d.getFullYear(), d.getMonth() + 1, 1)
                  )
                }
                aria-label="Next month">
                ›
              </button>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-xs text-center text-slate-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="font-medium">
                {d}
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-1">
            {days.map((dayObj, idx) => {
              const d = dayObj.date;
              const selectedCls =
                selected && isSameDay(d, selected)
                  ? "ring-2 ring-indigo-400"
                  : "";
              const todayCls = isSameDay(d, today)
                ? "border border-slate-300"
                : "";
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelected(new Date(d));
                    setVisible(false);
                  }}
                  className={`aspect-square flex items-center justify-center rounded-md p-1 text-sm hover:bg-slate-100 focus:outline-none ${
                    !dayObj.inCurrentMonth ? "text-slate-300" : "text-slate-700"
                  } ${selectedCls} ${todayCls}`}>
                  <span
                    className={`${
                      selected && isSameDay(d, selected) ? "font-semibold" : ""
                    }`}>
                    {d.getDate()}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <div>
              Selected: {selected ? selected.toLocaleDateString() : "—"}
            </div>
            <button
              className="text-sm underline"
              onClick={() => {
                setSelected(null);
              }}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
