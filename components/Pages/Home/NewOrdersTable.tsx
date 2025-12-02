import Link from "next/link";
import bessie1 from "@/public/images/bessie.png";
import Image from "next/image";

export default function NewOrdersTable() {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="bg-nt130 rounded-[20px]">
        <div className="p-7.5">
          <h4 className="mb-1">New Orders</h4>
          <span className="text-[13px] text-nt160">Unfilled Orders: 44</span>
        </div>
        <div className="px-4">
          <div className="w-full overflow-x-auto newordertable">
            <table className={`w-full text-left min-w-[500px]`}>
              <thead className="bg-[#0A0A0A]">
                <tr className="">
                  <th className="text-primary font-medium text-nowrap">
                    Order Number
                  </th>
                  <th className="text-primary font-medium text-nowrap">
                    Item Count
                  </th>
                  <th className="text-primary font-medium text-nowrap">
                    Buyer & Location
                  </th>
                  <th className="text-primary font-medium text-nowrap">
                    Revenue
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="font-medium text-nowrap ps-7 py-5">G-84</td>
                  <td className="text-[12px]! ps-6 py-5">
                    <div className=" flex items-center gap-1">
                      <span>Quantity:</span>
                      <span>04</span>
                    </div>
                  </td>
                  <td className=" py-5">
                    <div className="flex gap-2">
                      <div className="shrink-0">
                        <Image
                          className="rounded-full border-2 border-nt30 shrink-0"
                          src={bessie1}
                          alt="Images"
                        />
                      </div>
                      <div className="">
                        <span className="font-medium text-nt18 mb-0.5">
                          Bessie Cooper
                        </span>
                        <p className="text-[12px] text-nt160">
                          6391 Elgin St. Celina, Delaware 10299
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="ps-7 py-5">$450</td>
                  <td>
                    <Link href="/">
                      <span className="d-center">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-medium text-nowrap ps-7 py-5">G-84</td>
                  <td className="text-[12px]! ps-6 py-5">
                    <div className=" flex items-center gap-1">
                      <span>Quantity:</span>
                      <span>04</span>
                    </div>
                  </td>
                  <td className=" py-5">
                    <div className="flex gap-2">
                      <div className="shrink-0">
                        <Image
                          className="rounded-full border-2 border-nt30 shrink-0"
                          src={bessie1}
                          alt="Images"
                        />
                      </div>
                      <div className="">
                        <span className="font-medium text-nt18 mb-0.5">
                          Bessie Cooper
                        </span>
                        <p className="text-[12px] text-nt160">
                          6391 Elgin St. Celina, Delaware 10299
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="ps-7 py-5">$450</td>
                  <td>
                    <Link href="/">
                      <span className="d-center">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-medium text-nowrap ps-7 py-5">G-84</td>
                  <td className="text-[12px]! ps-6 py-5">
                    <div className=" flex items-center gap-1">
                      <span>Quantity:</span>
                      <span>04</span>
                    </div>
                  </td>
                  <td className=" py-5">
                    <div className="flex gap-2">
                      <div className="shrink-0">
                        <Image
                          className="rounded-full border-2 border-nt30 shrink-0"
                          src={bessie1}
                          alt="Images"
                        />
                      </div>
                      <div className="">
                        <span className="font-medium text-nt18 mb-0.5">
                          Bessie Cooper
                        </span>
                        <p className="text-[12px] text-nt160">
                          6391 Elgin St. Celina, Delaware 10299
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="ps-7 py-5">$450</td>
                  <td>
                    <Link href="/">
                      <span className="d-center">
                        <i className="ph ph-caret-right"></i>
                      </span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
