import React from "react";

import SalesOverview from "../../../components/ui/Admin/Graphs/Analytics/SalesOverview/SalesOverview";
import Traffic from "../../../components/ui/Admin/Graphs/Traffic";
import {
  generateSalesData,
  generateStoreVisitsData,
  generateAvgOrderData,
  generateOrdersRisputesData,
  generateOrdersSessionsData,
  generateConversionRateData,
} from "../../../utils/generateAnalytics";
import { generateAnalyticsGraphData } from "../../../utils/generateAnalyticsGraph";

const Analytics = () => {
  const salesData = generateSalesData();
  const storeVisitsData = generateStoreVisitsData();
  const avgOrderData = generateAvgOrderData();
  const conversionData = generateConversionRateData();
  const orderRisputesData = generateOrdersRisputesData();
  const totalSessionsData = generateOrdersSessionsData();

  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-7 mt-10 mb-10">
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Total Sales</div>
          <div className="flex justify-between">
            <span className="text-2xl">${salesData.total_sales}</span>
            <span className="text-2xl">{salesData.total_sales_pc}%</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Total Revenue</span>
              <div className="flex gap-5">
                <span className="text-sm">${salesData.total_revenue}</span>
                <span className="text-sm">{salesData.total_revenue_pc}%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Average Order Value</span>
              <div className="flex gap-5">
                <span className="text-sm">${salesData.total_ordervalue}</span>
                <span className="text-sm">
                  {salesData.total_ordervalue_pc}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview salesData={generateAnalyticsGraphData()} />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Total online store visits</div>
          <div className="flex justify-between">
            <span className="text-2xl">{storeVisitsData.total_visitors}</span>
            <span className="text-2xl">
              {storeVisitsData.total_visitors_pc}%
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Visitors</span>
              <div className="flex gap-5">
                <span className="text-sm">{storeVisitsData.total_visits}</span>
                <span className="text-sm">
                  {storeVisitsData.total_visits_pc}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview salesData={generateAnalyticsGraphData()} />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Average order value</div>
          <div className="flex justify-between">
            <span className="text-2xl">${avgOrderData.avg_order}</span>
            <span className="text-2xl">{avgOrderData.avg_order_pc}%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview salesData={generateAnalyticsGraphData()} />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Online store conversion rate</div>
          <div className="flex justify-between">
            <span className="text-2xl">
              ${conversionData.total_conversion_value}
            </span>
            <span className="text-2xl">
              {conversionData.total_conversion_value_pc}%
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Added to cart</span>
              <div className="flex gap-5">
                <span className="text-sm">
                  {conversionData.added_to_cart_percentage}%
                </span>
                <span className="text-sm">
                  {conversionData.added_to_cart_percentage_pc}%
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Reached checkout</span>
              <div className="flex gap-5">
                <span className="text-sm">
                  {conversionData.reached_checkout}%
                </span>
                <span className="text-sm">
                  {conversionData.reached_checkout_pc}%
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Reached payment</span>
              <div className="flex gap-5">
                <span className="text-sm">
                  {conversionData.reached_payment}%
                </span>
                <span className="text-sm">
                  {conversionData.reached_payment_pc}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview salesData={generateAnalyticsGraphData()} />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Orders Risputes</div>
          <div className="flex justify-between">
            <span className="text-2xl">{orderRisputesData.total_risputes}</span>
            <span className="text-2xl">
              {orderRisputesData.total_risputes_pc}%
            </span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview salesData={generateAnalyticsGraphData()} />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Online store sessions</div>
          <div className="flex justify-between">
            <span className="text-2xl">{totalSessionsData.total_sessions}</span>
            <span className="text-2xl">
              {totalSessionsData.total_sessions_pc}%
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Visitors</span>
              <div className="flex gap-5">
                <span className="text-sm">
                  {totalSessionsData.total_visitors}%
                </span>
                <span className="text-sm">
                  {totalSessionsData.total_visitors_pc}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview salesData={generateAnalyticsGraphData()} />
        </div>
      </div>
      {/* <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Returning customer rate</div>
          <div className="flex justify-between">
            <span className="text-2xl">10.3%</span>
            <span className="text-2xl">3%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Sales by category</div>
          <div className="flex justify-between">
            <span className="text-2xl">10.3%</span>
            <span className="text-2xl">3%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div> */}
      {/* <div className="border shadow-sm rounded-md bg-white">
        <div className="px-5 py-5">
          <h1 className="text-xl font-bold">Traffic</h1>
        </div>
        <div className="w-full h-0.5 bg-slate-100"></div>
        <div className="mt-10 h-80">
          <Traffic />
        </div>
      </div> */}
      {/* <div className="border shadow-sm rounded-md bg-white">
        <div className="px-5 py-5">
          <h1 className="text-xl font-bold">Sales by Category</h1>
        </div>
        <div className="w-full h-0.5 bg-slate-100"></div>
        <div className="mt-10 h-80">
          <Traffic />
        </div>
      </div> */}
      {/* <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Revenue Growth</div>
          <div className="flex justify-between">
            <span className="text-2xl">$49,241.26</span>
            <span className="text-2xl">15%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Refunded</div>
          <div className="flex justify-between">
            <span className="text-2xl">$49,241.26</span>
            <span className="text-2xl">15%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Customers Growth</div>
          <div className="flex justify-between">
            <span className="text-2xl">15201</span>
            <span className="text-2xl">15%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div> */}
      {/* <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Customer Support Growth</div>
          <div className="flex justify-between">
            <span className="text-2xl">15201</span>
            <span className="text-2xl">15%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div> */}
      {/* <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Grography Summary</div>
          <div className="flex justify-between">
            <span className="text-2xl">15201</span>
            <span className="text-2xl">15%</span>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div> */}
    </div>
  );
};

export default Analytics;
