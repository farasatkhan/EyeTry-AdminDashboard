import React, { useState, useEffect } from "react";

const MetaDetails = ({ metaDetails, updateMetaDetails }) => {
  // const [title, setTitle] = useState(metaDetails.meta_title);
  // const [keywords, setKeywords] = useState(metaDetails.meta_keywords);
  // const [description, setDescription] = useState(metaDetails.meta_description);

  // useEffect(() => {
  //   updateMetaDetails({
  //     meta_title: title,
  //     meta_keywords: keywords,
  //     meta_description: description,
  //   });
  // }, [title, keywords, description]);

  return (
    <>
      <div className="pl-4 py-4">
        <p>Meta Details</p>
      </div>
      <div className={`h-0.5 bg-slate-100`}></div>
      <div className="px-5 py-5">
        <div className="mb-3">
          <label htmlFor="meta_title" className="text-sm">
            Title
          </label>
          <input
            maxLength={70}
            id="meta_title"
            type="text"
            className="border p-2 rounded-md w-full outline-none text-sm"
            autoComplete="off"
            value={metaDetails.meta_title}
            onChange={(event) =>
              updateMetaDetails({
                ...metaDetails,
                meta_title: event.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="meta_keywords" className="text-sm">
            Keywords Separated by Comma
          </label>
          <input
            maxLength={100}
            id="meta_keywords"
            type="text"
            className="border p-2 rounded-md w-full outline-none text-sm"
            autoComplete="off"
            value={metaDetails.meta_keywords}
            onChange={(event) =>
              updateMetaDetails({
                ...metaDetails,
                meta_keywords: event.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="meta_description" className="text-sm">
            <div className="flex justify-between mb-2">
              <span>Description</span>
              <span className="text-gray-400 text-xs">
                Max 750 characters are allowed
              </span>
            </div>
          </label>
          <textarea
            maxLength={750}
            id="meta_description"
            rows={10}
            className="border p-2 rounded-md w-full outline-none text-sm"
            autoComplete="off"
            value={metaDetails.meta_description}
            onChange={(event) =>
              updateMetaDetails({
                ...metaDetails,
                meta_description: event.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default MetaDetails;
