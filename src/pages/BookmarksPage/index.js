import React, { useContext } from "react";
import { GlobalContext } from "context/Context";
import Header from "components/head/Header";
import NewsList from "components/news/NewsList";
import NewsListItem from "components/news/NewsListItem";
import Alert from "components/alert/Alert";

const BookmarksPage = () => {
  const { bookmarks } = useContext(GlobalContext);

  return (
    <div className="py-16 px-2">
      <Header />
      <h1 className="text-3xl capitalize font-semibold mb-2 text-gray-800">
        Bookmarks
      </h1>
      <NewsList>
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark, index) => {
            return <NewsListItem key={index} newsItem={bookmark} />;
          })
        ) : (
          <Alert variant="success">You don't have bookmarks.</Alert>
        )}
      </NewsList>
    </div>
  );
};

export default BookmarksPage;
