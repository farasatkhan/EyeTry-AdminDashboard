import React, { useEffect, useState } from "react";

import { BiSolidErrorCircle } from "react-icons/bi";

const LensInformation = ({
  lensInformation,
  updateLensInformation,
  lensError,
}) => {
  // const [lensInfo, setLensInfo] = useState({
  //   measurement_type: "",
  //   lens_width: 0,
  //   lens_height: 0,
  //   total_width: 0,
  //   bridge_width: 0,
  //   temple_length: 0,
  //   is_multifocal: false,
  // });

  // useEffect(() => {
  //   updateLensInformation(lensInfo);
  // }, [lensInfo]);

  return (
    <>
      <div className="pl-4 py-4">
        <p>More Details</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="flex mb-4 gap-20">
          <div className="flex flex-grow flex-col">
            <label htmlFor="measurement_type" className="text-sm mb-1 w-2/3">
              Measurement in
            </label>
            <div className="flex flex-grow mt-2">
              <select
                value={lensInformation.measurement_type}
                id="measurement_type"
                onChange={(event) =>
                  updateLensInformation({
                    ...lensInformation,
                    measurement_type: event.target.value,
                  })
                }
                className="w-full h-10 border px-1 sm:px-3 py-1 rounded-md outline-none text-sm cursor-pointer"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="mm">mm</option>
                <option value="in">in</option>
              </select>
            </div>
          </div>
          <div className="flex flex-grow flex-col">
            <label htmlFor="is_multifocal" className="text-sm mb-1 w-2/3">
              Is multifocal
            </label>
            <div className="flex flex-grow mt-2">
              <select
                id="is_multifocal"
                value={lensInformation.is_multifocal}
                onChange={(event) =>
                  updateLensInformation({
                    ...lensInformation,
                    is_multifocal: event.target.value,
                  })
                }
                className="w-full h-10 border px-1 sm:px-3 py-1 rounded-md outline-none text-sm cursor-pointer"
              >
                <option disabled>Select</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mb-4">
          <div className="flex flex-col">
            <label htmlFor="lens_width" className="text-sm mb-2">
              Lens Width
            </label>
            <input
              min={0}
              max={999}
              id="lens_width"
              type="number"
              className="border p-2 rounded-md w-full outline-none text-sm"
              autoComplete="off"
              value={lensInformation.lens_width}
              onChange={(event) => {
                let value = event.target.value;

                const formattedValue = value.replace(/[^0-9.]/g, "");
                const parts = formattedValue.split(".");

                if (parts.length > 1) {
                  parts[1] = parts[1].slice(0, 2);
                }

                const result = parts.join(".");

                if (
                  result === "" ||
                  (parseFloat(result) >= 0 && parseFloat(result) <= 999)
                ) {
                  updateLensInformation({
                    ...lensInformation,
                    lens_width: result,
                  });
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lens_height" className="text-sm mb-2">
              Lens Height
            </label>
            <input
              min={0}
              max={999}
              id="lens_height"
              type="number"
              className="border p-2 rounded-md w-full outline-none text-sm"
              autoComplete="off"
              value={lensInformation.lens_height}
              onChange={(event) => {
                const value = event.target.value;

                const formattedValue = value.replace(/[^0-9.]/g, "");
                const parts = formattedValue.split(".");

                if (parts.length > 1) {
                  parts[1] = parts[1].slice(0, 2);
                }

                const result = parts.join(".");

                if (
                  result === "" ||
                  (parseFloat(result) >= 0 && parseFloat(result) <= 999)
                ) {
                  updateLensInformation({
                    ...lensInformation,
                    lens_height: result,
                  });
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="total_width" className="text-sm mb-2">
              Total Width
            </label>
            <input
              min={0}
              max={999}
              id="total_width"
              type="number"
              className="border p-2 rounded-md w-full outline-none text-sm"
              autoComplete="off"
              value={lensInformation.total_width}
              onChange={(event) => {
                const value = event.target.value;

                const formattedValue = value.replace(/[^0-9.]/g, "");
                const parts = formattedValue.split(".");

                if (parts.length > 1) {
                  parts[1] = parts[1].slice(0, 2);
                }

                const result = parts.join(".");

                if (
                  result === "" ||
                  (parseFloat(result) >= 0 && parseFloat(result) <= 999)
                ) {
                  updateLensInformation({
                    ...lensInformation,
                    total_width: result,
                  });
                }
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mb-4">
          <div className="flex flex-col">
            <label htmlFor="temple_length" className="text-sm mb-2">
              Template Length
            </label>
            <input
              min={0}
              max={999}
              id="temple_length"
              type="number"
              className="border p-2 rounded-md w-full outline-none text-sm"
              autoComplete="off"
              value={lensInformation.temple_length}
              onChange={(event) => {
                const value = event.target.value;

                const formattedValue = value.replace(/[^0-9.]/g, "");
                const parts = formattedValue.split(".");

                if (parts.length > 1) {
                  parts[1] = parts[1].slice(0, 2);
                }

                const result = parts.join(".");

                if (
                  result === "" ||
                  (parseFloat(result) >= 0 && parseFloat(result) <= 999)
                ) {
                  updateLensInformation({
                    ...lensInformation,
                    temple_length: result,
                  });
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bridge_width" className="text-sm mb-2">
              Bridge Width
            </label>
            <input
              min={0}
              max={999}
              id="bridge_width"
              type="number"
              className="border p-2 rounded-md w-full outline-none text-sm"
              autoComplete="off"
              value={lensInformation.bridge_width}
              onChange={(event) => {
                const value = event.target.value;

                const formattedValue = value.replace(/[^0-9.]/g, "");
                const parts = formattedValue.split(".");

                if (parts.length > 1) {
                  parts[1] = parts[1].slice(0, 2);
                }

                const result = parts.join(".");

                if (
                  result === "" ||
                  (parseFloat(result) >= 0 && parseFloat(result) <= 999)
                ) {
                  updateLensInformation({
                    ...lensInformation,
                    bridge_width: result,
                  });
                }
              }}
            />
          </div>
        </div>
        <div>
          <div className="mb-3">
            {lensError && (
              <div className="mb-3 flex bg-red-300 py-2 px-2 gap-2 rounded">
                <BiSolidErrorCircle className="text-red-800" size={20} />
                <div className="text-red-800">{lensError}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LensInformation;
