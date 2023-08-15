import React from "react";

const BlogCard = ({ title, author, date, description, image }) => {
  return (
    <div className="flex flex-col border shadow rounded-lg overflow-hidden">
      <div className="rounded-lg">
        <img src={image} alt="Blog-1" className="object-contain" />
      </div>
      <div className="flex flex-col gap-1 px-2 py-4">
        <span className="text-sm">
          {author} - {date}
        </span>
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
};

export default BlogCard;
