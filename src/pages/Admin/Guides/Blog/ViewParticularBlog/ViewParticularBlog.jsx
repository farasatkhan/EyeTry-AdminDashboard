import React from "react";

import BlogCover from "../../../../../assets/blog/blog-8.jpg";
import BlogImg from "../../../../../assets/blog/blog-6.jpg";

import BlogCard from "../../../../../layouts/Admin/BlogCard";
import Blog1 from "../../../../../assets/blog/blog-1.jpg";

import { BiSearch } from "react-icons/bi";

const ViewParticularBlog = () => {
  return (
    <div className="font-body">
      <div
        className={`bg-black bg-cover bg-center relative h-96`}
        style={{ backgroundImage: `url(${BlogCover})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-60 my-10">
        <div>
          <span className="text-3xl lg:text-4xl font-bold">
            Clarity and Style: The Ultimate Guide to Selling Glasses with Vision
            and Flair
          </span>
        </div>
        <div className="mt-3 mb-7">
          <span>Author - 19 Jul, 2023</span>
        </div>
        <div className="mb-5">
          <p className="leading-7">
            In a world where visual experiences dominate our daily lives,
            eyeglasses stand as a testament to the union of science, fashion,
            and personal expression. These seemingly simple yet profoundly
            transformative accessories have the power to enhance not only our
            sight but also our style. Let's delve into the essentials of
            eyeglasses, from their functional significance to their role in
            shaping our unique identities.
          </p>
        </div>
        <div className="mb-5">
          <p className="leading-7">
            <h1 className="text-2xl font-bold mb-2">
              Visual Acuity and Beyond
            </h1>
            Eyeglasses, at their core, serve the primary purpose of correcting
            refractive errors in our eyes, such as nearsightedness,
            farsightedness, and astigmatism. By precisely bending light as it
            enters the eye, these optical marvels ensure that images focus
            correctly on the retina, leading to sharper vision. However, the
            impact of eyeglasses extends beyond mere visual correction. They're
            an extension of one's personality and style, offering a canvas to
            display individuality. With a plethora of frames, lens shapes, and
            colors available, eyeglasses have evolved from functional devices to
            fashion statements, allowing wearers to showcase their tastes and
            preferences.
          </p>
        </div>
        <div className="flex flex-col mb-5">
          <img src={BlogImg} alt="blog-image" />
          <span className="text-slate-500 text-sm text-center mt-2">
            Mastering the Art of Eyewear Retail: From Frame Selection to Fashion
            Forward Sales Strategies
          </span>
        </div>
        <div className="mb-5">
          <p className="leading-7">
            <h1 className="text-2xl font-bold mb-2">
              The Art of Frame Selection
            </h1>
            Selecting the right frame is an art that balances comfort,
            functionality, and personal aesthetics. From classic rimless designs
            to bold and vibrant frame s, there's a style for everyone. Consider
            face shape, skin tone, and personal style when choosing the perfect
            frame. Round faces may benefit from angular frames, while square
            faces could be complemented by round or oval-shaped frames.
          </p>
        </div>
        <div className="mb-5">
          <p className="leading-7">
            <h1 className="text-2xl font-bold mb-2">Conclusion</h1>
            In today's digital age, where screens are omnipresent, a new
            challenge has emerged – digital eye strain caused by prolonged
            exposure to blue light emitted by screens. Eyeglasses equipped with
            blue light-blocking coatings have become essential in combating this
            modern woe. These lenses not only enhance visual comfort but also
            contribute to long-term eye health.
          </p>
        </div>
      </div>
      <div>
        <div className="mx-10 sm:mx-10 md:mx-20 lg:mx-60 my-10 bg-black h-1"></div>
      </div>
      <div className="mx-20 sm:mx-10 lg:mx-24 my-10">
        <div className="mb-5">
          <span className="text-2xl font-bold">Related Articles</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
          <BlogCard
            title="The Ultimate Guide to Selling Glasses with Vision and Flair"
            author="Author"
            date="30 Jul, 2023"
            description="From Frame Selection to Fashion Forward Sales Strategies"
            image={Blog1}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewParticularBlog;
