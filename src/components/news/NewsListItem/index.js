import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "context/globalContext";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

import { handleAddBookmark, handleRemoveBookmark } from "utils/bookmark";
import { dateFormatter, timeFormatter } from "utils/timeFormat";

const NewsListItem = ({ newsItem }) => {
  const { bookmarks, setBookmarks } = useContext(GlobalContext);

  const { title, urlToImage, url, source, publishedAt, description } = newsItem;

  const handleSetBookmark = () => {
    bookmarks.filter((bookmark) => {
      return `${bookmark.title} - ${bookmark.publishedAt}` ===
        `${newsItem.title} - ${newsItem.publishedAt}`
        ? handleRemoveBookmark(newsItem, bookmarks, setBookmarks)
        : handleAddBookmark(newsItem, bookmarks, setBookmarks);
    });

    if (bookmarks.length === 0) {
      handleAddBookmark(newsItem, bookmarks, setBookmarks);
    }
  };

  if (bookmarks) {
    bookmarks.filter((bookmark) => {
      return `${bookmark.title} - ${bookmark.publishedAt}` ===
        `${newsItem.title} - ${newsItem.publishedAt}`
        ? (newsItem.isBookmarked = true)
        : null;
    });
  }

  return (
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
            <div className="flex">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-myPalette-darkPurple mb-1 font-bold align-middle truncate">
                  {source.name}
                </p>
                <p className="text-gray-500 text-xs font-semibold">
                  {dateFormatter(publishedAt)} at {timeFormatter(publishedAt)}
                </p>
              </div>
              <div className="-mr-2" onClick={() => handleSetBookmark()}>
                <span className="text-myPalette-dark1">
                  {newsItem.isBookmarked === true ? (
                    <BsFillBookmarkFill />
                  ) : (
                    <BsBookmark />
                  )}
                </span>
              </div>
            </div>
            <h4 className="text-myPalette-dark1 text-lg truncate font-bold">
              {title}
            </h4>
            <p className="text-gray-500 text-xs truncate">{description}</p>
            <hr className="my-2" />
            <a rel="noreferrer" href={url} target={"_blank"}>
              <p className="text-right text-myPalette-darkPurple font-bold text-sm">
                Read More
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsListItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default NewsListItem;
