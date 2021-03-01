import React, { createContext, useState, useEffect } from 'react';


const BookmarksContext = createContext({});

const BookmarksContextProvider = ({ children }) => {
    const [ bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		const localStorageBookmarks = JSON.parse(
			localStorage.getItem('pierre-gallery-bookmarks')
		);
		setBookmarks(localStorageBookmarks);
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('pierre-gallery-bookmarks', JSON.stringify(items));
	};

    function addBookmark(img) {
        setBookmarks([...bookmarks, img]);
        saveToLocalStorage(bookmarks);
    }

    function removeBookmark(img) {
        const newBookmarks = bookmarks.filter(fav => fav !== img);
        setBookmarks(newBookmarks);
        saveToLocalStorage(newBookmarks);
    }


  return (
    <BookmarksContext.Provider 
        value={{
            bookmarks,
            addBookmark,
            removeBookmark
        }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export { BookmarksContext, BookmarksContextProvider };