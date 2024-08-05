import React from "react";
import DashboardCard from "../components/DashboardCard";
import NetProfitCard from "../components/NetProfitCard";
import ActivityCard from "../components/ActivityCard";
import ActionsTab from "../components/ActionsTab";
import RecentOrderTable from "../components/RecentOrderTable";
import { CardListData, ActionsListData } from "../constants";
import CustomerFeedback from "../components/CustomerFeedback";

const HomeDashboard = () => {
  return (
    <div className="px-6 py-8">
      <div className="title font-bold xl:text-3xl md:text-2xl text-xl">
        Dashboard
      </div>
      {/* Main Grid for the Dashboard Cards */}
      <div className="pt-8 content-grid grid xl:grid-cols-13 grid-cols-12 xl:gap-8 gap-4">
        {/* 4 Top level cards to display Totals */}
        <div className="xl:col-span-8 col-span-12 grid grid-cols-4 xl:gap-4 gap-2">
          {CardListData.map((card, index) => {
            return (
              <div
                key={index}
                className="p-4 md:p-5 bg-backgroundLight rounded-lg md:col-span-1 col-span-2"
              >
                <DashboardCard
                  mainIcon={card.mainIcon}
                  cardIconBg={card.cardIconBg}
                  headline={card.headline}
                  number={card.number}
                  arrowIcon={card.arrowIcon}
                  arrowPercentage={card.arrowPercentage}
                  status={card.status}
                />
              </div>
            );
          })}
        </div>
        {/* Net Profit */}
        <div className="p-4 md:p-5 bg-backgroundLight xl:col-span-5 col-span-12 rounded-lg">
          <NetProfitCard />
        </div>
        {/* Activity */}
        <div className="p-4 md:p-5 xl:col-span-8 col-span-12 bg-backgroundLight rounded-lg">
          <ActivityCard />
        </div>
        {/* ActionButtons */}
        <div className="p-4 md:p-5 bg-backgroundLight xl:col-span-5 col-span-12 rounded-lg grid grid-cols-1 justify-between gap-4 xl:gap-0">
          {ActionsListData.map((action, index) => {
            return (
              <ActionsTab
                key={index}
                iconBg={action.iconBg}
                icon={action.icon}
                iconColor={action.iconColor}
                actionTitle={action.actionTitle}
              />
            );
          })}
        </div>
        {/* Recent Orders */}
        <div className="p-4 md:p-5 xl:col-span-8 col-span-12 bg-backgroundLight rounded-lg">
          <RecentOrderTable />
        </div>
        {/* Customer Feedback */}
        <div className="p-4 md:p-5 bg-backgroundLight xl:col-span-5 col-span-12 rounded-lg max-h-128 overflow-y-scroll custom-scrollbar">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
