import React from "react";
import PropTypes from "prop-types";

import { HiUser, HiClock } from "react-icons/hi";

import { dateFormatter, timeFormatter } from "utils/timeFormat";

const NewsCard = ({ newsItem }) => {
  const {
    author,
    title,
    urlToImage,
    url,
    source,
    publishedAt,
    description,
  } = newsItem;

  return (
    <div className="bg-white rounded-lg pb-2 w-80 inline-block mx-2 text-left">
      <div
        className="image-wrapper h-44 rounded-t-lg"
        style={{
          background: `url(${urlToImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="px-4 py-2 whitespace-normal">
        <p className="mb-1 text-green-800 font-bold">Source : {source.name}</p>
        <h4 className="font-semibold text-lg truncate mb-2">{title}</h4>
        <p className="text-gray-500 text-xs truncate">{description}</p>
        <hr className="my-3 border-0 h-1 bg-blue-700" />
        <div className="mb-2">
          <div className="mt-2 flex">
            <HiClock className="self-center mr-1 text-xl" />
            <p>
              {dateFormatter(publishedAt)} at {timeFormatter(publishedAt)}
            </p>
          </div>
          <div className="mt-2 flex">
            <HiUser className="self-center mr-1 text-xl" />
            <span>{author}</span>
          </div>
        </div>
        <div>
          <a href={url} target="_blank">
            <div className="text-lg text-green-600 text-right">
              <p className="tracking-wide font-bold hover:underline">
                Read More
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default NewsCard;
