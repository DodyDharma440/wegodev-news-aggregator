import React from "react";
import PropTypes from "prop-types";

import { HiUserCircle } from "react-icons/hi";

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

  const image = urlToImage ? urlToImage : null;

  return (
    <div className="bg-white rounded-2xl pb-2 w-80 inline-block mx-2 text-left align-top shadow-xl">
      <div className="image-wrapper bg-gray-400 rounded-t-2xl">
        <img
          src={image}
          alt={source.name}
          className="h-44 w-full rounded-t-2xl"
        />
      </div>
      <div className="px-4 py-2 whitespace-normal">
        <p className="text-sm text-myPalette-darkPurple font-bold align-middle truncate">
          {source.name}
        </p>
        <h4 className="font-semibold text-xl truncate mb-2">{title}</h4>
        <p className="text-gray-500 text-xs truncate">{description}</p>
        <hr
          className="my-3 border-0 bg-myPalette-lightPurple"
          style={{ height: 2 }}
        />
        <div className="flex mb-2 items-center">
          <div className="text-5xl text-gray-500">
            <HiUserCircle className="align-middle" />
          </div>
          <div className="ml-2 min-w-0">
            <p className="text-myPalette-dark2 text-lg font-bold truncate">
              {author ? author : "Unknown"}
            </p>
            <p className="text-gray-500 text-sm font-semibold">
              {dateFormatter(publishedAt)} at {timeFormatter(publishedAt)}
            </p>
          </div>
        </div>
        <a rel="noreferrer" href={url} target={"_blank"} className="w-2/3">
          <div className="text-lg text-myPalette-lightOrange text-right">
            <p className="tracking-wide font-bold hover:underline">Read More</p>
          </div>
        </a>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default NewsCard;
