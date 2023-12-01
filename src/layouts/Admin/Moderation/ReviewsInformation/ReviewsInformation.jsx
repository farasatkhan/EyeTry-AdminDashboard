import React, { useState, useEffect } from "react";

import { BsGraphUp } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";

import { viewReviewsAnalytics } from "../../../../services/Reviews/reviews";

const ReviewsInformation = ({ reviews }) => {
  const [totalReviewsCount, setTotalReviewsCount] = useState(0);
  const [averageReviewRating, setAverageReviewRating] = useState(0);
  const [growthInReviews, setGrowthInReviews] = useState(0);
  const [totalReviewsThisWeek, setTotalReviewsThisWeek] = useState(0);
  const [starsCount, setStarsCount] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const [reviewAnalytics, setReviewsAnalytics] = useState([]);

  const fetchReviewsAnalytics = async () => {
    try {
      const fetchReviewAnalytics = await viewReviewsAnalytics();
      setReviewsAnalytics(fetchReviewAnalytics);
    } catch (error) {
      console.error("Error fetching reviews", error);
    }
  };

  useEffect(() => {
    fetchReviewsAnalytics();
  }, []);

  useEffect(() => {
    setTotalReviewsCount(reviews.length);

    const totalStars = reviews.reduce(
      (accumulator, review) => accumulator + review.stars,
      0
    );

    if (reviews.length !== 0) {
      const averageStars = totalStars / reviews.length;
      setAverageReviewRating(averageStars);
    } else {
      setAverageReviewRating(0);
    }

    const today = new Date();
    const currentWeekStartDate = new Date(today);
    currentWeekStartDate.setDate(today.getDate() - today.getDay());

    const currentWeekReviews = reviews.filter(
      (review) => new Date(review.date) >= currentWeekStartDate
    );
    const previousWeekReviews = reviews.filter(
      (review) => new Date(review.date) < currentWeekStartDate
    );

    const growthInReviews =
      currentWeekReviews.length - previousWeekReviews.length;

    const totalReviewsThisWeek = currentWeekReviews.length;

    setGrowthInReviews(growthInReviews);
    setTotalReviewsThisWeek(totalReviewsThisWeek);
  }, [reviews]);

  useEffect(() => {
    const newStarsCount = { ...starsCount };
    reviews.forEach((review) => {
      const stars = Math.ceil(review.stars);
      if (newStarsCount.hasOwnProperty(stars)) {
        newStarsCount[stars]++;
      }
    });
    setStarsCount(newStarsCount);
  }, [reviews]);

  console.log(starsCount);

  return (
    <div className="flex flex-col lg:flex-row border rounded-md">
      {/* left side */}
      <div className="flex flex-col md:flex-row justify-center items-center sm:justify-evenly gap-5 px-10 py-10 border-b lg:border-b-0">
        <div className="flex flex-col mb-5 lg:mb-0">
          <div className="flex flex-col">
            <span className="text-sm">Total Reviews</span>
            <span className="text-5xl">{totalReviewsCount}</span>
            <div className="flex justify-center items-center gap-2 w-20 h-6 rounded-full bg-primary-100 mt-2 mb-5">
              <span>
                <BsGraphUp size={10} className="text-primary-900" />
              </span>
              <span className="text-primary-900 text-sm">
                {growthInReviews}%
              </span>
            </div>
          </div>
          <span className="text-sm">Total reviews recieved this year</span>
        </div>
        <div className="flex flex-col mb-5 lg:mb-0">
          <div className="flex flex-col">
            <span className="text-sm">Average Rating</span>
            <span className="text-5xl">{averageReviewRating}</span>
            <div className="flex gap-2 mt-2 mb-5">
              <span>
                <GoHorizontalRule size={20} />
              </span>
              <span className="text-sm whitespace-nowrap">
                of {totalReviewsCount} reviews
              </span>
              <div className="bg-slate-200 rounded-full">
                <span className="text-slate-600 whitespace-nowrap text-sm px-2 py-2">
                  +{totalReviewsThisWeek} this week
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm">Total rating recieved this year</span>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col flex-grow gap-5 px-5 py-5 align-middle justify-center">
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">5 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div
              style={{
                width: `${
                  (reviewAnalytics.star_5 / reviewAnalytics.total_reviews) * 100
                }%`,
              }}
              className="w-2/3 h-2 bg-blue-500 rounded-full"
            ></div>
          </div>
          <span className="text-center w-1/6">{reviewAnalytics.star_5}</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">4 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div
              style={{
                width: `${
                  (reviewAnalytics.star_4 / reviewAnalytics.total_reviews) * 100
                }%`,
              }}
              className="h-2 bg-blue-500 rounded-full"
            ></div>
          </div>
          <span className="text-center w-1/6">{reviewAnalytics.star_4}</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">3 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div
              style={{
                width: `${
                  (reviewAnalytics.star_3 / reviewAnalytics.total_reviews) * 100
                }%`,
              }}
              className="h-2 bg-blue-500 rounded-full"
            ></div>
          </div>
          <span className="text-center w-1/6">{reviewAnalytics.star_3}</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">2 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div
              style={{
                width: `${
                  (reviewAnalytics.star_2 / reviewAnalytics.total_reviews) * 100
                }%`,
              }}
              className="h-2 bg-blue-500 rounded-full"
            ></div>
          </div>
          <span className="text-center w-1/6">{reviewAnalytics.star_2}</span>
        </div>
        <div className="flex flex-grow justify-center items-center gap-5">
          <span className="text-center w-1/6">1 stars</span>
          <div className="w-4/6 h-2 bg-slate-200 rounded-full">
            <div
              style={{
                width: `${
                  (reviewAnalytics.star_1 / reviewAnalytics.total_reviews) * 100
                }%`,
              }}
              className="h-2 bg-blue-500 rounded-full"
            ></div>
          </div>
          <span className="text-center w-1/6">{reviewAnalytics.star_1}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsInformation;
