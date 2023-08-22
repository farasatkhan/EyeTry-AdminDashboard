import React from "react";

import SalesOverview from "../../../components/ui/Admin/Graphs/Analytics/SalesOverview/SalesOverview";
import Traffic from "../../../components/ui/Admin/Graphs/Traffic";

const Analytics = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-7 mt-10 mb-10">
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Total Sales</div>
          <div className="flex justify-between">
            <span className="text-2xl">$49,241.26</span>
            <span className="text-2xl">15%</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Total Revenue</span>
              <div className="flex gap-5">
                <span className="text-sm">$12,512.90</span>
                <span className="text-sm">34%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Average Order Value</span>
              <div className="flex gap-5">
                <span className="text-sm">$38,241.90</span>
                <span className="text-sm">12%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Total online store visits</div>
          <div className="flex justify-between">
            <span className="text-2xl">116,201</span>
            <span className="text-2xl">15%</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Visitors</span>
              <div className="flex gap-5">
                <span className="text-sm">57,201</span>
                <span className="text-sm">15%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Average order value</div>
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
          <div className="font-semibold mb-5">Online store conversion rate</div>
          <div className="flex justify-between">
            <span className="text-2xl">$49,241.26</span>
            <span className="text-2xl">15%</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Added to cart</span>
              <div className="flex gap-5">
                <span className="text-sm">2.49%</span>
                <span className="text-sm">22%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Reached checkout</span>
              <div className="flex gap-5">
                <span className="text-sm">2%</span>
                <span className="text-sm">12%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Reached payment</span>
              <div className="flex gap-5">
                <span className="text-sm">5%</span>
                <span className="text-sm">2%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Orders Risputes</div>
          <div className="flex justify-between">
            <span className="text-2xl">134</span>
            <span className="text-2xl">2%</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Total Revenue</span>
              <div className="flex gap-5">
                <span className="text-sm">$12,512.90</span>
                <span className="text-sm">34%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="p-5">
          <div className="font-semibold mb-5">Online store sessions</div>
          <div className="flex justify-between">
            <span className="text-2xl">14234</span>
            <span className="text-2xl">7%</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <span className="text-sm">Visitors</span>
              <div className="flex gap-5">
                <span className="text-sm">2.49%</span>
                <span className="text-sm">22%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 px-2 mt-5 mb-5">
          <SalesOverview />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
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
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="px-5 py-5">
          <h1 className="text-xl font-bold">Traffic</h1>
        </div>
        <div className="w-full h-0.5 bg-slate-100"></div>
        <div className="mt-10 h-80">
          <Traffic />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
        <div className="px-5 py-5">
          <h1 className="text-xl font-bold">Sales by Category</h1>
        </div>
        <div className="w-full h-0.5 bg-slate-100"></div>
        <div className="mt-10 h-80">
          <Traffic />
        </div>
      </div>
      <div className="border shadow-sm rounded-md bg-white">
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
      </div>
      <div className="border shadow-sm rounded-md bg-white">
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
      </div>
      <div className="border shadow-sm rounded-md bg-white">
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
      </div>
    </div>
  );
};

export default Analytics;
