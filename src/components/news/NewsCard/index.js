import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "context/Context";

import { HiUserCircle } from "react-icons/hi";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

import { dateFormatter, timeFormatter } from "utils/timeFormat";
import { handleAddBookmark, handleRemoveBookmark } from "utils/bookmark";

const NewsCard = ({ newsItem }) => {
  const { bookmarks, setBookmarks } = useContext(GlobalContext);
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

  const handleSetBookmark = () => {
    bookmarks.filter((bookmark) => {
      if (
        `${bookmark.title} - ${bookmark.publishedAt}` ===
        `${newsItem.title} - ${newsItem.publishedAt}`
      ) {
        handleRemoveBookmark(newsItem, bookmarks, setBookmarks);
      } else {
        handleAddBookmark(newsItem, bookmarks, setBookmarks);
      }
    });

    if (bookmarks.length === 0) {
      handleAddBookmark(newsItem, bookmarks, setBookmarks);
    }
  };

  if (bookmarks) {
    bookmarks.filter((bookmark) => {
      if (
        `${bookmark.title} - ${bookmark.publishedAt}` ===
        `${newsItem.title} - ${newsItem.publishedAt}`
      ) {
        newsItem.isBookmarked = true;
      }
    });
  }

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
          <div className="ml-1 min-w-0 flex-1">
            <p className="text-myPalette-dark2 text-sm font-bold truncate">
              {author ? author : "Unknown"}
            </p>
            <p className="text-gray-500 text-xs font-semibold">
              {dateFormatter(publishedAt)} at {timeFormatter(publishedAt)}
            </p>
          </div>
          <div className="pl-2 py-3 pr-0" onClick={() => handleSetBookmark()}>
            <span className="text-2xl text-myPalette-dark1">
              {newsItem.isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
            </span>
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
