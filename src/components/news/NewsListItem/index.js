import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "context/globalContext";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

import { handleAddBookmark, handleRemoveBookmark } from "utils/bookmark";
import { dateFormatter, timeFormatter } from "utils/timeFormat";
import Snackbar from "components/alert/Snackbar";

const NewsListItem = ({ newsItem }) => {
  const { bookmarks, setBookmarks } = useContext(GlobalContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState({
    variant: "",
    title: "",
    text: "",
  });
  const [bookmarked, setBookmarked] = useState(false);

  const { title, urlToImage, url, source, publishedAt, description } = newsItem;

  const handleSetBookmark = () => {
    setOpenSnackbar(true);
    if (!newsItem.isBookmarked || bookmarks.length === 0) {
      setSnackbarProps({
        variant: "success",
        title: "Success",
        text: "Added to bookmarks",
      });
      setBookmarked(true);
      handleAddBookmark(newsItem, bookmarks, setBookmarks);
    } else {
      setSnackbarProps({
        variant: "danger",
        title: "Removed",
        text: "Removed from bookmarks",
      });
      setBookmarked(false);
      handleRemoveBookmark(newsItem, bookmarks, setBookmarks);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    bookmarks.filter((bookmark) => {
      if (
        `${bookmark.title} - ${bookmark.publishedAt}` ===
        `${title} - ${publishedAt}`
      ) {
        setBookmarked(true);
        return (newsItem.isBookmarked = true);
      }
      return null;
    });

    return () => setBookmarked(false);
  }, [bookmarks, title, publishedAt, newsItem]);

  return (
    <>
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
                    {bookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
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
        <Snackbar
          variant={snackbarProps.variant}
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          duration={1000}
          title={snackbarProps.title}
        >
          <p className="text-sm text-gray-700">{snackbarProps.text}</p>
        </Snackbar>
      </div>
    </>
  );
};

NewsListItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default NewsListItem;
