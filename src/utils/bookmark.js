const localStorageKey = "bookmarks-wegodev-news";

export const handleAddBookmark = (newsItem, bookmarks, setBookmarks) => {
  newsItem.isBookmarked = true;
  const newBookmarks = [...bookmarks, newsItem];
  setBookmarks(newBookmarks);
  localStorage.setItem(localStorageKey, JSON.stringify(newBookmarks));
};

export const handleRemoveBookmark = (newsItem, bookmarks, setBookmarks) => {
  newsItem.isBookmarked = false;
  const newBookmarks = bookmarks.filter((bookmark) => {
    return bookmark.title !== newsItem.title;
  });

  setBookmarks(newBookmarks);
  localStorage.setItem(localStorageKey, JSON.stringify(newBookmarks));
};
