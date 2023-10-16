import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Product from "../../../../assets/images/products/product_1.jfif";
import RoundedDot from "../../../../assets/icons_alt/rounded_dot.png";

import CustomerInformation from "../../../../layouts/Admin/Orders/CustomerInformation/CustomerInformation";

import {
  viewParticularCustomerSingleOrder,
  updateOrderDeliveryStatus,
} from "../../../../services/Orders/orders";

const ViewParticularCustomerOrder = () => {
  const { customerId, orderId } = useParams();

  const [extraPrice, setExtraPrice] = useState({
    taxes: 0,
    shipping: 0,
    totalPriceWithTaxes: 0,
  });

  const [paymentStatus, setPaymentStatus] = useState("paid");
  const [fulfillmentStatus, setFulfillmentStatus] = useState("Pending");

  const handlePaymentStatusChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  const handleFulfillmentStatusChange = async (event) => {
    const deliveryStatus = event.target.value;

    try {
      const data = {
        deliveryStatus: deliveryStatus,
      };

      const updatedOrderStatus = await updateOrderDeliveryStatus(orderId, data);
      console.log("order is updated");
    } catch (error) {
      console.error("Error updating order status", error);
    }

    setFulfillmentStatus(deliveryStatus);
  };

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const fetchedOrders = await viewParticularCustomerSingleOrder(
        customerId,
        orderId
      );
      setOrders(fetchedOrders);
      setFulfillmentStatus(fetchedOrders.deliveryStatus);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  const [orderDate, setOrderDate] = useState({
    ready: "",
    shipping: "",
    delivered: "",
  });

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const calculateOffsetDate = (date, offset) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + offset);
    return newDate;
  };

  useEffect(() => {
    if (orders) {
      const orderPrice = orders.totalPrice;

      const shipping = 9;
      const shippingCost = (orderPrice * shipping) / 100;

      const taxes = 18;
      const taxesCost = (orderPrice * taxes) / 100;

      const mongodbDate = orders.orderDate;
      const originalDate = new Date(mongodbDate);

      setOrderDate({
        ready: formatDate(originalDate),
        shipping: formatDate(calculateOffsetDate(originalDate, 3)),
        delivered: formatDate(calculateOffsetDate(originalDate, 5)),
      });

      const totalPriceWithTaxes =
        Number(orderPrice) + Number(shippingCost) + Number(taxesCost);

      setExtraPrice({
        shipping: shippingCost,
        taxes: taxesCost,
        totalPriceWithTaxes: totalPriceWithTaxes,
      });
    }
  }, [orders]);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row flex-grow justify-between ml-7 mr-7 mt-7">
        <div className="flex flex-col mb-5 md:mb-0 w-full">
          <div className="flex gap-1">
            <p className="font-light text-slate-500">Management /</p>
            <p className="">Orders details</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl">Order #{orders.order_no}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border rounded-md mx-5 my-5">
        <CustomerInformation customerId={customerId} customerOrders={orders} />
      </div>
      <div className="mx-5 my-5 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-5 lg:w-2/3">
          {/* <div className="border shadow rounded-md">
            <div className="px-2 py-2 border-b">
              <span className="text-xl">Order details</span>
            </div>
            <div className="flex justify-between mx-5 mt-5">
              <div className="flex gap-2">
                <div className="h-20 w-20">
                  <img src={Product} alt="product" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span>Raybans sunglasses</span>
                  <div>
                    <div className="flex gap-2">
                      <div className="flex gap-1">
                        <span className="text-sm">Color:</span>
                        <span className="text-sm">Black</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-sm">Quantity:</span>
                        <span className="text-sm">1</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex gap-1">
                        <span className="text-sm">Size:</span>
                        <span className="text-sm">Medium</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-sm">Gender:</span>
                        <span className="text-sm">Male</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-3xl">$21.99</span>
              </div>
            </div>
          </div> */}
          <div className="border shadow rounded-md">
            <div className="px-2 py-2 border-b">
              <span className="text-xl">Activities</span>
            </div>
            <div className="flex mx-10 my-14 gap-5">
              <div className="flex flex-grow flex-col">
                <div className="flex flex-grow justify-between mb-10">
                  <div className="flex gap-5">
                    <div className="flex mt-1">
                      <div className="w-5 h-5 flex justify-center items-center bg-slate-200 relative rounded-full">
                        <div className="w-1 h-1 bg-slate-900 absolute rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">Ready to Ship</span>
                      <span className="text-sm">
                        Your package is ready to be shipped
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span>{orderDate.ready}</span>
                    <span className="text-sm">6:30 AM</span>
                  </div>
                </div>
                <div className="flex flex-grow justify-between mb-10">
                  <div className="flex gap-5">
                    <div className="flex mt-1">
                      <div className="w-5 h-5 flex justify-center items-center bg-slate-200 relative rounded-full">
                        <div className="w-1 h-1 bg-slate-900 absolute rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">Shipped</span>
                      <span className="text-sm">{fulfillmentStatus}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span>{orderDate.shipping}</span>
                    <span className="text-sm">5:30 PM</span>
                  </div>
                </div>
                <div className="flex flex-grow justify-between mb-10">
                  <div className="flex gap-5">
                    <div className="flex mt-1">
                      <div className="w-5 h-5 flex justify-center items-center bg-slate-200 relative rounded-full">
                        <div className="w-1 h-1 bg-slate-900 absolute rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">Delivered</span>
                      <span className="text-sm">{fulfillmentStatus}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span>{orderDate.delivered}</span>
                    <span className="text-sm">9:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/3">
          <div className="border shadow rounded-md">
            <div className="border-b px-2 py-2">
              <span className="text-xl">Summary</span>
            </div>
            <div className="mx-5 my-5">
              <div className="flex justify-between mx-2 my-2">
                <span>Price</span>
                <span>${orders.totalPrice}</span>
              </div>
              <div className="flex justify-between mx-2 my-2">
                <span>Shipping</span>
                <span>${extraPrice.shipping}</span>
              </div>
              <div className="flex justify-between mx-2 my-2">
                <span>Taxes</span>
                <span>${extraPrice.taxes}</span>
              </div>
              <div className="flex justify-between mx-2 my-2 mt-5">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold">
                  ${extraPrice.totalPriceWithTaxes}
                </span>
              </div>
            </div>
          </div>
          <div className="border shadow rounded-md">
            <div className="border-b px-2 py-2">
              <span className="text-xl">Order Status</span>
            </div>
            <div className="px-5 py-5">
              <form action="">
                {/* <div className="flex flex-col mb-4">
                  <label className="block mb-2 text-sm">Payment Status:</label>
                  <select
                    className="border rounded p-2 cursor-pointer"
                    value={paymentStatus}
                    onChange={handlePaymentStatusChange}
                  >
                    <option value="paid">Paid</option>
                    <option value="declined">Declined</option>
                    <option value="pending">Pending</option>
                  </select>
                </div> */}
                <div className="flex flex-col mb-4">
                  <label className="block mb-2 text-sm">
                    Fulfillment Status:
                  </label>
                  <select
                    className="border rounded p-2 cursor-pointer"
                    value={fulfillmentStatus}
                    onChange={handleFulfillmentStatusChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewParticularCustomerOrder;
