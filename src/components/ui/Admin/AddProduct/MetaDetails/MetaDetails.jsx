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
            id="meta_title"
            type="text"
            className="border p-2 rounded-md w-full outline-none text-sm"
            autoComplete="off"
            value={metaDetails.title}
            onChange={(event) =>
              updateMetaDetails({
                ...metaDetails,
                title: event.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="meta_keywords" className="text-sm">
            Keywords Separated by Comma
          </label>
          <input
            id="meta_keywords"
            type="text"
            className="border p-2 rounded-md w-full outline-none text-sm"
            autoComplete="off"
            value={metaDetails.keywords}
            onChange={(event) =>
              updateMetaDetails({
                ...metaDetails,
                keywords: event.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="meta_description" className="text-sm">
            Description
          </label>
          <textarea
            id="meta_description"
            rows={3}
            className="border p-2 rounded-md w-full outline-none text-sm"
            autoComplete="off"
            value={metaDetails.description}
            onChange={(event) =>
              updateMetaDetails({
                ...metaDetails,
                description: event.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default MetaDetails;
