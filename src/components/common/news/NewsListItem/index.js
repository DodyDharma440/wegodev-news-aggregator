import React from "react";

import { dateFormatter, timeFormatter } from "utils/timeFormat";

const NewsListItem = ({ newsItem }) => {
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
    <a rel="noreferrer" href={url} target={"_blank"}>
      <div className="bg-white shadow-lg rounded-xl my-4">
        <div className="grid grid-cols-5 gap-2 items-center py-2 px-4">
          <div className="col-span-2">
            <img
              src={urlToImage}
              className="rounded-lg max-w-full"
              alt={source.name}
            />
          </div>

          <div className="col-span-3 ml-1">
            <div className="p-2">
              <p className="text-sm text-myPalette-darkPurple mb-1 font-bold align-middle truncate">
                {source.name}
              </p>
              <p className="text-gray-500 text-xs font-semibold">
                {dateFormatter(publishedAt)} at {timeFormatter(publishedAt)}
              </p>
              <h4 className="text-myPalette-dark1 text-lg truncate font-bold">
                {title}
              </h4>
              <p className="text-gray-500 text-xs truncate">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsListItem;
