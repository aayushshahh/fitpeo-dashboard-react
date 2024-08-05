import React from "react";
import IconCircle from "../components/IconCircle";
import { RecentOrderList } from "../constants";

const RecentOrderTable = () => {
  return (
    <div>
      <div className="title xl:text-2xl text-xl font-bold">Recent Orders</div>
      <div className="md:pt-8 pt-4 overflow-scroll custom-scrollbar">
        <table className="min-w-full table-auto text-left md:text-sm text-xs">
          <thead>
            <tr>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Order No.</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {RecentOrderList.map((orderDetail, index) => {
              return (
                <tr className="border-t-2 border-darkGrey" key={index}>
                  <td className="py-2 pr-8 md:pr-0 customer">
                    <div className="flex items-center gap-2">
                      <IconCircle
                        componentToRender={
                          <img
                            src={orderDetail.image}
                            alt="profile"
                            className="w-full h-full image-to-fit"
                          />
                        }
                      />
                      <div className="whitespace-nowrap">
                        {orderDetail.name}
                      </div>
                    </div>
                  </td>
                  <td className="order-no pr-8 md:pr-0 ">
                    {orderDetail.orderNo}
                  </td>
                  <td className="amount pr-8 md:pr-0 ">{orderDetail.amount}</td>
                  <td className="">
                    <div
                      className={`${
                        orderDetail.status === "Delivered"
                          ? "bg-cardGreen text-cardIconGreen"
                          : "bg-cardRed text-cardIconRed"
                      } rounded-full px-2 py-1 xl:w-1/2 flex items-center justify-center`}
                    >
                      <div>{orderDetail.status}</div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrderTable;
