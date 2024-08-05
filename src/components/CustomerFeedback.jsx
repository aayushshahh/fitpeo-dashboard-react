import React from "react";
import { CustomerFeedbackData } from "../constants";
import { StarIcon } from "@heroicons/react/24/solid";
import IconCircle from "../components/IconCircle";

const CustomerFeedback = () => {
  return (
    <div>
      <div className="title xl:text-2xl text-xl font-bold">
        Customer's Feedback
      </div>
      <div className="md:pt-5 pt-2">
        {CustomerFeedbackData.map((feedback, index) => {
          return (
            <div key={index} className="border-b-2 border-darkGrey py-3">
              <div className="flex items-center gap-2">
                <IconCircle
                  componentToRender={
                    <img
                      src={feedback.image}
                      alt="profile"
                      className="w-full h-full image-to-fit"
                    />
                  }
                />
                <div className="name md:text-lg text-base">{feedback.name}</div>
              </div>
              <div className="rating flex items-center pt-2">
                {feedback.starRating.map((rating, index) => {
                  return (
                    <StarIcon
                      className={`${
                        rating === 1 ? "text-starYellow" : "text-lightestGrey"
                      } md:size-7 size-5`}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="feedback md:text-sm text-xs text-lightestGrey pt-2">
                {feedback.feedback}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerFeedback;
