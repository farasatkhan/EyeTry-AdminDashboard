import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { newGiftcard } from "../../../../services/Giftcards/giftcards";
import { useEffect } from "react";

const IssueGiftcard = () => {
  const { routeId } = useParams();

  useEffect(() => {
    if (routeId) {
    }
  }, [routeId]);

  const [expirationDate, setExpirationDate] = useState(new Date());

  const [giftcard, setGiftcard] = useState({
    code: "",
    amount: {
      price: 0,
      currency: "USD",
    },
    status: "Active",
    expirationDate: new Date(),
    customerEmail: "",
    note: "No Note",
  });

  const [giftcardChangeStatus, setGiftcardChangeStatus] = useState({
    status: "",
    error: "",
  });

  const handleGiftcardSubmission = async (event) => {
    event.preventDefault();

    try {
      const submittedGiftcard = await newGiftcard(giftcard);

      if (submittedGiftcard.status === 200) {
        setGiftcardChangeStatus((oldStatus) => ({
          ...oldStatus,
          status: submittedGiftcard.data.message,
        }));
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setGiftcardChangeStatus((oldStatus) => ({
          ...oldStatus,
          error: error.response.data.message,
        }));
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    setGiftcard((oldGiftcard) => ({
      ...oldGiftcard,
      expirationDate: expirationDate,
    }));
  }, [expirationDate]);

  useEffect(() => {
    console.log(giftcard);
  }, [giftcard]);

  return (
    <div className="mx-5 md:mx-10 lg:mx-28 my-10">
      <div className="mb-10">
        <span className="text-lg">Issue Gift card</span>
      </div>
      <form onSubmit={handleGiftcardSubmission}>
        <div className="flex flex-col md:flex-row flex-grow gap-5">
          <div className="flex flex-grow w-full md:w-2/3">
            <div className="w-full bg-white px-5 py-5 border rounded-lg">
              <div className="mb-5">
                <span>Gift card details</span>
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="giftcard_code" className="text-sm">
                  Gift card code
                </label>
                <input
                  id="giftcard_code"
                  type="text"
                  value={giftcard.code}
                  onChange={(event) =>
                    setGiftcard((oldGiftcard) => ({
                      ...oldGiftcard,
                      code: event.target.value,
                    }))
                  }
                  className="px-2 py-1.5 border shadow-sm rounded-md outline-none text-sm"
                />
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="value" className="text-sm">
                  Value
                </label>
                <div className="flex flex-row">
                  <input
                    id="value"
                    type="text"
                    value={giftcard.amount.price}
                    onChange={(event) =>
                      setGiftcard((oldGiftcard) => ({
                        ...oldGiftcard,
                        amount: {
                          ...giftcard.amount,
                          price: event.target.value,
                        },
                      }))
                    }
                    className="w-10/12 px-2 py-1.5 border shadow-sm rounded-s-md outline-none text-sm"
                    placeholder="0.00"
                  />
                  <select
                    id="currency"
                    className="w-2/12 border px-1 sm:px-3 py-1 rounded-e-md outline-none text-sm cursor-pointer"
                    value={giftcard.amount.currency}
                    onChange={(event) =>
                      setGiftcard((oldGiftcard) => ({
                        ...oldGiftcard,
                        amount: {
                          ...giftcard.amount,
                          currency: event.target.value,
                        },
                      }))
                    }
                  >
                    <option key="USD" value="USD" className="cursor-pointer">
                      USD
                    </option>
                    <option key="PKR" value="PKR" className="cursor-pointer">
                      PKR
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-20 mb-5">
                <div className="flex flex-col">
                  <label htmlFor="giftcard_status" className="text-sm mb-2">
                    Status
                  </label>
                  <select
                    id="giftcard_status"
                    className="border px-5 py-2 rounded-md outline-none text-sm cursor-pointer"
                    value={giftcard.status}
                    onChange={(event) =>
                      setGiftcard((oldGiftcard) => ({
                        ...oldGiftcard,
                        status: event.target.value,
                      }))
                    }
                  >
                    <option
                      key="active"
                      value="active"
                      className="cursor-pointer"
                    >
                      Active
                    </option>
                    <option
                      key="expired"
                      value="expired"
                      className="cursor-pointer"
                    >
                      Expired
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <span className="mb-2 text-sm">Expiration Date</span>
                  <DatePicker
                    selected={expirationDate}
                    onChange={(date) => setExpirationDate(date)}
                    className="border rounded-md px-2 py-1.5 text-gray-800 w-full outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow w-full md:w-1/3 gap-5">
            <div className="flex flex-grow">
              <div className="w-full bg-white px-5 pt-5 pb-2 border rounded-lg">
                <div className="mb-5">
                  <span className="text-sm">
                    Customer email
                    <span className="text-xs italic ml-4">(Optional)</span>
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    id="giftcard_code"
                    type="text"
                    value={giftcard.customerEmail}
                    onChange={(event) =>
                      setGiftcard((oldGiftcard) => ({
                        ...oldGiftcard,
                        customerEmail: event.target.value,
                      }))
                    }
                    className="px-2 py-1.5 border shadow-sm rounded-md outline-none text-xs"
                    placeholder="Customer email"
                  />
                  <span className="text-xs italic mt-5">
                    Send Giftcard to customer directly.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-grow">
              <div className="w-full bg-white px-5 pt-5 pb-2 border rounded-lg">
                <div className="mb-5">
                  <span className="text-sm">Notes</span>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    id="giftcard_code"
                    type="text"
                    value={giftcard.note}
                    onChange={(event) =>
                      setGiftcard((oldGiftcard) => ({
                        ...oldGiftcard,
                        note: event.target.value,
                      }))
                    }
                    className="px-2 py-1.5 border shadow-sm rounded-md outline-none text-xs"
                    placeholder="Add a note"
                  />
                  <span className="text-xs mt-5 italic">
                    For you and other staff.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow justify-end mt-5">
          <button
            type="submit"
            className="border w-full py-3 md:w-auto md:px-4 md:py-1 rounded-lg shadow-sm bg-white"
          >
            <span className="md:text-sm">Activate</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueGiftcard;
